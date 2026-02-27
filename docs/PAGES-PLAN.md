# Pages Implementation Plan

## Source: USER_FLOWS.md (11 flows) | Architecture: Next.js App Router + Atomic Design

---

## Two App Shells (One Login Page)

Everyone logs in at `/login`. After auth, the API returns the user's `company_users.role`.
The redirect rule is simple: **viewer-only → portal shell; everyone else → admin shell.**

```
/login  (single entry point for all users)
  │
  ├─► role = viewer (rank-and-file, no management duties)
  │     └─► /my/dashboard   ← PortalTemplate (simplified shell, no admin nav)
  │
  └─► role = manager | hr | admin | accountant | owner
        └─► /dashboard      ← DashboardTemplate (full admin shell)
              │
              └─► /my/...   also available inside the admin shell
                            (managers are employees too — payslip, attendance,
                             leave requests all accessible from the same session)
```

**Key rule:** A manager who is also an employee uses the **admin shell only** — they
access their own payslip/attendance/requests via `/my` within the same shell.
There is no shell-switching or secondary login required.

---

## Route Group Overview

```
src/app/
├── (marketing)/            # Public, no auth — landing, pricing
├── (auth)/                 # Auth shell (centered card, no nav)
├── (onboarding)/           # Wizard shell, no sidebar (owner only, post-signup)
├── (portal)/               # Employee self-service shell — viewer role only
│   └── my/
│       ├── dashboard/      # Employee home (pending requests, latest payslip)
│       ├── payslips/       # View & download own payslips
│       ├── attendance/     # Log & view own time entries
│       ├── requests/       # File & track leave / OT requests
│       └── profile/        # Own profile & settings
└── (dashboard)/            # Admin shell — manager, hr, admin, accountant, owner
    ├── dashboard/
    ├── employees/
    ├── attendance/
    ├── requests/
    ├── approvals/
    ├── payroll/
    ├── compliance/
    ├── organization/
    ├── reports/
    ├── settings/
    └── my/                 # Same pages as (portal)/my — reused for admin users' own records
```

---

## Subdomain-Based Company Resolution

Company context is determined by the **subdomain**, not a picker page.

```
Production:  company1.payro.ph  →  subdomain = "company1"
Local dev:   NEXT_PUBLIC_COMPANY_SUBDOMAIN=company1  (env fallback)
```

### Resolution flow (runs on every cold load, before auth)

```
App boots
  │
  ├─► Read subdomain
  │     Production: window.location.hostname.split('.')[0]
  │     Local dev:  process.env.NEXT_PUBLIC_COMPANY_SUBDOMAIN
  │
  ├─► Check localStorage for cached company (key: "payro_company")
  │     └─► Cache hit + not stale? → use it, skip API call
  │
  ├─► GET /api/companies/resolve?subdomain={subdomain}
  │     ├─► 200: store payload in localStorage + CompanyStore
  │     └─► 404: redirect to /invalid-company (unknown subdomain)
  │
  └─► All subsequent auth & API calls include company context
        (company_id injected by CompanyStore, not by route)
```

**localStorage key:** `payro_company`
**Cached fields:** `{ id, name, subdomain, logo_url, plan, resolved_at }`
**Cache TTL:** 1 hour (re-fetch if `resolved_at` is older than 60 min)

### Special pages for subdomain failures

| Route | Page | Condition |
|-------|------|-----------|
| `/invalid-company` | Unknown Subdomain Error | Subdomain not found in API |

This page lives outside all route groups (plain layout) and shows a branded error with a link to the marketing site.

---

## Phase 1 — Auth & Onboarding

### `(auth)` — Auth Shell (no sidebar, centered layout)

All auth pages are scoped to the resolved company (branding, logo pulled from `CompanyStore`).

| Route | Page | Flow | Guard |
|-------|------|-------|-------|
| `/login` | Login | 1C | Public (company resolved) |
| `/signup` | Register | 1A | Public (company resolved) |
| `/verify-email` | Email Verification | 1A | Public + token |
| `/forgot-password` | Forgot Password | 1D | Public (company resolved) |
| `/reset-password` | Reset Password | 1D | Public + token |
| `/auth/callback` | OAuth Callback | 1B | Public (Google/Facebook/Apple redirect) |

**Post-login redirect logic:**
- `viewer` only → `/my/dashboard` (portal shell)
- `manager`, `hr`, `admin`, `accountant`, `owner` → `/dashboard` (admin shell)
- No `/company-select` page — company is always the subdomain's company.
- If a user tries to log in at a subdomain their account doesn't belong to, the API returns 403 → login page shows "Your account is not linked to this company."

