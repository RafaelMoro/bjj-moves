# Implementation Guidelines

**Last Updated:** 2026-10-29

Technical conventions for implementing features in bjj-moves. See [REPO_CONTEXT.md](./REPO_CONTEXT.md) for current architecture.

> Sections marked _(adopt when needed)_ describe conventions to apply the first time that concern appears — they are not in the codebase yet. Flip them to real sections, with file paths, once implemented.

---

## Server Components by Default

**Every component is a Server Component until something forces otherwise.** `'use client'` is required only for: React state/effect hooks, event handlers, browser APIs (`window`, `localStorage`, `IntersectionObserver`), or a third-party library that uses any of those.

Put the directive on the **smallest leaf that needs it**, never on a page or layout. `'use client'` is contagious downward — everything imported by a client component ships to the browser too.

```tsx
// ❌ whole page becomes client-side because of one button
'use client';
export default function ProductPage() { ... }

// ✅ page stays server-rendered, only the button hydrates
export default async function ProductPage() {
  const product = await getProduct();
  return (<><ProductDetails product={product} /><AddToCartButton id={product.id} /></>);
}
```

Server Components can be `async` and fetch directly — no `useEffect` + `useState` fetch waterfall. If a component needs both server data and interactivity, fetch on the server and pass the data down as props.

### Secrets

Never read a non-`NEXT_PUBLIC_` env var, an API key, or a database handle inside a file that carries (or is imported by) `'use client'`. `NEXT_PUBLIC_*` values are inlined into the bundle and are public by definition — treat them as such.

---

## Routes and App Router Files

```
app/<segment>/
├── page.tsx          # the route (Server Component)
├── layout.tsx        # persistent shell, only if this segment needs one
├── loading.tsx       # streamed fallback — add whenever page.tsx awaits data
├── error.tsx         # 'use client' + reset(); add when the route can fail
└── not-found.tsx     # when notFound() is called in this segment
```

- Route segments are kebab-case (`order-history`). Non-route files inside `app/` are private with an underscore (`_components/`) or live in `components/`.
- Define route-specific `metadata` or `generateMetadata` when a route needs metadata beyond what it inherits from its layouts. Metadata exports must remain in Server Components.
- Dynamic segments type their params: `{ params }: { params: Promise<{ id: string }> }` — `params` and `searchParams` are async in Next 15+; `await` them.
- Route handlers go in `app/api/<name>/route.ts` for HTTP boundaries such as browser-consumed APIs, downloads, webhooks, callbacks, and third-party integrations. A Server Component fetching its own data does not need one; prefer a Server Action for mutations initiated by this Next.js UI when its constraints fit.

---

## File Organization

```
src/
├── app/                                # routes; each page is a static Server Component
│   ├── <section>/<technique>/
│   │   ├── page.tsx
│   │   └── <name>.constants.ts         # step media URLs built from the env domains
│   ├── daily/<mon>-<yyyy>/page.tsx     # one page per month of training notes
│   ├── layout.tsx, providers.tsx, hero.ts, globals.css
├── features/                           # feature components (Home.tsx, currently unused)
└── shared/constants/global.constants.ts  # every *_ROUTE and external video link
```

Route paths and external video links live in `src/shared/constants/global.constants.ts`; never hardcode a path. A component used by exactly one route lives beside that route (`app/<segment>/_components/`). There is no `components/`, `hooks/`, `lib/` or `types/` folder yet — create one only on the second consumer.

### File naming

| Kind | Pattern |
| --- | --- |
| Components | `PascalCase.tsx` (`ProductCard.tsx`) |
| Hooks | `use-<name>.ts`, exporting `useName` |
| Helpers / lib | `kebab-case.ts` |
| Types | `<domain>.types.ts` |
| Tests | `<file>.test.tsx` (co-located) |
| App Router files | lowercase, framework-defined (`page.tsx`, `layout.tsx`) |

### Imports

Use the `@/*` alias (`tsconfig.json` → `paths`) instead of `../../../`. It maps to `./src/*`. Mirror it in the test runner's resolver when one is added.

---

## Tailwind Conventions

Tailwind v4 classes plus HeroUI components are the styling mechanism. `globals.css` imports Tailwind, loads HeroUI as a plugin (`@plugin './hero.ts'`) and scans `@heroui/theme` with `@source`; `tailwind.config.js` is not referenced by the CSS entry. Use a HeroUI component (`@heroui/react`) before hand-building a control, and remember most of them are client components. Icons come from `@remixicon/react`. No CSS modules, no `styled-components`, no `style={{}}` except for genuinely dynamic values (a computed width, a CSS custom property).

### Conditional classes go through `cn()` _(adopt when needed)_

There is no `cn` helper and `clsx`/`tailwind-merge` are not installed. Add them the first time a component merges a `className` prop:

```ts
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
```

