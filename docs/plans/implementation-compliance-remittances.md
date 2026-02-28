# Implementation Plan: Compliance — Remittances List

**Mockup:** `docs/mockups/compliance-remittances.html`  
**Route:** `src/app/(dashboard)/compliance/remittances/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Remittances list: toolbar, table. Organisms; page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ComplianceRemittancesToolbar/`, `ComplianceRemittancesTable/` ✨
- `src/app/(dashboard)/compliance/remittances/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organisms and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
