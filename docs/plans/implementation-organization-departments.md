# Implementation Plan: Organization — Departments

**Mockup:** `docs/mockups/organization-departments.html`  
**Route:** `src/app/(dashboard)/organization/departments/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Departments list: toolbar (add CTA), table or tree. Organism(s); page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/OrganizationDepartmentsSection/` ✨
- `src/app/(dashboard)/organization/departments/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
