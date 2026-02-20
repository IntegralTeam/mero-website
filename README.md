# Mero Landing (React)

This project is now a working React + Vite application with static routes and SEO metadata.

## Pages

- `/` Home
- `/platform` Platform
- `/about` About

## SEO setup

- Per-page metadata via `react-helmet-async` in `/src/lib/seo.jsx`
- Canonical URLs and Open Graph/Twitter tags on each page
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

- The original Relume component imports (`@relume_io/relume-ui`) are mapped to a local compatibility module at `/src/lib/relume-ui.jsx` through `vite.config.js`.
- Tailwind is configured in `tailwind.config.js` and styles are in `/src/styles/globals.css`.
