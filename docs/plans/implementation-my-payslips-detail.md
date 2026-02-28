# Implementation Plan: My Payslip Detail (Portal)

**Mockup:** `docs/mockups/my-payslips-detail.html`  
**Route:** `src/app/(portal)/payslips/[id]/page.tsx`  
**Template:** PortalTemplate.

---

## Overview

Single payslip detail view for employee: breakdown, download. Organism(s); page with [id].

---

## Affected files

- `src/components/organisms/MyPayslipDetail/` ✨
- `src/app/(portal)/payslips/[id]/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