---

### `(onboarding)` — Wizard Shell (step indicator, no sidebar)

| Route | Page | Step | Guard |
|-------|------|------|-------|
| `/onboarding` | Onboarding Root (redirects to step 1) | — | Authenticated, no company |
| `/onboarding/company` | Step 1: Basic Company Info | 2 Step 1 | Owner |
| `/onboarding/business` | Step 2: Business & Tax Registration | 2 Step 2 | Owner |
| `/onboarding/payroll` | Step 3: Payroll Settings | 2 Step 3 | Owner |
| `/onboarding/plan` | Step 4: Subscription Plan | 2 Step 4 | Owner |

**Notes:**
- After `/onboarding/plan`, system seeds holidays and redirects to `/dashboard`.
- Users with an existing company who revisit onboarding routes are redirected away.

---

## Phase 2 — Dashboard Shell & Employees

### `(dashboard)` — App Shell

> **Template:** `DashboardTemplate` — sidebar nav + topbar + main content area.
> Auth guard on the entire route group; redirects to `/login` if no session.

#### Dashboard Home

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/dashboard` | Overview | All flows summary | All |

**Content:**
- KPI cards: headcount, total payroll last period, pending approvals count
- Recent payroll period status
- Pending actions widget (approvals, payroll to compute, BIR deadlines)
- Quick links

---

#### Employees

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/employees` | Employee List | 4A | owner, admin, hr |
| `/employees/new` | Add Employee (7-step wizard) | 4A | owner, admin, hr |
| `/employees/[id]` | Employee Profile | 4A, 4B | owner, admin, hr |
| `/employees/[id]/edit` | Edit Employee | 4A, 4B | owner, admin, hr |
| `/employees/[id]/salary` | Salary History | 4C | owner, admin, hr |
| `/employees/[id]/separation` | Separation Wizard | 10A | owner, admin, hr |
| `/employees/[id]/final-pay` | Final Pay Computation | 10A | owner, admin, hr |

**Employee List:** search, filter (status, department, position), export CSV.

**Add Employee wizard steps:**
1. Personal Info
2. Employment Details
3. Government IDs
4. Salary
5. Tax Information (BIR)
6. App Access
7. Leave Balance Init (system auto-creates; review screen)

**Employee Profile tabs:**
- Overview (employment details, position, manager)
- Salary History
- Government IDs
- Tax Info
- Leave Balances
- Time & Attendance summary
- Loans & Advances
- Documents / Separation (if separated)

---

#### Organization

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/organization/departments` | Department Tree | 3A | owner, admin, hr |
| `/organization/positions` | Position List | 3B | owner, admin, hr |

**Department Tree:** hierarchical view, inline create/edit, drag-to-nest optional.
**Position List:** table with is_managerial flag, minimum_wage_exempt flag.

---

#### Team (Company Users)

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/team` | Team Member List | 3C | owner, admin |
| `/team/invite` | Invite Member | 3C | owner, admin |
| `/team/[id]` | Member Detail / Permissions | 3C | owner, admin |

---

## Phase 3 — Time, Attendance & Requests

#### Attendance — Admin view (all employees)

Admin shell only. HR/managers see all employees' time records.

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/attendance` | Attendance Dashboard — all employees (calendar + list) | 5A | owner, admin, hr, manager |
| `/attendance/[id]` | Time Entry Detail (view + excuse late/undertime) | 5A, 5B | owner, admin, hr, manager |

**Attendance Dashboard:**
- Calendar view by month/week, filterable by employee / department / status
- Status badges: draft, pending, approved, rejected
- Bulk approve action for managers

> Employees log and view their **own** attendance via `/my/attendance` in the portal/admin-my shell.

---

#### Approvals (Admin shell — manager-facing)

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/approvals` | Approvals Queue — all types, all team members | 5B, 6B, 7B | owner, admin, hr, manager |
| `/approvals/[id]` | Approval Detail (approve / reject inline) | 5B, 6B, 7B | owner, admin, hr, manager |

**Approvals Queue tabs:** Attendance / Leave / Overtime — badge counts per tab.

---

## Phase 4 — Payroll

