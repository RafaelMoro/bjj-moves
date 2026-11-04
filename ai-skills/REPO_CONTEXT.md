# Repository Context - bjj-moves

**Last Updated:** 2026-10-29

Architecture and conventions for the bjj-moves Next.js frontend.

> Sections marked _(planned)_ describe intended conventions, not existing code. Update this document as routes and shared components land.

## Overview

A personal Brazilian Jiu-Jitsu notes site: technique pages (step-by-step text with images and looping videos) and monthly pages of training notes. All content is JSX written by hand; there is no data layer, backend, auth or CMS.

**Tech Stack:**

- Next.js 16.0.10 (App Router)
- React 19.2.0
- TypeScript 5.9 (`strict`)
- Tailwind CSS 4.1 (CSS-first: `@import "tailwindcss"` in `globals.css`)
- HeroUI 2.8 (`@heroui/react`, loaded as a Tailwind plugin) + `framer-motion`
- `next-themes` (dark by default), `@remixicon/react` icons
- pnpm (`.npmrc` hoists `@heroui/*`)
- No test runner

## Current Structure

```
src/
├── app/
│   ├── layout.tsx              # root layout — Geist fonts, <html suppressHydrationWarning>, <Providers>
│   ├── providers.tsx           # 'use client' — HeroUIProvider + NextThemesProvider (class, dark)
│   ├── hero.ts                 # heroui() Tailwind plugin
│   ├── globals.css             # Tailwind entry, @plugin hero.ts, @source @heroui/theme, dark variant
│   ├── page.tsx                # / — home and the only navigation hub
│   ├── basics/
│   │   ├── closed-guard/guillotine/{page.tsx,guillotine-closed-guard.constants.ts}
│   │   ├── guard-retention/{page.tsx,guard-retention.constants.ts}
│   │   ├── mount/armbar/{page.tsx,mount-armbar.constants.ts}
│   │   ├── mount/triangle-choke/{page.tsx,triangle-choke.constants.ts}
│   │   └── passing-guard/{page.tsx,passing-guard.constants.ts}
│   ├── takedowns/duck-under/{page.tsx,duck-under.constants.ts}
│   └── daily/{dec-2025,jan-2026,feb-2026}/page.tsx
├── features/Home.tsx           # 'use client' HeroUI Calendar — not imported anywhere
└── shared/constants/global.constants.ts   # *_ROUTE paths + YouTube/TikTok links
scripts/fix-jsx-quotes.mjs      # escapes raw quotes in JSX text under src/
```

Does not exist yet: shared `components/`, `lib/`, `hooks/`, `types/`, route handlers, server actions, `loading.tsx`/`error.tsx`/`not-found.tsx`, middleware/proxy, tests.

## Routes

| Route | File | Rendering | Auth | Purpose |
| ----- | ---- | --------- | ---- | ------- |
| `/` | `src/app/page.tsx` | Server (static) | — | Home: glossary, submissions by position, links to every page |
| `/basics/passing-guard` | `src/app/basics/passing-guard/page.tsx` | Server (static) | — | Passing guard steps |
| `/basics/guard-retention` | `src/app/basics/guard-retention/page.tsx` | Server (static) | — | Guard retention steps (no `metadata` export) |
| `/basics/mount/armbar` | `src/app/basics/mount/armbar/page.tsx` | Server (static) | — | Armbar from mount |
| `/basics/mount/triangle-choke` | `src/app/basics/mount/triangle-choke/page.tsx` | Server (static) | — | Triangle choke from mount (no `metadata` export) |
| `/basics/closed-guard/guillotine` | `src/app/basics/closed-guard/guillotine/page.tsx` | Server (static) | — | Guillotine from closed guard |
| `/takedowns/duck-under` | `src/app/takedowns/duck-under/page.tsx` | Server (static) | — | Duck under takedown |
| `/daily/dec-2025` | `src/app/daily/dec-2025/page.tsx` | Server (static) | — | Training notes, December 2025 |
| `/daily/jan-2026` | `src/app/daily/jan-2026/page.tsx` | Server (static) | — | Training notes, January 2026 |
| `/daily/feb-2026` | `src/app/daily/feb-2026/page.tsx` | Server (static) | — | Training notes, February 2026 |

