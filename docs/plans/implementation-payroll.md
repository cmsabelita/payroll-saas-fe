# Implementation Plan: Payroll List Page

**Mockup:** `docs/mockups/payroll.html`  
**Route:** `src/app/(dashboard)/payroll/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Build the payroll list page: dashboard shell, page title, filters (period, status?), "Run payroll" or "New payroll" CTA, and a list/table of payroll runs (period, status, dates, amount or employee count, actions). Decompose: PayrollToolbar (filters, CTA), PayrollList or PayrollTable organism. Page composes DashboardTemplate and these organisms with typed data.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/organisms/PayrollToolbar/` | ✨ Create |
| `src/components/organisms/PayrollList/` or `PayrollTable/` | ✨ Create |
| `src/app/(dashboard)/payroll/page.tsx` | ✨ Create |
| Organisms barrel | ✏️ |

---

## Pre-implementation decisions

- **Toolbar:** Period picker or dropdown, status filter if in mockup, primary "Run payroll" / "New payroll" button. Semantic tokens.
- **List/Table:** Rows: period label, status badge, date range, amount or count, link/button to detail. Use Badge, Button, Text; table or card list per mockup.
- **"use client":** Yes where state (filters, pagination).

---

## Steps

1. **Audit** — Inspect payroll.html for exact filters, columns, and primary CTA.
2. **PayrollToolbar** — Create organism with filters and CTA; typed props.
3. **PayrollList/Table** — Create organism; accept payroll runs array; render rows with Badge and actions. Types for run shape.
4. **Page** — Create `(dashboard)/payroll/page.tsx`: DashboardTemplate + toolbar + list; mock data.
5. **Barrels + Stories** — Export organisms; stories.
6. **Verification** — Lint, build, Storybook; light/dark.

---

## Verification checklist

- [ ] `tsc --noEmit`, `npm run lint`, `npm run build` pass
- [ ] Semantic tokens only; `@/` and `import type`
- [ ] Stories for new organisms
