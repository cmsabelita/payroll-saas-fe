# Implementation Plan: Payroll Adjust Page

**Mockup:** `docs/mockups/payroll-adjust.html`  
**Route:** `src/app/(dashboard)/payroll/[id]/adjust/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Payroll adjustments: form or list to add one-off adjustments (bonus, deduction, etc.) to a run. Form organism with Controller; page under payroll/[id]/adjust.

---

## Affected files

- `src/components/organisms/PayrollAdjustForm/` or `PayrollAdjustList/` ✨
- `src/app/(dashboard)/payroll/[id]/adjust/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields/UI.
2. Create organism; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
