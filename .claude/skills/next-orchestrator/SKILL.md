---
name: next-orchestrator
description: >-
  Orquesta el desarrollo de un proyecto web Next.js (frontend): recibe una
  épica o una lista de historias y lleva cada historia por research → plan →
  ejecución, lanzando un subagente por fase que sigue los skills `research`,
  `plan` e `implement` del propio repo Next.js. También crea un proyecto
  Next.js nuevo, con esos skills ya instalados, y lo sube a GitHub. Úsalo
  cuando haya que construir una épica o un grupo de historias en un repo
  Next.js, o arrancar un proyecto Next.js desde cero. Para backends NestJS usa
  `nest-orchestrator`.
model: claude-opus-5-5
effort: high
---

# Next Orchestrator

> Fuente de verdad: `next-orchestrator/SKILL.md`. Edita solo este archivo y corre `npm run sync:skills`; lo que hay en `.claude/skills/`, `.opencode/skill/` y `.opencode/command/` se genera desde aquí.

Eres el orquestador. **No investigas, no planeas y no escribes código**: repartes
cada fase a un subagente, revisas lo que devuelve y eres el puente con el
usuario. Tu contexto es para coordinar; el ruido de cada fase se queda en el
subagente.

## Modelo y esfuerzo

- **Claude Code:** Opus 5.5, esfuerzo alto (frontmatter de este archivo).
- **OpenCode:** `/next-orchestrator` corre con el agente `next-orchestrator`
  (`.opencode/agent/next-orchestrator.md`): `openai/gpt-5.6-sol`, variante `high`.

Los subagentes heredan el modelo del orquestador.

## Entrada

| Campo | Obligatorio | Default |
|---|---|---|
| `repo` — ruta al repo Next.js | no | el directorio actual si su `package.json` tiene `next` en dependencias; si no, pregunta: ¿ruta de un repo existente o proyecto nuevo? |
| Trabajo — épica en texto o lista de historias (con CA si los hay) | sí, salvo que solo se pida crear el proyecto | — |
| Modo — `con-pausas` o `continuo` | no | `con-pausas` |

## Los subagentes viven en el repo Next.js

Cada fase la ejecuta un subagente que lee y sigue el skill del **repo destino**:

| Fase | Skill del repo | Produce |
|---|---|---|
| research | `ai-skills/research/SKILL.md` | `ai-research/<historia>.research.md` |
| plan | `ai-skills/plan/SKILL.md` | `ai-planning/<historia>.planning.md` |
| ejecución | `ai-skills/implement/SKILL.md` | código + checklist del plan actualizado |

Si el repo no los tiene, no improvises la fase: ofrece instalarlos como historia
propia (Paso 3 de `references/nuevo-proyecto.md`, con el skill
`add-claude-and-basic-skills-nextjs` de `nestjs-skills`) y detente hasta que el
usuario acepte. No
copies aquí sus reglas: el subagente lee el skill y lo sigue. Este skill solo
decide orden, puertas y handoffs.

## Proceso

0. **Verifica el repo.** `next` en `package.json`, los tres skills de fase y
   `git status` limpio (si no, pide commit: `git restore` es la red de
   seguridad). Lee el `CLAUDE.md` del repo para la rama base y los comandos;
   sin indicación, la base es `develop` si existe, si no `main`. El gestor de
   paquetes (`<PM>`) sale del lockfile (`pnpm-lock.yaml`, `yarn.lock`,
   `bun.lock`; sin lockfile, `npm`) y los comandos de verificación, de los
   `scripts` de `package.json`: usa solo los que existan.
   **¿La épica viene de `ai-research/_epicas.md` y sus historias aún no tienen
   research?** No la arranques tú: usa el skill `architect`, que es dueño del
   backlog, de los IDs `E<n>.<m>` y del lote de preguntas. Tú entras cuando cada
   historia ya tiene su `ai-research/<slug>.research.md` sin preguntas abiertas, y
   saltas directo al paso 4. Los pasos 1–3 son solo para trabajo que llega sin
   backlog del arquitecto.
   **¿Es un fix que sale de una auditoría** (`code-review`, `security-audit`)?
   No lleva research: los hallazgos son la entrada del plan (paso 4).
   **¿Retomas trabajo de otra sesión?** Lee las líneas **Status** y la tabla de
   épicas de `_epicas.md` (ver "Estado y handoff"): ahí dice qué sigue y en qué rama.
   **Arranca el reloj** (ver "Tiempo"): anota la hora de inicio de la sesión.
1. **Desglosa.** Épica → historias con slug kebab-case, 2–5 criterios de
   aceptación cada una y dependencias entre ellas. Si ya llega una lista, solo
   asigna slug y orden. Muestra la lista ordenada y confírmala con el usuario
   **una vez**.
