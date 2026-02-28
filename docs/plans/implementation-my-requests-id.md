# Implementation Plan: My Request Detail (Portal)

**Mockup:** `docs/mockups/my-requests-id.html`  
**Route:** `src/app/(portal)/requests/[id]/page.tsx`  
**Template:** PortalTemplate.

---

## Overview

Single request detail: status, details, cancel if pending. Organism(s); page with [id].

---

## Affected files

- `src/components/organisms/MyRequestDetail/` ✨
- `src/app/(portal)/requests/[id]/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
