# Implementation Plan: Attendance Detail (Employee or Day)

**Mockup:** `docs/mockups/attendance-id.html`  
**Route:** `src/app/(dashboard)/attendance/[id]/page.tsx` (or date-based)  
**Template:** DashboardTemplate.

---

## Overview

Attendance detail: single employee or single day breakdown. Organism(s); page with [id].

---

## Affected files

- `src/components/organisms/AttendanceDetailSection/` ✨
- `src/app/(dashboard)/attendance/[id]/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
