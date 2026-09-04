# Attorney Nicholas Edwards — Website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS site for the firm,
built with Framer Motion for the animated moments (hero entrance,
scroll-triggered stat counters, accordion practice-area rows, and a
scroll-aware navbar).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx      Root layout, fonts (Fraunces + Inter), metadata
  page.tsx         Assembles the page from the sections below
  globals.css      Tailwind layers + base styles, reduced-motion handling
components/
  Navbar.tsx       Sticky nav, transparent -> solid on scroll, mobile menu
  Hero.tsx         Full-bleed hero using the reference photo, staggered entrance
  About.tsx        Firm intro + animated stat counters
  CountUp.tsx       Reusable count-up number (fires once, in view)
  Services.tsx     Practice areas as an accordion "docket" list
  CaseResults.tsx  Case results table + testimonial
  Contact.tsx      Contact info + consultation form
  Footer.tsx
lib/
  content.ts       All site copy/data in one place — edit this first
public/
  logo.png          Uploaded firm logo
  hero-justice.png   Uploaded reference photo, used in the hero
```

## Editing content

Nearly everything editable — phone number, address, practice areas, case
results, stats, nav links — lives in `lib/content.ts`. The phone number is
currently set to **+1 (319) 504-1058**.

## Wiring up the contact form

`components/Contact.tsx` currently just shows a "message received" state on
submit. Connect it to a real email service or API route (e.g. an
`app/api/contact/route.ts` using Resend, SendGrid, or a database) when
you're ready to receive submissions for real.

## Notes

- Colors, type, and layout tokens live in `tailwind.config.ts`
  (navy/gold "ledger" palette, Fraunces for display type, Inter for body/UI).
- Motion respects `prefers-reduced-motion`.
- Replace `public/hero-justice.png` and `public/logo.png` with higher-resolution
  or updated assets any time — the components reference them by filename.
