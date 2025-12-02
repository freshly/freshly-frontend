# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

This is a Next.js App Router project created with `create-next-app`. Use Node.js with a package manager available in this repo (npm is assumed below; `yarn`, `pnpm`, and `bun` equivalents are also supported per `README.md`).

### Install dependencies

```bash
npm install
```

### Run the dev server

Starts Next.js in development mode on http://localhost:3000.

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Start the production server

Assumes you have already run `npm run build`.

```bash
npm start
```

### Lint

Uses the flat ESLint config extending `next/core-web-vitals` from `eslint.config.mjs`.

```bash
npm run lint
```

### Tests

There are currently no test scripts defined in `package.json`. Before adding tests or test-related commands, prefer integrating with the existing Next.js tooling and updating `package.json` accordingly.

## High-level architecture

### Framework & runtime

- **Next.js App Router** using the `app/` directory (see `app/layout.js` and `app/page.js`).
- **React** (client and server components) with Tailwind CSS for styling (`app/globals.css`, `tailwindcss` and `@tailwindcss/postcss` in `devDependencies`).
- Path alias `@/*` is configured to point at the repo root via `jsconfig.json`.
- TypeScript support is configured via `tsconfig.json` (with `allowJs: true`), but the current codebase is primarily JavaScript.

### Routing and layouts

- **Root layout**: `app/layout.js` defines `RootLayout`, imports `app/globals.css`, and wraps all pages with a fixed `Navbar` and `Footer` component from `app/components`. This is the top-level shell for all routes.
- **Top-level pages** (App Router):
  - `/` → `app/page.js`: marketing landing page composed from components in `app/components/LandingPage/`.
  - `/about` → `app/about/page.jsx`
  - `/contact` → `app/contact/page.jsx`
  - `/download` → `app/download/page.jsx`
  - `/faqs` → `app/faqs/page.jsx`
- **API route**: `app/api/waitlist/route.js` exposes a `POST` handler at `/api/waitlist` for waitlist signups.

### UI composition

- **Global chrome**:
  - `app/components/Navbar.jsx` is a client component with responsive navigation, using `next/navigation` for routing and `lucide-react` for icons.
  - `app/components/Footer.jsx` (imported in `layout.js`) provides the global footer.
- **Landing page** (`app/page.js`):
  - Assembles `Hero`, `Product`, `Waitlist`, and (optionally) `Sponsors` and `Reviews` from `app/components/LandingPage/`.
  - Uses z-index layering to render the hero over animated backgrounds and keep lower sections on a white background.
- **Hero section** (`app/components/LandingPage/Hero.jsx`):
  - High-complexity animated hero built with **Framer Motion** (`motion`, `useAnimation`, `useScroll`, `useTransform`).
  - Uses `next/image` with assets from `public/`, animated background gradients, particles, and callout cards describing user pain points.
  - Contains custom CSS keyframes defined via a `<style jsx>` block for gradient animation.
- **Shared utilities**:
  - `lib/utils.js` exports `cn`, a Tailwind-friendly class name merger built on `clsx` and `tailwind-merge`.

When adding new UI, prefer following this structure:

- Place route-specific page components under `app/<route>/page.(js|jsx|tsx)`.
- Place reusable, non-route components under `app/components/...`, co-located by feature (e.g., `LandingPage/`, `AboutPage/`, etc.).
- Use `lib/` for non-React utilities.

### Backend integrations and environment

The only backend logic currently lives in the waitlist API route at `app/api/waitlist/route.js`:

- **Supabase**:
  - Uses `@supabase/supabase-js` with a **service role key** to insert records into a `users` table.
  - Reads configuration from environment variables:
    - `SUPABASE_URL`
    - `SUPABASE_SERVICE_ROLE_KEY`
  - Validates the Supabase URL and throws early if required env vars are missing.
- **Brevo (Sendinblue)** transactional email:
  - Uses `@getbrevo/brevo` to optionally send a confirmation email to new waitlist members.
  - Reads configuration from:
    - `BREVO_API_KEY`
    - `BREVO_SENDER_EMAIL`
    - `BREVO_SENDER_NAME`
  - If any of these are missing, the API still accepts signups but logs that confirmation emails are disabled.
- **Input validation & error handling**:
  - Validates `name` and `email` from the JSON body (length limits, simple email regex).
  - On success, inserts `{ name, email }` into the `users` table.
  - On Supabase unique-constraint violation (code `23505`), returns HTTP 409 with a specific message about the email already being on the waitlist.
  - Logs all significant events with a `[waitlist-api]` prefix for easier log filtering.

When extending backend functionality, keep in mind:

- New API routes should live under `app/api/<route>/route.(js|ts)` to align with the existing pattern.
- Use the same logging style (`[waitlist-api]`-style prefixes) for consistent server-side diagnostics.

### Tooling overview

- **ESLint**: configured via `eslint.config.mjs` using `FlatCompat` to extend `next/core-web-vitals`. Run with `npm run lint`.
- **TypeScript / JS tooling**:
  - `tsconfig.json` enables TypeScript type checking across `**/*.ts` and `**/*.tsx` plus Next-generated types in `.next/types/**/*.ts`.
  - `jsconfig.json` defines the `@/*` path alias.

Future agents should consult this file, `README.md`, and the `app/` and `lib/` directories first when understanding or modifying the architecture.