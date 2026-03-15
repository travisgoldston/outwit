# Outwit — Landing Page

A modern, premium landing page for **Outwit**, a digital marketing strategy lab. Built with Next.js, React, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Logo assets

- **Navbar / icon:** `public/assets/logo-icon.png` — use a transparent version so it blends on the cream background.
- **Full logo:** `public/assets/logo-full.png` — for use on dark or contrasting backgrounds, or export with transparency for light backgrounds.

If either PNG has a black background, re-export from your design tool with transparency so the site keeps a clean, blended look on cream (`#FDF7F0`).

## Tech stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** (custom brand colors and typography)
- **TypeScript**

## Project structure

- `app/` — layout, global styles, main page
- `components/` — Navbar, Hero, Problem, Approach, Experiments, Services, Case Studies, Philosophy, Final CTA, Footer
- `public/assets/` — logo and images