#### Payroll

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/payroll` | Payroll Periods List | 8A | owner, admin, accountant |
| `/payroll/new` | Create Payroll Period | 8A | owner, admin, accountant |
| `/payroll/[id]` | Payroll Period Detail | 8B–8E | owner, admin, accountant |
| `/payroll/[id]/employees` | All Employee Payroll Records | 8C | owner, admin, accountant |
| `/payroll/[id]/employees/[eid]` | Per-Employee Breakdown | 8C | owner, admin, accountant |
| `/payroll/[id]/payslips` | Distribute Payslips | 8D | owner, admin, accountant |
| `/payroll/[id]/adjust` | Payroll Adjustments | 8C | owner, admin, accountant |

**Payroll Period Detail (`/payroll/[id]`) sections:**
- Status bar (draft → processing → computed → approved → paid) with current state
- Summary cards: total gross, total deductions, total net, employee count
- Alerts: employees with missing approved time, salary changes, MWE changes
- Action buttons: Compute / Approve / Reject to Draft / Mark as Paid
- Employee records table (drill down to `/payroll/[id]/employees/[eid]`)

**Per-Employee Breakdown:** earnings table + deductions table + tax computation detail (JSONB expanded).

---

## Phase 5 — Compliance

#### Government Contributions & BIR

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/compliance` | Compliance Dashboard | 9A–9D, 11A–11C | owner, admin, hr, accountant |
| `/compliance/remittances` | Government Remittances (SSS/PhilHealth/HDMF) | 9A | owner, admin, accountant |
| `/compliance/remittances/new` | Record Remittance | 9A | owner, admin, accountant |
| `/compliance/bir/1601-c` | BIR 1601-C (Monthly WHT) | 9B | owner, admin, accountant |
| `/compliance/bir/2316` | BIR Form 2316 (Year-End) | 9C | owner, admin, accountant |
| `/compliance/bir/alphalist` | BIR Alphalist (Annual) | 9D | owner, admin, accountant |

**Compliance Dashboard widgets:**
- Upcoming BIR deadlines (1601-C due dates)
- Government remittance status per month
- SSS / PhilHealth / HDMF summary
- DOLE incident/training compliance score

---

#### DOLE Compliance

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/compliance/incidents` | Incident List | 11A | owner, admin, hr |
| `/compliance/incidents/new` | Report Incident | 11A | owner, admin, hr |
| `/compliance/incidents/[id]` | Incident Detail / Edit | 11A | owner, admin, hr |
| `/compliance/training` | Training Records List | 11B | owner, admin, hr |
| `/compliance/training/new` | Add Training Record | 11B | owner, admin, hr |
| `/compliance/training/[id]` | Training Detail | 11B | owner, admin, hr |
| `/compliance/disciplinary` | Disciplinary Actions List | 11C | owner, admin, hr |
| `/compliance/disciplinary/new` | New Disciplinary Action | 11C | owner, admin, hr |
| `/compliance/disciplinary/[id]` | Disciplinary Detail (due process checklist) | 11C | owner, admin, hr |

---

## Phase 6 — Reports, Self-Service & Settings

#### Reports

| Route | Page | Roles |
|-------|-------|-------|
| `/reports` | Reports Hub | All |
| `/reports/payroll` | Payroll Summary Report | owner, admin, accountant |
| `/reports/headcount` | Headcount Report | owner, admin, hr |
| `/reports/leave` | Leave Utilization Report | owner, admin, hr |
| `/reports/attendance` | Attendance Report | owner, admin, hr, manager |
| `/reports/government` | Government Contributions Summary | owner, admin, accountant |

---

#### Employee Self-Service (`/my/...`)

These pages exist in **both** route groups:
- `(portal)/my/...` — rendered inside `PortalTemplate` for `viewer` role
- `(dashboard)/my/...` — rendered inside `DashboardTemplate` for managers/admin who are also employees

Same page components, different shell wrapping. Share via a shared page module under `src/components/pages/my/`.

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/my/dashboard` | Employee Home (requests status, latest payslip) | — | all authenticated |
| `/my/payslips` | My Payslips list | 8D | all authenticated |
| `/my/payslips/[id]` | Payslip Detail / Download | 8D | all authenticated |
| `/my/attendance` | My Attendance (log + history) | 5A | all authenticated |
| `/my/requests` | My Leave & OT Requests | 6A, 7A | all authenticated |
| `/my/requests/leave/new` | Apply for Leave | 6A | all authenticated |
| `/my/requests/overtime/new` | File Overtime Request | 7A | all authenticated |
| `/my/requests/[id]` | Request Detail | 6A, 7A | all authenticated |
| `/my/profile` | My Profile | — | all authenticated |

---

#### Settings

