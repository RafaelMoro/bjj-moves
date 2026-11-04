---
name: plan
description: 'Use when the user asks to plan an implementation, create a plan, or convert research into an implementation plan. Triggers on plan, planning, implementation plan, story plan.'
---

# Planning workflow

> Source of truth: `ai-skills/plan/`. Edit only `SKILL.md` and `COMMAND.md` there; the entries under `.claude/skills/`, `.opencode/skill/`, and `.opencode/command/` are symlinks into it.

Convert a completed research document into an actionable implementation plan.

1. Read the specified research document, `ai-skills/REPO_CONTEXT.md`, `ai-skills/IMPLEMENTATION_GUIDELINES.md`, `CLAUDE.md`, and relevant research memories. If no research path is supplied, list `ai-research/*.research.md` and ask which to plan.
2. Confirm open questions are resolved or explicitly deferred and that acceptance criteria are actionable. Ask instead of guessing.
3. Keep each item tied to an acceptance criterion, necessary prerequisite, repository convention, or accepted research finding. Anything else is out of scope — refuse speculative error handling, telemetry/logging/caching the story doesn't ask for, refactors of nearby code that merely looks inconsistent, tests for invented behavior, new state libraries, and backend changes outside this repository (surface those as open questions).
4. Define independently testable phases. For every phase, give exact paths, create/modify/delete action, placement guidance, signatures and key logic, edge cases, component Server/Client boundary, required App Router files, data-fetching approach, and test coverage areas.
5. Map acceptance-criterion identifiers to each phase. Give three tiers of validation per phase, narrowest first:
   - **Automated** — exact commands using only real package scripts (`pnpm exec eslint .` — there is no `lint` script — and `pnpm build`; there is no test script yet).
   - **Dev-server** — required for every phase that touches anything reachable at runtime. The implementer starts `pnpm dev` and checks it themselves, so list exactly what to hit: routes and expected status, what the response must contain, what must not appear (server-log errors, hydration warnings). Say explicitly when a phase is pure types/constants and skips this.
   - **Manual** — only what `curl` cannot exercise: clicks, drawers, local storage, responsive layout. Keep it short.
   Mark partial coverage and identify the phase that completes it.
6. For route, action, or mutation checks that create data, include cleanup. Use only credentials, environment templates, routes, APIs, and commands verified in this repository; ask or use a manual check instead of inventing missing infrastructure.
7. End the plan with an **AC Validation Summary** table — one row per acceptance criterion:

   | AC | Phase(s) | Check that proves it | Status | Notes |
   | --- | --- | --- | --- | --- |
   | AC1 — ... | Phase 2 | `GET /orders` 200, contains `Total` | Not validated | |

   Status values: `Not validated`, `Validated`, `Failed`, `Cannot validate` (Notes must say why and what covers it instead). Write every row as `Not validated`; an AC whose only proof is manual is marked `Cannot validate` up front. `/implement` owns the Status column from then on. Resolve every coverage gap before finalizing.
8. Write `ai-planning/{story-name}.planning.md`.

Optionally record non-obvious durable decisions in `memories/repo/{story-name}-planning.md`.

End by reporting the planning path, phase summaries, assumptions, unresolved questions, and decisions beyond research. Do not write source files or start implementation without approval.
