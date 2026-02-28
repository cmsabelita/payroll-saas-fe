# Implementation Plan: Reports Hub Page

**Mockup:** `docs/mockups/reports.html`  
**Route:** `src/app/(dashboard)/reports/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Reports hub: page title and grid of report categories (payroll, attendance, leave, government, headcount, etc.). Reuse ReportCategoryGrid pattern if exists; else create organism. Page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ReportCategoryGrid/` (or create) ✨
- `src/app/(dashboard)/reports/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup categories.
2. Create or reuse grid organism; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
