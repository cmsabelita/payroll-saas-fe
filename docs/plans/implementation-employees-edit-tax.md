# Implementation Plan: Employee Edit — Tax Section

**Mockup:** `docs/mockups/employees-edit-tax.html`  
**Route:** `src/app/(dashboard)/employees/[id]/edit` (tab: tax)  
**Template:** DashboardTemplate.

---

## Overview

Tax section of employee edit: form for tax info (e.g. TIN, tax status, exemptions). Use Form* molecules and Controller; organism for section. Wire into employee edit when tab = tax.

---

## Affected files

- `src/components/organisms/EmployeeEditTaxSection/` ✨
- Edit page/layout ✏️
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields.
2. Create EmployeeEditTaxSection with Controller-based fields.
3. Wire into edit page; barrel and story.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
