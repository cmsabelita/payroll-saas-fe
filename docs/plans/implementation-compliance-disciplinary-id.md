# Implementation Plan: Compliance — Disciplinary Record Detail

**Mockup:** `docs/mockups/compliance-disciplinary-id.html`  
**Route:** `src/app/(dashboard)/compliance/disciplinary/[id]/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Single disciplinary record detail: header, summary, actions. Organism(s) for detail view. Page with [id].

---

## Affected files

- `src/components/organisms/ComplianceDisciplinaryDetail/` ✨
- `src/app/(dashboard)/compliance/disciplinary/[id]/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup layout.
2. Create organism; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
