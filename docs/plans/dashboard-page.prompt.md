# Prompt — Implement Dashboard Page

## Role

You are the **lead frontend engineer** on a Philippine payroll SaaS product called **Payro**. You are responsible for implementation quality: correct Atomic Design composition, strict TypeScript, zero linter/formatter errors, and full alignment with the project's theming and coding standards. You enforce these standards as strictly for your own code as you do in code reviews.

---

## Task

Implement the dashboard page exactly as described in `docs/plans/dashboard-page.md`, using the mockup at `docs/mockups/dashboard.html` as the visual reference. The implementation covers:

1. A new `DashboardTemplate` in `src/components/templates/DashboardTemplate/`
2. Two new organisms: `PayrollTrendChart` and `AlertsDeadlines` in `src/components/organisms/`
3. The dashboard page at `src/app/(dashboard)/dashboard/page.tsx`
4. Updating the barrel exports in `src/components/templates/index.ts` and `src/components/organisms/index.ts`

**Read the plan fully before writing a single line of code.** Understand every prop, every file, and the exact layout described before starting.

---

## Project context

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, MobX + mobx-react-lite
- **Font:** DM Sans (body). Loaded via Google Fonts in `layout.tsx`.
- **Theme:** Design tokens in `src/config/theme.ts` → `src/app/theme-variables.css`. All CSS variables are available via `@theme inline` in `globals.css`. Always use semantic tokens (`bg-primary`, `text-muted-foreground`, `border-border`, `bg-muted`, etc.) — **never** hardcode hex, rgb, or hsl values in component classNames.
- **Path alias:** `@/` maps to `src/`. Use for all imports.
- **Class merging:** Always use `cn()` from `@/utils` (clsx + tailwind-merge). Never concatenate class strings manually.
- **Variant APIs:** Use `cva()` for any component that has variants. Export the variants function (e.g. `dashboardTemplateVariants`) alongside the component if variants exist.
- **Component structure:** Each component lives in its own folder:
  ```
  ComponentName/
    ComponentName.tsx
    ComponentName.types.ts
    index.ts            ← re-exports everything from .tsx and .types.ts
  ```

---

## Atomic Design composition rules — non-negotiable

These are **hard rules**. Violating them is a blocking issue (see `docs/code-review-components.md`):

| Layer | May import from |
|---|---|
| Atoms | Nothing from `@/components` |
| Molecules | Atoms only |
| Organisms | Atoms + Molecules only. **Never import another organism.** |
| Templates | Organisms + Molecules + Atoms |
| Pages (`app/**/page.tsx`) | Templates + Organisms + Molecules + Atoms |

If you find yourself importing an organism inside another organism, **stop and refactor**. Move the composition to the template or page level.

---

## TypeScript standards

- All component files use `.tsx`.
- All props live in the sibling `.types.ts` file — not inline in `.tsx`.
- Use `import type` for type-only imports: `import type { Foo } from "./Foo.types"`.
- No `any`. No `as any`. No `// @ts-ignore`. If you're unsure of a type, use a union or generic.
- Props that accept `ReactNode` (icon slots, badge slots, children) must type them as `React.ReactNode`.
- Props that are optional use `?`. Props that are always required do not.
- Extend from HTML element attribute types where applicable (e.g. `React.HTMLAttributes<HTMLDivElement>`), omitting conflicting props.

---

## "use client" directive

- Add `"use client"` only when the component uses React hooks, browser APIs, or event handlers.
- Templates that just compose other `"use client"` components do **not** need `"use client"` themselves unless they use hooks.
- Pages in the App Router are Server Components by default. Only add `"use client"` if needed.

---

## Coding standards checklist

Before considering any file done, verify:

- [ ] No hardcoded color values (hex/rgb/hsl) in JSX classNames — use semantic Tailwind tokens
- [ ] All imports use `@/` alias — no relative `../` imports between components
- [ ] `import type` used for all type-only imports
- [ ] Props are in a `.types.ts` file — nothing defined inline in `.tsx`
- [ ] `cn()` used wherever classes are merged or conditionally applied
- [ ] `"use client"` present only when actually needed
- [ ] No `console.log` anywhere
- [ ] No unused imports, variables, or types
- [ ] Each new component has an `index.ts` that re-exports the component and its types
- [ ] Each new barrel export added to the layer's `index.ts`
- [ ] No organism imports another organism
- [ ] All new SVG icons follow the pattern from the mockup: `fill="none" stroke="currentColor"` with `strokeWidth="1.75"`, `w-4 h-4` for nav, `w-5 h-5` for KPI card icons
- [ ] The `PayrollTrendChart` uses **no external chart library** — pure CSS flex layout (as the mockup uses)

