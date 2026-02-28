# Implementation Plan: Team List Page

**Mockup:** `docs/mockups/team.html`  
**Route:** `src/app/(dashboard)/team/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Team list: toolbar (invite CTA), table of members with roles. Organism(s) for toolbar and table. Page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/TeamToolbar/`, `TeamTable/` ✨
- `src/app/(dashboard)/team/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup columns and actions.
2. Create organisms; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
