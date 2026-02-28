# Implementation Plan: Employee Edit — Employment Section

**Mockup:** `docs/mockups/employees-edit-employment.html`  
**Route:** `src/app/(dashboard)/employees/[id]/edit` (tab: employment)  
**Template:** DashboardTemplate.

---

## Overview

Employment section: form for hire date, department, position, employment type, etc. Form* molecules + Controller; organism. Wire into employee edit when tab = employment.

---

## Affected files

- `src/components/organisms/EmployeeEditEmploymentSection/` ✨
- Edit page ✏️
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields.
2. Create EmployeeEditEmploymentSection; Controller for all fields.
3. Wire into edit page; barrel and story.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