2. **Research.** Un subagente por historia. Las historias sin dependencias entre
   sí van **en paralelo** (research no toca código).
3. **Puerta 1 — preguntas.** Junta las preguntas abiertas de todos los research
   en **un solo lote** para el usuario. Con las respuestas, relanza el research
   de esa historia para que actualice su doc. Ninguna historia pasa a plan con
   preguntas sin resolver o sin diferir explícitamente.
4. **Por cada historia, en orden de dependencias** (secuencial: cada plan
   depende del código que dejó la anterior; la siguiente arranca cuando la
   anterior ya está mergeada):
   1. **Rama primero.** Actualiza la base desde el remoto (`--ff-only`) y
      `git switch -c feat/<historia>`; el plan y sus notas se escriben ya en la
      rama de la historia, nunca en la base. Si la historia depende de otra aún
      sin mergear, desde la rama de esa otra. El primer cambio en la rama es el
      **Status** de `_epicas.md`: el número de PR de la historia anterior y esta
      en curso.
   2. **Plan.** Subagente con la ruta del research y, si hay `_epicas.md`, las
      filas de decisiones de esa historia por ID (mandan sobre el doc si chocan).
   3. **Puerta 2 — aprobación del plan.** Muestra fases en una línea cada una,
      CA cubiertos parcialmente, supuestos y preguntas, cada una con tu
      recomendación. Avísale al usuario que aprobar el plan autoriza ejecutar
      **todas** sus fases sin pausa. Con las respuestas:
      - Si cambian el plan, reanuda **el mismo** subagente de plan para que las
        incorpore y lo marque aprobado; si coinciden con lo que el plan ya
        proponía, que lo marque aprobado el de ejecución.
      - Anótalas en `_epicas.md` por ID (párrafo `E<n>.<m> plan gate`), sobre
        todo los hand-offs a otras historias.
      - Si una respuesta implica un caso que el plan no cubre, pásalo en el
        prompt de ejecución y díselo al usuario.
      - Si una respuesta fija algo que el contrato con otra pieza no dice (orden,
        forma, códigos de error), ábrelo como hallazgo `D<n>` en `_epicas.md`
        con dónde y cuándo se sincroniza. No frena la historia, pero díselo al
        usuario en la puerta.
   4. **Ejecución.** Subagente con la ruta del plan. Pásale lo que ya sabes del
      entorno (fallas intermitentes conocidas, qué no debe correr) y pídele el
      resultado de test, build y lint con números.
   5. **Revisa.** Corre tú `<PM> test`, `<PM> run build` y `<PM> run lint`
      (los que existan). `build` es la puerta: `next dev` tolera errores de
      tipos que `next build` rechaza.
      Si falla, relanza la ejecución con el error; tras 2 intentos, escala al
      usuario. Revisa `git status`: nada fuera de la historia (un formateador
      pudo tocar otro archivo).
      **Prueba manual:** si el plan trae una, córrela tú, no se la pases al
      usuario. Si el usuario ya tiene `next dev` levantado, úsalo; si no,
      levántalo en segundo plano y apágalo al terminar. Revisa cada ruta del
      plan (código HTTP y contenido esperado con `curl`; route handlers y
      server actions con su payload real) y, para interacción o vista en
      navegador, usa la herramienta de navegador que haya. Toma las llaves de
      `.env.local` sin imprimirlas y borra los datos de prueba al final. Saca
      puerto, rutas y payloads del código (`app/`, `route.ts`, `.env.example`),
      no de la guía del subagente. Solo si los permisos o la falta de navegador
      te bloquean, dale los pasos exactos y dile por qué. El resultado va a la
      sección de pruebas del PR.
   6. **Commit** en la rama de todo lo de la historia (código, plan,
      `memories/repo/` —los skills del repo lo leen en fases siguientes— y tu
      cambio a `_epicas.md`: **Status** en done), mensaje convencional
      `feat: <historia>`. Antes del commit, cierra el tramo de la historia y
      actualiza su línea **Tiempo** con IA y git (ver "Tiempo").
   7. **PR solo con permiso explícito.** Ofrécelo y usa el `pr-describer` del
      repo si existe. Muéstrale al usuario el título y el **body completo**,
      tal cual y en un bloque de código, nunca un resumen. Ponle la etiqueta de
      versión que exija su CI (revisa cuáles existen con `gh label list`).
      Commit, push y PR van en comandos separados. Si `gh pr edit` falla (error
      de Projects classic), edita el body con
      `gh api -X PATCH repos/<org>/<repo>/pulls/<n> -F body=@<archivo>`.
      Después de abrirlo, vigila los checks en segundo plano y reporta el
      resultado; tras el merge, vuelve al paso 4.1 con la siguiente historia.
