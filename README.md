# Deepak Malakar - Portfolio (Next.js)

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.
Pages: Home, About, Projects (with filters), Resume. Dark theme with spotlight cards, animated hero and scroll progress.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Edit your content

Everything lives in one file: `src/data/portfolio.ts`

- `profile`: name, email, phone, links, summary, typewriter roles
- `stats`, `whatIDo`, `techMarquee`: home page sections
- `experience`, `skillGroups`, `education`: resume and about pages
- `projects`: project cards. Add `link: "https://..."` to a project to show a "Live demo" button.
  Accent colors and icons are set per project (`accent`, `icon`).

## Replace the resume PDF

Overwrite `public/Deepak_Malakar_Resume.pdf` with your latest file (keep the same name).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel (framework is detected automatically).
3. Deploy. Update `siteUrl` in `src/data/portfolio.ts` if your domain changes.

## Project structure

```
src/
  app/            layout, pages, sitemap, robots, icon
  components/     Navbar, Footer, HeroCard, ProjectCard, ProjectsGrid, ...
  data/           portfolio.ts (all content)
public/           resume PDF
```
