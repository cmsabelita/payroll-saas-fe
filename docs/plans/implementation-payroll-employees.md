# Implementation Plan: Payroll Employees (Run) Page

**Mockup:** `docs/mockups/payroll-employees.html`  
**Route:** `src/app/(dashboard)/payroll/[id]/employees/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Employees included in a payroll run: list/table with names, gross, deductions, net, status. Organism for table/list; page loads payroll id and employee list.

---

## Affected files

- `src/components/organisms/PayrollEmployeesTable/` ✨
- `src/app/(dashboard)/payroll/[id]/employees/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup columns.
2. Create table organism; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
