# Full User Flow — Multi-Tenant SaaS Payroll System

## Philippine Labor Code & BIR Compliance | Schema v2.0

---

## Table of Contents

1. [User Types & Roles](#1-user-types--roles)
2. [Flow 1: Registration & Authentication](#2-flow-1-registration--authentication)
3. [Flow 2: Company Onboarding (Owner)](#3-flow-2-company-onboarding-owner)
4. [Flow 3: Team Setup — Departments, Positions & Users](#4-flow-3-team-setup--departments-positions--users)
5. [Flow 4: Employee Onboarding](#5-flow-4-employee-onboarding)
6. [Flow 5: Daily Time & Attendance](#6-flow-5-daily-time--attendance)
7. [Flow 6: Leave Management](#7-flow-6-leave-management)
8. [Flow 7: Overtime & Time Requests](#8-flow-7-overtime--time-requests)
9. [Flow 8: Payroll Processing](#9-flow-8-payroll-processing)
10. [Flow 9: Government Contributions & BIR Compliance](#10-flow-9-government-contributions--bir-compliance)
11. [Flow 10: Employee Separation & Final Pay](#11-flow-10-employee-separation--final-pay)
12. [Flow 11: DOLE Compliance (Incidents, Training, Disciplinary)](#12-flow-11-dole-compliance)
13. [Data Isolation & Security Model](#13-data-isolation--security-model)
14. [State Machines](#14-state-machines)

---

## 1. User Types & Roles

### Who can use this system?

| User Type                       | `users` | `company_users`  | `employees` | Example                                      |
| ------------------------------- | ------- | ---------------- | ----------- | -------------------------------------------- |
| Company Owner                   | Yes     | Yes (owner)      | Optional    | Founder who processes payroll                |
| HR Manager                      | Yes     | Yes (hr / admin) | Optional    | HR staff managing employees                  |
| Payroll Accountant              | Yes     | Yes (accountant) | No          | External accountant with no employee record  |
| Manager / Supervisor            | Yes     | Yes (manager)    | Yes         | Team lead who approves OT requests           |
| Rank-and-File Employee          | Yes     | Yes (viewer)     | Yes         | Employee who views payslips                  |
| Blue-collar / No-login Employee | No      | No               | Yes         | Factory worker — payroll-only, no app access |

### Role Permission Matrix

| Permission              | owner | admin | hr  | accountant | manager | viewer |
| ----------------------- | :---: | :---: | :-: | :--------: | :-----: | :----: |
| Manage company settings |  Yes  |  Yes  | No  |     No     |   No    |   No   |
| Manage employees        |  Yes  |  Yes  | Yes |     No     |   No    |   No   |
| Process payroll         |  Yes  |  Yes  | No  |    Yes     |   No    |   No   |
| Approve overtime        |  Yes  |  Yes  | Yes |     No     |   Yes   |   No   |
| View reports            |  Yes  |  Yes  | Yes |    Yes     |   Yes   |  Yes   |
| View own payslip        |   —   |   —   |  —  |     —      |   Yes   |  Yes   |

---

## 2. Flow 1: Registration & Authentication

### 1A. New User Registration (Password)

```
User visits app
  │
  ├─► Chooses "Sign up with Email"
  │     │
  │     ├─► Enters: name, email, password
  │     │
  │     ├─► System:
  │     │     - Validates password strength
  │     │     - Creates users record (UUID PK)
  │     │     - Creates user_authentications record
  │     │       - bcrypt hash (12 rounds) + salt stored
  │     │       - email_verified = false
  │     │       - Sends verification email (token stored in email_verification_token)
  │     │
  │     └─► User clicks email verification link
  │           - email_verified = true
  │           - JWT issued (access token 1hr + refresh token 7 days)
  │
  └─► Redirected to: Company Setup (Flow 2) OR Company Selection
```

### 1B. OAuth Registration / Login (Google / Facebook / Apple)

```
User clicks "Continue with Google"
  │
  ├─► OAuth provider returns profile (email, name, picture, provider_id)
  │
  ├─► System checks: does users.email already exist?
  │     ├─► YES: Link provider to existing user
  │     │         - INSERT INTO user_providers (user_id, provider, provider_id)
  │     └─► NO:  Create new users record
  │               - INSERT INTO user_providers (new user_id, provider, provider_id)
  │
  ├─► JWT issued
  └─► Redirected to: Company Setup OR Company Selection
```

### 1C. Login (Password)

```
User enters email + password
  │
  ├─► System looks up: users JOIN user_authentications
  │
  ├─► Lockout check:
  │     - permanent_lock = true? → Reject (account permanently locked)
  │     - locked_until > NOW()? → Reject (show minutes remaining)
  │
  ├─► Password verification (bcrypt compare)
  │     ├─► FAIL:
  │     │     - failed_login_attempts++
  │     │     - last_failed_login_at = NOW()
  │     │     - If attempts >= 5: locked_until = NOW() + 15min
  │     │     - Return: "Invalid credentials"
  │     │
  │     └─► SUCCESS:
  │           - failed_login_attempts = 0
  │           - users.last_login = NOW()
  │           - JWT issued
  │           - Redirected to Company Selection
```

### 1D. Password Reset

```
User clicks "Forgot Password"
  │
  ├─► Enters email address
  ├─► System generates password_reset_token + expiry (usually 1hr)
  │     - Stored in user_authentications
  │     - Reset email sent
  │
  ├─► User clicks link in email
  ├─► Enters new password
  └─► System:
        - Validates token not expired
        - Updates password_hash + password_salt
        - Clears reset token
        - Resets failed_login_attempts = 0, locked_until = NULL
        - Sends confirmation email
```

### 1E. Multi-Company Login (Company Selection)

```
After login, user has JWT
  │
  ├─► System fetches: SELECT * FROM company_users WHERE user_id = :user_id AND is_active = true
  │
  ├─► 0 companies: Redirect to "Create or Join a Company"
  ├─► 1 company:   Auto-select, set session context
  └─► N companies: Show company picker UI
        │
        └─► User selects company
              - Session context: app.current_company_id = :company_id
              - RLS enforced on all subsequent queries
```

---

## 3. Flow 2: Company Onboarding (Owner)

```
New user with no company
  │
  ├─► Step 1: Basic Info
  │     - company_name (required)
  │     - company_code (unique slug, e.g., "ACME")
  │     - email, phone, address, city, country
  │     - website (optional)
  │
  ├─► Step 2: Business & Tax Registration
  │     - business_registration_no (SEC/DTI)
  │     - tax_identification_no (TIN)
  │     - rdo_code (BIR Revenue District Office — for 1601-C filing)
  │     - region_code (NCR, CAR, Region I … — drives minimum wage compliance)
  │
  ├─► Step 3: Payroll Settings
  │     - payroll_frequency: weekly | bi-monthly | monthly
  │     - working_days_per_year:
  │         313 = 6-day work week (365 − 52 Sundays)  [DEFAULT]
  │         261 = 5-day work week (365 − 104 Sat/Sun)
  │         Custom value allowed
  │     - default_grace_period_minutes (default: 15)
  │     - default_break_minutes (default: 60)
  │
  ├─► Step 4: Subscription Plan
  │     - starter / professional / enterprise
  │     - max_employees set by plan
  │     - subscription_status = 'trial' initially
  │
  └─► System creates:
        - companies record (owner_user_id = authenticated user)
        - company_users record (role = 'owner', all permissions = true)
        - Nationwide holidays seeded (2025-2026 Philippine holidays)
        - Global time_entry_types available (OT, Holiday, Night Diff, Leave types)
```

---

## 4. Flow 3: Team Setup — Departments, Positions & Users

### 3A. Create Departments (HR / Admin)

```
HR navigates to: Organization → Departments
  │
  ├─► Create root department (e.g., "Engineering", code: "ENG")
  │     - company_id auto-set from session
  │     - parent_department_id = NULL
  │
  └─► Create sub-department (e.g., "Backend", code: "ENG-BE")
        - parent_department_id = Engineering.id
        - Supports unlimited nesting (hierarchical via parent_department_id)
```

### 3B. Create Positions (HR / Admin)

```
HR navigates to: Organization → Positions
  │
  ├─► Create position (e.g., "Software Engineer", code: "SWE")
  │     - is_managerial = false
  │         → Entitled to OT, rest day premium, holiday premium, night diff
  │         → Per Labor Code Article 82
  │
  ├─► Create managerial position (e.g., "VP Engineering", code: "VP-ENG")
  │     - is_managerial = true
  │         → NOT entitled to OT, rest day premium, holiday premium, night diff
  │         → Per Labor Code Article 82
  │
  └─► Create minimum wage position (e.g., "Production Worker", code: "PROD")
        - minimum_wage_exempt = true
            → OT, holiday, and night diff pay are TAX-EXEMPT per TRAIN Law
```

### 3C. Invite Team Members (Admin / Owner)

```
Owner/Admin navigates to: Team → Invite Member
  │
  ├─► Enters: email address + role (admin / hr / manager / accountant / viewer)
  ├─► Sets permissions:
  │     can_approve_overtime, can_process_payroll,
  │     can_manage_employees, can_view_reports
  │
  ├─► System sends invitation email
  │
  └─► Invitee accepts:
        - If user exists: company_users record created
        - If new user: Registration flow (1A) → company_users record created
        - employee_id remains NULL (they are app users, not necessarily employees)
```

---

## 5. Flow 4: Employee Onboarding

### 4A. Create Employee Record (HR)

```
HR navigates to: Employees → Add Employee
  │
  ├─► Step 1: Personal Info
  │     - employee_no (unique per company, e.g., "EMP-001")
  │     - employee_name
  │     - birthday
  │     - email (work email — independent of login email)
  │     - phone, address
  │
  ├─► Step 2: Employment Details
  │     - date_hired (required)
  │     - employment_status:
  │         REGULAR         → Full benefits, SIL eligible
  │         PROBATIONARY    → Limited benefits, monitoring period
  │         CONTRACTUAL     → Project-based, different benefit rules
  │         PROJECT_BASED   → Ends on project completion
  │         SEASONAL        → Cyclical work
  │     - department_id (optional, can assign later)
  │     - position_id (optional, can assign later)
  │     - manager_id (optional — sets approval chain)
  │
  ├─► Step 3: Government IDs
  │     - tin (BIR Tax ID)
  │     - sss_no (Social Security System)
  │     - hdmf_no (Pag-IBIG)
  │     - philhealth_no
  │
  ├─► Step 4: Salary
  │     - salary_amount (monthly rate)
  │     - effective_date (usually date_hired)
  │     - working_days_per_year (optional override; falls back to company default → 313)
  │     - System trigger auto-computes:
  │         daily_rate  = (salary_amount × 12) ÷ working_days_per_year
  │         hourly_rate = daily_rate ÷ 8
  │         working_days_used stored for audit trail
  │     - is_current = true (previous records set to false)
  │
  ├─► Step 5: Tax Information (BIR)
  │     - atc_code:
  │         WC010 = Rank and File (default)
  │         WC020 = Managerial/Supervisory
  │         WC030 = Minimum Wage Earner
  │         WC040 = Government Employee
  │         WC050 = Multiple employers
  │     - exemption_code: S, ME, ME1-4, S1-4
  │     - is_substitute_filing (default: true — employer files on behalf)
  │     - rdo_code (employee's BIR RDO)
  │     - has_previous_employer? → enter previous employer compensation data
  │         (for mid-year hires, used in BIR 2316 year-end computation)
  │
  ├─► Step 6: App Access (Optional)
  │     - Link to existing user account (user_id)?
  │         → updates employees.user_id
  │         → updates company_users.employee_id (creates company_users if not exists)
  │     - Or: invite employee to create account (sends email)
  │     - Or: leave as payroll-only (no app access)
  │
  └─► Step 7: Leave Balance Initialization
        - System creates leave_balances records:
            LEAVE_VACATION  — per company policy
            LEAVE_SICK      — per company policy
            LEAVE_EMERGENCY — per company policy
        - For 1+ year employees: minimum 5 days SIL per Labor Code Article 95
        - carried_over from previous year if applicable
```

### 4B. Set Up Manager Hierarchy

```
HR navigates to: Employee → Edit → Manager
  │
  ├─► Assigns manager_id (another employee in same company)
  │
  ├─► System validates: no circular references allowed
  │     (A cannot manage B if B already manages A directly or up the chain)
  │
  └─► Resulting tree drives approval workflow:
        Employee files request → Goes to direct manager (manager_id)
        Manager approves → Escalated to manager's manager if needed
        Max chain depth: 10 levels enforced by is_manager_of() function
```

### 4C. Salary Change / Promotion

```
HR navigates to: Employee → Salary History → Add Entry
  │
  ├─► Enters:
  │     - salary_amount (new monthly rate)
  │     - effective_date
  │     - remarks (e.g., "Annual increment", "Promotion to Senior")
  │
  ├─► System:
  │     - Sets previous salary_history.is_current = false
  │     - Inserts new record with is_current = true
  │     - Trigger computes new daily_rate and hourly_rate
  │     - Updates employees.is_minimum_wage_earner if salary changes category
  │
  └─► Audit trail preserved — all salary history retained (soft delete only, BIR 10-year)
```

---

## 6. Flow 5: Daily Time & Attendance

### 5A. Daily Time Record Entry (HR or Employee)

```
HR or Employee navigates to: Attendance → Log Time
  │
  ├─► Selects work_date
  ├─► Enters time_in + time_out (TIMESTAMP, handles overnight shifts)
  ├─► break_minutes (default from company settings)
  │
  ├─► System trigger auto-computes (trg_compute_work_shift_hours):
  │     actual_hours    = time_out − time_in − break_minutes
  │     late_hours      = time_in − scheduled_time_in (after grace period)
  │     undertime_hours = scheduled_time_out − time_out (if left early)
  │     night_diff_hours = overlap of work hours with 10PM–6AM window
  │                        (per Labor Code Article 86)
  │     billable_hours  = actual_hours (updated by approval/lock flow)
  │
  ├─► Status: 'draft' (can be edited)
  │
  └─► Checks for holiday:
        System queries holidays table for work_date:
        - Regular holiday → REGULAR_HOLIDAY entry type (200% pay)
        - Special holiday → SPECIAL_HOLIDAY entry type (130% pay)
        - Double regular  → DOUBLE_HOLIDAY entry type (300% pay)
        - Nationwide (company_id IS NULL) OR company-specific
```

### 5B. Time Entry Approval Flow

```
Status: draft → pending → approved / rejected
  │
  ├─► Employee submits → status = 'pending'
  │
  ├─► Notification sent to direct manager (manager_id)
  │
  ├─► Manager reviews:
  │     - View employee's work_shift detail
  │     - Can excuse late (is_excused_late = true)
  │     - Can excuse undertime (is_excused_undertime = true)
  │     - Adds review_notes
  │
  ├─► APPROVE:
  │     - approved_by = manager employee_id
  │     - approved_at = NOW()
  │     - status = 'approved'
  │     - Time allocations auto-created in time_allocations table
  │
  └─► REJECT:
        - status = 'rejected'
        - review_notes required
        - Employee notified; can edit and resubmit (status resets to 'draft')
```

### 5C. Time Allocations (Breakdown per Entry Type)

```
After approval, time_allocations records are created:
  │
  ├─► Regular hours (up to 8hrs) → REGULAR entry type (rate_multiplier: 1.00)
  ├─► Overtime hours             → OT_REGULAR entry type (rate_multiplier: 1.25)
  ├─► Night diff hours           → NIGHT_DIFF entry type (rate_multiplier: 0.10 additional)
  └─► Holiday hours              → REGULAR_HOLIDAY / SPECIAL_HOLIDAY / DOUBLE_HOLIDAY
        - is_auto_generated = true for system-detected holiday allocations
        - Linked to time_request if triggered by a request
```

---

## 7. Flow 6: Leave Management

### 6A. Employee Files a Leave Request

```
Employee navigates to: Leave → Apply for Leave
  │
  ├─► Selects leave type: LEAVE_VACATION / LEAVE_SICK / LEAVE_EMERGENCY / LEAVE_UNPAID
  ├─► Selects request_date(s)
  ├─► Enters reason
  │
  ├─► System checks leave_balances:
  │     remaining_credits = total_credits − used_credits − pending_credits
  │     ├─► Sufficient credits? → Allow submission
  │     └─► Insufficient? → Warn employee (can still submit for unpaid)
  │
  ├─► pending_credits += requested days (reserved while pending)
  ├─► time_requests record created (status: 'pending')
  └─► Manager notified
```

### 6B. Manager Approves / Rejects Leave

```
Manager navigates to: Approvals → Pending Requests
  │
  ├─► Views leave request details (employee name, dates, reason, balance)
  │
  ├─► APPROVE:
  │     - time_requests.status = 'approved'
  │     - leave_balances.used_credits += requested_hours / 8
  │     - leave_balances.pending_credits -= requested_hours / 8
  │     - leave_balance_transactions INSERT:
  │         transaction_type = 'USAGE'
  │         credits = negative (deduction)
  │         balance_after computed
  │         reference_type = 'time_request', reference_id = request.id
  │
  └─► REJECT:
        - time_requests.status = 'rejected'
        - leave_balances.pending_credits -= requested_hours / 8 (released back)
        - leave_balance_transactions INSERT:
            transaction_type = 'ADJUSTMENT' (reversal of pending)
```

### 6C. Leave Accrual & Year-End Processing (System / HR)

```
System (or HR manually) runs periodic accrual:
  │
  ├─► Monthly accrual (e.g., SIL: 5 days / 12 months = 0.417 days/month)
  │     - leave_balances.total_credits += accrual_amount
  │     - leave_balance_transactions INSERT:
  │         transaction_type = 'ACCRUAL'
  │         credits = +0.417
  │
  └─► Year-end (December 31):
        ├─► Carry-over:
        │     - carried_over = remaining_credits (up to company policy max)
        │     - New year leave_balances record created with carried_over amount
        │     - leave_balance_transactions: transaction_type = 'CARRY_OVER'
        │
        └─► Forfeiture:
              - Any remaining above carry-over limit is forfeited
              - leave_balance_transactions: transaction_type = 'FORFEITURE'
              - credits = negative (forfeited amount)
```

---

## 8. Flow 7: Overtime & Time Requests

### 7A. Employee Files Overtime Request

```
Employee navigates to: Requests → Overtime Request
  │
  ├─► Selects: request_date, time_entry_type (OT_REGULAR, OT_REST_DAY, OT_REGULAR_HOLIDAY …)
  ├─► Enters: time_from (OT start datetime), time_to (OT end datetime), reason, purpose
  │     requested_hours is NOT entered by the user — the DB trigger
  │     trg_compute_time_request_hours auto-calculates it from time_from / time_to.
  │
  ├─► System checks: is position managerial? (positions.is_managerial = true)
  │     → If YES: OT is not applicable; block or warn
  │     → Per Labor Code Article 82
  │
  ├─► time_requests record created (status: 'pending')
  │     time_from and time_to stored; requested_hours set by trigger
  └─► Manager notified
```

### 7B. Manager Approves Overtime

```
Manager reviews request:
  │
  ├─► Validates: can_approve_overtime = true in company_users
  │
  ├─► APPROVE:
  │     - time_requests.status = 'approved'
  │     - reviewed_by = manager.id, reviewed_at = NOW()
  │     - time_allocations record created:
  │         work_shift_id = related shift
  │         time_entry_type_id = OT type selected
  │         hours = requested_hours (auto-computed from time_from/time_to)
  │     - work_shift approved hours updated
  │
  └─► REJECT:
        - status = 'rejected'
        - review_notes required
```

### 7C. Overtime Pay Rate Reference

| Entry Type         | Rate Multiplier | Notes                             |
| ------------------ | --------------- | --------------------------------- |
| OT_REGULAR         | 1.25×           | Regular day overtime              |
| OT_REST_DAY        | 1.69×           | Rest day overtime                 |
| OT_REGULAR_HOLIDAY | 2.60×           | Regular holiday overtime          |
| OT_SPECIAL_HOLIDAY | 1.69×           | Special holiday overtime          |
| REGULAR_HOLIDAY    | 2.00×           | Working on regular holiday        |
| SPECIAL_HOLIDAY    | 1.30×           | Working on special holiday        |
| DOUBLE_HOLIDAY     | 3.00×           | Two regular holidays on same day  |
| NIGHT_DIFF         | +0.10×          | Additional 10% for 10PM–6AM hours |

---

## 9. Flow 8: Payroll Processing

### 8A. Create Payroll Period (Admin / Accountant)

```
Payroll Admin navigates to: Payroll → New Period
  │
  ├─► Enters:
  │     - period_start, period_end
  │     - pay_date (disbursement date)
  │
  ├─► System validates: no overlapping period for this company
  ├─► payroll_periods record created (status: 'draft')
  └─► Ready for computation
```

### 8B. Compute Payroll (Admin / Accountant)

```
Payroll Admin clicks: Compute Payroll
  │
  ├─► Atomic lock: SELECT FOR UPDATE on period row
  │     - Transitions draft → processing (sets processing_started_at = NOW())
  │     - If already processing: 409 Computation already running
  │
  ├─► For each active employee in company (sequential, not parallel):
  │
  │   0. MWE CHECK
  │      - Re-evaluate is_minimum_wage_earner against current minimum_wage_rates
  │      - Updates employee flag if changed (affects tax exemption for OT/holiday/ND)
  │
  │   1. RESOLVE SALARY
  │      - Query salary_history WHERE is_current = true AND employee_id = :id
  │      - Snapshot: basic_salary = salary_amount (monthly rate reference, stored for audit)
  │      - Compute basic_pay for period:
  │          Monthly:     basic_salary × 1
  │          Bi-monthly:  basic_salary ÷ 2
  │          Weekly:      (basic_salary × 12) ÷ 52
  │          Adjust for actual days worked if < full period (pro-ration)
  │
  │   2. COLLECT APPROVED TIME
  │      - Query work_shifts WHERE status = 'approved' AND work_date BETWEEN period dates
  │      - Query time_allocations for each shift (used for OT, ND, holiday breakdown)
  │      - night_differential_hours: from time_allocations (code = 'NIGHT_DIFF'),
  │        NOT from work_shifts.night_diff_hours (allocations may be HR-adjusted)
  │      - Total: rendered_hours, overtime_hours, regular_holiday_hours,
  │               special_holiday_hours, night_differential_hours, leave_hours
  │
  │   3. COMPUTE EARNINGS
  │      - overtime_cost: SUM(hours × hourly_rate × rateMultiplier) from time_allocations
  │        (multiplier always read from time_entry_types.rate_multiplier — never hardcoded)
  │      - regular_holiday_cost = regularHolidayDays × daily_rate × 2.00
  │        (daily rate for first 8 hrs; OT_REGULAR_HOLIDAY rate for excess hours)
  │      - special_holiday_cost = specialHolidayDays × daily_rate × 1.30
  │      - night_differential_cost = night_diff_hours × hourly_rate × 0.10
  │      - leave_cost = leave_hours × hourly_rate
  │      - de_minimis: from de_minimis_entries; non-taxable portion per RR 29-2025 limits
  │      - thirteenth_month_pay = ytd_basic_pay (basic_pay accumulated, NOT basic_salary) ÷ 12
  │        Non-taxable up to PHP 90,000/year combined; excess = taxable_13th_month
  │
  │   4. COMPUTE DEDUCTIONS
  │      a) SSS (SSS Circular 2024-020 — effective January 2025)
  │         - Find MSC bracket: SELECT ... WHERE min_salary ≤ monthlySalary ≤ max_salary
  │         - sss_contribution = bracket.employee_contribution (EE share, ~5% of MSC)
  │         - sss_employer    = bracket.employer_contribution (ER share, ~10% of MSC)
  │         - WISP/MPF (only when bracket.min_salary ≥ PHP 20,250):
  │             sss_wisp_employee = bracket.wisp_employee
  │             sss_wisp_employer = bracket.wisp_employer
  │         - ec_contribution: looked up using MSC from bracket (bracket.ec_contribution)
  │           (NOT a direct salary range query — EC uses MSC as the key)
  │         - Bi-monthly 2nd cut / weekly non-first-payroll: zero SSS deduction
  │
  │      b) PhilHealth (PhilHealth Circular 2024-0014)
  │         - If computation method = FIXED (≤ PHP 10,000): PHP 250 EE + PHP 250 ER
  │         - If computation method = PERCENTAGE: 2.5% EE + 2.5% ER
  │         - Cap: PHP 100,000 salary ceiling → max PHP 2,500 EE + PHP 2,500 ER/month
  │         - Bi-monthly 2nd cut / weekly non-first-payroll: zero PhilHealth deduction
  │
  │      c) Pag-IBIG / HDMF
  │         - If MFS ≤ PHP 1,500: EE 1%, ER 2%
  │         - If MFS > PHP 1,500: EE 2%, ER 2%
  │         - MFS cap: PHP 10,000 → max EE PHP 200 + ER PHP 200
  │         - Bi-monthly 2nd cut / weekly non-first-payroll: zero HDMF deduction
  │
  │      d) Withholding Tax (TRAIN Law — RR 10-2008 annualization method)
  │         - Taxable income = gross_pay
  │             − non_taxable_contributions (SSS + PhilHealth + HDMF EE shares)
  │             − non_taxable_de_minimis (within RR 29-2025 per-benefit limits)
  │             − non_taxable_13th_month (up to remaining PHP 90,000 annual exemption)
  │             − non_taxable_ot_holiday_nd (if is_minimum_wage_earner = true)
  │         - Include previous employer taxable income if has_previous_employer = true
  │         - Annualize: (cumulative_taxable ÷ periodNumber) × totalPeriodsInYear
  │         - Apply TRAIN Law tax brackets:
  │             ≤ PHP 250,000:             0%
  │             PHP 250,001–400,000:       15% of excess over 250,000
  │             PHP 400,001–800,000:       PHP 22,500 + 20% of excess
  │             PHP 800,001–2,000,000:     PHP 102,500 + 25% of excess
  │             PHP 2,000,001–8,000,000:   PHP 402,500 + 30% of excess
  │             Over PHP 8,000,000:        PHP 2,202,500 + 35% of excess
  │         - De-annualize; subtract YTD withheld; divide by remaining periods
  │         - December only: year-end reconciliation (cumulative method, settle over/under)
  │         - Full details stored in tax_computation_details JSONB for audit
  │
  │      e) Loan deductions
  │         - sss_loan, hdmf_loan, advances (monthly amortization from employee_loans)
  │
  │      f) Attendance deductions
  │         - late_deduction = late_hours × hourly_rate (unexcused only)
  │         - undertime_deduction = undertime_hours × hourly_rate (unexcused only)
  │         - absence_deduction = absent_days × daily_rate
  │
  │   5. STORE RESULTS (per-employee transaction)
  │      - UPSERT payroll_records (unique on company_id, employee_id, payroll_period_id)
  │      - gross_pay, total_deductions, net_pay auto-computed by DB generated columns
  │      - DELETE + INSERT payroll_earnings (normalized earning rows per type)
  │      - DELETE + INSERT payroll_deductions (normalized deduction rows per type)
  │      - INCREMENT employee_ytd_totals (ytd_basic_salary += basic_pay, etc.)
  │      - status = 'computed'
  │
  └─► payroll_periods.status = 'computed'
      payroll_periods.processed_by = current user.id
      payroll_periods.processed_at = NOW()
      payroll_periods.processing_started_at = NULL (cleared)
      payroll_periods.computation_version = current app version
```

### 8C. Payroll Review & Approval

```
Admin/Owner navigates to: Payroll → Review
  │
  ├─► View payroll summary: total gross, total deductions, total net pay
  ├─► Drill down: per-employee breakdown
  ├─► Check alerts:
  │     - Employees without approved time
  │     - Salary changes applied this period
  │     - MWE flag changes
  │
  ├─► Make adjustments if needed:
  │     - payroll_adjustments record created for every manual change
  │         field_name, old_value, new_value, difference (generated), reason, adjusted_by
  │     - Significant adjustments require approval (requires_approval = true)
  │
  ├─► APPROVE:
  │     - payroll_periods.status = 'approved'
  │     - payroll_periods.approved_by = current user.id
  │     - payroll_periods.approved_at = NOW()
  │
  └─► REJECT → Back to 'draft' for corrections
```

### 8D. Generate & Distribute Payslips

```
Admin navigates to: Payroll → Distribute Payslips
  │
  ├─► For each employee in payroll period:
  │     - Generate PDF payslip
  │     - file_reference stored (S3 path, etc.)
  │     - file_hash = SHA-256 (integrity check)
  │
  ├─► Distribution methods:
  │     EMAIL:  Send to employee's email, email_status tracked (pending → sent → delivered / bounced)
  │     PORTAL: Employee self-serve download (viewed_at, downloaded_at, view_count tracked)
  │     PRINT:  Mark as printed
  │     SMS_LINK: Send SMS with link
  │
  └─► payslip_distribution records created for each employee+method
```

### 8E. Mark Payroll as Paid

```
Admin records payment:
  │
  ├─► payroll_periods.status = 'paid'
  ├─► payroll_records.payment_date = actual pay date
  ├─► payroll_records.payment_method = 'bank_transfer' / 'cash' / 'check'
  └─► payroll_records.payment_reference = bank reference number
```

### 8F. Payroll Recomputation

```
If corrections are needed after approval:
  │
  ├─► Admin initiates recomputation
  ├─► New payroll_periods record created:
  │     recomputed_from = original period.id
  │     recomputation_reason = reason text
  │     computation_version = new app version
  │
  └─► Full recomputation runs (Flow 8B)
      Original period soft-deleted or marked cancelled
```

---

## 10. Flow 9: Government Contributions & BIR Compliance

### 9A. Monthly Government Remittance

```
Accountant navigates to: Compliance → Government Remittances
  │
  ├─► After payroll is 'paid', generate remittance reports:
  │
  │   SSS (R-3 / R-5):
  │   - Total: sss_contribution + sss_wisp_employee (employee shares)
  │   - Total: sss_employer + sss_wisp_employer + ec_contribution (employer shares)
  │   - Per-employee: monthly_salary_credit (MSC bracket)
  │   - SSS loan deductions reported on R-5
  │
  │   PhilHealth (RF-1):
  │   - Total: philhealth_contribution (EE) + philhealth_employer (ER)
  │   - Per-employee breakdown
  │
  │   Pag-IBIG / HDMF (RF-1):
  │   - Total: hdmf_contribution (EE) + hdmf_employer (ER)
  │   - HDMF loan deductions reported separately
  │
  └─► government_remittances record created:
        amount, due_date, filed_date, reference_no, status (pending/filed/paid)
```

### 9B. BIR 1601-C (Monthly Withholding Tax)

```
Accountant navigates to: Compliance → BIR → 1601-C
  │
  ├─► System aggregates: SUM(withholding_tax) for the month
  ├─► Generates BIR Form 1601-C data
  ├─► bir_form_submissions record created:
  │     form_type = '1601-C'
  │     period_start, period_end
  │     total_amount_withheld
  │     filing_date, payment_date, reference_no
  │
  └─► Filed with BIR eFPS / eBIRForms
```

### 9C. BIR Form 2316 (Year-End Certificate)

```
Accountant navigates to: Compliance → BIR → 2316
  │
  ├─► For each employee (or resigned employees during year):
  │
  │   1. AGGREGATE year's payroll_records:
  │      - Total gross_compensation
  │      - Total non_taxable_contributions (SSS + PhilHealth + HDMF)
  │      - Total non_taxable_de_minimis
  │      - Total non_taxable_13th_month (up to PHP 90K)
  │      - Total taxable_13th_month (excess above PHP 90K)
  │      - Total taxable_de_minimis_excess
  │      - Total other_taxable_benefits
  │      - Total withholding_tax (total tax withheld for year)
  │
  │   2. INCLUDE previous employer data (if has_previous_employer = true):
  │      - previous_gross_compensation
  │      - previous_tax_withheld
  │      - previous_non_taxable_compensation
  │
  │   3. GENERATE 2316 PDF
  │      - employee_tax_info.atc_code
  │      - employee_tax_info.exemption_code
  │      - Signed by company (company_name, TIN, RDO)
  │
  │   4. UPDATE employee_tax_info:
  │      - last_2316_year = current year
  │      - last_2316_issued_date = TODAY
  │      - last_2316_reference = generated reference no.
  │
  └─► Distribute via email or portal (payslip_distribution flow)
```

### 9D. BIR Alphalist (Annual)

```
Accountant navigates to: Compliance → BIR → Alphalist
  │
  ├─► System generates annual alphalist:
  │     For each employee: name, TIN, atc_code, exemption_code,
  │     total compensation, tax withheld, non-taxable amounts
  │
  ├─► bir_form_submissions record:
  │     form_type = '1604-CF' (annual ITR)
  │
  └─► Exported in BIR DAT format for eFPS submission
```

---

## 11. Flow 10: Employee Separation & Final Pay

### 10A. Process Resignation / Termination

```
HR navigates to: Employees → [Employee] → Separation
  │
  ├─► Step 1: Separation Details
  │     - separation_date
  │     - separation_type:
  │         RESIGNATION
  │         TERMINATION_JUST_CAUSE
  │         TERMINATION_AUTHORIZED_CAUSE
  │         RETRENCHMENT
  │         REDUNDANCY
  │         END_OF_CONTRACT
  │         RETIREMENT
  │         DEATH
  │     - last_working_day
  │
  ├─► Step 2: Final Pay Computation
  │     - prorated_salary (days worked in final period)
  │     - prorated_13th_month (months worked / 12 × annual basic)
  │     - unused_leave_conversion (remaining leave credits × daily_rate)
  │
  │   - separation_pay (if applicable):
  │       years_of_service = (last_working_day − date_hired) / 365
  │       separation_pay_formula:
  │         ONE_MONTH_PER_YEAR:            Redundancy / closure (Article 298)
  │         HALF_MONTH_PER_YEAR:           Retrenchment (Article 298)
  │         RA_7641_RETIREMENT:            22.5 days × years_of_service
  │       separation_pay = daily_rate × formula_days × years_of_service
  │
  │   - Deductions:
  │       outstanding_loans, outstanding_advances, other_deductions
  │
  │   - Tax adjustment:
  │       tax_refund (if over-withheld during year)
  │       additional_tax_due (if under-withheld)
  │
  │   Generated columns:
  │       gross_final_pay = prorated_salary + prorated_13th_month
  │                       + unused_leave_conversion + separation_pay
  │       total_deductions = outstanding_loans + outstanding_advances + other_deductions
  │       net_final_pay = gross_final_pay − total_deductions
  │                     + tax_refund − additional_tax_due
  │
  ├─► Step 3: Clearance & Release
  │     - status = 'draft' → 'approved' → 'released'
  │     - released_date must be within 30 days of separation_date
  │       (DOLE Labor Advisory 06-20 compliance)
  │     - System warns if 30-day deadline is approaching
  │
  └─► Step 4: Employee Record Update
        - employees.date_resigned = last_working_day
        - company_users.is_active = false (revokes app access)
        - Issue BIR Form 2316 for the year
```

---

## 12. Flow 11: DOLE Compliance

### 11A. Work Incident Reporting

```
HR navigates to: Compliance → Incidents → Report Incident
  │
  ├─► incident_date, incident_type (WORK_ACCIDENT / OCCUPATIONAL_ILLNESS / NEAR_MISS)
  ├─► severity (MINOR / MAJOR / FATAL / FIRST_AID_ONLY)
  ├─► location, description, body_part_affected, injury_type
  │
  ├─► Medical treatment:
  │     - medical_treatment_required, hospital_name, days_lost
  │
  ├─► DOLE reporting (if dole_reportable = true):
  │     - Work accidents with 1+ lost workday must be reported to DOLE
  │     - dole_reported = true, dole_report_date, dole_reference_no
  │
  └─► SSS EC Claim:
        - sss_ec_claim_filed = true, sss_ec_claim_number
```

### 11B. Employee Training Records

```
HR navigates to: Compliance → Training → Add Training
  │
  ├─► training_type (SAFETY / ORIENTATION / SKILLS / COMPLIANCE)
  ├─► training_title, training_date, duration_hours
  ├─► training_provider, trainer_name, training_mode (IN_PERSON / ONLINE / HYBRID)
  │
  ├─► Certification:
  │     - certificate_issued, certificate_number, certificate_expiry_date
  │
  └─► DOLE/TESDA compliance flags:
        - dole_required (mandatory safety training, etc.)
        - tesda_accredited
```

### 11C. Disciplinary Actions (Due Process Documentation)

```
HR navigates to: Compliance → Disciplinary → New Action
  │
  ├─► action_date, offense_type (TARDINESS / ABSENCE / INSUBORDINATION / MISCONDUCT)
  ├─► offense_severity (MINOR / SERIOUS / GRAVE)
  ├─► action_taken (VERBAL_WARNING / WRITTEN_WARNING / SUSPENSION / TERMINATION)
  │
  ├─► Due Process (required by Labor Code for just cause termination):
  │     1. notice_to_explain_issued = true, notice_to_explain_date
  │     2. employee_explanation recorded
  │     3. admin_hearing_conducted = true
  │     4. notice_of_decision_issued = true
  │
  ├─► Employee acknowledgment:
  │     - acknowledged_by_employee = true
  │     - OR refused_to_sign = true (legally valid with witnesses)
  │
  └─► Appeal:
        - appeal_filed = true
        - appeal_outcome (UPHELD / OVERTURNED / MODIFIED)
```

---

## 13. Data Isolation & Security Model

### Multi-Tenant Isolation

```
Every authenticated request:
  1. JWT validated (user identity)
  2. company_users checked (is this user active in this company?)
  3. PostgreSQL session variable set:
       SET app.current_company_id = :company_id
  4. Row Level Security (RLS) policies enforce isolation:
       Standard tables: company_id = current_setting('app.current_company_id')
       Shared tables:   company_id IS NULL OR company_id = current_setting(...)
       (holidays, time_entry_types, earning_types, deduction_types)
```

### Tables with RLS Enabled (32+)

| Category        | Tables                                                                 |
| --------------- | ---------------------------------------------------------------------- |
| Core            | departments, positions, employees, salary_history, employee_tax_info   |
| Leave           | leave_balances, leave_balance_transactions                             |
| Time            | work_shifts, time_requests, time_allocations                           |
| Payroll         | payroll_periods, payroll_records, payroll_earnings, payroll_deductions |
| Government      | employee_ytd_totals, bir_form_submissions, government_remittances      |
| Loans           | employee_loans, loan_payments, employee_advances                       |
| Separation      | employee_final_pay, de_minimis_entries                                 |
| DOLE            | employee_incidents, employee_training, employee_disciplinary_actions   |
| Audit           | payroll_adjustments, payslip_distribution, pay_disputes, audit_logs    |
| Shared (hybrid) | holidays, earning_types, deduction_types                               |

### Security Guarantees

- **JWT expiry**: Access token 1hr, refresh token 7 days
- **Account lockout**: 5 failed attempts → 15-minute lockout
- **Password security**: bcrypt (12 rounds) + salt stored separately
- **Soft deletes only**: No hard deletes on financial records (BIR 10-year retention)
- **Manager hierarchy**: is_manager_of() function validates approval authority (max 10 levels)
- **Audit trail**: Every payroll change logged in payroll_adjustments; every leave change in leave_balance_transactions

---

## 14. State Machines

### Payroll Period Status

```
[draft] ──── compute() + SELECT FOR UPDATE ────► [processing]
  ▲  ▲                                                  │
  │  │  (error / watchdog reset after 30 min)            │ all employees done
  │  │◄─────────────────────────────────────────────────┘
  │  │
  │  └── rejectToDraft()        [computed]
  │      (deletes records,         │      │
  │       rolls back YTD)          │      │ rejectToDraft()
  │                     approve()  │      └───────────────► [draft]
  │                                ▼
  │                           [approved]
  │                                │
cancel()                    mark-paid()
  │                                │
  ▼                                ▼
[cancelled]                     [paid]

recompute() on [paid] or [approved]:
  → soft-deletes original → rolls back YTD → creates new [draft] → full cycle
```

**`processing` status:** A transient intermediate state set atomically by `SELECT FOR UPDATE`. Only one computation run can be active per period at a time. A watchdog automatically resets periods stuck in `processing` for more than 30 minutes back to `draft`.

### Time Request / Work Shift Status

```
draft → pending → approved
               → rejected → (employee edits) → pending
               → cancelled
```

### Leave Balance Transactions

```
ACCRUAL      → adds total_credits
USAGE        → deducts from used_credits (on approval)
ADJUSTMENT   → manual correction by HR
CARRY_OVER   → year-end: credits moved to next year
FORFEITURE   → year-end: credits above carry-over limit lost
```

### Employee Final Pay Status

```
draft → approved → released
     → cancelled
```

### Payslip Distribution Status

```
pending → sent → delivered
               → bounced
               → failed
```

---

## Quick Reference: Key Business Rules

| Rule                                                                                   | Source                             |
| -------------------------------------------------------------------------------------- | ---------------------------------- |
| Overtime NOT applicable to managerial employees                                        | Labor Code Article 82              |
| Night diff = additional 10% for 10PM–6AM hours                                         | Labor Code Article 86              |
| Minimum 5 days SIL for employees with 1+ year service                                  | Labor Code Article 95              |
| Final pay must be released within 30 days                                              | DOLE Labor Advisory 06-20          |
| 13th month pay = SUM(basic_pay received in year) ÷ 12; divisor always 12               | PD 851                             |
| 13th month + other benefits exempt up to PHP 90,000/year                               | TRAIN Law (RA 10963)               |
| 13th month must be paid on or before December 24                                       | PD 851                             |
| MWE: OT, holiday, ND pay are fully tax-exempt                                          | TRAIN Law Section 32(B)(7)(h)      |
| SSS: 15% total (5% EE + 10% ER), MSC PHP 4K–35K                                        | SSS Circular 2024-020              |
| SSS WISP/MPF (1% EE + 1% ER) applies when MSC bracket min_salary ≥ PHP 20,250          | SSS Circular 2024-020              |
| SSS EC contribution uses MSC from bracket result, not raw salary                       | SSS rules                          |
| PhilHealth: 5% total (2.5% EE + 2.5% ER), ceiling PHP 100K                             | PhilHealth Circular 2024-0014      |
| Pag-IBIG: 1–2% EE + 2% ER, MFS cap PHP 10K                                             | RA 9679                            |
| Bi-monthly payroll: full monthly contribution on 1st cut only; 2nd cut = PHP 0         | Application rule                   |
| Weekly payroll: full monthly contribution on 1st payroll of each month only            | Application rule                   |
| Payroll adjustment ≥ PHP 1,000 (absolute difference) requires manager approval         | Application rule                   |
| Holiday pay = dailyRate × multiplier for first 8 hrs; OT formula only for excess hours | Labor Code Article 94              |
| Working days divisor (6-day week): 313                                                 | DOLE guidance                      |
| Working days divisor (5-day week): 261                                                 | DOLE guidance                      |
| Regular holiday pay: 200%                                                              | Labor Code Article 94              |
| Special non-working holiday pay: 130%                                                  | Exec. Order 203                    |
| Double regular holiday: 300%                                                           | DOLE Labor Advisory                |
| De minimis benefit limits                                                              | RR 29-2025 (effective Jan 6, 2026) |
| ytd_basic_salary column accumulates basic_pay (actual period pay), not monthly rate    | Application rule                   |
| BIR Alphalist filing: annual (1604-CF)                                                 | BIR regulations                    |
| BIR 1601-C: monthly withholding tax filing                                             | BIR regulations                    |
| BIR 2316: issued to every employee per year                                            | BIR regulations                    |
| Stuck processing periods (> 30 min) automatically reset to draft by watchdog           | Application rule                   |
