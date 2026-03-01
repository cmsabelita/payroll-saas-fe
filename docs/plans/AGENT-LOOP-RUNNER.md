# Agent Loop Runner — Resumable Multi-Agent Implementation

Use this doc to **spawn multiple agent loops** (one plan per run, or one batch per run). When a session hits token limits, start a **new** agent with the next unchecked item. All work uses **mock data only**; **auth is ignored** for now.

---

## Copy-paste prompt for a new agent (respawn / continue)

Paste this into a new chat to start or continue an agent loop:

```
Implement the next page from the non-auth queue. Use docs/prompt/implementation-task.md as your agent prompt. Open docs/plans/AGENT-LOOP-RUNNER.md, find the first row with Status = Todo in the tables, then implement that plan only. Use mock data only (no API, no auth). When done run npm run lint and npm run build and set that row’s Status to Done.
```

To assign a **specific** plan (e.g. for parallel agents):

```
Implement docs/plans/implementation-portal.md using docs/prompt/implementation-task.md. Use mock data only (no API, no auth). When done run npm run lint and npm run build.
```

---

## Agent prompt (every run)

**Always use:** `docs/prompt/implementation-task.md` as the implementation agent prompt.

- Read the **plan file** for your assigned row (e.g. `docs/plans/implementation-portal.md`).
- Implement **only** what that plan describes.
- Follow implementation-task.md checklist and run `npm run lint` and `npm run build` before done.

---

## Global constraints (all runs)

| Constraint | Rule |
|------------|------|
| **Auth** | **Skip all auth.** Do not implement signup, login, forgot-password, reset-password, verify-email, or login-template. Those rows are excluded from the queue below. |
| **Data** | **Mock data only.** No API calls, no Supabase, no auth checks. Use typed constants in the page file or under `src/data/mocks/` (e.g. `mockEmployees.ts`). Pages and organisms receive data via props or import from mocks. |
| **Scope** | One plan = one agent run. Do not combine plans in one session if token budget is tight. |
| **Resume** | If the session is cut off, the next agent opens this file, finds the first row with Status = `Todo`, and runs that plan. |

---

## Non-auth implementation queue (mock data only)

Plans are ordered so that **templates and shared shells** come before page-specific work. One agent can take one row; multiple agents can work in parallel on different rows.

**How to use:**
1. Pick **one** row with Status = `Todo`.
2. Open the **Plan file** linked in that row.
3. Implement following `docs/prompt/implementation-task.md` and the plan. Use **mock data only**.
4. When done: run `npm run lint` and `npm run build`; then set Status to `Done` (or rely on git commits).

---

### Marketing & index

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| M1 | [implementation-index.md](./implementation-index.md) | (marketing) | Done |
| M2 | [marketing-landing-page.md](./marketing-landing-page.md) | (marketing) | Done |
| M3 | [implementation-marketing-pricing.md](./implementation-marketing-pricing.md) | (marketing) | Done |

---

### Dashboard shell & portal

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| D1 | [implementation-portal.md](./implementation-portal.md) | (portal) | Done |

*Note: Dashboard home (e.g. dashboard-page) can be added when that plan exists. Index is under Marketing (M1).*

---

### Dashboard — Employees

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| E1 | [implementation-employees.md](./implementation-employees.md) | (dashboard) | Done |
| E2 | [implementation-employees-new-wizard.md](./implementation-employees-new-wizard.md) | (dashboard) | Done |
| E3 | [implementation-employees-edit.md](./implementation-employees-edit.md) | (dashboard) | Done |
| E4 | [implementation-employees-edit-access.md](./implementation-employees-edit-access.md) | (dashboard) | Done |
| E5 | [implementation-employees-edit-tax.md](./implementation-employees-edit-tax.md) | (dashboard) | Done |
| E6 | [implementation-employees-edit-salary.md](./implementation-employees-edit-salary.md) | (dashboard) | Done |
| E7 | [implementation-employees-edit-govids.md](./implementation-employees-edit-govids.md) | (dashboard) | Done |
| E8 | [implementation-employees-edit-employment.md](./implementation-employees-edit-employment.md) | (dashboard) | Done |
| E9 | [implementation-employees-profile.md](./implementation-employees-profile.md) | (dashboard) | Done |
| E10 | [implementation-employees-salary.md](./implementation-employees-salary.md) | (dashboard) | Done |
| E11 | [implementation-employees-finalpay.md](./implementation-employees-finalpay.md) | (dashboard) | Done |
| E12 | [implementation-employees-separation.md](./implementation-employees-separation.md) | (dashboard) | Done |

