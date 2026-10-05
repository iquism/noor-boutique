# Noor Boutique — Wear Your Elegance

A premium, fully responsive boutique / clothing-store website built with **Next.js 14**, **TypeScript** and **Tailwind CSS**. A fictional-client portfolio piece: elegant women's eastern & western wear (lawn suits, kurtis, abayas, formal couture).

## Features

- **Home** — cinematic hero with slow Ken Burns drift, scrolling marquee, shop-by-collection cards, bestsellers grid, brand story with stats, testimonials, newsletter signup, festive CTA banner
- **Shop** — 12-piece catalog with category filters (Lawn / Kurtis / Abayas / Formals), live search and sorting
- **About** — brand story, values, animated timeline
- **Contact** — validated contact form with success state
- **Cart** — client-side shopping bag with slide-over drawer, quantity controls, free-shipping progress meter, saved to localStorage (checkout shows a demo notice — no backend)
- Scroll-reveal animations, hover-zoom product cards, sticky blurred header, mobile menu

## Design

Warm ivory/cream backgrounds, rose-gold accents, deep charcoal text. Playfair Display serif headings + Inter body. All product photography generated in-house (see `public/products/`).

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

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo
3. Click **Deploy** — no environment variables needed
