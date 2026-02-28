# Implementation Plan: Invalid Company / Error Screen

**Mockup:** `docs/mockups/invalid-company.html`  
**Route:** `src/app/(auth)/invalid-company/page.tsx` or error boundary route  
**Template:** Auth layout or minimal centered layout.

---

## Overview

Error or "invalid company" screen: message, optional link to login or support. Minimal layout; no sidebar. Organism for message and CTA; page composes simple layout.

---

## Affected files

- `src/components/organisms/InvalidCompanyScreen/` ✨
- `src/app/(auth)/invalid-company/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup copy and actions.
2. Create InvalidCompanyScreen organism; create page with auth or minimal layout.
3. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
