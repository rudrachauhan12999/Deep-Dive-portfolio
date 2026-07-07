<div align="center">

# 🌊 Deep Dive Portfolio

**An interactive underwater-exploration portfolio — not a website you scroll, a world you swim through.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📖 Project Overview

**Deep Dive Portfolio** reimagines the personal portfolio as a small, playable underwater indie game rather than a conventional scrolling webpage. Visitors take control of a pixel-art diver at an underwater crossroads and swim toward wooden signposts to explore different zones — **About Me**, **Portfolio**, **Side Hustles**, and **Contact** — each rendered as its own themed environment (sunken ruins, a treasure room, a pirate cave, a treasure island).

The goal is simple: give recruiters, hackathon judges, and fellow developers something they'll actually remember, while still surfacing every piece of information a traditional portfolio would — skills, projects, timeline, credentials, and contact details — through interactive storytelling instead of static sections.

Built with **Next.js 15 (App Router)**, **TypeScript**, **React 19**, and **Framer Motion**, with all visual assets rendered as original pixel-art sprites — no images, no external asset dependencies.

---

## ✨ Why This Portfolio Is Different

Most developer portfolios are a single scrolling page: hero, about, projects, contact, done. This project deliberately breaks that mold:

- 🕹️ **Exploration over scrolling** — there is no scroll-driven narrative. The homepage is a compass; you choose a direction and the diver physically swims there before the next scene loads.
- 🎮 **Game-like interaction model** — arrow keys, WASD, and mouse/touch all drive navigation; project cards flip like collectible cards; a treasure chest must be opened to reveal work.
- 🎨 **A consistent, hand-built visual language** — every creature, signpost, and icon is an original pixel-art sprite defined in code and rendered pixel-perfect, not a stock image library.
- 🥚 **A genuine easter egg** — a hidden chest tucked into the scene rewards curious visitors with bonus content.
- 🧭 **Still fundamentally a portfolio** — underneath the theme, it's the same information a recruiter needs: skills, timeline, projects with live links, credentials with proof, and direct contact channels.

---

## 🚀 Features

- **Underwater crossroads home screen** — a centered diver, four directional signposts (About Me / Portfolio / Side Hustles / Contact), and a living reef of drifting fish, jellyfish, a turtle, and an occasional shark.
- **Physical navigation, not instant page swaps** — selecting a direction animates the diver swimming toward that signpost, with a bubble trail, before transitioning to the next scene.
- **Four themed zones**, each with its own background treatment:
  - **Sunken Ruins** (About Me) — profile, skills bars, career timeline, fun facts.
  - **Treasure Room** (Portfolio) — a treasure chest that opens to reveal flippable project cards.
  - **Pirate Cave** (Side Hustles) — certificates, hackathons, internships, courses, and achievements with linked proof documents.
  - **Treasure Island** (Contact) — GitHub, LinkedIn, and an email "message in a bottle."
- **Persistent UI elements** across every page: a home button, a minimap highlighting the current zone, and a floating "Resume" bubble that opens a downloadable PDF.
- **Centralized content model** — every editable piece of copy (links, projects, skills, timeline, credentials) lives in a single typed data file, not scattered across components.
- **Keyboard-first interaction** — full arrow-key/WASD support for navigation and project card browsing, in addition to mouse and touch.
- **Accessible by design** — semantic landmarks, visible focus states, a skip-to-content link, `aria-live` status updates during navigation, and full support for `prefers-reduced-motion`.
- **Fully responsive** — from mobile through desktop, with layout, typography, and hit targets that adapt per breakpoint.

---

## 🛠️ Tech Stack

| Layer              | Technology                                              |
| ------------------ | -------------------------------------------------------- |
| Framework           | [Next.js 15](https://nextjs.org/) (App Router)            |
| Language            | [TypeScript](https://www.typescriptlang.org/)              |
| UI Library          | [React 19](https://react.dev/)                            |
| Styling             | [Tailwind CSS v4](https://tailwindcss.com/)                |
| Animation           | [Framer Motion](https://www.framer.com/motion/)            |
| Fonts               | Press Start 2P & VT323, self-hosted via `@fontsource`      |
| Rendering           | Original pixel-art sprites rendered as crisp inline SVG   |
| Deployment          | [Vercel](https://vercel.com/)                              |

No external image assets, icon packs, or CDNs are required — every sprite is defined as code and rendered at runtime.

---

## 📸 Screenshots

> Add screenshots or a short screen recording here once the site is deployed — a GIF of the diver swimming between zones works especially well.

| Home / Crossroads | About Me | Portfolio | Contact |
| --- | --- | --- | --- |
| _add screenshot_ | _add screenshot_ | _add screenshot_ | _add screenshot_ |

---

## 📦 Installation Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (or your preferred package manager)

### Clone and install

```bash
git clone https://github.com/rudrachauhan12999/deep-dive-portfolio.git
cd deep-dive-portfolio
npm install
```

---

## 💻 Local Development Setup

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app supports hot-reloading, so edits to any file under `src/` are reflected immediately.

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
│   ├── OceanBackground.tsx   # Themed gradient background per zone
│   ├── Creatures.tsx         # Fish, jellyfish, turtle, shark population
│   ├── Bubbles.tsx           # Ambient bubble & particle system
│   ├── SignPost.tsx          # Wooden signpost navigation component
│   ├── PixelSprite.tsx       # Core sprite-rendering engine
│   ├── HomeButton.tsx        # Persistent home navigation
│   ├── MiniMap.tsx           # Current-zone indicator
│   ├── ResumeBubble.tsx      # Floating resume download bubble
│   ├── RoomShell.tsx         # Shared layout shell for zone pages
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

All recruiter-facing content — links, project descriptions, skills, timeline, and credentials — lives in **`src/lib/siteContent.ts`**. This is the only file you need to touch to personalize the site:

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

## ☁️ Deployment Instructions

This project is optimized for zero-configuration deployment on **Vercel**:

1. Push the repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects the Next.js framework — no build configuration is required.
4. Click **Deploy**.

Alternatively, deploy from the CLI:

```bash
npm install -g vercel
vercel
```

The project can also be self-hosted with `npm run build && npm run start` on any Node.js-compatible host.

---

## ♿ Accessibility & Responsiveness

- Full keyboard navigation (arrow keys / WASD) alongside mouse and touch input.
- Visible focus indicators and a skip-to-content link on every page.
- `aria-live` regions announce navigation state changes for screen readers.
- Respects `prefers-reduced-motion`, disabling non-essential animation for users who request it.
- Responsive layout tested across mobile, tablet, and desktop breakpoints.

---

## 🔭 Future Improvements

- [ ] Add real project screenshots and a demo video to the Screenshots section.
- [ ] Add sound design (ambient underwater audio, toggleable).
- [ ] Add a light/dark "surface vs. deep sea" theme toggle.
- [ ] Persist visited-zone state so returning visitors see a "previously explored" indicator on the minimap.
- [ ] Add unit/integration tests for navigation and content rendering.
- [ ] Internationalization (i18n) support.

---

## 👤 Author

**Rudra Chauhan**
Computer Engineering Student — AI/ML, Data Analytics, Cyber Forensics & UI/UX

- GitHub: [@rudrachauhan12999](https://github.com/rudrachauhan12999)

---

<div align="center">

If you found this project interesting, consider leaving a ⭐ on the repository.

</div>
