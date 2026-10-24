# Apple Foods

Marketing website for Apple Foods, a playful brand of orchard-fresh apple snacks, juices, sauces and recipes.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

## Overview

A single-page application with a warm, playful look: a custom apple-red and green palette, rounded cards, scroll-linked parallax decoration and animated page transitions. All content is static. Products and recipes live in `src/data/`, and there is no backend.

## Pages & Features

| Route | Page | Highlights |
| --- | --- | --- |
| `/` | Home | Hero, founder spotlight, best-sellers carousel with prev/next controls, brand values, testimonials, newsletter sign-up |
| `/products` | Products | 12 products filterable by category and dietary tag; favorite toggle with a "Saved!" toast |
| `/recipes` | Recipes | 9 recipes filterable by tag; interactive ingredient spotlight |
| `/recipes/:id` | Recipe detail | Ingredients, numbered steps, nutrition highlights and a "Copy ingredients" clipboard button |
| `/our-story` | Our Story | Timeline, founder card, values and sustainability commitments |
| `/locations` | Locations | Five UAE store cards with opening hours and an embedded Google Map |
| `/contact` | Contact | Enquiry form with topic select, FAQ accordion and social links |
| `*` | Not found | Friendly 404 with a link back home |

Site-wide:

- Light/dark theme toggle (floating button). It follows the OS preference on first visit and saves the choice to `localStorage`.
- Sticky navbar with an animated mobile menu; each navigation scrolls back to the top.
- The parallax background and newsletter confetti switch off when `prefers-reduced-motion` is set.
- The contact and newsletter forms are front-end only. Nothing is submitted; the newsletter just shows a confirmation message.

## Tech Stack

- [React 19](https://react.dev) + TypeScript (strict mode), bundled with [Vite 7](https://vite.dev)
- [Tailwind CSS 3.4](https://tailwindcss.com) with `@tailwindcss/forms`, PostCSS and Autoprefixer
- [Framer Motion 12](https://motion.dev) for page transitions, parallax and micro-interactions
- [React Router 7](https://reactrouter.com) (`BrowserRouter`)
- ESLint 9 with `typescript-eslint`, `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

## Getting Started

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # type-check (tsc -b) and build to dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
public/              # favicon
src/
├── App.tsx          # routes, animated route transitions, page layout
├── main.tsx         # React entry point
├── index.css        # Tailwind layers and global styles
├── assets/          # logo, decorative SVGs and photos
├── components/      # Navbar, Footer, ProductCard, RecipeCard, FilterChips, AccordionFAQ, ...
├── context/         # ThemeContext (light/dark)
├── data/            # products.ts, recipes.ts
├── hooks/           # usePrefersReducedMotion
└── pages/           # Home, Products, Recipes, RecipeDetail, OurStory, Locations, Contact, NotFound
```

## Deployment

Production builds have been deployed to [Vercel](https://vercel.com) through its GitHub integration. No `vercel.json` is committed, so Vercel's Vite defaults apply: build with `npm run build` and serve `dist/`.

Routing happens client-side, so the host has to rewrite unknown paths to `index.html`. Otherwise a direct link to a route such as `/products` returns a 404.

---

Built by [Awaiz Ahmed](https://github.com/4waiz) · Kanban Studios
