# Implementation Plan: Settings — Holidays

**Mockup:** `docs/mockups/settings-holidays.html`  
**Route:** `src/app/(dashboard)/settings/holidays/page.tsx`  
**Template:** DashboardTemplate; SettingsLayout.

---

## Overview

Holidays list/form: add/edit holidays, list. Organism(s); page composes DashboardTemplate + SettingsLayout.

---

## Affected files

- `src/components/organisms/SettingsHolidaysSection/` ✨
- `src/app/(dashboard)/settings/holidays/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