Rendering: Server (static), Server (dynamic), or Client. The only client components are `providers.tsx` and the unused `features/Home.tsx`.

## Data Flow

No fetching. Pages are static JSX. Media URLs are template strings in each route's `<name>.constants.ts`, built from `process.env.NEXT_PUBLIC_IMAGE_DOMAIN` / `NEXT_PUBLIC_VIDEO_DOMAIN` (Cloudinary). Images render with `next/image` (`.webp`), videos with `<video controls muted autoPlay loop>` (`.webm`). External instruction videos are plain links from `global.constants.ts`.

## Environment Variables

Template: `env-example` (copy to `.env.local`).

| Variable | Public? | Purpose |
| -------- | ------- | ------- |
| `NEXT_PUBLIC_IMAGE_DOMAIN` | yes | Cloudinary image base URL; every step image is built from it |
| `NEXT_PUBLIC_VIDEO_DOMAIN` | yes | Cloudinary video base URL; every step video is built from it |

Only `NEXT_PUBLIC_*` variables reach the browser. Everything else is server-only.

## Testing Structure

- **Unit / component tests:** _(planned)_ — no runner or `test` script.
- **E2E:** _(planned)_
- **Checks today:** `pnpm exec eslint .` and `pnpm build`.

## Branching & Release

- Feature branches `feat/<name>`, PRs into `develop`. `main` is the GitHub default branch.
- Every PR needs a `major`, `minor` or `patch` label (`.github/workflows/check-label.yml`).
- Merging a PR into `develop` bumps `package.json`, tags `v<version>` and prepends the PR to `CHANGELOG.md` (`.github/workflows/develop-pipeline.yml`). Don't bump or edit the changelog by hand.
- Commit messages are sentence-case imperative ("Add February 2026 daily progress page…"), not Conventional Commits.

## Adding a New Route

1. Create `src/app/<section>/<segment>/page.tsx` — a static Server Component — plus `<name>.constants.ts` for its media URLs.
2. Export `metadata` (title/description).
3. Add a `*_ROUTE` constant to `src/shared/constants/global.constants.ts` and link it from `src/app/page.tsx`; otherwise the page is unreachable.
4. For a new month of notes, copy the previous `daily/<mon>-<yyyy>/page.tsx`, add `DAILY_<MONTH>_<YEAR>_ROUTE`, link it on the home page, and rename the component and `metadata` title.
5. Update the route table above.

## Common Patterns

### Technique step with remote media

```tsx
import Image from "next/image";
import { FIRST_STEP_IMG_SRC, SECOND_STEP_VIDEO_SRC } from "./duck-under.constants";

<li>If you&apos;re right-handed, leave your hand on the top of the head</li>
<Image src={FIRST_STEP_IMG_SRC} alt="First step of duck under" width={605} height={530}
  className="md:aspect-square md:object-cover w-72 h-72" />
<video src={SECOND_STEP_VIDEO_SRC} controls muted autoPlay loop className="md:aspect-square md:object-cover w-72 h-72" />
```

### Media constants

```ts
const imgDomainSrc = process.env.NEXT_PUBLIC_IMAGE_DOMAIN
export const FIRST_STEP_IMG_SRC = `${imgDomainSrc}/v1763867702/duck-under-1_rl7eud.webp`;
```

## Notes

- `next.config.ts` allows `res.cloudinary.com` for `next/image` through both the deprecated `images.domains` and `images.remotePatterns`.
- `tailwind.config.js` (HeroUI plugin, `darkMode: "class"`) is not referenced by `globals.css`; the CSS entry loads HeroUI through `@plugin './hero.ts'`.
- The daily pages are copies: all three export the component `DailyDec2025Page`, and the January and February pages keep the title "Daily progress December 2025".
- `layout.tsx` still has the scaffold `metadata` ("Create Next App"); pages override it.
- `README.md` is the unmodified `create-next-app` README.
