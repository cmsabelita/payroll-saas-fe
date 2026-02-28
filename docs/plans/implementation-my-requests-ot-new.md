# Implementation Plan: My Request — New OT (Portal)

**Mockup:** `docs/mockups/my-requests-ot-new.html`  
**Route:** `src/app/(portal)/requests/ot/new/page.tsx`  
**Template:** PortalTemplate.

---

## Overview

New OT request form. Form organism with Controller; page uses PortalTemplate.

---

## Affected files

- `src/components/organisms/MyRequestOtForm/` ✨
- `src/app/(portal)/requests/ot/new/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields; create form organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
