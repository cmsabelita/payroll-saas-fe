# Implementation Plan: Employee Separation Page

**Mockup:** `docs/mockups/employees-separation.html`  
**Route:** `src/app/(dashboard)/employees/[id]/separation/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Separation/offboarding flow: form for separation date, reason, final pay options, etc. Form organism with Controller-based fields. Page under employees/[id]/separation.

---

## Affected files

- `src/components/organisms/EmployeeSeparationForm/` ✨
- `src/app/(dashboard)/employees/[id]/separation/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup form fields.
2. Create EmployeeSeparationForm; create page.
3. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
