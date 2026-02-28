# Implementation Plan: Employee Edit — Gov IDs Section

**Mockup:** `docs/mockups/employees-edit-govids.html`  
**Route:** `src/app/(dashboard)/employees/[id]/edit` (tab: gov ids)  
**Template:** DashboardTemplate.

---

## Overview

Government IDs section: form for SSS, PhilHealth, HDMF, etc. Form* molecules + Controller; organism. Wire into employee edit when tab = govids.

---

## Affected files

- `src/components/organisms/EmployeeEditGovIdsSection/` ✨
- Edit page ✏️
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields.
2. Create EmployeeEditGovIdsSection; Controller for all fields.
3. Wire into edit page; barrel and story.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
