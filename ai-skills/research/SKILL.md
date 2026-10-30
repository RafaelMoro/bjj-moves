---
name: research
description: 'Use when the user starts a research, investigation, exploration, or discovery phase for a story or task. Triggers on research, investigate, explore, discover, feasibility.'
---

# Research workflow

> Source of truth: `ai-skills/research/`. Edit only `SKILL.md` and `COMMAND.md` there; the entries under `.claude/skills/`, `.opencode/skill/`, and `.opencode/command/` are symlinks into it.

Gather information, ask clarifying questions, and write a research document in `ai-research/`.

1. Read `ai-skills/REPO_CONTEXT.md` and `CLAUDE.md` first.
2. Check requirements, success criteria, user needs, constraints, and terminology for ambiguity. Ask the user before continuing if anything material is unclear.
3. Assess whether the request is a single story, multiple stories, or an epic. Split an overly broad request into stories with 2-5 acceptance criteria and ask which to research first.
4. Explore only the requested scope and ask all necessary scope questions in one batch.
5. Write `ai-research/{story-name}.research.md` with the story, acceptance criteria, affected files, existing patterns, dependencies, edge cases, constraints, open questions, and assumptions.

Research records what exists and what matters. It may identify affected routes, components, boundaries, contracts, and failure modes, but must not prescribe file edits, implementation steps, test code, or unrelated refactors.

Do not modify source files or run tests, builds, package installs, formatting, or implementation commands during research. Only the research document and optional memory or context notes may be written.

Optionally record non-obvious durable constraints in `memories/repo/{story-name}-research.md`.

End by reporting the research document path, story or epic structure, unresolved questions, and assumptions. Do not plan or write implementation code without human sign-off.

