# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A personal Brazilian Jiu-Jitsu notes site: Next.js 16 (App Router), React 19, TypeScript 5 (strict), Tailwind CSS v4 and HeroUI 2. Every page is static and hand-written JSX; there is no backend, auth or test suite. Package manager is **pnpm** (`pnpm-lock.yaml`, `.npmrc` hoists `@heroui/*`).

## Shared AI context

`ai-skills/` is the single source of truth for agent tooling, shared by every tool:

- `ai-skills/REPO_CONTEXT.md` — architecture, routes, components, data flow. Read it before non-trivial work; update it when routes or shared components land.
- `ai-skills/IMPLEMENTATION_GUIDELINES.md` — component/route/styling/testing conventions. Read it before writing code.
- `ai-skills/<skill>/SKILL.md` and `COMMAND.md` — workflows (`research`, `plan`, `implement`, `pr-describer`) and OpenCode command prompts. `.claude/skills/`, `.opencode/skill/`, and `.opencode/command/` are symlinks into this folder. Edit only the `ai-skills/` copy.
- `.claude/skills/next-orchestrator/` — a copied (not symlinked) skill that runs epics through research → plan → implement.

## Commands

- `pnpm dev`: dev server at http://localhost:3000
- `pnpm build`: production build (also does the type check)
- `pnpm exec eslint .`: lint (there is no `lint` script; config is `eslint-config-next` core-web-vitals + typescript)
- `pnpm fix-quotes`: rewrites raw `'` / `"` in JSX text under `src/` to `&apos;` / `&quot;` (fixes `react/no-unescaped-entities`)

There is no test suite.

## Environment

Copy `env-example` to `.env.local`. `NEXT_PUBLIC_IMAGE_DOMAIN` and `NEXT_PUBLIC_VIDEO_DOMAIN` are Cloudinary base URLs. Media constants are built from them, so without them every image and video URL is broken. `next.config.ts` allows `res.cloudinary.com` for `next/image`.

## Architecture

HeroUI is wired in `src/app/hero.ts` (a Tailwind plugin loaded from `globals.css`) and `src/app/providers.tsx`; the default theme is dark via `next-themes`. Every page is a static server component. There is no data layer: all content is JSX written by hand.

- `src/app/page.tsx` is the home page and the only navigation hub. A new page is only reachable once you link it here.
- `src/shared/constants/global.constants.ts` holds every route path (`*_ROUTE`) and external video links (YouTube/TikTok). Add the route constant here and import it in `page.tsx`. Don't hardcode paths.
- Technique pages (`src/app/basics/**`, `src/app/takedowns/**`): each folder has a `page.tsx` plus a `<name>.constants.ts`. The constants file exports the step media URLs (`FIRST_STEP_IMG_SRC`, `SECOND_STEP_VIDEO_SRC`, …) built from the env domains. Pages render a list of steps, each with a `next/image` (`.webp`) or a `<video controls muted autoPlay loop>` (`.webm`).
- Daily progress pages (`src/app/daily/<mon>-<yyyy>/page.tsx`): one page per month, made of `<article>` blocks per training day, separated by `<hr />`. To add a month, copy the previous month's page, then add a `DAILY_<MONTH>_<YEAR>_ROUTE` constant and a link on the home page (see commit c1ad7cb). Copied pages keep the stale component name `DailyDec2025Page` and the title "Daily progress December 2025". That works, but rename both in new pages.
- Pages export their own `metadata` (title/description); `basics/guard-retention` and `basics/mount/triangle-choke` don't yet.

## Rules that bite in this stack

- Components are **Server Components** by default. `'use client'` only for hooks, browser APIs, or event handlers, on the smallest leaf that needs it. Most HeroUI components need it.
- Never read a non-`NEXT_PUBLIC_` env var in code that reaches the client.
- `pnpm build` is the gate: `next dev` tolerates type errors that `next build` rejects.

## Branching & release

- Feature branches `feat/<name>`, PRs into `develop`.
- PRs need a `major`, `minor` or `patch` label, or CI fails (`.github/workflows/check-label.yml`).
- When a PR into `develop` is merged, CI bumps `package.json`, tags the release and prepends to `CHANGELOG.md` (`develop-pipeline.yml`). Don't bump the version or edit the changelog by hand.
