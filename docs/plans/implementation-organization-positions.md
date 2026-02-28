# Implementation Plan: Organization — Positions

**Mockup:** `docs/mockups/organization-positions.html`  
**Route:** `src/app/(dashboard)/organization/positions/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Positions list: toolbar (add CTA), table. Organism(s); page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/OrganizationPositionsSection/` ✨
- `src/app/(dashboard)/organization/positions/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
