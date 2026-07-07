# Deep Dive — Pixel-Art Underwater Adventure Portfolio

An interactive, game-like underwater exploration site built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## A note on reference images vs. shipped assets

All of the sprites in this project (`src/lib/sprites.ts`) are original pixel art, hand-authored to match the color palette, proportions, and level of detail of any reference images shared during design — not literal copies of them. Several of the reference images circulated during design (the scuba mask, the cat sheet, the treasure chest) carry visible stock-marketplace watermarks or platform branding, meaning they're licensed/commercial assets neither of us holds rights to redistribute. If you own licenses for specific asset packs and want to use the real files:

1. Drop the image into `public/sprites/` (e.g. `public/sprites/cat.png`).
2. In the relevant component, swap `<PixelSprite grid={CAT_HD} .../>` for a plain `<Image src="/sprites/cat.png" .../>` (or `<img>`).

That's it — no other wiring needed, since `PixelSprite` and `<Image>` are drop-in swaps at the same call sites.

## v6 — production polish pass

- **Centralized content**: all editable copy now lives in `src/lib/siteContent.ts` — `SITE_LINKS` (GitHub/LinkedIn/email/resume), `PROFILE`, `SKILLS`, `TIMELINE`, `FUN_FACTS`, `PROJECTS`, `SIDE_HUSTLES`. Every page imports from there instead of inlining data, so there's exactly one place to edit for real content.
- **Removed dev-facing notes that were visible to visitors** — the "Update the handles and email in `src/app/contact/page.tsx`" and "drop your real certificates" lines are gone from the live pages. That kind of instruction belongs in this README, not on the rendered site.
- **Message bottle redrawn** larger and clearer: distinct cork, rounded glass body with a highlight streak, and a rolled scroll with visible end-caps and "text" lines so it reads unmistakably as a message in a bottle.
- **Minimap**: higher-contrast borders/text, a glow on the current-location node, plus the section name spelled out underneath (not just a single letter).
- **Resume bubble**: hover now shows a "Download Resume" tooltip.
- Verified against the full production checklist: no placeholder names, no dev notes on-page, homepage crossroads already matches About(top)/Contact(left)/Diver(center)/Portfolio(right)/Side Hustles(bottom), and creature counts exceed the 10+ fish / 3+ jellyfish / 1+ turtle / occasional-shark minimums (17 fish, 4 jellyfish, 2 turtles, 1 shark, 1 whale).

## v5 — diver rebuild, real logos, simpler resume bubble

- **Diver rebuilt from scratch** with an actual humanoid layout: a distinct smaller head with goggle-style lenses, a visible neck gap, a torso with a chest-stripe accent, separate outlined arms and legs, flippers, and a short snorkel accent by the shoulder — no more single blob silhouette.
- **Contact page**: dropped the lighthouse/chest metaphors for LinkedIn and GitHub. They're now real logo-style badges (`BrandIcons.tsx`) — a dark GitHub mark and the standard blue LinkedIn "in" badge — sized large and instantly recognizable. Email stays as the pixel-art message bottle.
- **Resume bubble**: removed the folder/document emoji — it's now just a clean floating bubble with the "RESUME" label, still upper-right, still opens `resume.pdf`.

## v4 — critical polish pass

