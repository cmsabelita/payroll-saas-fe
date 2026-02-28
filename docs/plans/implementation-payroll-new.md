# Implementation Plan: New Payroll Run Page

**Mockup:** `docs/mockups/payroll-new.html`  
**Route:** `src/app/(dashboard)/payroll/new/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

New payroll run: form to select period, employees or filters, and create run. Form organism with Controller; page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/PayrollNewForm/` ✨
- `src/app/(dashboard)/payroll/new/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields (period, options).
2. Create PayrollNewForm; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
