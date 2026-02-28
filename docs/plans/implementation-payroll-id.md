# Implementation Plan: Payroll Run Detail Page

**Mockup:** `docs/mockups/payroll-id.html`  
**Route:** `src/app/(dashboard)/payroll/[id]/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Single payroll run detail: header (period, status), summary (totals, employee count), actions (approve, lock, export), and list or link to payslips/breakdown. Organisms for header, summary, and list. Page loads payroll by id.

---

## Affected files

- `src/components/organisms/PayrollDetailHeader/`, `PayrollDetailSummary/`, `PayrollDetailActions/` ✨
- `src/app/(dashboard)/payroll/[id]/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup sections.
2. Create organisms; create page with [id]. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
