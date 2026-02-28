# Implementation Plan: Attendance List Page (Dashboard)

**Mockup:** `docs/mockups/attendance.html`  
**Route:** `src/app/(dashboard)/attendance/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Attendance list for admins: filters (date range, department), table of employee attendance. Organism(s) for toolbar and table. Page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/AttendanceToolbar/`, `AttendanceTable/` ✨
- `src/app/(dashboard)/attendance/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup columns and filters.
2. Create organisms; create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
