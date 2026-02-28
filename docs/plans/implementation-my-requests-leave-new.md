# Implementation Plan: My Request — New Leave (Portal)

**Mockup:** `docs/mockups/my-requests-leave-new.html`  
**Route:** `src/app/(portal)/requests/leave/new/page.tsx`  
**Template:** PortalTemplate.

---

## Overview

New leave request form. Form organism with Controller; page uses PortalTemplate.

---

## Affected files

- `src/components/organisms/MyRequestLeaveForm/` ✨
- `src/app/(portal)/requests/leave/new/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields; create form organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
