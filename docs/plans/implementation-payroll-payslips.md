# Implementation Plan: Payroll Payslips Page

**Mockup:** `docs/mockups/payroll-payslips.html`  
**Route:** `src/app/(dashboard)/payroll/[id]/payslips/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Payslips for a payroll run: list or grid of payslip cards/rows with download or view. Organism for payslip list; page under payroll/[id]/payslips.

---

## Affected files

- `src/components/organisms/PayrollPayslipsList/` ✨
- `src/app/(dashboard)/payroll/[id]/payslips/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup layout.
2. Create organism; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
