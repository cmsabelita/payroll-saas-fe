# Implementation Plan: Employee Profile (View) Page

**Mockup:** `docs/mockups/employees-profile.html`  
**Route:** `src/app/(dashboard)/employees/[id]/page.tsx` (view mode)  
**Template:** DashboardTemplate.

---

## Overview

Employee profile view: header (name, avatar, role), sections (contact, employment, salary summary, documents, etc.) in read-only or card layout. Decompose: EmployeeProfileHeader, EmployeeProfileSections (or one organism per section). Page loads employee by id and passes to organisms.

---

## Affected files

- `src/components/organisms/EmployeeProfileHeader/` ✨
- `src/components/organisms/EmployeeProfileContent/` or section organisms ✨
- `src/app/(dashboard)/employees/[id]/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup sections and fields.
2. Create header and content organisms; typed props for employee.
3. Create page; mock or fetch employee by id.
4. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens; @/ and import type