---

## Linting & formatting

After implementing, run these commands in order and fix every error before declaring the work done:

```bash
npm run lint          # ESLint — zero errors, zero warnings
npm run build         # Next.js production build — zero type errors, zero build errors
```

If lint auto-fixable issues remain, fix them manually — do not suppress with `eslint-disable` unless there is a documented unavoidable reason.

---

## Visual fidelity

Match the mockup faithfully. Key measurements from `docs/mockups/dashboard.html`:

| Element | Value |
|---|---|
| Sidebar width | `w-[232px]` |
| Topbar height | `h-14` |
| Page padding | `p-6` |
| KPI grid gap | `gap-4` |
| Chart row | `grid-cols-3 gap-4` — chart is `col-span-2`, payroll status is `col-span-1` |
| Bottom row | `grid-cols-2 gap-4` — approvals left, alerts right |
| Card internal padding | `p-5` |
| Bar chart area | `height: 130px` outer, `height: 110px` bar container; current bar area is `90px` (label above takes space) |
| Current bar shadow | `box-shadow: 0 4px 12px rgba(62,207,142,0.35)` — use inline style for this only |
| Primary green | `#3ECF8E` → use `bg-primary` / `text-primary` via CSS variable |

---

## Implementation order

Follow this order — each step is independently testable:

**Step 1 — DashboardTemplate**
- Create `src/components/templates/DashboardTemplate/DashboardTemplate.types.ts` first
- Then `DashboardTemplate.tsx`
- Then `index.ts`
- Then add export to `src/components/templates/index.ts`
- Verify: import it in a scratch file and check TypeScript resolves correctly

**Step 2 — PayrollTrendChart organism**
- Types first, then component, then index
- The bar chart is pure Tailwind flex + inline `height` percentage style
- The current month gets a green label above it, glow shadow, and bold label below
- Add to `src/components/organisms/index.ts`

**Step 3 — AlertsDeadlines organism**
- Wraps `AlertBanner` molecules in a `Surface` with a title and `space-y-2.5` list
- Add to `src/components/organisms/index.ts`

**Step 4 — Dashboard page**
- `src/app/(dashboard)/dashboard/page.tsx`
- Define sidebar nav, KPI items, payroll status rows, pending approval rows, and alert items as constants above the component
- Inline the Payroll Status panel and Pending Approvals panel in the page (no new organisms)
- Wire in `DashboardTemplate` with all required props

---

## What you must NOT do

- Do not install new npm packages. No chart libraries, no icon libraries.
- Do not create a Storybook story file unless explicitly asked.
- Do not modify any existing component files unless they are the two barrel `index.ts` files.
- Do not add comments that explain obvious code. Only add a comment when the logic is genuinely non-obvious.
- Do not add `// TODO`, `// FIXME`, or placeholder text in committed code.
- Do not use `any`, `unknown` without narrowing, or `as` type assertions unless strictly necessary and documented.
- Do not skip `import type` for type-only symbols.
- Do not hardcode dates, user names, or amounts as magic strings buried inside JSX — define them as named constants at the top of the file.

---

## Deliverables

When done, the following files must exist and pass `npm run lint` + `npm run build` with zero errors:

```
src/components/templates/DashboardTemplate/
  DashboardTemplate.tsx          ← "use client" only if hooks needed
  DashboardTemplate.types.ts
  index.ts

src/components/organisms/PayrollTrendChart/
  PayrollTrendChart.tsx          ← "use client" not needed (pure render)
  PayrollTrendChart.types.ts
  index.ts

src/components/organisms/AlertsDeadlines/
  AlertsDeadlines.tsx            ← "use client" not needed
  AlertsDeadlines.types.ts
  index.ts

src/app/(dashboard)/dashboard/
  page.tsx                       ← "use client" only if event handlers needed

src/components/templates/index.ts   ← updated
src/components/organisms/index.ts   ← updated
```
