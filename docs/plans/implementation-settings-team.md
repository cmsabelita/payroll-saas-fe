# Implementation Plan: Settings — Team

**Mockup:** `docs/mockups/settings-team.html`  
**Route:** `src/app/(dashboard)/settings/team/page.tsx`  
**Template:** DashboardTemplate; SettingsLayout.

---

## Overview

Team settings: list of team members, roles, invite CTA. Organism(s) for list and optional invite modal/section. Page composes DashboardTemplate + SettingsLayout.

---

## Affected files

- `src/components/organisms/SettingsTeamList/` or similar ✨
- `src/app/(dashboard)/settings/team/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
