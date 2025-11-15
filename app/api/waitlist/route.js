import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as Brevo from '@getbrevo/brevo';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const logContext = (message, extra = {}) => {
  console.error(`[waitlist-api] ${message}`, extra);
};

if (!supabaseUrl || !supabaseServiceRoleKey) {
  logContext('Missing Supabase environment variables', {
    hasUrl: Boolean(supabaseUrl),
    hasServiceRoleKey: Boolean(supabaseServiceRoleKey),
  });
  throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set');
}

let parsedUrl;
try {
  parsedUrl = new URL(supabaseUrl);
  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    throw new Error('Supabase URL must use http or https');
  }
} catch (err) {
  logContext('Invalid SUPABASE_URL provided', { supabaseUrl });
  throw err;
}

const supabase = createClient(parsedUrl.toString(), supabaseServiceRoleKey, {
  auth: { persistSession: false },
});

const brevoApiKey = process.env.BREVO_API_KEY;
const brevoSenderEmail = process.env.BREVO_SENDER_EMAIL;
const brevoSenderName = process.env.BREVO_SENDER_NAME;

let brevoTransactionalApi = null;
console.log('[waitlist-api] Preparing Brevo client', {
  hasApiKey: Boolean(brevoApiKey),
  hasSenderEmail: Boolean(brevoSenderEmail),
  hasSenderName: Boolean(brevoSenderName),
});
if (brevoApiKey && brevoSenderEmail && brevoSenderName) {
  const brevoClient = Brevo?.ApiClient?.instance;
  if (brevoClient?.authentications?.apiKey) {
    brevoClient.authentications.apiKey.apiKey = brevoApiKey;
    console.log('[waitlist-api] Brevo ApiClient authenticated');
  } else {
    console.log('[waitlist-api] Brevo ApiClient.instance unavailable; using TransactionalEmailsApi auth setter');
  }
  brevoTransactionalApi = new Brevo.TransactionalEmailsApi();
  if (brevoTransactionalApi?.authentications?.apiKey) {
    brevoTransactionalApi.authentications.apiKey.apiKey = brevoApiKey;
  } else {
    console.log('[waitlist-api] Brevo TransactionalEmailsApi missing authentications.apiKey');
  }
  console.log('[waitlist-api] Brevo TransactionalEmailsApi initialized');
} else {
  logContext('Missing Brevo configuration; confirmation emails disabled', {
    hasApiKey: Boolean(brevoApiKey),
    hasSenderEmail: Boolean(brevoSenderEmail),
    hasSenderName: Boolean(brevoSenderName),
  });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  console.log('[waitlist-api] POST /api/waitlist route hit');
  const payload = await request.json().catch(() => null);

  if (!payload) {
    logContext('Rejected payload: invalid JSON body');
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  console.log('[waitlist-api] Raw payload received', {
    hasName: typeof payload.name === 'string',
    hasEmail: typeof payload.email === 'string',
  });

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';

  console.log('[waitlist-api] Parsed payload', {
    nameLength: name.length,
    emailPreview: email ? `${email.slice(0, 3)}***` : null,
  });

  if (!name || name.length > 120) {
    logContext('Rejected payload: invalid name', { nameLength: name.length });
    return NextResponse.json({ error: 'Name is required and must be under 120 characters' }, { status: 400 });
  }

  if (!email || !emailRegex.test(email) || email.length > 255) {
    logContext('Rejected payload: invalid email', { email });
    return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
  }

  console.log('[waitlist-api] Validation passed');

  const { error } = await supabase.from('users').insert({ name, email });

  if (error) {
    if (error.code === '23505') {
      logContext('Duplicate email submission', { email });
      return NextResponse.json({ error: 'This email is already on the waitlist' }, { status: 409 });
    }

    logContext('Unexpected Supabase insert error', {
      email,
      code: error.code,
      details: error.message,
    });
    return NextResponse.json({ error: 'Unable to add you to the waitlist', details: error.message }, { status: 500 });
  }

  if (brevoTransactionalApi) {
    try {
      console.log('[waitlist-api] Constructing Brevo SendSmtpEmail payload');
      const emailPayload = new Brevo.SendSmtpEmail({
        sender: {
          email: brevoSenderEmail,
          name: brevoSenderName,
        },
        to: [{ email, name }],
        subject: 'You’re on the Freshly waitlist!',
        htmlContent: `<p>Hey ${name}, thanks for joining the Freshly waitlist! 🎉</p>
<p>We'll notify you early when Freshly launches.</p>
<p>– The Freshly Team</p>`,
      });
      console.log('[waitlist-api] Brevo SendSmtpEmail payload constructed');
      console.log('[waitlist-api] Sending Brevo transactional email');
      const result = await brevoTransactionalApi.sendTransacEmail(emailPayload);
      console.log('[waitlist-api] Brevo email send result', {
        messageId: result?.messageId,
        data: result,
      });
    } catch (err) {
      logContext('Failed to send confirmation email via Brevo', {
        email,
        error: err?.message || err,
        stack: err?.stack,
      });
    }
  }

  return NextResponse.json({ success: true });
}
