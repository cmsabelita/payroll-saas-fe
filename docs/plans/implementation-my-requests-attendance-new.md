# Implementation Plan: My Request — New Attendance Correction (Portal)

**Mockup:** `docs/mockups/my-requests-attendance-new.html`  
**Route:** `src/app/(portal)/requests/attendance/new/page.tsx`  
**Template:** PortalTemplate.

---

## Overview

New attendance correction request form. Form organism with Controller; page uses PortalTemplate.

---

## Affected files

- `src/components/organisms/MyRequestAttendanceForm/` ✨
- `src/app/(portal)/requests/attendance/new/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields; create form organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
