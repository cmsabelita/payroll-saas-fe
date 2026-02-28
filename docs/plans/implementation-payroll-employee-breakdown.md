# Implementation Plan: Payroll Employee Breakdown Page

**Mockup:** `docs/mockups/payroll-employee-breakdown.html`  
**Route:** `src/app/(dashboard)/payroll/[id]/employees/[employeeId]/page.tsx` or similar  
**Template:** DashboardTemplate.

---

## Overview

Single employee breakdown within a payroll run: gross, deductions, net, line items. Organism for breakdown display; page with payroll id and employee id.

---

## Affected files

- `src/components/organisms/PayrollEmployeeBreakdown/` ✨
- `src/app/(dashboard)/payroll/[id]/employees/[employeeId]/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup structure.
2. Create organism; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