```tsx
<button className={cn('rounded px-4 py-2', isActive && 'bg-primary', className)} />
```

`twMerge` is what makes a `className` prop actually override the component's own classes — plain string concatenation leaves both `px-4` and `px-6` in the DOM and the winner is whichever Tailwind emitted last.

### Class strings must be statically analyzable

Tailwind scans source text; it never sees a class built at runtime.

```tsx
// ❌ produces nothing — the class never appears in the source
<div className={`text-${color}-500`} />

// ✅ full class names in a lookup
const TONE = { danger: 'text-red-500', ok: 'text-green-500' } as const;
<div className={TONE[tone]} />
```

### Design tokens over raw values

Colors come from the HeroUI theme (`bg-primary`, `text-default-500`) and fonts from the Geist variables set in `layout.tsx`, so `bg-primary`, not `bg-[#3b5bdb]`. There is no `@theme` block yet; add tokens there (`globals.css`), not in `tailwind.config.js`. Reach for an arbitrary value (`w-[37px]`) only when the design genuinely has no token for it, and prefer adding the token if it appears twice.

### Ordering and duplication

Mobile-first: unprefixed classes are the small-screen case, then `sm:`/`md:`/`lg:`. Dark is the default theme (`next-themes`, `attribute="class"`, `@custom-variant dark`); support light with `dark:` variants on the same element rather than a parallel component. When the same long class string appears in three places, extract a component — not an `@apply` rule.

---

## Data Fetching

There is no data layer today: every page is static JSX and media URLs come from `NEXT_PUBLIC_IMAGE_DOMAIN` / `NEXT_PUBLIC_VIDEO_DOMAIN` (Cloudinary). The rules below apply the first time a page needs data.

**Server first.** In order of preference:

1. `await` the data directly in a Server Component.
2. **Server Action** (`'use server'`) for mutations invoked from a form or a client component.
3. Route handler in `app/api/` when the feature needs an HTTP boundary.
4. Client-side fetch — needs a stated reason (polling, infinite scroll, data depending on client-only state).

_(adopt when needed)_ All outbound calls to a backend go through a single module (`lib/api.ts`) that owns the base URL, headers, and error normalization. Components never call `fetch` against a hardcoded URL.

Set caching explicitly on every `fetch` — `{ cache: 'force-cache' }` or `{ next: { revalidate: N } }` for cacheable reads, `{ cache: 'no-store' }` for per-request data. The default changes between Next major versions; stating it means the behavior doesn't silently flip on upgrade.

### Server Actions validate their input _(adopt when needed)_

A Server Action is a public HTTP endpoint. Anything a client can call, an attacker can call with arbitrary arguments — so re-check auth and parse the payload inside the action, never trusting that the form supplied what the types claim:

```ts
'use server';
export async function updateProfile(formData: FormData) {
  const session = await requireSession();               // auth, every time
  const parsed = ProfileSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: 'Invalid input' };
  // ...
  revalidatePath('/profile');
}
```

---

## Error Handling

- **Expected absence** → `notFound()` from `next/navigation`, rendering the segment's `not-found.tsx`.
- **Unexpected failure** → let it throw. `error.tsx` catches it for the segment; don't wrap every call in a try/catch that returns `null` and renders a blank page.
- **Recoverable, user-facing failure** (a failed mutation) → return an error value from the action and render it in the form. Don't throw for something the user can fix by retyping a field.

`error.tsx` is always a Client Component and always renders a working `reset()` affordance. Never surface the raw `error.message` to the user in production — it's server internals; log it, show something actionable.

### Loading and empty states are part of the feature

Every data-driven view specifies all four states — loading, empty, error, populated. A component that only handles the happy path is not finished.

---

## Type Safety — No `any`

Props are typed inline or with a named type in the same file; `React.FC` is not used. Children are `React.ReactNode`.

```tsx
type ProductCardProps = { product: Product; onSelect?: (id: string) => void; className?: string };

export function ProductCard({ product, onSelect, className }: ProductCardProps) { }
```

- API response shapes are declared once in `types/` (or derived from a schema) and imported — never redeclared per component.
- When a type mirrors a validation schema, derive it: `type Profile = z.infer<typeof ProfileSchema>;`. Parallel hand-written interfaces drift.
- Prefer widening the component (`ComponentProps<'button'>`) over re-listing native attributes.
- No `any`. If a third-party type is genuinely unknown, use `unknown` and narrow at the boundary.

`next dev` will happily run code that `next build` rejects — run the build before calling a non-trivial change done.

---

## Method Parameters — Destructure Past 3

A function taking **more than 3 parameters** receives a single destructured object instead:

```ts
// ✅
async function syncOrder({ order, provider, options, messages }: SyncArgs): Promise<SyncResult> {}

// ❌
async function syncOrder(order: Order, provider: string, options: SyncOptions, messages: string[]) {}
```

