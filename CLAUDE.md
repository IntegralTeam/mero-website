# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build (runs typecheck + vite build)
npm run typecheck  # TypeScript type checking
npm run lint       # ESLint
npm run preview    # Preview production build locally
npm run deploy     # Deploy to GitHub Pages
```

No test framework is configured.

## Architecture

React 18 + TypeScript SPA built with Vite, styled with Tailwind CSS, deployed to GitHub Pages.

### Routing

`App.tsx` uses React Router v6. Currently `/` maps to `HomePage`; all other paths redirect to home.

### Page/Component structure

Pages live in `src/pages/`, composed of section components from `src/components/`. The home page is assembled from named section components (Navbar, Header, ClientChannels, Platform, Map, InKindModel, ProcessSection, Partners, Testimonial6, Faq7, Footer11, etc.).

No global state management — components use local React state only.

### Relume UI

The project imports `@relume_io/relume-ui` but Vite aliases it to `src/lib/relume-ui.tsx` (a local compatibility shim). If Relume components behave unexpectedly, check that shim first.

### Supabase

`src/lib/supabase.ts` initializes the Supabase client. Email subscriptions are submitted to a `subscriptions` table. Credentials come from `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` env vars.

### SEO

Per-page metadata is set via `react-helmet-async` (`src/lib/seo.tsx` contains helpers). `public/robots.txt`, `public/sitemap.xml`, and `public/404.html` (for SPA routing on GitHub Pages) are static files.

### Styling

Tailwind utility classes throughout — no per-component CSS files. Custom theme extensions (colors, spacing, animations) are in `tailwind.config.js`. Global styles in `src/styles/globals.css`. Framer Motion handles animations.
