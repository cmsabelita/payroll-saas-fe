# Implementation Plan: Portal (Employee) Home Page

**Mockup:** `docs/mockups/portal.html`  
**Route:** `src/app/(portal)/page.tsx` or `src/app/(portal)/dashboard/page.tsx`  
**Template:** New PortalTemplate (topbar only, no sidebar; max-w-5xl content).

---

## Overview

Build the portal home page for the employee role: PortalTopbar (logo, company name, nav: Home, My Payslips, Attendance, Requests with badge), greeting row with date and quick actions (Log Attendance, Apply Leave, File OT), then sections: Latest Payslip card, stats cards, attendance calendar strip, pending requests. Create PortalTemplate and portal-specific organisms/sections; page composes template and content.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/templates/PortalTemplate/PortalTemplate.tsx` | ✨ Create |
| `src/components/templates/PortalTemplate/PortalTemplate.types.ts` | ✨ Create |
| `src/components/templates/PortalTemplate/index.ts` | ✨ Create |
| `src/components/organisms/PortalTopbar/PortalTopbar.tsx` | ✏️ Align with mockup (nav items, badge, avatar) |
| Portal home sections (e.g. PortalGreeting, PortalPayslipCard, PortalStatsStrip, PortalAttendanceStrip, PortalRequestsList) | ✨ Create as organisms |
| `src/app/(portal)/page.tsx` (or dashboard) | ✨ Create |
| Templates barrel | ✏️ |

---

## Pre-implementation decisions

- **PortalTemplate:** Layout: topbar + main scroll; main has max-w-5xl mx-auto px-6. Props: topbar (or slots for logo, nav, trailing), children. No sidebar.
- **PortalTopbar:** Logo, company name, nav links (Home, My Payslips, Attendance, Requests), optional badge on Requests, notification icon, avatar dropdown. Semantic tokens.
- **Sections:** Each major block (greeting + actions, latest payslip, stats, attendance strip, requests) as organism with typed props for data.
- **"use client":** Template no; Topbar/sections yes if interactive (dropdowns, links).

---

## Steps

1. **PortalTemplate** — Create types (props: topbar?, children, className). Implement: header slot or PortalTopbar; main with max-w-5xl and padding.
2. **PortalTopbar** — Ensure exists; add nav items and badge from mockup; use FaIcon or existing Icon; semantic tokens.
3. **Portal section organisms** — Create one by one: greeting row (date, title, quick action buttons); latest payslip card; stats row (e.g. 3 KPI cards); attendance strip (week/day dots); pending requests list. Each with .types.ts and story.
4. **Portal page** — Create (portal) page: PortalTemplate, pass mock data to sections. No inline JSX beyond layout; all content via organisms.
5. **Barrels** — Templates index; organisms index.
6. **Stories** — PortalTemplate, PortalTopbar, each new organism.

---

## Verification checklist

- [ ] `tsc --noEmit`, `npm run lint`, `npm run build` pass
- [ ] Semantic tokens only; no `dark:`; `@/` and `import type`
- [ ] Portal verified in light and dark
