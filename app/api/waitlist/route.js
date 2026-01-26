import { NextResponse } from 'next/server';
import * as Brevo from '@getbrevo/brevo';

const logContext = (message, extra = {}) => {
  console.log(`[waitlist-api] ${message}`, extra);
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Helper function to lazily create Brevo client at runtime
function getBrevoTransactionalApi() {
  const brevoApiKey = process.env.BREVO_API_KEY;
  const brevoSenderEmail = process.env.BREVO_SENDER_EMAIL;
  const brevoSenderName = process.env.BREVO_SENDER_NAME;

  if (!brevoApiKey || !brevoSenderEmail || !brevoSenderName) {
    logContext('Missing Brevo configuration; confirmation emails disabled', {
      hasApiKey: Boolean(brevoApiKey),
      hasSenderEmail: Boolean(brevoSenderEmail),
      hasSenderName: Boolean(brevoSenderName),
    });
    return null;
  }

  const brevoClient = Brevo?.ApiClient?.instance;
  if (brevoClient?.authentications?.apiKey) {
    brevoClient.authentications.apiKey.apiKey = brevoApiKey;
  }

  const brevoTransactionalApi = new Brevo.TransactionalEmailsApi();
  if (brevoTransactionalApi?.authentications?.apiKey) {
    brevoTransactionalApi.authentications.apiKey.apiKey = brevoApiKey;
  }

  return { api: brevoTransactionalApi, senderEmail: brevoSenderEmail, senderName: brevoSenderName };
}

export async function POST(request) {
  logContext('POST /api/waitlist route hit');
  const payload = await request.json().catch(() => null);

  if (!payload) {
    logContext('Rejected payload: invalid JSON body');
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';

  // Validate input
  if (!name || name.length > 120) {
    logContext('Rejected payload: invalid name', { nameLength: name.length });
    return NextResponse.json({ error: 'Name is required and must be under 120 characters' }, { status: 400 });
  }

  if (!email || !emailRegex.test(email) || email.length > 255) {
    logContext('Rejected payload: invalid email', { email });
    return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
  }

  // Demo mode: Always succeed (just log the signup)
  logContext('Demo mode: Waitlist signup successful', {
    name,
    email: `${email.slice(0, 3)}***`,
    timestamp: new Date().toISOString(),
  });

  // Optionally send confirmation email via Brevo if configured
  const brevoConfig = getBrevoTransactionalApi();
  if (brevoConfig) {
    const { api: brevoTransactionalApi, senderEmail: brevoSenderEmail, senderName: brevoSenderName } = brevoConfig;
    try {
      const emailPayload = new Brevo.SendSmtpEmail({
        sender: {
          email: brevoSenderEmail,
          name: brevoSenderName,
        },
        to: [{ email, name }],
        subject: "You're on the SAVR waitlist!",
        htmlContent: `<p>Hey ${name}, thanks for joining the SAVR waitlist! 🎉</p>
<p>We'll notify you early when SAVR launches.</p>
<p>– The SAVR Team</p>`,
      });
      await brevoTransactionalApi.sendTransacEmail(emailPayload);
      logContext('Confirmation email sent via Brevo', { email: `${email.slice(0, 3)}***` });
    } catch (err) {
      logContext('Failed to send confirmation email via Brevo', {
        email: `${email.slice(0, 3)}***`,
        error: err?.message || err,
      });
      // Don't fail the request if email fails
    }
  }

  return NextResponse.json({ success: true });
}
