<div align="center">

#  Deep Dive Portfolio

**An interactive underwater-exploration developer portfolio — not a page you scroll, a world you swim through.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://deep-dive-portfolio-puce.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

**[ Live Demo](https://deep-dive-portfolio-puce.vercel.app/) · [ Repository](https://github.com/rudrachauhan12999/Deep-Dive-portfolio)**

</div>

---

## 📖 Project Overview

**Deep Dive Portfolio** reimagines the personal developer portfolio as a small, playable underwater exploration game rather than a conventional scrolling webpage.

Visitors take control of a pixel-art diver stationed at an underwater crossroads and swim toward wooden signposts to explore distinct regions of the site — **About Me**, **Portfolio**, **Side Hustles**, and **Contact** — each staged as its own themed environment (sunken ruins, a treasure room, a pirate cave, a treasure island). Every region still delivers exactly what a recruiter, hackathon judge, or fellow developer is looking for — skills, projects, achievements, and contact channels — just told through interactive storytelling instead of static sections.

Built with **Next.js 15 (App Router)**, **TypeScript**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Every creature, signpost, and icon on the site is an original pixel-art sprite rendered as code — no stock image packs, no external asset CDNs.

---

## 🔴 Live Website

**[https://deep-dive-portfolio-puce.vercel.app/](https://deep-dive-portfolio-puce.vercel.app/)**

Deployed and publicly accessible on Vercel. Best experienced with sound off, curiosity on.

---

## 🌟 Why This Portfolio Is Different

Most developer portfolios are a single scrolling page: hero, about, projects, contact, done. This project deliberately breaks that mold.

| Conventional Portfolio | Deep Dive Portfolio |
| --- | --- |
| Scrolls top to bottom | Navigates a spatial crossroads in four directions |
| Static sections | Themed "rooms" — ruins, a treasure room, a pirate cave, an island |
| Click a nav link, page jumps instantly | The diver visibly swims to the destination before the scene changes |
| Projects listed in a grid | Projects are revealed by opening an animated treasure chest |
| Generic stock icons | Every sprite is hand-authored, original pixel art rendered in code |
| Forgettable after one visit | Includes a hidden easter egg reward for curious explorers |

It's a portfolio designed to be *remembered* — while still surfacing every credential a hiring manager needs, just two clicks (or two arrow-key presses) away.

---

## 🎨 Design Philosophy

Three principles shaped every decision in this project:

1. **Substance before spectacle.** The underwater theme is not a gimmick layered on top of a portfolio — the information architecture (skills, timeline, projects, credentials, contact) is identical to what a traditional portfolio would present. The theme changes *how* it's discovered, never *what* is discoverable.
2. **Consistency is craftsmanship.** A single shared pixel palette, one sprite-rendering engine, and one typed content file (`siteContent.ts`) drive the entire experience, so every region feels like part of the same handcrafted world rather than a patchwork of styles.
3. **Play should never cost accessibility.** Every interactive element — signposts, project cards, the minimap, the resume bubble — works by keyboard, mouse, and touch alike, and respects a visitor's motion preferences. A game-like interface is not an excuse to leave anyone behind.

---

## ✨ Features

- **Underwater crossroads home screen** — a centered diver surrounded by four directional signposts, drifting through a living reef of schooling fish, jellyfish, a turtle, and an occasional shark.
- **Physical, storytelling-driven navigation** — selecting a direction swims the diver toward that signpost, trailing bubbles, before the next themed region loads. Nothing teleports.
- **Four fully themed regions:**
  -  **Sunken Ruins** (About Me) — profile, animated skill bars, career timeline, and fun facts.
  -  **Treasure Room** (Portfolio) — an animated treasure chest that opens to reveal flippable, keyboard-navigable project cards.
  -  **Pirate Cave** (Side Hustles) — certificates, hackathons, internships, courses, and achievements, each with a linked proof document.
  -  **Treasure Island** (Contact) — GitHub, LinkedIn, and an email "message in a bottle."
- **Persistent UI across every page** — a home button, a minimap highlighting the current region, and a floating "Resume" bubble that opens a downloadable PDF on click.
- **Full keyboard navigation** — arrow keys and WASD drive the diver and project-card browsing, in addition to full mouse and touch support.
- **Accessible by design** — semantic landmarks, visible focus states, a skip-to-content link, `aria-live` navigation announcements, and complete `prefers-reduced-motion` support.
- **Fully responsive** — laid out and tuned across mobile, tablet, and desktop breakpoints.
- **A hidden easter egg** — a barely-visible treasure chest rewards attentive explorers with bonus content.
- **Centralized, typed content model** — every editable piece of copy lives in one data file, making the project trivial to fork and personalize.

---

## 🧩 Featured Projects

The Portfolio region showcases real, shipped work, including:

###  FrameGuard
AI-powered deepfake detection platform built around a multi-agent architecture with adaptive frame sampling, combining audio and visual forensic analysis to flag manipulated video content.

###  Cortex Guard
Secure AI-powered SOC platform with built-in prompt injection defense.

###  SunShare Grid
A renewable-energy and sustainability project focused on collaborative solar-grid sharing, built as a team contributor.

*(Additional projects and full write-ups are available directly on the live site.)*

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Press Start 2P & VT323, self-hosted via `@fontsource` |
| Rendering | Original pixel-art sprites rendered as crisp inline SVG |
| Deployment | [Vercel](https://vercel.com/) |

No external image assets, icon packs, or CDNs are required — every sprite is defined as code and rendered at runtime.

---


### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (or your preferred package manager)

### Clone and install

```bash
git clone https://github.com/rudrachauhan12999/Deep-Dive-portfolio.git
cd Deep-Dive-portfolio
npm install
```

---

## 💻 Local Development Setup

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Edits under `src/` hot-reload automatically.

Other available scripts:

```bash
npm run build   # Production build
npm run start   # Serve the production build locally
npm run lint    # Run ESLint
```

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home screen — signpost compass & diver navigation
│   ├── about/page.tsx        # Sunken Ruins — profile, skills, timeline
│   ├── portfolio/page.tsx    # Treasure Room — project showcase
│   ├── side-hustles/page.tsx # Pirate Cave — credentials & achievements
│   ├── contact/page.tsx      # Treasure Island — contact channels
│   ├── layout.tsx            # Root layout, fonts, persistent UI
│   └── globals.css           # Design tokens, palette, keyframes
├── components/
│   ├── OceanBackground.tsx   # Themed gradient background per region
│   ├── Creatures.tsx         # Fish, jellyfish, turtle, shark population
│   ├── Bubbles.tsx           # Ambient bubble & particle system
│   ├── SignPost.tsx          # Wooden signpost navigation component
│   ├── PixelSprite.tsx       # Core sprite-rendering engine
│   ├── HomeButton.tsx        # Persistent home navigation
│   ├── MiniMap.tsx           # Current-region indicator
│   ├── ResumeBubble.tsx      # Floating resume download bubble
│   ├── RoomShell.tsx         # Shared layout shell for region pages
│   ├── BrandIcons.tsx        # GitHub / LinkedIn icon components
│   ├── Sparkles.tsx          # Particle-burst effect (treasure reveal)
│   └── EasterEgg.tsx         # Hidden bonus-content interaction
├── hooks/
│   └── useDirectionNav.ts    # Arrow-key / WASD directional input hook
└── lib/
    ├── siteContent.ts        # ⭐ Single source of truth for all editable content
    ├── sprites.ts            # Pixel-art sprite definitions & palette
    └── iconSprites.ts        # Additional icon sprite definitions
```

---

## ✏️ Editing Content

All recruiter-facing content — links, project descriptions, skills, timeline, and credentials — lives in **`src/lib/siteContent.ts`**, the single file you need to touch to personalize the site:

```ts
export const SITE_LINKS = {
  github: "https://github.com/rudrachauhan12999",
  linkedin: "https://linkedin.com/in/your-handle",
  email: "you@example.com",
  resume: "/resume.pdf",
};
```

Replace `public/resume.pdf` with your actual resume (same filename) and drop any certificate/achievement PDFs into `public/pdf/`.

---

## ☁️ Deployment

This project is deployed on **Vercel** and configured for zero-friction redeployment:

1. Push changes to the connected GitHub repository.
2. Vercel automatically detects the Next.js framework and builds on every push.
3. Preview deployments are generated for every pull request; merges to `main` deploy to production.

To deploy your own fork from scratch:

```bash
npm install -g vercel
vercel
```

The project can also be self-hosted with `npm run build && npm run start` on any Node.js-compatible host.

---

## ♿ Accessibility & Responsive Design

- Full keyboard navigation (arrow keys / WASD) alongside mouse and touch input — no interaction requires a specific input method.
- Visible focus indicators and a skip-to-content link on every page.
- `aria-live` regions announce navigation state changes for screen reader users.
- Complete `prefers-reduced-motion` support, disabling non-essential animation on request.
- Responsive layout verified across mobile, tablet, and desktop breakpoints.

---

## 🔭 Future Roadmap

- [ ] Populate the Screenshots section with real captures and a demo GIF.
- [ ] Add toggleable ambient underwater sound design.
- [ ] Add a "surface vs. deep sea" light/dark theme toggle.
- [ ] Persist visited-region state so returning visitors see exploration progress on the minimap.
- [ ] Expand automated test coverage for navigation and content rendering.
- [ ] Add internationalization (i18n) support.

---

## 🤝 Contribution Guidelines

Contributions, bug reports, and suggestions are welcome.

1. Fork the repository and create a feature branch: `git checkout -b feature/your-feature-name`.
2. Make your changes, following the existing TypeScript/ESLint conventions (`npm run lint` before committing).
3. Write clear, descriptive commit messages.
4. Open a pull request describing what changed and why.

For larger changes, please open an issue first to discuss the approach.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — you're free to fork, learn from, and adapt it for your own portfolio, with attribution appreciated.

---

## 👤 Author

**Rudra Chauhan**

- GitHub: [@rudrachauhan12999](https://github.com/rudrachauhan12999)

---