Call sites become self-documenting, argument order stops mattering, and adding a parameter doesn't break existing callers. (Component props are already objects — this rule is about plain functions in `lib/` and `hooks/`.)

---

## Next.js Primitives, Not Hand-Rolled Equivalents

| Need | Use | Not |
| --- | --- | --- |
| Internal navigation | `<Link>` from `next/link` | `<a href>` |
| Images | `<Image>` from `next/image` | `<img>` |
| Fonts | `next/font` | a `<link>` to Google Fonts |
| Script tags | `next/script` | manual `<script>` injection |
| Client-side routing | `useRouter` from `next/navigation` | `window.location` |

`<Image>` needs `width`/`height` (or `fill` inside a positioned parent) and remote hosts registered in `next.config.ts` → `images.remotePatterns`.

---

## Accessibility Basics

Not optional, not a follow-up ticket:

- Interactive elements are `<button>` / `<a>`, never a `<div>` with `onClick`.
- Every `<Image>` has `alt` (empty string for decorative images).
- Every form control has an associated `<label>` (or `aria-label`).
- Focus is visible — don't remove the ring without replacing it.
- Color is never the only carrier of meaning.

---

## Testing Conventions _(adopt when needed)_

There is no test runner or `test` script yet. When one is added, tests live next to the source as `<name>.test.tsx` and run one file with `pnpm test -- <name>`.

Test behavior through the rendered output, not implementation details:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('calls onSelect with the product id', async () => {
  const onSelect = jest.fn();
  render(<ProductCard product={product} onSelect={onSelect} />);

  await userEvent.click(screen.getByRole('button', { name: /select/i }));

  expect(onSelect).toHaveBeenCalledWith(product.id);
});
```

- Query priority: `getByRole` → `getByLabelText` → `getByText`. `getByTestId` is the last resort.
- Never assert on Tailwind class names. A restyle is not a regression.
- No snapshot tests of whole components — they fail on every cosmetic change and nobody reads the diff.
- **Async Server Components are not testable with React Testing Library.** Cover them with an e2e test, and unit-test the data function they call.
- Mock the network at the boundary (`lib/api.ts`, or MSW), not by stubbing `global.fetch` in each file.

---

## ESLint Priorities

`pnpm exec eslint .` (there is no `lint` script; config is `eslint-config-next` core-web-vitals + typescript) handles the mechanical parts. `react/no-unescaped-entities` fires on raw quotes in JSX text: `pnpm fix-quotes` rewrites them. Spend attention in this order:

**Address:** `react-hooks/exhaustive-deps` (a stale closure is a real bug), `@next/next/*` rules, unused variables and imports, `any` usage, missing `key` props.

**Ignore unless asked:** formatting (Prettier owns it), import ordering, `jsx-a11y` rules that fire on a correct pattern the rule can't see.

Reach for an `eslint-disable` only when the rule genuinely doesn't apply — and say why on the same line. Silencing `exhaustive-deps` almost always means the effect is wrong; fix the effect.

---

## Running Tests

**Run them** after changes that could affect outcomes, when verifying a fix, or when debugging a failure.

**Don't run them** when the suite just passed with no code change since, repeatedly in succession, or after edits that can't affect any test.

There is no suite yet; until there is, `pnpm exec eslint .` and `pnpm build` are the checks. Run `pnpm build` before declaring a non-trivial change done; it's the only full typecheck.

---

## Git Commits — One Per Phase

During implementation (`ai-skills/implement/SKILL.md`), the user saying "continue" or "go" — the sign-off to start the next phase — is standing authorization to commit the phase that just finished, right before moving on. No need to ask again each time.

- One commit per phase, made right after that phase's success criteria pass and before starting the next phase.
- Stage only the files that phase touched — never `git add -A`.
- Commit message is the phase's heading from the planning doc, verbatim: `Phase <N> — <Title>` (planning docs use `## Phase N — Title`, e.g. `Phase 3 — users module: entity, DTOs, service, controller`).
- Still no `--no-verify`, no `--amend`, no force-push, no pushing — this authorization covers local commits only.

### Corrections or Callouts After a Phase

If the user gives a correction or callout after a phase has landed, that is not covered by the phase's standing "continue"/"go" authorization:

1. Make the correction, then confirm with the user and get explicit confirmation before committing it.
2. If there are more corrections queued, ask before each commit, then continue to the next correction.
3. Once the user says "go" or "continue" again, that re-establishes standing authorization: commit the pending correction and proceed to the next phase.
4. Commit message for a correction: `phase X: <correction>` (lowercase "phase", the phase number, then a short description of what was corrected) — distinct from the `Phase <N> — <Title>` format used for phase commits.

---

## Keeping This Document Current

Update when a new component pattern is established, a recurring mistake is identified, or a convention changes.

**Related:** [REPO_CONTEXT.md](./REPO_CONTEXT.md) — current codebase architecture.