---

### Dashboard — Payroll

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| P1 | [implementation-payroll.md](./implementation-payroll.md) | (dashboard) | Done |
| P2 | [implementation-payroll-new.md](./implementation-payroll-new.md) | (dashboard) | Done |
| P3 | [implementation-payroll-id.md](./implementation-payroll-id.md) | (dashboard) | Done |
| P4 | [implementation-payroll-employees.md](./implementation-payroll-employees.md) | (dashboard) | Done |
| P5 | [implementation-payroll-payslips.md](./implementation-payroll-payslips.md) | (dashboard) | Done |
| P6 | [implementation-payroll-adjust.md](./implementation-payroll-adjust.md) | (dashboard) | Done |
| P7 | [implementation-payroll-employee-breakdown.md](./implementation-payroll-employee-breakdown.md) | (dashboard) | Done |

---

### Dashboard — Compliance

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| C1 | [implementation-compliance.md](./implementation-compliance.md) | (dashboard) | Done |
| C2 | [implementation-compliance-disciplinary.md](./implementation-compliance-disciplinary.md) | (dashboard) | Done |
| C3 | [implementation-compliance-disciplinary-new.md](./implementation-compliance-disciplinary-new.md) | (dashboard) | Done |
| C4 | [implementation-compliance-disciplinary-id.md](./implementation-compliance-disciplinary-id.md) | (dashboard) | Done |
| C5 | [implementation-compliance-training.md](./implementation-compliance-training.md) | (dashboard) | Done |
| C6 | [implementation-compliance-training-new.md](./implementation-compliance-training-new.md) | (dashboard) | Done |
| C7 | [implementation-compliance-training-id.md](./implementation-compliance-training-id.md) | (dashboard) | Done |
| C8 | [implementation-compliance-incidents.md](./implementation-compliance-incidents.md) | (dashboard) | Done |
| C9 | [implementation-compliance-incidents-new.md](./implementation-compliance-incidents-new.md) | (dashboard) | Done |
| C10 | [implementation-compliance-incidents-id.md](./implementation-compliance-incidents-id.md) | (dashboard) | Done |
| C11 | [implementation-compliance-remittances.md](./implementation-compliance-remittances.md) | (dashboard) | Done |
| C12 | [implementation-compliance-remittances-new.md](./implementation-compliance-remittances-new.md) | (dashboard) | Done |
| C13 | [implementation-compliance-alphalist.md](./implementation-compliance-alphalist.md) | (dashboard) | Done |
| C14 | [implementation-compliance-bir-2316.md](./implementation-compliance-bir-2316.md) | (dashboard) | Done |
| C15 | [implementation-compliance-bir-1601c.md](./implementation-compliance-bir-1601c.md) | (dashboard) | Done |

---

### Dashboard — Reports

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| R1 | [implementation-reports.md](./implementation-reports.md) | (dashboard) | Done |
| R2 | [implementation-reports-payroll.md](./implementation-reports-payroll.md) | (dashboard) | Done |
| R3 | [implementation-reports-attendance.md](./implementation-reports-attendance.md) | (dashboard) | Done |
| R4 | [implementation-reports-leave.md](./implementation-reports-leave.md) | (dashboard) | Done |
| R5 | [implementation-reports-government.md](./implementation-reports-government.md) | (dashboard) | Done |
| R6 | [implementation-reports-headcount.md](./implementation-reports-headcount.md) | (dashboard) | Done |

---

