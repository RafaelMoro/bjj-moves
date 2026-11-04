# Crear un proyecto Next.js y subirlo a GitHub

Sigue el orden de los primeros PRs de `faber-solutions-2108/faber-fe-crm` (ver su
`CHANGELOG.md`): crear el repo y subirlo, **#1 GitHub Actions**, **#2 ai-skills
y `CLAUDE.md`**. Después de esos dos, el proyecto ya puede correr el ciclo
research → plan → ejecución.

## Fuentes

| Para | Fuente |
|---|---|
| Workflows de CI | `faber-solutions-2108/faber-fe-crm`: `.github/workflows/check-label.yml`, `develop.yml` y `unit-tests.yml` |
| ai-skills y `CLAUDE.md` | skill `add-claude-and-basic-skills-nextjs` de `nestjs-skills`: local en `/home/rafael/projects/nestjs-skills`, remoto `RafaelMoro/nestjs-skills` |

`faber-fe-crm` es privado: léelo con el GitHub MCP (`get_file_contents`) o con
`gh api`. Si `nestjs-skills` no está en local, clónalo en una carpeta temporal.

## Datos (confírmalos en un solo lote)

| Dato | Default |
|---|---|
| Nombre (kebab-case) | obligatorio |
| Carpeta padre | la carpeta padre del repo desde donde corre el skill |
| Owner en GitHub | `faber-solutions-2108` |
| Visibilidad | privada |

## Paso 1 — Crear el repo y subirlo

1. Scaffold (TypeScript, Tailwind, ESLint, App Router, `src/`, alias `@/*`,
   igual que `faber-fe-crm`):
   ```bash
   cd <padre> && pnpm create next-app@latest <nombre> --ts --tailwind --eslint \
     --app --src-dir --import-alias "@/*" --use-pnpm --yes
   cd <nombre> && pnpm run lint && pnpm run build
   ```
   `create-next-app` ya hace el primer commit; si no lo hizo, commit inicial
   en `main` (`chore: scaffold Next.js`). Crea `develop` desde ahí.
2. **Solo después de confirmar owner, nombre y visibilidad**, crea el repo
   **vacío** con lo primero que haya disponible:
   - `gh repo create <owner>/<nombre> --private`
   - GitHub MCP `create_repository` (`private: true`, `autoInit: false`;
     `organization` solo si el owner es una organización)
   - Ninguno: pídele al usuario que lo cree vacío y espera.
3. Sube las dos ramas:
   ```bash
   git remote add origin git@github.com:<owner>/<nombre>.git
   git push -u origin main develop
   ```
4. Prepara el repo para el CI (con `gh` o la API REST con `$GITHUB_PAT`). Si no
   puedes, déjaselo al usuario como pasos manuales:
   - Rama por default: `develop`.
   - Labels `major`, `minor` y `patch`: `check-label.yml` falla si el PR no trae una.
   - Settings → Actions → Workflow permissions: **Read and write**. Sin esto,
     `develop.yml` no puede subir el bump de versión ni el changelog.

## Paso 2 — Historia "Add GH actions" (PR #1)

- Rama `feat/add-gh-actions` desde `develop`.
- Copia `check-label.yml` y `develop.yml` de `faber-fe-crm`. El scaffold no
  trae script `test`, así que **no** copies `unit-tests.yml` todavía: quita de
  `develop.yml` el job `unit-tests` y su entrada en `needs`. Vuelve cuando
  exista la historia de tests (Paso 4), igual que pasó en `faber-fe-crm`.
- Verifica que lo que invocan exista en el proyecto nuevo: `pnpm-lock.yaml`
  para `--frozen-lockfile` y la versión de pnpm y Node.
- Crea un `CHANGELOG.md` vacío: el pipeline le antepone una entrada en cada merge.
- Commit, push y PR hacia `develop` con label `minor`.

## Paso 3 — Historia "Add claude skills and claude init" (PR #2)

- Espera a que el PR #1 esté mergeado: mergéalo solo si el usuario lo autoriza,
  si no, espera a que él lo haga. Luego haz `git pull` de `develop` para traer el
  bump de versión y el `CHANGELOG.md` que dejó el pipeline.
- Rama `feat/add-ai-skills` desde `develop`.
- Lanza **un** subagente que lea y siga
  `<nestjs-skills>/add-claude-and-basic-skills-nextjs/SKILL.md` contra el
  proyecto nuevo. Ese skill copia `ai-skills/` (research, plan, implement,
  pr-describer, `IMPLEMENTATION_GUIDELINES.md`), escribe `REPO_CONTEXT.md` y
  `CLAUDE.md` a partir del código real y crea los symlinks de `.claude/` y
  `.opencode/`. Al llegar aquí los workflows ya existen, así que el `CLAUDE.md`
  puede documentar las ramas y los labels.
- Revisa que existan `ai-skills/{research,plan,implement}/SKILL.md` y los symlinks.
- Commit, push y PR hacia `develop` con label `minor`.

## Paso 4 — Reporta y sigue

Reporta la URL del repo, la ruta local y los dos PRs. Ofrece como siguientes
historias las que siguieron en `faber-fe-crm`: test harness con Jest (script
`test` con cobertura y `unit-tests.yml` conectado a `develop.yml`), conexión al
backend (variable de base URL en `.env.example` y un módulo server-only que la
lea) y login. Si el usuario las acepta, regresa al paso 0 de `SKILL.md`.
