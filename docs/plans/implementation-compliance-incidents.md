# Implementation Plan: Compliance — Incidents List

**Mockup:** `docs/mockups/compliance-incidents.html`  
**Route:** `src/app/(dashboard)/compliance/incidents/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Incidents list: toolbar, table. Organisms; page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ComplianceIncidentsToolbar/`, `ComplianceIncidentsTable/` ✨
- `src/app/(dashboard)/compliance/incidents/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organisms and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
