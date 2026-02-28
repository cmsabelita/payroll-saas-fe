# Implementation Plan: Employee Salary Page

**Mockup:** `docs/mockups/employees-salary.html`  
**Route:** `src/app/(dashboard)/employees/[id]/salary/page.tsx` or salary tab  
**Template:** DashboardTemplate.

---

## Overview

Employee salary view/edit: salary breakdown, allowances, deductions, history or summary. Organism(s) for salary display and optional edit form. Page under employees/[id] or as tab.

---

## Affected files

- `src/components/organisms/EmployeeSalarySection/` or similar ✨
- `src/app/(dashboard)/employees/[id]/salary/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup layout and fields.
2. Create salary organism(s); page with DashboardTemplate.
3. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
