# Moath Zayadneh — Portfolio

A minimal Next.js portfolio in a black and fuchsia palette, featuring projects, work experience, skills, and contact links.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Run `npm run build` for a production build and `npm run lint` for code checks.

Portfolio content is maintained in `app/page.tsx`; styling is in `app/globals.css`.

## Deploy on Vercel

Import the `Portfolio` GitHub repository into Vercel and keep the detected Next.js settings. The project currently uses Next.js static export, so `npm run build` generates the site in `out/` and does not require a server or environment variables.

## GitHub Pages

`npm run build` creates a static site in `out/`. Publish the contents of that folder at the root of the `themud2001.github.io` repository. Keep `.nojekyll` so GitHub Pages serves the `_next` assets.

