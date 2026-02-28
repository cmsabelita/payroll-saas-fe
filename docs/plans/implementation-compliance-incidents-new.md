# Implementation Plan: Compliance — New Incident

**Mockup:** `docs/mockups/compliance-incidents-new.html`  
**Route:** `src/app/(dashboard)/compliance/incidents/new/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

New incident form. Form organism; page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ComplianceIncidentForm/` ✨
- `src/app/(dashboard)/compliance/incidents/new/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields; create form organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
