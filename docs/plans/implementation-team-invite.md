# Implementation Plan: Team Invite Page

**Mockup:** `docs/mockups/team-invite.html`  
**Route:** `src/app/(dashboard)/team/invite/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Invite team member: form (email, role). Form organism; page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/TeamInviteForm/` ✨
- `src/app/(dashboard)/team/invite/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields; create form organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
