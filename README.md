# Mero Landing (React)

Single-page React + Vite site for mero.tech, pre-rendered to static HTML at build time.

## Pages

- `/` Home

## SEO and rendering

- `npm run build` builds the client bundle, builds `src/entry-server.tsx` as an SSR bundle, then
  `scripts/prerender.mjs` renders `/` into `dist/index.html`. The page text is in the served HTML, so it
  is readable with JavaScript disabled; the client hydrates on load.
- Title, description, canonical URL, Open Graph/Twitter tags and Organisation JSON-LD live in `index.html`.
- `public/og-image.png` (1200 x 630) is the link preview image; `public/logo.png` is the structured-data logo.
- `public/robots.txt`
- `public/sitemap.xml`

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Production build:

   ```bash
   npm run build
   npm run preview
   ```

## Notes

- Contact email and company details are in `src/lib/site.ts`.
- Tailwind is configured in `tailwind.config.js` and styles are in `/src/styles/globals.css`.
