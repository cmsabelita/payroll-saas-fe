# Code Review: `src/components/` (all components)

## Summary

Review of the entire `src/components/` tree (atoms, molecules, organisms, templates) against `docs/prompt/code-review.md`. The codebase is largely consistent with Atomic Design, CVA/cn usage, and theming. **Three blocking issues** involved organisms importing other organisms (composition boundary violations). Several warnings and nits were identified; all [BLOCK] and [WARN] items have been addressed (see Resolution below).

---

## Resolution (lead engineer follow-up)

- **[BLOCK] Organism → organism** — Extracted **AuthCardShell** (molecule) with the same layout API. **AuthFormCard** (organism) now composes `AuthCardShell`. **VerifyEmailScreen**, **ForgotPasswordForm**, and **ResetPasswordForm** import and use `AuthCardShell` from `@/components/molecules/AuthCardShell`, so no organism imports an organism.
- **[WARN] ApprovalsTable.stories** — Replaced `DashboardKpiStrip` with an inline stub built from **KpiCard** (molecule) and a grid div so the story no longer imports an organism.
- **[WARN] Relative imports in atom stories** — StepperDot, DateInput, Input, Textarea, and IconButton stories now import from `@/components/atoms`.
- **[WARN] console.log in stories** — SignupForm, InviteMemberForm, ResetPasswordForm, and ForgotPasswordForm stories now use `onSubmit: () => {}` instead of `console.log`.
- **[NIT] Button forwardRef** — **Button** now uses `forwardRef<HTMLButtonElement, ButtonProps>` and forwards `ref` to the native `<button>`.

Remaining optional nits: AuthFormCard/AuthTabs CVA, controlled-field.types location/docs, PageLayout.stories barrel import.

---

## Findings

### [BLOCK] Organism → organism imports (composition violation) — ✅ Resolved

**VerifyEmailScreen.tsx:4** — Imports `AuthFormCard` from `@/components/organisms/AuthFormCard`.  
**ForgotPasswordForm.tsx:6** — Same.  
**ResetPasswordForm.tsx:6** — Same.

> **Fix applied:** Added molecule **AuthCardShell**; AuthFormCard composes it; the three organisms now use AuthCardShell from `@/components/molecules/AuthCardShell`.

---

### [WARN] Story file: organism importing organism — ✅ Resolved

**ApprovalsTable.stories.tsx:5** — Imports `DashboardKpiStrip` from `@/components/organisms/DashboardKpiStrip` to build story content.

> **Fix applied:** Story now builds the kpi strip from `KpiCard` (molecule) and a grid wrapper; no organism import.

---

### [WARN] Relative imports in atom stories (path alias) — ✅ Resolved

**StepperDot.stories.tsx:3** — `import { StepperConnector } from "../StepperConnector"`.  
**DateInput.stories.tsx:3** — `import { Label } from "../Label"`.  
**Input.stories.tsx:3–5** — `import { Label } from "../Label"`, `"../Icon"`, `"../IconButton"`.  
**Textarea.stories.tsx:3** — `import { Label } from "../Label"`.  
**IconButton.stories.tsx:3** — `import { Icon } from "../Icon"`.

> **Fix applied:** All now use `@/components/atoms` (or the appropriate barrel).

---

### [WARN] console.log in story files — ✅ Resolved

**SignupForm.stories.tsx:30** — `onSubmit: (values) => console.log(values)`.  
**InviteMemberForm.stories.tsx:28** — Same.  
**ResetPasswordForm.stories.tsx:49** — `onSubmit: (password) => console.log("Submit", password)`.  
**ForgotPasswordForm.stories.tsx:49** — `onSubmit: (email) => console.log("Submit", email)`.

> **Fix applied:** Replaced with `onSubmit: () => {}` in all four stories.

---

### [NIT] Button does not use forwardRef — ✅ Resolved

**Button.tsx** — Renders a native `<button>` but does not use `forwardRef`. Form and focus management often need a ref on buttons.

> **Fix applied:** Button now uses `forwardRef<HTMLButtonElement, ButtonProps>` and passes `ref` to the `<button>`.

---

### [NIT] AuthFormCard and layout components without CVA

**AuthFormCard.tsx** — Uses `cn()` with conditionals (`maxWidth === "md"`, `centered`) rather than `cva()`.  
**AuthTabs.tsx** — Uses `cn()` with `appearance === "card" ? "rounded-xl" : "rounded-lg"`.

> If these components are considered variant-based (e.g. `maxWidth`, `appearance`), moving to `cva()` with exported variants would align with the rest of the design system. Optional polish.

---

### [NIT] Shared molecule types file

**molecules/controlled-field.types.ts** — Shared by FormInput, FormSelect, FormTextarea, FormDateInput, FormCheckbox, FormRadioGroup, FormSwitch. Not named after a single component.

> Either document that this is the intended shared-types pattern for form molecules, or move `ControlledFieldProps` to `@/types` (e.g. `@/types/forms.ts`) and import from there for clearer ownership.

---

### [NIT] PageLayout.stories.tsx import from barrel

**PageLayout.stories.tsx:3** — `import { Card, Button } from "@/components"`.

> Valid use of `@/`; for consistency with other stories that import from `@/components/atoms` or `@/components/molecules`, you could use `@/components/atoms` and `@/components/molecules` for clarity. Optional.

---

## What’s in good shape

- **Atoms**: No atom imports from `@/components`; only `@/utils`, `./ComponentName.types`, and theme/CSS. CVA + cn used where variants exist; Button, Input, Select, Textarea, DateInput, Checkbox, Radio use `forwardRef`. Props extend the correct HTML attributes; `size` is omitted on Input/Select where custom size is used.
- **Molecules**: Compose only atoms (and other molecules). No organism imports. **AuthCardShell** provides the shared auth card layout used by AuthFormCard and the auth screen organisms. Types in `.types.ts`; barrels and stories present for the reviewed set.
- **Templates**: PageLayout composes only `Header` (organism); no template→template or inappropriate imports.
- **Theming**: No hardcoded hex/rgb/hsl in component classNames; semantic tokens (e.g. `bg-primary`, `text-muted-foreground`, `border-border`) used. ThemeToggle.module.css uses CSS variables.
- **No raw clsx/classnames or string concatenation** for component root classes; `cn()` is used.
- **No `any`** in the scanned components; type-only imports use `import type` where applicable.
- **"use client"** is used only where hooks, interactivity, or client APIs are needed; placement is correct.
- **Naming**: PascalCase components, camelCase variant exports (e.g. `buttonVariants`), types in `.types.ts` follow the conventions.

---

## Verdict: **APPROVE WITH NITS**

All [BLOCK] and [WARN] items have been resolved. Remaining [NIT] items are optional: AuthFormCard/AuthTabs could use CVA for variant options; controlled-field.types could be documented or moved to `@/types`; PageLayout.stories could import from `@/components/atoms` and `@/components/molecules` for consistency. Safe to merge.
