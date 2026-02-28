# Implementation Plan: Employee Edit — Salary Section

**Mockup:** `docs/mockups/employees-edit-salary.html`  
**Route:** `src/app/(dashboard)/employees/[id]/edit` (tab: salary)  
**Template:** DashboardTemplate.

---

## Overview

Salary section of employee edit: form for salary and compensation. Form* molecules + Controller; organism. Wire into employee edit when tab = salary.

---

## Affected files

- `src/components/organisms/EmployeeEditSalarySection/` ✨
- Edit page ✏️
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields (base pay, allowances, etc.).
2. Create EmployeeEditSalarySection; Controller for all fields.
3. Wire into edit page; barrel and story.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
