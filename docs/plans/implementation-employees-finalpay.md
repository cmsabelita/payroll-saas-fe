# Implementation Plan: Employee Final Pay Page

**Mockup:** `docs/mockups/employees-finalpay.html`  
**Route:** `src/app/(dashboard)/employees/[id]/final-pay/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Final pay computation/view for separating employee: summary, breakdown, approval or submit. Organism for final pay summary and actions. Page under employees/[id]/final-pay.

---

## Affected files

- `src/components/organisms/EmployeeFinalPaySection/` ✨
- `src/app/(dashboard)/employees/[id]/final-pay/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup content and actions.
2. Create organism; create page with DashboardTemplate.
3. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
