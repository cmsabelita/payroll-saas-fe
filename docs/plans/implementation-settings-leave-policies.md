# Implementation Plan: Settings — Leave Policies

**Mockup:** `docs/mockups/settings-leave-policies.html`  
**Route:** `src/app/(dashboard)/settings/leave-policies/page.tsx`  
**Template:** DashboardTemplate; SettingsLayout.

---

## Overview

Leave policies: list, add/edit form. Organism(s); page composes DashboardTemplate + SettingsLayout.

---

## Affected files

- `src/components/organisms/SettingsLeavePoliciesSection/` ✨
- `src/app/(dashboard)/settings/leave-policies/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
