# Implementation Plan: Reports — Headcount

**Mockup:** `docs/mockups/reports-headcount.html`  
**Route:** `src/app/(dashboard)/reports/headcount/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Headcount report: filters, table/chart. Organism(s); page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ReportHeadcountSection/` ✨
- `src/app/(dashboard)/reports/headcount/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
