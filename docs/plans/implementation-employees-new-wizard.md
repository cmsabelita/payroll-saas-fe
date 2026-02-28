# Implementation Plan: Add Employee Wizard (Steps 1–7)

**Mockups:** `docs/mockups/employees-new.html`, `employees-new-2.html` … `employees-new-7.html`  
**Route:** `src/app/(dashboard)/employees/new/page.tsx`  
**Template:** DashboardTemplate; wizard content in main.

---

## Overview

Build the multi-step "Add employee" wizard: dashboard shell, stepper (steps 1–7), and step content panels. Each mockup is one step. Create a wizard template or organism that manages step index and renders the correct form/section; each step can be an organism (e.g. EmployeeWizardStepBasic, EmployeeWizardStepEmployment, …) or one EmployeeNewWizard organism with step content as children/slots. Page composes DashboardTemplate and wizard; wizard state (current step, form data) via React state or MobX.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/organisms/EmployeeNewWizard/` (stepper + step content) | ✨ Create |
| Step-specific organisms or wizard step content components | ✨ Create (one per step or one wizard with 7 sections) |
| `src/app/(dashboard)/employees/new/page.tsx` | ✨ Create |
| StepperDot / Stepper (molecule or atom) | Use existing or ✨ |
| Organisms barrel | ✏️ |

---

## Pre-implementation decisions

- **Wizard state:** Current step (1–7), form data (aggregate of all steps). useReducer or useState in page or in EmployeeNewWizard; optional MobX store for cross-step data.
- **Stepper UI:** Horizontal stepper with 7 dots or labels; current step highlighted; optional "Back" / "Next" / "Submit" in footer. Use existing StepperDot if present.
- **Step content:** Per mockup: basic info, employment details, gov IDs, salary, tax, access, review. Each step = form (react-hook-form) or display; use Form* molecules and Controller.
- **"use client":** Yes (wizard and page).

---

## Steps

1. **Map steps** — List each of employees-new.html through employees-new-7.html: title and fields per step. Document in plan or in component types.
2. **Stepper** — Reuse or create Stepper molecule: steps array, currentIndex, onStepClick? (optional). Semantic tokens.
3. **EmployeeNewWizard** — Create organism: stepper at top; step content below; footer with Back/Next/Submit. Props: initialStep?, onSubmit (aggregate data). Internal state for step and form values.
4. **Step content** — For each step 1–7, create an organism or a section component with form fields matching mockup. Use FormInput, FormSelect, FormDateInput, etc.; Controller for all.
5. **Page** — Create `(dashboard)/employees/new/page.tsx`: DashboardTemplate + EmployeeNewWizard. onSubmit can log or redirect to employees list.
6. **Barrels + Stories** — Export wizard and step components; story per step or one wizard story.
7. **Verification** — Lint, build; navigate steps; submit with validation.

---

## Verification checklist

- [ ] `tsc --noEmit`, `npm run lint`, `npm run build` pass
- [ ] All form fields use Controller; semantic tokens; `@/` and `import type`
- [ ] All 7 steps render and navigate correctly