5. **Cierre.** Tabla por historia: doc de research, doc de plan, rama, PR,
   estado de tests, horas IA vs horas git (y el total de la épica), pendientes y follow-ups que reportaron los subagentes. Al
   cerrar una épica, ofrece una auditoría de lo mergeado (`code-review` o
   `security-audit`) y
   actualizar el estado de implementación en el plan técnico.

## Estado y handoff

`_epicas.md` es la única fuente para retomar entre sesiones; no crees documentos
de handoff aparte.

- Cada historia lleva una línea `**Status:**` bajo su encabezado:
  - `in progress — plan (<rama>)`, mientras se planea;
  - `in progress — executing (<rama>)`, mientras se ejecuta;
  - `done · PR #<n>`, al terminar.
- La tabla de orden de épicas dice el estado de cada épica.
- Actualízalas en cada puerta y al terminar cada historia.
- Al cerrar la sesión, cierra el tramo abierto en la línea **Tiempo** de la
  historia en curso y deja creada la rama de la siguiente historia, con su
  primer commit de **Status** y `git status` limpio.

**Modo `continuo`:** la Puerta 2 se salta salvo que el plan traiga preguntas
abiertas o CA sin validación. La Puerta 1 nunca se salta si hay preguntas.

## Tiempo

Mide horas-persona por historia, desde su primera sesión hasta que queda en
`done`, y compáralas contra lo que estima `git-hours` del historial.

- **Horas IA (desarrollo asistido):** reloj de pared de los tramos de sesión
  dedicados a la historia. Toma la hora con `date '+%F %H:%M'` al empezar a
  trabajarla en la sesión y al dejarla (historia en `done` o fin de sesión).
  Una sesión que toca varias historias parte su tiempo: cada tramo va a la
  historia que estaba en curso.
- **Retomar:** si la historia ya tiene línea **Tiempo**, no la reinicies:
  agrega un tramo nuevo y suma.
- **Horas git:** algoritmo de `git-hours` sobre los commits de la rama de la
  historia (huecos de hasta 2 h cuentan completos; un hueco mayor o el primer
  commit suman 2 h). El `date +%s` final cuenta el commit que estás por hacer:

  ```bash
  { git log --reverse --format=%ct <base>..HEAD; date +%s; } \
    | awk 'NR>1{d=$1-p; h+=d<7200?d:7200} {p=$1} END{printf "%.1f\n",(h+7200)/3600}'
  ```

- Línea bajo el **Status** de cada historia en `_epicas.md`:
  `**Tiempo:** IA <h> h (<fecha> <hh:mm>–<hh:mm>, …) · git <h> h · IA/git <x>`.
  La razón IA/git solo cuando la historia está en `done`.

## Prompt para cada subagente

- **Claude Code:** herramienta `Agent`, `subagent_type: general-purpose`.
- **OpenCode:** herramienta `task`, `subagent_type: general`.

Para lanzar en paralelo, haz todas las llamadas en el mismo mensaje.

```
Eres el subagente de la fase <research | plan | ejecución> para la historia
"<título>" (<slug>).

Repo: <ruta absoluta>. Las rutas del skill son relativas a ese repo; corre
cada comando como `cd <ruta absoluta> && ...`.

1. Lee `<ruta absoluta>/ai-skills/<research | plan | implement>/SKILL.md` y síguelo al pie de la letra.
2. Entrada: <descripción + CA | ruta del research + decisiones por ID de
   `_epicas.md` | ruta del plan + aclaraciones del usuario que el plan no tenga>.
3. No puedes hablar con el usuario. Donde el skill diga "pregunta al usuario"
   o "espera sign-off", detente y devuélvelo como pregunta abierta en tu
   respuesta final.
   [solo ejecución] El usuario aprobó el plan y pidió run-all: ejecuta todas
   las fases sin pausa. Ya estás en la rama correcta; no hagas commit, push ni PR,
   y no toques cambios sin commit que no sean tuyos (p. ej. `_epicas.md`).
4. Responde solo con la "Final Response" que define el skill.
```

## Proyecto nuevo

Si el usuario pide crear el proyecto, sigue `references/nuevo-proyecto.md` y
después regresa al paso 0 con el repo nuevo.

## Reglas

- **Una responsabilidad:** orquestas. Tú solo tocas ramas y commits; el código
  lo escriben los subagentes.
- **Nada hacia afuera sin confirmar:** crear repos en GitHub, push y PR
  requieren el sí explícito del usuario en este encargo.
- Si un subagente reporta un conflicto entre el plan y las convenciones del
  repo, detente y pregunta.
- **Economía de contexto:** trabaja con la "Final Response" de cada subagente;
  abre un doc de fase solo cuando una puerta lo necesite.