| Route | Page | Flow | Roles |
|-------|------|-------|-------|
| `/settings/company` | Company Info & Tax Details | 2 | owner, admin |
| `/settings/payroll` | Payroll Configuration (frequency, grace period) | 2 Step 3 | owner, admin |
| `/settings/holidays` | Holiday Calendar Management | 2 (seeded) | owner, admin, hr |
| `/settings/leave-policies` | Leave Policy Configuration | 4A Step 7 | owner, admin, hr |
| `/settings/team` | Team Members & Roles | 3C | owner, admin |
| `/settings/billing` | Subscription & Plan | 2 Step 4 | owner |
| `/settings/integrations` | Third-party Integrations | — | owner, admin |

---

## Marketing (Phase 7, lowest priority for MVP)

| Route | Page |
|-------|------|
| `/` | Landing Page (hero, features, social proof, CTA) |
| `/pricing` | Pricing Tiers (Starter / Professional / Enterprise) |

---

## Page Count Summary

| Phase | Section | Page Count |
|-------|---------|-----------|
| —  | `/invalid-company` error page | 1 |
| 1 | Auth (6) + Onboarding (5) | 11 |
| 2 | Dashboard, Employees, Organization, Team | 17 |
| 3 | Attendance (admin), Approvals + Employee self-service `/my` (9 pages, dual-shell) | 13 |
| 4 | Payroll | 7 |
| 5 | Compliance (Gov + DOLE) | 14 |
| 6 | Reports, Settings | 13 |
| 7 | Marketing | 2 |
| **Total** | | **78** |

---

## Templates Needed

| Template | Route Group | Used By |
|----------|------------|---------|
| `AuthTemplate` | `(auth)` | Login, signup, forgot/reset password — centered card, no nav |
| `OnboardingTemplate` | `(onboarding)` | Company setup wizard — step indicator header, no sidebar |
| `PortalTemplate` | `(portal)` | Employee self-service — simplified topbar (company logo, user menu), no admin sidebar |
| `DashboardTemplate` | `(dashboard)` | Admin shell — full sidebar + topbar; wraps all admin and `/my` pages for non-viewer roles |
| `WizardTemplate` | `(dashboard)` | Employee Add wizard, Separation wizard — multi-step inside the dashboard shell |
| `DetailTemplate` | `(dashboard)` | Employee profile, Payroll period detail — tab-based layout inside dashboard shell |

---

## Organisms Needed (new, not yet built)

| Organism | Used On |
|----------|---------|
| `Sidebar` | DashboardTemplate |
| `Topbar` | DashboardTemplate (company name/logo, user menu, notifications, approvals badge) |
| `PortalTopbar` | PortalTemplate (company logo, user menu only — no admin nav) |
| `StepWizard` | OnboardingTemplate, Employee Add, Separation |
| `DataTable` | Employee list, Payroll records, Requests list, Compliance lists |
| `ApprovalCard` | `/approvals/[id]` |
| `PayrollSummaryBar` | `/payroll/[id]` |
| `PayslipViewer` | `/my/payslips/[id]`, `/payroll/[id]/payslips` |
| `ComplianceDashboardWidgets` | `/compliance` |
| `EmployeeProfileTabs` | `/employees/[id]` |
| `AttendanceCalendar` | `/attendance` |

---

## MobX Stores Needed

Add each as a property of `RootStore`:

| Store | Responsibility |
|-------|---------------|
| `AuthStore` | Session, JWT, current user |
| `CompanyStore` | Subdomain-resolved company details (hydrated from localStorage cache + `/api/companies/resolve`); TTL-based re-fetch |
| `EmployeeStore` | Employee list, active employee, salary history |
| `AttendanceStore` | Work shifts, time entries, filters |
| `RequestStore` | Leave & OT requests (employee + manager views) |
| `ApprovalStore` | Pending approval queue, counts |
| `PayrollStore` | Periods, records, computation state |
| `ComplianceStore` | Remittances, BIR submissions, DOLE records |
| `OrganizationStore` | Departments, positions |
| `TeamStore` | Company users, invitations |
| `ReportStore` | Report filters, cached results |
| `NotificationStore` | In-app notifications, badge counts |

---

## Implementation Priority (MVP → Full)

### MVP (ship first)
1. Auth (login, signup, verify email, forgot/reset password)
2. Company onboarding wizard
3. Employees (list + add wizard + profile)
4. Organization (departments + positions)
5. Attendance (log + list)
6. Payroll (periods + compute + review + approve)
7. Payslips (distribute + employee self-service view)

### Post-MVP
8. Leave management (apply + approve)
9. Overtime requests (file + approve)
10. Government contributions & BIR forms
11. Reports
12. Settings (full)

### Later
13. DOLE compliance (incidents, training, disciplinary)
14. Employee separation & final pay
15. Marketing pages
