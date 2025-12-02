# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SAVR is a Next.js-based landing page for a grocery shopping application. The project recently underwent a rebranding from "Freshly" to "SAVR". The site features waitlist functionality with email confirmation via Brevo (formerly SendInBlue) and user storage in Supabase.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture & Stack

### Core Technologies
- **Framework**: Next.js 15.3.5 (App Router)
- **React**: 19.0.0
- **Styling**: Tailwind CSS v4 with custom utilities
- **Animations**: Framer Motion for component animations
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **UI Components**: shadcn/ui (New York style, configured in components.json)
- **Icons**: Lucide React and React Icons

### Backend Services
- **Database**: Supabase (PostgreSQL)
- **Email**: Brevo (formerly SendInBlue) for transactional emails
- **API Routes**: Next.js App Router API routes in `app/api/`

## Project Structure

### Page Organization
- `app/page.js` - Landing page (main entry point)
- `app/about/page.jsx` - About page
- `app/contact/page.jsx` - Contact page
- `app/faqs/page.jsx` - FAQ page
- `app/download/page.jsx` - Download page
- `app/layout.js` - Root layout with Navbar and Footer

### Component Structure
Components are organized by feature/page:
- `app/components/LandingPage/` - Home page sections (Hero, Product, Waitlist, etc.)
- `app/components/AboutPage/` - About page components
- `app/components/ContactPage/` - Contact page components
- `app/components/FaqPage/` - FAQ page components
- `app/components/Navbar.jsx` - Global navigation
- `app/components/Footer.jsx` - Global footer
- `components/ui/` - Reusable shadcn/ui components (button, input, etc.)

### API Routes
- `app/api/waitlist/route.js` - POST endpoint for waitlist signup
  - Validates name and email
  - Stores users in Supabase `users` table
  - Sends confirmation email via Brevo
  - Handles duplicate email detection (409 status)

### Utilities
- `lib/utils.js` - Contains `cn()` helper for merging Tailwind classes using clsx and tailwind-merge

## Environment Variables

Required environment variables (stored in `.env.local`):

```
# Supabase Configuration
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

# Brevo Email Configuration
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_SENDER_NAME=
```

## Styling System

### Tailwind CSS v4
- Uses Tailwind v4 with `@tailwindcss/postcss`
- Custom utilities defined in `app/globals.css`:
  - `.perspective-1000` - 3D perspective
  - `.transform-style-3d` - 3D transform preservation
  - `.backface-hidden` - Hide element backface
  - `.rotate-180` - 180° rotation

### Design Tokens
- Uses CSS variables defined in `:root` with OKLCH color space
- Supports dark mode (though currently not active)
- Border radius: `--radius: 0.625rem`
- Custom theme variables mapped via `@theme inline`

### shadcn/ui Configuration
- Style: "new-york"
- Base color: "neutral"
- Icon library: "lucide"
- Path aliases configured for `@/components`, `@/lib`, etc.

## Animation Patterns

### Framer Motion
Components use Framer Motion for:
- Scroll-based animations (parallax effects in Hero)
- Mouse tracking for interactive elements
- Page transitions and component reveals
- Particle systems and orbital animations

Example from Hero.jsx:
```javascript
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 300], [0, -50]);
const opacity = useTransform(scrollY, [0, 2500], [1, 0.3]);
```

## Branding Guidelines

- Brand name is "SAVR" (all caps)
- Previous brand was "Freshly" - check for any remaining references
- Email confirmation subject: "You're on the SAVR waitlist!"
- Assets located in `public/` directory (logos: lgo.png, logo.png, rl.png)

## Database Schema

### Supabase `users` table
- `name` (string, max 120 chars)
- `email` (string, max 255 chars, unique constraint with code '23505')

## Common Patterns

### Image Imports
Images are imported from `public/` directory:
```javascript
import lgo from "../../../public/lgo.png";
```

### Font Loading
Uses Next.js font optimization with Inter:
```javascript
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
```

### Client Components
Animation-heavy and interactive components use `"use client"` directive (e.g., Hero.jsx, Navbar.jsx)
