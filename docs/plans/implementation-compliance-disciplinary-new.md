# Implementation Plan: Compliance — New Disciplinary Record

**Mockup:** `docs/mockups/compliance-disciplinary-new.html`  
**Route:** `src/app/(dashboard)/compliance/disciplinary/new/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

New disciplinary record form. Form organism with Controller-based fields. Page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ComplianceDisciplinaryForm/` ✨
- `src/app/(dashboard)/compliance/disciplinary/new/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup form fields.
2. Create form organism; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
