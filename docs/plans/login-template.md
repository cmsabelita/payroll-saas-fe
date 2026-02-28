# Login Template — Implementation Plan

**Mockup:** `docs/mockups/login.html`  
**Template:** `src/components/templates/LoginTemplate/`  
**Route (out of scope for this plan):** `src/app/(auth)/login/page.tsx` (wire in a follow-up)

---

## Overview

Build a **LoginTemplate** that implements the two-panel login layout from the mockup: a fixed-width left column for the auth form (logo, back link, heading, tabs, form content, footer) and a flexible right column for branding (gradient, grid, optional floating cards and tagline). The template is layout-only and accepts ReactNode slots; it does not render form fields or buttons. A **LoginBrandingPanel** organism is included so the login page can match the mockup’s right column (grid, glow, icon, tagline, pagination dots) using existing `.auth-branding-*` classes from `globals.css`.

---

## Affected Files

| File | Action |
|------|--------|
| `src/components/templates/LoginTemplate/LoginTemplate.types.ts` | ✨ Create |
| `src/components/templates/LoginTemplate/LoginTemplate.tsx` | ✨ Create |
| `src/components/templates/LoginTemplate/index.ts` | ✨ Create |
| `src/components/templates/LoginTemplate/LoginTemplate.stories.tsx` | ✨ Create |
| `src/components/templates/index.ts` | ✏️ Modify |
| `src/components/organisms/LoginBrandingPanel/LoginBrandingPanel.types.ts` | ✨ Create |
| `src/components/organisms/LoginBrandingPanel/LoginBrandingPanel.tsx` | ✨ Create |
| `src/components/organisms/LoginBrandingPanel/index.ts` | ✨ Create |
| `src/components/organisms/index.ts` | ✏️ Modify |

---

## Pre-implementation Decisions

- **Template name:** `LoginTemplate` (folder `LoginTemplate/`).
- **Layout:** Outer wrapper centers the card on the page (`min-h-screen`, `flex`, `items-center`, `justify-center`, `p-6`, `bg-muted`). Card: `max-w-[940px]`, `w-full`, `min-h-[580px]`, `bg-background`, `rounded-2xl`, `shadow-xl`, `overflow-hidden`, `flex` (row). Left panel: `w-[440px]` (or `max-w-[440px]` + `shrink-0`), `flex flex-col`, `p-11`. Right panel: `flex-1`, `relative`, `overflow-hidden`, `flex flex-col items-center justify-end`, `pb-10`.
- **Slots (all optional except children if we require main content):** `logo`, `backLink`, `headingBlock`, `tabBlock`, `children`, `footer`, `brandingPanel`. All `ReactNode`; no default content inside the template except the right-panel wrapper when `brandingPanel` is provided.
- **Tokens:** Use only semantic tokens: `bg-muted`, `bg-background`, `text-foreground`, `text-muted-foreground`, etc. No hardcoded hex/rgb in template or organism. Right-panel gradient/grid/glow use existing `globals.css` classes `.auth-branding-panel`, `.auth-branding-grid`, `.auth-branding-glow`.
- **forwardRef:** No — layout wrapper only.
- **"use client":** No for both template and LoginBrandingPanel (no hooks or event handlers).
- **Organism LoginBrandingPanel:** Renders the right-column content from the mockup: wrapper with auth-branding classes, grid overlay, radial glow, optional floating cards area, app icon, tagline, pagination dots. Props: `taglineTitle`, `taglineHighlight`, `taglineSubtitle` (strings), optional `floatingCards?: ReactNode` for future payslip cards. Dots: 4 dots, first active (semantic tokens for active/inactive).

---

## Steps

### Step 1 — Define LoginTemplate types

**File:** `src/components/templates/LoginTemplate/LoginTemplate.types.ts`  
**Action:** Create

- Import: `import type { ReactNode } from "react";`
- Define `LoginTemplateProps`:
  - `logo?: ReactNode`
  - `backLink?: ReactNode`
  - `headingBlock?: ReactNode`
  - `tabBlock?: ReactNode`
  - `children: ReactNode` (main form content)
  - `footer?: ReactNode`
  - `brandingPanel?: ReactNode` (right column content; when present, render inside the right-panel wrapper)
  - `className?: string`
