# Implementation Plan: Employee Edit — Access Section

**Mockup:** `docs/mockups/employees-edit-access.html`  
**Route:** `src/app/(dashboard)/employees/[id]/edit` (tab or segment: access)  
**Template:** DashboardTemplate.

---

## Overview

Access section of employee edit: form for access/permissions (role, permissions toggles, or similar). Use Form* molecules and Controller; organism for section layout and submit. Can be rendered inside employees/[id] edit page when tab = access.

---

## Affected files

- `src/components/organisms/EmployeeEditAccessSection/` ✨
- Page or parent edit layout ✏️ (wire section)
- Organisms barrel ✏️

---

## Pre-implementation decisions

- **Form fields:** Per mockup (e.g. role select, permission checkboxes). All Controller-based.
- **"use client":** Yes.

---

## Steps

1. Audit mockup for exact fields and layout.
2. Create EmployeeEditAccessSection organism; props: defaultValues?, onSubmit.
3. Wire into employee edit page when access tab active.
4. Barrel and story.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller used; semantic tokens
