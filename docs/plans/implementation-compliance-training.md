# Implementation Plan: Compliance — Training List

**Mockup:** `docs/mockups/compliance-training.html`  
**Route:** `src/app/(dashboard)/compliance/training/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Training records list: toolbar, table. Organisms for toolbar and table. Page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ComplianceTrainingToolbar/`, `ComplianceTrainingTable/` ✨
- `src/app/(dashboard)/compliance/training/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organisms and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
