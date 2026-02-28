# Implementation Plan: My Payslips (Portal)

**Mockup:** `docs/mockups/my-payslips.html`  
**Route:** `src/app/(portal)/payslips/page.tsx`  
**Template:** PortalTemplate.

---

## Overview

Employee payslips list: filters (period), list of payslip cards with download/view. Organism(s); page uses PortalTemplate.

---

## Affected files

- `src/components/organisms/MyPayslipsList/` ✨
- `src/app/(portal)/payslips/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup layout; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
