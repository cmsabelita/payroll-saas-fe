# Portal Pages — Evaluation: Why Payslips, Attendance, Requests, Profile Are Not Full Pages

## Summary

**We do have routes and shells for all portal pages**, but **only the portal home has real content**. The four main portal pages (Payslips, Attendance, Requests, Profile) are **placeholder implementations**: they render the correct layout (PortalTemplate + PortalTopbar) and the topbar nav links work, but the **main content is a single line of text** instead of the UIs defined in `docs/mockups/`.

---

## What Exists Today

| Route | Status | Notes |
|-------|--------|--------|
| `/portal` | ✅ Full page | PortalShell, PortalGreeting, PortalPayslipCard, PortalLeaveBalances, PortalAttendanceStrip, PortalRequestsList — matches portal.html |
| `/portal/profile` | ⚠️ Placeholder | "My Profile — mock data. Implement per plan." |
| `/portal/payslips` | ⚠️ Placeholder | "My Payslips — mock data." |
| `/portal/payslips/[id]` | ⚠️ Placeholder | Payslip detail — minimal content |
| `/portal/attendance` | ⚠️ Placeholder | "My Attendance — mock data." |
| `/portal/requests` | ⚠️ Placeholder | "My Requests — mock data." |
| `/portal/requests/[id]` | ⚠️ Placeholder | Request detail |
| `/portal/requests/leave/new` | ✅ Form page | RequestFormCard (leave) |
| `/portal/requests/ot/new` | ✅ Form page | RequestFormCard (OT) |
| `/portal/requests/attendance/new` | ✅ Form page | RequestFormCard (attendance correction) |

- **PortalTopbar** (`src/components/organisms/PortalTopbar`) correctly shows: Home, Payslips, Attendance, Requests, Profile, with links to `/portal`, `/portal/payslips`, `/portal/attendance`, `/portal/requests`, `/portal/profile`. So **navigation to these pages works**; the pages themselves are empty.

---

## Why This Happened

In **AGENT-LOOP-RUNNER.md**, the portal items V1–V9 are marked **Done**. The runner treated “Done” as “route exists and does not 404.” For V1 (My Profile), V2 (My Payslips), V3 (Payslip detail), V4 (My Attendance), V5 (My Requests), V6 (Request detail), the implementation was **minimal**: a page that uses `PortalTemplate` + `PortalTopbar` and a short text line. The **mockup-based content** (tables, cards, calendar, tabs, etc.) was never built for these routes.

So: **we have the “page” in the sense of a valid route and shell, but we don’t have the page content** from the mockups.

---

## Mockups to Use for Implementation

All paths below are under **`docs/mockups/`**.

| App route | Mockup file | Main content to implement |
|-----------|-------------|----------------------------|
| `/portal/profile` | **my-profile.html** | Profile header card (avatar, name, role, badges, “Edit Personal Info”); tabs: Personal Info, Employment, Government IDs, Account Settings; Personal Details + Contact + Emergency Contact sections (read-only or editable). |
| `/portal/payslips` | **my-payslips.html** | Page title + subtitle (employee name, role, ID); year filter + “Download All”; **YTD Summary** (4 KPIs: Total Gross, Total Deductions, Total Net Pay, Tax Withheld); **grid of payslip cards** (period, pay date, status badge, gross/net, “View Payslip” + “PDF” per card). |
| `/portal/payslips/[id]` | **my-payslips-detail.html** | Breadcrumb “Payslips / April 2024”; company header; employee info block; Earnings / Deductions tables; Net Pay; optional Download PDF. |
| `/portal/attendance` | **my-attendance.html** | Page title + subtitle; **month nav** (prev/next + “April 2024”); **4 KPI cards**: Days Present, Late Arrivals, Leave Days, OT Hours; **calendar grid** (7 cols: Mon–Sun) with day cells (date, status dot, label: P, Late, Leave, Rest, etc.). |
| `/portal/requests` | **my-requests.html** | Page title “My Requests” + subtitle; **tabs**: All, Leave, Overtime, Adjustments; **“New Request”** button (links to leave/OT/attendance new); **list of request cards** (icon, type, status badge, detail line, optional actions). |
| `/portal/requests/[id]` | **my-requests-id.html** | Request detail view (type, status, dates, approver, etc.) — use mockup for layout and fields. |

---

## Recommended Next Steps

1. **Reuse existing organisms where possible**
   - **Payslips list**: Reuse or extend **PortalPayslipCard** in a grid; add YTD summary block and year filter.
   - **Requests list**: Reuse **PortalRequestsList** (or a variant) with tabs and “New Request” CTA.
   - **Attendance**: Reuse **PortalAttendanceStrip** for “this week”; add month nav and a **calendar organism** for the full month view (or a simpler list by day).
   - **Profile**: New organism(s): e.g. **PortalProfileHeader**, **PortalProfileTabs**, **PortalProfilePersonalInfo**, etc., following my-profile.html sections.

2. **Implement one page at a time**
   - Suggested order: **Payslips** (list + detail) → **Requests** (list + detail) → **Attendance** → **Profile**, so that the most common flows (view payslip, check requests) are covered first.

3. **Keep portal shell consistent**
   - Each of these pages should use the same shell as the home: **PortalShell** (or PortalTemplate + PortalTopbar with same nav and `requestsBadgeCount`) so the topbar and nav stay consistent.

4. **Data**
   - Use **mock data only** (typed constants or `src/data/mocks/`) per project rules; no API or auth for now.

---

## File Reference

- Portal routes: `src/app/(portal)/portal/` (profile, payslips, payslips/[id], attendance, requests, requests/[id], requests/leave/new, requests/ot/new, requests/attendance/new).
- Portal shell: `src/app/(portal)/_components/PortalShell.tsx`.
- Topbar (nav): `src/components/organisms/PortalTopbar/PortalTopbar.tsx` (default nav: Home, Payslips, Attendance, Requests, Profile).
- Mockups: `docs/mockups/my-profile.html`, `my-payslips.html`, `my-payslips-detail.html`, `my-attendance.html`, `my-requests.html`, `my-requests-id.html`, plus `portal.html` for the home (already implemented).