- No variant types; no CVA in the template.

Lint/type note: Use `import type { ReactNode } from "react"` for type-only import.

---

### Step 2 — Implement LoginTemplate

**File:** `src/components/templates/LoginTemplate/LoginTemplate.tsx`  
**Action:** Create

- Imports: `cn` from `@/utils`, `type { LoginTemplateProps }` from `./LoginTemplate.types`.
- Root: single `<div>` with `cn("min-h-screen flex items-center justify-center p-6 bg-muted", className)`.
- Inner card: `<div className="w-full max-w-[940px] min-h-[580px] bg-background rounded-2xl shadow-xl overflow-hidden flex">`.
- Left panel: `<div className="w-[440px] shrink-0 flex flex-col p-11">`.
  - Top: flex row `items-center justify-between mb-9` — render `logo` (left) and `backLink` (right) when present.
  - Heading: `headingBlock` in a wrapper `mb-7` when present.
  - Tabs: `tabBlock` in a wrapper `mb-7` when present.
  - Main: `children` in a wrapper with `flex-1` (e.g. `<div className="flex-1">{children}</div>`).
  - Footer: `footer` in `mt-auto pt-8` when present.
- Right panel: only render when `brandingPanel != null`: `<div className="flex-1 relative overflow-hidden flex flex-col items-center justify-end pb-10">{brandingPanel}</div>`.
- Use semantic Tailwind classes only; no hex/rgb in classNames.
- Export named function `LoginTemplate`; no `forwardRef`, no `"use client"`.

Lint/type note: Destructure all props explicitly; do not pass invalid DOM props to the root div (only `className` and `children`/slots).

---

### Step 3 — LoginTemplate barrel

**File:** `src/components/templates/LoginTemplate/index.ts`  
**Action:** Create

```ts
export { LoginTemplate } from "./LoginTemplate";
export type { LoginTemplateProps } from "./LoginTemplate.types";
```

---

### Step 4 — Define LoginBrandingPanel types

**File:** `src/components/organisms/LoginBrandingPanel/LoginBrandingPanel.types.ts`  
**Action:** Create

- `import type { ReactNode } from "react";`
- `LoginBrandingPanelProps`:
  - `taglineTitle: string` (e.g. "Philippine Payroll,")
  - `taglineHighlight: string` (e.g. "Simplified.")
  - `taglineSubtitle: string` (e.g. "Automate payroll, BIR compliance…")
  - `floatingCards?: ReactNode` (optional; for future payslip cards)
  - `className?: string`
- No variants.

---

### Step 5 — Implement LoginBrandingPanel

**File:** `src/components/organisms/LoginBrandingPanel/LoginBrandingPanel.tsx`  
**Action:** Create

- Structure (match mockup):
  - Outer: `className={cn("absolute inset-0 flex flex-col items-center justify-end pb-10", "auth-branding-panel", className)}` (use existing `.auth-branding-panel` from `globals.css`).
  - Grid overlay: `<div className="absolute inset-0 auth-branding-grid" />`.
  - Radial glow: `<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full auth-branding-glow" />`.
  - Floating cards slot: when `floatingCards` is present, render in absolute container (e.g. `top-8 left-0 right-0 flex justify-center pointer-events-none`) so story or page can inject cards later.
  - App icon: centered, `relative z-10`, `w-14 h-14`, `rounded-2xl`, `bg-primary`, `flex items-center justify-center`, `mb-5`, `shadow-xl`. Use a simple SVG or existing Icon/atoms if available (Payro dollar/circle icon from mockup).
  - Tagline: `relative z-10 text-center px-10` — `taglineTitle` + line break + `taglineHighlight` (styled with `text-primary`), then `taglineSubtitle` with muted text (e.g. `text-white/55` or semantic muted-on-dark if available). Use semantic tokens; avoid hardcoded hex.
  - Pagination dots: 4 dots, first active (`bg-primary` or `bg-white`), others muted; `gap-2`, `mt-7`, `relative z-10`.
