---
name: implement
description: 'Use when the user wants to implement, build, code, or execute an approved plan. Triggers on implement, build, code, execute plan.'
---

# Implementation workflow

> Source of truth: `ai-skills/implement/`. Edit only `SKILL.md` and `COMMAND.md` there; the entries under `.claude/skills/`, `.opencode/skill/`, and `.opencode/command/` are symlinks into it.

Execute an approved planning document and report completed work.

1. Read the specified planning document, `ai-skills/REPO_CONTEXT.md`, `ai-skills/IMPLEMENTATION_GUIDELINES.md`, `CLAUDE.md`, and relevant planning memories. A planning document is required. If no plan path is supplied, list `ai-planning/*.planning.md` and ask which to implement. Never infer a plan from a research document (`ai-research/*.research.md`), an issue, or the conversation.
2. Confirm the named `ai-planning/*.planning.md` file exists on disk before touching any code. If it does not — including when only the matching `ai-research/{story}.research.md` exists — stop, say so, and tell the user to run `/plan` for that research first. Do not write the plan yourself and do not implement from the research.
3. Confirm open questions are resolved or deferred, the user approved the plan or invoked `/implement`, and the branch is correct. Ask before creating or changing branches.
4. Execute only the plan's file changes, phase by phase. Run each phase's automated checks, then its dev-server validation yourself — start `pnpm dev`, `curl` the listed routes for status and expected content, read the log for errors and hydration warnings, and stop the server afterwards. Do not hand this to the user or claim it passed without running it. Fix failures and update the phase checklist. Then update the plan's **AC Validation Summary**: every row naming this phase gets `Validated`, `Failed`, or `Cannot validate` (Notes say why and what covers it). Give the user only the manual checks `curl` cannot exercise. Stop for user sign-off after every phase unless the user explicitly requested run-all or continuation.
5. Treat silence or ambiguous approval as a stop between phases. Do not remove existing console statements unless the plan explicitly requires it; silence noisy test output with spies. If the plan conflicts with repository conventions, stop and ask.
6. Before completion, update `ai-skills/REPO_CONTEXT.md` for structural changes, run `pnpm exec eslint .` and `pnpm build` for non-trivial changes (there is no test script), and ensure the planning checklist is complete. Confirm no AC Validation Summary row is still `Not validated`; every `Failed` row needs a user-decided action in Notes.

Optionally record non-blocking follow-ups in `memories/repo/{story-name}-followup.md`.

End by listing changed files, test/build/dev-server status, the AC Validation Summary counts (Validated / Failed / Cannot validate), context updates, and deferred follow-ups. Do not bypass safety checks, create a PR, push, or force-push without explicit approval.