### Dashboard — Settings

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| S1 | [implementation-settings-company.md](./implementation-settings-company.md) | (dashboard) | Done |
| S2 | [implementation-settings-team.md](./implementation-settings-team.md) | (dashboard) | Done |
| S3 | [implementation-settings-billing.md](./implementation-settings-billing.md) | (dashboard) | Done |
| S4 | [implementation-settings-payroll-config.md](./implementation-settings-payroll-config.md) | (dashboard) | Done |
| S5 | [implementation-settings-holidays.md](./implementation-settings-holidays.md) | (dashboard) | Done |
| S6 | [implementation-settings-leave-policies.md](./implementation-settings-leave-policies.md) | (dashboard) | Done |
| S7 | [implementation-settings-integrations.md](./implementation-settings-integrations.md) | (dashboard) | Done |

---

### Dashboard — Team & approvals & organization

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| T1 | [implementation-team.md](./implementation-team.md) | (dashboard) | Done |
| T2 | [implementation-team-id.md](./implementation-team-id.md) | (dashboard) | Done |
| T3 | [implementation-team-invite.md](./implementation-team-invite.md) | (dashboard) | Done |
| T4 | [implementation-approvals.md](./implementation-approvals.md) | (dashboard) | Done |
| T5 | [implementation-approvals-id.md](./implementation-approvals-id.md) | (dashboard) | Done |
| T6 | [implementation-organization-departments.md](./implementation-organization-departments.md) | (dashboard) | Done |
| T7 | [implementation-organization-positions.md](./implementation-organization-positions.md) | (dashboard) | Done |

---

### Onboarding (mock data; no real auth)

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| O1 | [implementation-onboarding-company.md](./implementation-onboarding-company.md) | (onboarding) | Done |
| O2 | [implementation-onboarding-business.md](./implementation-onboarding-business.md) | (onboarding) | Done |
| O3 | [implementation-onboarding-payroll-settings.md](./implementation-onboarding-payroll-settings.md) | (onboarding) | Done |
| O4 | [implementation-onboarding-plan.md](./implementation-onboarding-plan.md) | (onboarding) | Done |

---

### Dashboard — Attendance

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| A1 | [implementation-attendance.md](./implementation-attendance.md) | (dashboard) | Done |
| A2 | [implementation-attendance-id.md](./implementation-attendance-id.md) | (dashboard) | Done |

---

### Portal — My (employee self-service, mock data)

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| V1 | [implementation-my-profile.md](./implementation-my-profile.md) | (portal) | Done |
| V2 | [implementation-my-payslips.md](./implementation-my-payslips.md) | (portal) | Done |
| V3 | [implementation-my-payslips-detail.md](./implementation-my-payslips-detail.md) | (portal) | Done |
| V4 | [implementation-my-attendance.md](./implementation-my-attendance.md) | (portal) | Done |
| V5 | [implementation-my-requests.md](./implementation-my-requests.md) | (portal) | Done |
| V6 | [implementation-my-requests-id.md](./implementation-my-requests-id.md) | (portal) | Done |
| V7 | [implementation-my-requests-leave-new.md](./implementation-my-requests-leave-new.md) | (portal) | Done |
| V8 | [implementation-my-requests-ot-new.md](./implementation-my-requests-ot-new.md) | (portal) | Done |
| V9 | [implementation-my-requests-attendance-new.md](./implementation-my-requests-attendance-new.md) | (portal) | Done |

---

### Standalone (no auth)

| # | Plan file | Route group | Status |
|---|-----------|-------------|--------|
| X1 | [implementation-invalid-company.md](./implementation-invalid-company.md) | (auth/standalone) | Done |

---

## Respawn / continue rules

1. **Token limit hit:** Stop. Commit or note the last completed plan. New agent: open `docs/plans/AGENT-LOOP-RUNNER.md`, find first `Todo` in the tables above, run that plan.
2. **Parallel agents:** Different agents can pick different rows (e.g. one does M1, another E1, another P1). Avoid two agents editing the same plan file or same page route.
3. **Dashboard home:** If there is a separate dashboard landing plan (e.g. `dashboard-page.md`), add it to the "Dashboard shell & portal" section and assign a row.

---

## Summary

- **Agent prompt:** `docs/prompt/implementation-task.md`
- **No auth** — skip signup, login, forgot-password, reset-password, verify-email, login-template
- **Mock data only** — no API; use `src/data/mocks/` or in-page constants
- **One plan per run** — resume from first `Todo` when starting a new loop
