# VFC Global Website

A premium, production-ready consultancy website for VFC - Visa Facilitation Consultancy.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components inspired by shadcn/ui
- **Forms:** React Hook Form + Zod
- **Email:** Resend API

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory and add your Resend configuration:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=VFC Global <noreply@vfcglobal.co.za>
RESEND_TEAM_EMAILS=info@vfcglobal.co.za,consult@vfcglobal.co.za
```

`RESEND_TEAM_EMAILS` controls where contact and booking requests are delivered. `RESEND_FROM_EMAIL` must use a sender address on a domain verified in Resend.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Application routes and pages
- `src/components`: Reusable UI components
  - `src/components/ui`: Core design system atoms (Button, Card, Input, etc.)
  - `src/components/forms`: Complex form components (LeadForm, BookingForm)
  - `src/components/layout`: Layout components (Navbar, Footer)
- `src/config`: Centralized configuration (site.ts)
- `src/lib`: Utilities and helpers (email, utils)

## Customization

### Content Updates
To update contact details, navigation links, or service lists, edit `src/config/site.ts`. This centralized file controls content across the site.

### Styling
Global styles and brand colors are defined in `src/app/globals.css`.
Tailwind configuration is in `tailwind.config.ts`.
