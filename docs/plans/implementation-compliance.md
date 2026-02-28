# Implementation Plan: Compliance Hub Page

**Mockup:** `docs/mockups/compliance.html`  
**Route:** `src/app/(dashboard)/compliance/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Compliance hub: dashboard shell, page title, and grid or list of compliance categories (disciplinary, training, incidents, remittances, BIR, alphalist, etc.) with links to sub-pages. Organism for category grid/cards. Page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ComplianceCategoryGrid/` or reuse ReportCategoryGrid pattern ✨
- `src/app/(dashboard)/compliance/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup categories and layout.
2. Create or reuse grid organism; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
