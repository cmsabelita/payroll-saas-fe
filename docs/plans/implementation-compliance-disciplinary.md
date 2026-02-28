# Implementation Plan: Compliance — Disciplinary List

**Mockup:** `docs/mockups/compliance-disciplinary.html`  
**Route:** `src/app/(dashboard)/compliance/disciplinary/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Disciplinary records list: toolbar (filters, "New" CTA), table/list of records. Organism(s) for toolbar and table. Page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ComplianceDisciplinaryToolbar/`, `ComplianceDisciplinaryTable/` ✨
- `src/app/(dashboard)/compliance/disciplinary/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup columns and filters.
2. Create organisms; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
