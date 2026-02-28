# Mockup Implementation Index — Resumable Agent Loops

Use this index to spawn **one agent loop per row**. Each implementation plan is self-contained. If a session hits token limits, start a new agent with the next unchecked plan.

**How to use:**
1. Open the plan file in `docs/plans/<plan-file>`.
2. Follow `docs/prompt/implementation-plan.md` standards.
3. Implement only what that plan describes; do not expand scope.
4. Mark status below as `Done` when complete (optional; can use git commits instead).

**Route groups:** `(auth)` | `(marketing)` | `(dashboard)` | `(portal)` | `(onboarding)`

| # | Mockup | Plan file | Route group | Status |
|---|--------|-----------|-------------|--------|
| 1 | `login.html` | [login-template.md](./login-template.md) | (auth) | Done (plan exists) |
| 2 | `signup.html` | [implementation-signup.md](./implementation-signup.md) | (auth) | Todo |
| 3 | `forgot-password.html` | [implementation-forgot-password.md](./implementation-forgot-password.md) | (auth) | Todo |
| 4 | `reset-password.html` | [implementation-reset-password.md](./implementation-reset-password.md) | (auth) | Todo |
| 5 | `verify-email.html` | [implementation-verify-email.md](./implementation-verify-email.md) | (auth) | Todo |
| 6 | `marketing-landing.html` | [marketing-landing-page.md](./marketing-landing-page.md) | (marketing) | Done (plan exists) |
| 7 | `marketing-pricing.html` | [implementation-marketing-pricing.md](./implementation-marketing-pricing.md) | (marketing) | Todo |
| 8 | `dashboard.html` | [dashboard-page.md](./dashboard-page.md) | (dashboard) | Done (plan exists) |
| 9 | `portal.html` | [implementation-portal.md](./implementation-portal.md) | (portal) | Todo |
| 10 | `index.html` | [implementation-index.md](./implementation-index.md) | (marketing) | Todo |
| 11 | `employees.html` | [implementation-employees.md](./implementation-employees.md) | (dashboard) | Todo |
| 12 | `employees-new.html` + steps 2–7 | [implementation-employees-new-wizard.md](./implementation-employees-new-wizard.md) | (dashboard) | Todo |
| 13 | `employees-edit.html` | [implementation-employees-edit.md](./implementation-employees-edit.md) | (dashboard) | Todo |
| 14 | `employees-edit-access.html` | [implementation-employees-edit-access.md](./implementation-employees-edit-access.md) | (dashboard) | Todo |
| 15 | `employees-edit-tax.html` | [implementation-employees-edit-tax.md](./implementation-employees-edit-tax.md) | (dashboard) | Todo |
| 16 | `employees-edit-salary.html` | [implementation-employees-edit-salary.md](./implementation-employees-edit-salary.md) | (dashboard) | Todo |
| 17 | `employees-edit-govids.html` | [implementation-employees-edit-govids.md](./implementation-employees-edit-govids.md) | (dashboard) | Todo |
| 18 | `employees-edit-employment.html` | [implementation-employees-edit-employment.md](./implementation-employees-edit-employment.md) | (dashboard) | Todo |
| 19 | `employees-profile.html` | [implementation-employees-profile.md](./implementation-employees-profile.md) | (dashboard) | Todo |
| 20 | `employees-salary.html` | [implementation-employees-salary.md](./implementation-employees-salary.md) | (dashboard) | Todo |
| 21 | `employees-finalpay.html` | [implementation-employees-finalpay.md](./implementation-employees-finalpay.md) | (dashboard) | Todo |
| 22 | `employees-separation.html` | [implementation-employees-separation.md](./implementation-employees-separation.md) | (dashboard) | Todo |
| 23 | `payroll.html` | [implementation-payroll.md](./implementation-payroll.md) | (dashboard) | Todo |
| 24 | `payroll-new.html` | [implementation-payroll-new.md](./implementation-payroll-new.md) | (dashboard) | Todo |
| 25 | `payroll-id.html` | [implementation-payroll-id.md](./implementation-payroll-id.md) | (dashboard) | Todo |
| 26 | `payroll-employees.html` | [implementation-payroll-employees.md](./implementation-payroll-employees.md) | (dashboard) | Todo |
| 27 | `payroll-payslips.html` | [implementation-payroll-payslips.md](./implementation-payroll-payslips.md) | (dashboard) | Todo |
| 28 | `payroll-adjust.html` | [implementation-payroll-adjust.md](./implementation-payroll-adjust.md) | (dashboard) | Todo |
| 29 | `payroll-employee-breakdown.html` | [implementation-payroll-employee-breakdown.md](./implementation-payroll-employee-breakdown.md) | (dashboard) | Todo |
| 30 | `compliance.html` | [implementation-compliance.md](./implementation-compliance.md) | (dashboard) | Todo |
| 31 | `compliance-disciplinary.html` | [implementation-compliance-disciplinary.md](./implementation-compliance-disciplinary.md) | (dashboard) | Todo |
| 32 | `compliance-disciplinary-new.html` | [implementation-compliance-disciplinary-new.md](./implementation-compliance-disciplinary-new.md) | (dashboard) | Todo |
| 33 | `compliance-disciplinary-id.html` | [implementation-compliance-disciplinary-id.md](./implementation-compliance-disciplinary-id.md) | (dashboard) | Todo |
| 34 | `compliance-training.html` | [implementation-compliance-training.md](./implementation-compliance-training.md) | (dashboard) | Todo |
| 35 | `compliance-training-new.html` | [implementation-compliance-training-new.md](./implementation-compliance-training-new.md) | (dashboard) | Todo |
| 36 | `compliance-training-id.html` | [implementation-compliance-training-id.md](./implementation-compliance-training-id.md) | (dashboard) | Todo |
| 37 | `compliance-incidents.html` | [implementation-compliance-incidents.md](./implementation-compliance-incidents.md) | (dashboard) | Todo |
| 38 | `compliance-incidents-new.html` | [implementation-compliance-incidents-new.md](./implementation-compliance-incidents-new.md) | (dashboard) | Todo |
| 39 | `compliance-incidents-id.html` | [implementation-compliance-incidents-id.md](./implementation-compliance-incidents-id.md) | (dashboard) | Todo |
| 40 | `compliance-remittances.html` | [implementation-compliance-remittances.md](./implementation-compliance-remittances.md) | (dashboard) | Todo |
| 41 | `compliance-remittances-new.html` | [implementation-compliance-remittances-new.md](./implementation-compliance-remittances-new.md) | (dashboard) | Todo |
| 42 | `compliance-alphalist.html` | [implementation-compliance-alphalist.md](./implementation-compliance-alphalist.md) | (dashboard) | Todo |
| 43 | `compliance-bir-2316.html` | [implementation-compliance-bir-2316.md](./implementation-compliance-bir-2316.md) | (dashboard) | Todo |
| 44 | `compliance-bir-1601c.html` | [implementation-compliance-bir-1601c.md](./implementation-compliance-bir-1601c.md) | (dashboard) | Todo |
| 45 | `reports.html` | [implementation-reports.md](./implementation-reports.md) | (dashboard) | Todo |
| 46 | `reports-payroll.html` | [implementation-reports-payroll.md](./implementation-reports-payroll.md) | (dashboard) | Todo |
| 47 | `reports-attendance.html` | [implementation-reports-attendance.md](./implementation-reports-attendance.md) | (dashboard) | Todo |
| 48 | `reports-leave.html` | [implementation-reports-leave.md](./implementation-reports-leave.md) | (dashboard) | Todo |
| 49 | `reports-government.html` | [implementation-reports-government.md](./implementation-reports-government.md) | (dashboard) | Todo |
| 50 | `reports-headcount.html` | [implementation-reports-headcount.md](./implementation-reports-headcount.md) | (dashboard) | Todo |
| 51 | `settings-company.html` | [implementation-settings-company.md](./implementation-settings-company.md) | (dashboard) | Todo |
| 52 | `settings-team.html` | [implementation-settings-team.md](./implementation-settings-team.md) | (dashboard) | Todo |
| 53 | `settings-billing.html` | [implementation-settings-billing.md](./implementation-settings-billing.md) | (dashboard) | Todo |
| 54 | `settings-payroll-config.html` | [implementation-settings-payroll-config.md](./implementation-settings-payroll-config.md) | (dashboard) | Todo |
| 55 | `settings-holidays.html` | [implementation-settings-holidays.md](./implementation-settings-holidays.md) | (dashboard) | Todo |
| 56 | `settings-leave-policies.html` | [implementation-settings-leave-policies.md](./implementation-settings-leave-policies.md) | (dashboard) | Todo |
| 57 | `settings-integrations.html` | [implementation-settings-integrations.md](./implementation-settings-integrations.md) | (dashboard) | Todo |
| 58 | `team.html` | [implementation-team.md](./implementation-team.md) | (dashboard) | Todo |
| 59 | `team-id.html` | [implementation-team-id.md](./implementation-team-id.md) | (dashboard) | Todo |
| 60 | `team-invite.html` | [implementation-team-invite.md](./implementation-team-invite.md) | (dashboard) | Todo |
| 61 | `approvals.html` | [implementation-approvals.md](./implementation-approvals.md) | (dashboard) | Todo |
| 62 | `approvals-id.html` | [implementation-approvals-id.md](./implementation-approvals-id.md) | (dashboard) | Todo |
| 63 | `organization-departments.html` | [implementation-organization-departments.md](./implementation-organization-departments.md) | (dashboard) | Todo |
| 64 | `organization-positions.html` | [implementation-organization-positions.md](./implementation-organization-positions.md) | (dashboard) | Todo |
| 65 | `onboarding-company.html` | [implementation-onboarding-company.md](./implementation-onboarding-company.md) | (onboarding) | Todo |
| 66 | `onboarding-business.html` | [implementation-onboarding-business.md](./implementation-onboarding-business.md) | (onboarding) | Todo |
| 67 | `onboarding-payroll-settings.html` | [implementation-onboarding-payroll-settings.md](./implementation-onboarding-payroll-settings.md) | (onboarding) | Todo |
| 68 | `onboarding-plan.html` | [implementation-onboarding-plan.md](./implementation-onboarding-plan.md) | (onboarding) | Todo |
| 69 | `attendance.html` | [implementation-attendance.md](./implementation-attendance.md) | (dashboard) | Todo |
| 70 | `attendance-id.html` | [implementation-attendance-id.md](./implementation-attendance-id.md) | (dashboard) | Todo |
| 71 | `my-profile.html` | [implementation-my-profile.md](./implementation-my-profile.md) | (portal) | Todo |
| 72 | `my-payslips.html` | [implementation-my-payslips.md](./implementation-my-payslips.md) | (portal) | Todo |
| 73 | `my-payslips-detail.html` | [implementation-my-payslips-detail.md](./implementation-my-payslips-detail.md) | (portal) | Todo |
| 74 | `my-attendance.html` | [implementation-my-attendance.md](./implementation-my-attendance.md) | (portal) | Todo |
| 75 | `my-requests.html` | [implementation-my-requests.md](./implementation-my-requests.md) | (portal) | Todo |
| 76 | `my-requests-id.html` | [implementation-my-requests-id.md](./implementation-my-requests-id.md) | (portal) | Todo |
| 77 | `my-requests-leave-new.html` | [implementation-my-requests-leave-new.md](./implementation-my-requests-leave-new.md) | (portal) | Todo |
| 78 | `my-requests-ot-new.html` | [implementation-my-requests-ot-new.md](./implementation-my-requests-ot-new.md) | (portal) | Todo |
| 79 | `my-requests-attendance-new.html` | [implementation-my-requests-attendance-new.md](./implementation-my-requests-attendance-new.md) | (portal) | Todo |
| 80 | `invalid-company.html` | [implementation-invalid-company.md](./implementation-invalid-company.md) | (auth/standalone) | Todo |

---

## Agent loop instructions

- **One plan = one agent run.** Do not combine multiple plans in one session if token budget is tight.
- **Resume from index:** If the session is cut off, the next agent should open `MOCKUP-IMPLEMENTATION-INDEX.md`, find the first row with Status = Todo and a plan file that exists, and execute that plan.
- **Creating missing plans:** If a plan file is missing, create it using `docs/prompt/implementation-plan.md` and the mockup at `docs/mockups/<mockup>.html`. Save as `docs/plans/implementation-<slug>.md` (slug = mockup basename without .html, e.g. `employees` → `implementation-employees.md`).
- **Non-auth, mock-data only:** For resumable multi-agent runs that skip auth and use mock data, use **[AGENT-LOOP-RUNNER.md](./AGENT-LOOP-RUNNER.md)**. It lists all non-auth plans in batches and provides a copy-paste prompt for spawning or continuing agent loops. Implementation agent prompt: `docs/prompt/implementation-task.md`.
