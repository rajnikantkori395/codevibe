## Codevibe Website

Marketing site for **Codevibe Technologies Private Limited**, built with the Next.js App Router. It showcases services, industries, stats, and contact forms, all driven by JSON content and a theme system so the brand can evolve without touching layout code.

### Project overview

- **Content-driven pages**: All copy and lists come from `data/*.json` and `data/pages/*.json`, exposed via `SiteContent` (`types/site.ts`) and `/api/site`.
- **Design system**: Shared components for layout (`SiteShell`, `MainNav`, `Footer`), sections (hero, services, industries, stats, contact), and UI primitives (`Button`, `Card`, `AnimateIn`).
- **Theme engine**: Central theme provider + CSS variables with multiple modes (dark, light, teal) and a header toggle. Colors live in a single palette per theme.
- **Animations**: Scroll-based entrance and staggered animations driven by a small animation library (`lib/animation.ts`, `AnimateIn`, `StaggerChildren`) and CSS tokens.

### Tools & tech stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) with TypeScript.
- **Runtime**: React 19.
- **Styling**:
  - [Tailwind CSS v4](https://tailwindcss.com) via `@import "tailwindcss"` and `@theme inline`.
  - Custom design tokens and utility classes in `app/globals.css`.
- **Fonts**: [Geist](https://vercel.com/font) via `next/font`.
- **Data**: JSON files under `data/` + `lib/site.ts` as a typed loader and as the backing for `/api/site`.

### Folder structure (high level)

- `app/`
  - `layout.tsx` – root layout, fonts, and providers.
  - `providers.tsx` – wraps the app in `ThemeProvider`.
  - `page.tsx` – home page (hero, services, industries, stats, contact).
  - `about/`, `services/`, `solutions/`, `industries/`, `careers/`, `contact/`, `privacy/`, `terms/` – static pages, all driven by `SiteContent`.
  - `api/site/route.ts` – JSON API returning full site content.
- `components/`
  - `layout/` – `MainNav`, `Footer`, `SiteShell`.
  - `sections/` – `HomeHero`, `ServicesSection`, `IndustriesSection`, `StatsSection`, `ContactSection`.
  - `pages/` – `PageHeader`, `StandardPageBody`, `LegalPageBody`.
  - `ui/` – `Button`, `Card`, `AnimateIn`, `StaggerChildren`, `ThemeToggle`.
- `providers/theme/`
  - `theme-config.ts` – `BrandPalette` definitions for dark, light, teal themes.
  - `ThemeProvider.tsx` – theme context, mode cycling, and CSS variable application.
- `data/`
  - `nav.json`, `hero.json`, `services.json`, `industries.json`, `stats.json`, `contact.json`, `footer.json`.
  - `pages/*.json` – per-route content for about, services, solutions, industries, careers, contact, privacy, terms.
- `lib/`
  - `site.ts` – typed loader for all JSON content.
  - `animation.ts` – animation variants and defaults for scroll/entrance animations.
- `types/`
  - `site.ts` – central schema for navigation, hero, sections, legal pages, and per-page payloads.

### Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` to view the site. Theme toggling, animations, and content updates should all be visible without additional configuration.