- **Diver and cat redrawn at higher resolution** with an extra shading pass — the diver is now a rounder, clearer silhouette with a distinct mask/lens/snorkel; the cat is a full sitting-cat silhouette (ears, curled tail, front paws) instead of a face-only bust.
- **Treasure chest reworked**: more gold trim bands, a two-tone wood texture, a persistent soft glow, and animated sparkle particles (`Sparkles.tsx`) both at idle and in a brighter burst when it opens.
- **Contact icons enlarged** (now the largest element on the page) with the same glow/sparkle treatment on the GitHub chest for instant recognizability.
- **Resume bubble** moved to the upper-right (below the home button), roughly 40% larger, with a document emoji + "RESUME" label, gold glow ring, and a floating/drifting animation — opens `resume.pdf` immediately.
- **Fish system expanced**: a genuine schooling cluster of 7 fish moving together, 10 individual fish at varied sizes/speeds/colors, two turtles and a shark on long, "occasional" cycles, a background whale, and four jellyfish at different depths — the reef never feels static.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm run start
```

## What's new in v2

- **Wooden signboard navigation** replaces the old button UI. Four hand-authored pixel signposts (`SignPost.tsx`) sit at the compass points, swaying gently, releasing occasional bubbles, and glowing/scaling on hover — each with a background vignette hinting at its room (ruins for About Me, a glowing chest for Portfolio, a cave mouth for Side Hustles, a lighthouse for Contact).
- **Fixed diver movement.** The diver no longer teleports — on selecting a direction it physically swims toward the real screen position of the chosen sign (measured via `getBoundingClientRect`), trailing bubbles the whole way, with a subtle parallax pull on the background, and only fades into a short screen-transition once the swim finishes.
- **Minimap** (`MiniMap.tsx`), top-left on every room page, highlights your current location and lets you jump to any other room.
- **Persistent home button** now uses an upgraded, higher-resolution pixel cat with a "HOME" tooltip on hover and a gentle bounce.
- **Hidden easter egg**: a barely-visible half-buried chest in the corner of the landing page. Click it to unlock "CLASSIFIED EVIDENCE" — a hidden blurb about the FrameGuard project.
- **Portfolio** now opens with a treasure-chest-click reveal animation before the project grid (all six real projects: FrameGuard, UIDAI Data Analysis, Text Summarization, Deepfake Detection System, Data Visualization Dashboard, Cybersecurity Projects) appears, each with GitHub/demo links, tech stack, and a screenshot placeholder slot.
- **About Me** is restructured into Hero → Profile → Skills → Timeline → Fun Facts, with real bio content (no more "UNIT 01" style labeling — just "SUNKEN RUINS").
- **Side Hustles** intro copy updated, plus a new "Achievements" category alongside Certificates/Hackathons/Internships/Courses.
- **Contact** is now a Treasure Island: a GitHub Chest, LinkedIn Lighthouse, and Email Message-in-a-Bottle, each animated and glowing on hover.
- Ambient world got busier: plankton dust, more bubble density, and the same drifting fish/shark/whale/jellyfish/turtle school, all now layered under a parallax pull during navigation.

## How it's structured

```
src/
  app/
    page.tsx              Landing page — signboard compass, diver swim logic, parallax
    about/page.tsx         Sunken Ruins — hero, profile, skills, timeline, fun facts
    portfolio/page.tsx     Treasure Room — chest-open reveal, real projects, flip cards
    side-hustles/page.tsx  Pirate Cave — certs, hackathons, internships, courses, achievements
    contact/page.tsx       Treasure Island — GitHub chest, LinkedIn lighthouse, email bottle
    globals.css            Ocean palette, pixel fonts, retro UI primitives, keyframes
  components/
    OceanBackground.tsx   Themed gradient + parallax light shafts per room
    Bubbles.tsx            Rising bubbles + drifting plankton dust
    Creatures.tsx          Drifting/floating fish, shark, whale, jellyfish, turtle
    SignPost.tsx            Wooden signboard: sway, seaweed, bubbles, glow, label overlay
    PixelSprite.tsx        Renders a pixel grid as crisp SVG (the sprite engine)
    HomeButton.tsx          Persistent pixel-cat button with tooltip, fixed top-right
    MiniMap.tsx             Retro RPG-style minimap, current-room highlight
    EasterEgg.tsx           Hidden chest → "CLASSIFIED EVIDENCE" modal
    Sparkles.tsx            Reusable twinkle-particle burst (chest/contact glow)
    BrandIcons.tsx          Real GitHub / LinkedIn logo badges (Contact page)
    ResumeBubble.tsx        Floating resume bubble, upper-right, opens resume.pdf
    RoomShell.tsx           Shared shell for the four sub-pages (+ minimap, cross-room nav)
  hooks/
    useDirectionNav.ts      Arrow-key / WASD → direction callback
  lib/
    sprites.ts              All pixel-art sprite grids + the shared palette
    iconSprites.ts          Pixel icons (legacy, no longer used on Contact but kept for reuse)
```

## Navigation

On the landing page:
- **Arrow keys** or **WASD** swim the explorer toward a signboard (Up → About Me, Right → Portfolio, Down → Side Hustles, Left → Contact).
- **Mouse/touch**: click any of the four signboards.
- The diver stays visible throughout, swims to the sign's real position with a bubble trail, and only then a brief transition fades to the next room.

On the Portfolio page, click the chest to reveal projects, then **← / →** (or **A/D**) move between cards and **Enter/Space** flips the focused card.

## Customizing content

All real content lives in **`src/lib/siteContent.ts`** — this is the one file to edit:

- `SITE_LINKS` — your GitHub, LinkedIn, email, and resume path.
- `PROFILE`, `SKILLS`, `TIMELINE`, `FUN_FACTS` — About Me page.
- `PROJECTS` — Portfolio page (title, tagline, stack, detail, github, demo).
- `SIDE_HUSTLES` — certificates/hackathons/internships/courses/achievements. Drop real proof PDFs into `public/pdf/` with matching filenames.

Replace `public/resume.pdf` with your real resume (same filename) and the Resume bubble just works.

## Design system

Colors, both fonts (`Press Start 2P` for headers/UI, `VT323` for body text — self-hosted via `@fontsource`, no external font requests), and the `.pixel-panel` / `.pixel-btn` primitives live in `src/app/globals.css` via Tailwind v4's `@theme`. Every sprite is a small grid of palette keys in `src/lib/sprites.ts`, rendered pixel-perfect via `PixelSprite.tsx`. Add a new creature or object by adding a grid there and dropping in `<PixelSprite grid={...} />`.

## Accessibility

- Skip-to-content link, visible focus rings (gold outline) on every interactive element.
- All decorative layers (bubbles, plankton, background creatures, vignettes) are `aria-hidden`.
- `prefers-reduced-motion` disables/shortens animations site-wide, including the diver's swim.
- Every interaction (signboards, cards, minimap, home button) works by mouse/touch or keyboard.