- Export named function `LoginBrandingPanel`; no `"use client"`.

Lint/type note: If using custom class names like `auth-branding-panel`, ensure they are defined in `globals.css` (already present). Do not add inline styles for gradient; use the class.

---

### Step 6 — LoginBrandingPanel barrel and organism index

**File:** `src/components/organisms/LoginBrandingPanel/index.ts`  
**Action:** Create

```ts
export { LoginBrandingPanel } from "./LoginBrandingPanel";
export type { LoginBrandingPanelProps } from "./LoginBrandingPanel.types";
```

**File:** `src/components/organisms/index.ts`  
**Action:** Modify — add export for `LoginBrandingPanel` and `LoginBrandingPanelProps` in alphabetical order. Do not rewrite the file; insert only.

---

### Step 7 — LoginTemplate Storybook

**File:** `src/components/templates/LoginTemplate/LoginTemplate.stories.tsx`  
**Action:** Create

- `meta.title`: `"Templates/LoginTemplate"`
- `tags: ["autodocs"]`
- `parameters.layout`: `"fullscreen"` (so two-panel layout is visible)
- Stories:
  - **Default:** Minimal: `children` only (e.g. a placeholder paragraph). No logo, backLink, heading, tabs, footer, brandingPanel.
  - **WithLeftContent:** Pass placeholder `logo`, `backLink`, `headingBlock`, `tabBlock`, `children`, `footer` (e.g. "Payro" text, "Back to home", "Welcome to Payro", two fake tabs, form placeholder, copyright text).
  - **WithBranding:** Same left content as above + `brandingPanel={<LoginBrandingPanel ... />}` (import from `@/components/organisms`). Ensures template and branding panel integrate correctly.

Lint/type note: Implement Steps 4–6 (LoginBrandingPanel) before this step so the story can import the organism.

---

### Step 8 — Register LoginTemplate in templates barrel

**File:** `src/components/templates/index.ts`  
**Action:** Modify — add:

```ts
export { LoginTemplate } from "./LoginTemplate";
export type { LoginTemplateProps } from "./LoginTemplate";
```

Add in alphabetical order (after existing `PageLayout` exports). Do not remove existing exports.

---

## Token and Class Reference (mockup → implementation)

| Mockup | Implementation |
|--------|----------------|
| `bg-gray-100` (page) | `bg-muted` |
| Card `bg-white` | `bg-background` |
| Left panel text gray-900 | `text-foreground` |
| Subtitle / hints gray-500 | `text-muted-foreground` |
| Primary green `#3ECF8E` | `bg-primary`, `text-primary` |
| Right panel gradient | `.auth-branding-panel` (globals.css) |
| Grid overlay | `.auth-branding-grid` |
| Radial glow | `.auth-branding-glow` |
| Tab active (white bg) | `bg-background`, `shadow`, `text-foreground` |
| Tab inactive | `text-muted-foreground` |

---

## Verification Checklist

Before opening a PR, confirm:

- [ ] `tsc --noEmit` — no TypeScript errors
- [ ] `npm run lint` — no ESLint errors or warnings
- [ ] `npm run build` — clean build
- [ ] `npm run storybook` — LoginTemplate and LoginBrandingPanel stories render without console errors
- [ ] No hardcoded hex/rgb/hsl in template or organism classNames (use semantic tokens or globals.css classes)
- [ ] All imports use `@/` path alias
- [ ] `import type` for all type-only imports
- [ ] `"use client"` not used in LoginTemplate or LoginBrandingPanel
- [ ] Barrels updated: `templates/index.ts`, `organisms/index.ts`
- [ ] Composition: LoginTemplate uses only layout divs and slots; LoginBrandingPanel composes only atoms/molecules (e.g. Text, Icon if used) or plain divs/SVG

---

## Optional Follow-up

- Add `src/app/(auth)/login/page.tsx` that uses `LoginTemplate` with `LoginBrandingPanel` and form molecules/atoms (e.g. AuthCardShell or custom form) to complete the login page.
- Add floating payslip cards to LoginBrandingPanel via `floatingCards` slot and a small molecule for the card content.
