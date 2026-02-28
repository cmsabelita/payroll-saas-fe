# Molecules Implementation Plan (Updated)

**Source:** `docs/mockups/` — full set of HTML mockups (60+ pages).  
**Goal:** List **all possible molecule** components for `src/components/molecules/` so organisms and pages have the building blocks they need.  
**Rule:** Molecules compose **only atoms** from `@/components/atoms`. They must **not** import or render any other molecule. See §9 for implementation rules.  
**Reference:** `docs/ARCHITECTURE.md`, `docs/ATOMS-IMPLEMENTATION-PLAN-UPDATED.md`, existing `src/components/molecules/`.

---

## 1. Mockup coverage (pages re-evaluated)

Mockups were scanned across these areas:

| Area | Mockups | Notes |
|------|---------|--------|
| **Auth & onboarding** | login, signup, forgot-password, reset-password, verify-email, onboarding-company, onboarding-business, onboarding-payroll-settings, onboarding-plan | Forms, stepper, empty states |
| **Dashboard & portal** | dashboard, portal | KPIs, nav, sidebar, date range, list cards |
| **People** | employees, employees-new, employees-profile, employees-salary, employees-separation, employees-finalpay, organization-departments, organization-positions, team, team-id, team-invite | Tables, filters, tabs, avatars, role cards |
| **Time & requests** | attendance, attendance-id, my-attendance, my-requests, my-requests-*, approvals, approvals-id | Tabs, approve/reject, detail rows, file chips, timeline |
| **Payroll** | payroll, payroll-employees, payroll-payslips, payroll-adjust, payroll-employee-breakdown | Stepper, status, tables |
| **Compliance** | compliance, compliance-incidents, compliance-incidents-id, compliance-training, compliance-disciplinary, compliance-remittances, compliance-alphalist, compliance-bir-* | Underline tabs, KPIs, tables, timeline, attachments |
| **Reports & analytics** | reports, reports-payroll, reports-attendance, reports-leave, reports-government, reports-headcount | Report category cards, badges (PDF/Excel), tables |
| **Settings** | settings-company, settings-payroll-config, settings-holidays, settings-leave-policies, settings-billing, settings-integrations | Forms, plan cards, payment method block |
| **My account (portal)** | my-payslips, my-payslips-detail, my-profile | Summary blocks, payslip cards, breadcrumbs |
| **Marketing** | marketing-landing, marketing-pricing | Hero, pills, CTAs, pricing cards |
| **Other** | invalid-company | Empty/error state |

---

## 2. All molecules (inventory)

### 2.1 Already implemented

These exist in `src/components/molecules/` and are exported from the molecules index.

| # | Molecule | Description | Status |
|---|----------|-------------|--------|
| 1 | **Card** | Title + body container (Text + div). | ✅ Done |
| 2 | **FormField** | Label + Input (+ optional PasswordStrength, hint, error). | ✅ Done |
| 3 | **FormInput** | react-hook-form Controller + Label + Input + Text (hint/error). Atoms only. | ✅ Done |
| 4 | **FormTextarea** | Controller + Label + Textarea + Text (hint/error). | ✅ Done |
| 5 | **FormSelect** | Controller + Label + Select + Text (hint/error). | ✅ Done |
| 6 | **FormCheckbox** | Controller + Checkbox + Label + Text (hint/error). | ✅ Done |
| 7 | **FormRadioGroup** | Controller + Label + Radio × N + Text (hint/error). | ✅ Done |
| 8 | **FormSwitch** | Controller + Switch + Label + Text (hint/error). | ✅ Done |
| 9 | **FormDateInput** | Controller + Label + DateInput + Text (hint/error). | ✅ Done |
| 10 | **AuthTabs** | TabSegment × 2 (Sign In / Sign Up). | ✅ Done |
| 11 | **SocialLoginButtons** | Row of IconButtons. | ✅ Done |
| 12 | **EmptyState** | Icon in circle + heading + description (Box, Icon, Text). | ✅ Done |
| 13 | **StatCard** | Surface + Text (label, value, sublabel). | ✅ Done |
| 14 | **KpiCard** | Surface + optional icon/badge + value + label. | ✅ Done |
| 15 | **AlertBanner** | Icon + title + description; variants error/warning/info/success. | ✅ Done |
| 16 | **ListCard** | Surface + title + optional Badge + children slot + optional “View all” Button. | ✅ Done |
| 17 | **InfoRow** | Label + value (Text or node). | ✅ Done |
| 18 | **PayrollStatusRow** | Text (title + subtitle) + Badge + optional Divider. | ✅ Done |
| 19 | **PendingApprovalRow** | Avatar + primary/secondary Text + Badge; clickable row. | ✅ Done |
| 20 | **EmployeeRowCell** | Avatar + primary line + secondary line (Text × 2). | ✅ Done |
| 21 | **NavItem** | Icon + label + optional Badge; Link or button. | ✅ Done |
| 22 | **TabFilter** | TabSegment × N with optional count. | ✅ Done |
| 23 | **SearchBar** | Input with role="search", search icon, optional clear (IconButton). | ✅ Done |
| 24 | **FilterChip** | Button + filter Icon + label + chevron Icon. | ✅ Done |
| 25 | **Pagination** | “Showing X–Y of Z” (Text) + PaginationButton group. | ✅ Done |
| 26 | **StatusStepper** | StepperDot + StepperConnector + labels per step. | ✅ Done |
| 27 | **ProfileHeader** | Avatar + name + badges + subtitle + meta row + actions. | ✅ Done |
| 28 | **UnderlineTabs** | Horizontal tabs with underline active state (buttons + Text). | ✅ Done |
| 29 | **DateRangeTrigger** | Button + calendar Icon + label + chevron Icon. | ✅ Done |
| 30 | **SidebarUser** | Avatar + name + role + optional IconButton. | ✅ Done |

### 2.2 To implement (from original plan, not yet built)

| # | Molecule | Mockup(s) | Description |
|---|----------|-----------|-------------|
| — | *(all from §2.1 are implemented)* | — | No remaining “to implement” from the original 23; controlled form molecules and original list are done. |

### 2.3 Optional / future molecules (from extended mockup scan)

These appear across the full mockup set and are candidates when building the corresponding pages.

| # | Molecule | Mockup(s) | Description | Notes |
|---|----------|-----------|-------------|--------|
| 1 | **Breadcrumb** | my-requests-leave-new, approvals-id, team-invite, my-requests-id | List of Link + separator (Icon or Text “/”) + current item (Text). | Uses Link, Text, Icon. No molecule-in-molecule. |
| 2 | **LeaveBalanceRow** | my-requests-leave-new, my-requests-id | Label + “X / Y” (Text) + Progress + caption (e.g. “X days remaining”). | Text, Progress, Text. |
| 3 | **AttachmentChip** | approvals-id, compliance-* (Attachments) | Icon + filename (Text) + optional action (Link or IconButton). | Icon, Text, Link/IconButton. For file attachments in approvals/compliance. |
| 4 | **TimelineItem** | approvals-id, my-requests-id, compliance-disciplinary-id | Dot + date (Text) + content (Text). | Dot, Text, Text. One item in a vertical timeline. |
| 5 | **ReportCard** | reports, index (nav cards) | Surface + icon Box + title + description + “View Report →” Link. | Surface, Box, Icon, Text, Text, Link. Reusable for report categories and nav cards. |
| 6 | **PlanCard** | settings-billing | Surface + plan name + price + description + Badge + optional alert slot + CTA Button. | Surface, Text, Badge, Button; optional children for alert. |
| 7 | **PaymentMethodRow** | settings-billing | Card brand (Image/Icon) + “Visa ending in 4242” + expiry + “Update” Link. | Box, Image/Icon, Text, Text, Link. |
| 8 | **PageHeader** | Most pages | Title (Text heading) + subtitle (Text caption). | Text × 2. Consistency for page titles. |
| 9 | **RoleCard** | team-invite | Radio + title + description in a selectable card. | Box, Radio, Text, Text. For role selection. |
| 10 | **PayslipCard** | my-payslips | Surface + period (Text) + gross/deductions/net (Text × 3) + Download Button. | Surface, Text, Button. One payslip in a list. |
| 11 | **BackLink** | approvals-id, team-invite, my-requests-leave-new | Icon (chevron left) + “Back” or parent label (Link). | Link, Icon. Optional; can be Link + Icon at call site. |
| 12 | **FilterSelect** | employees, approvals (dropdown filters) | Label + Select (or trigger that opens a popover with options). | Label, Select; or Label + Button + Popover content. If popover is atom, molecule = Label + trigger + content slot. Add when building filter toolbars. |

---

## 3. Atom usage map (molecules must use only these)

| Atom | Used by molecules |
|------|-------------------|
| AccentBar | EmptyState, auth layouts (optional) |
| Avatar | PendingApprovalRow, EmployeeRowCell, ProfileHeader, SidebarUser |
| Badge | KpiCard, PayrollStatusRow, PendingApprovalRow, AlertBanner, TabFilter, ProfileHeader, NavItem, PlanCard |
| Box | Layout wrappers; EmptyState (circle); ReportCard (icon box) |
| Button | FormField submit, FilterChip, Pagination, ListCard, ProfileHeader, DateRangeTrigger, PayslipCard, PlanCard |
| Checkbox | (Organism: table row; molecule can accept as slot) |
| Chip | FilterChip (optional) |
| DateInput | FormDateInput |
| Divider | PayrollStatusRow, InfoRow; use with `label` for auth “Or continue with” |
| Dot | TimelineItem |
| Icon | KpiCard, AlertBanner, NavItem, SearchBar, FilterChip, ProfileHeader, DateRangeTrigger, EmptyState, Breadcrumb, AttachmentChip, ReportCard, BackLink |
| IconButton | SocialLoginButtons, SidebarUser, NavItem, SearchBar (clear), AttachmentChip (action) |
| Image | PaymentMethodRow (card brand) |
| Input | FormField, FormInput, SearchBar |
| Label | FormField, FormInput, FormTextarea, FormSelect, FormCheckbox, FormRadioGroup, FormSwitch, FormDateInput, InfoRow |
| Link | ProfileHeader, NavItem, Breadcrumb, ReportCard, PaymentMethodRow, BackLink |
| PasswordStrength | FormField, FormInput |
| PaginationButton | Pagination |
| Progress | LeaveBalanceRow |
| Radio | FormRadioGroup, RoleCard |
| Select | FormSelect; FilterSelect (future) |
| Spacer | When spacing not from layout |
| StepperConnector | StatusStepper |
| StepperDot | StatusStepper |
| Surface | KpiCard, StatCard, ListCard, ReportCard, PlanCard, PayslipCard (do not use Card molecule inside) |
| Switch | FormSwitch |
| TabSegment | AuthTabs, TabFilter; UnderlineTabs uses buttons + Text |
| Text | All molecules (labels, titles, values, descriptions) |
| Textarea | FormTextarea |

**Not used in this plan:** ChatBubble, Rating, Skeleton, Slider, Spinner, ThemeToggle — use in future molecules or organisms as needed.

---

## 4. Implementation order (phased)

### Phase 1 — Foundation (forms & auth) — ✅ Done

- FormField, AuthTabs, SocialLoginButtons, EmptyState.
- Use `<Divider label="Or continue with" />` at call sites (no DividerWithText molecule).
- Controlled fields: FormInput, FormTextarea, FormSelect, FormCheckbox, FormRadioGroup, FormSwitch, FormDateInput.

### Phase 2 — Cards & stats — ✅ Done

- StatCard, KpiCard, AlertBanner, ListCard.
- All use Surface/Box + atoms only (no Card molecule inside).

### Phase 3 — Rows & lists — ✅ Done

- InfoRow, PayrollStatusRow, PendingApprovalRow, EmployeeRowCell.

### Phase 4 — Navigation & filters — ✅ Done

- NavItem, TabFilter, SearchBar, FilterChip, Pagination.

### Phase 5 — Composite & layout — ✅ Done

- StatusStepper, ProfileHeader, UnderlineTabs, DateRangeTrigger, SidebarUser.

### Phase 6 — Optional (when building those pages)

- **Breadcrumb** — When building my-requests, approvals-id, team-invite.
- **LeaveBalanceRow** — When building my-requests-leave-new, leave sidebar.
- **AttachmentChip** — When building approvals-id, compliance attachment lists.
- **TimelineItem** — When building approvals-id, my-requests-id, compliance timeline.
- **ReportCard** — When building reports, index nav cards.
- **PlanCard** — When building settings-billing.
- **PaymentMethodRow** — When building settings-billing.
- **PageHeader** — When standardizing page titles (optional; can be Text × 2 at call site).
- **RoleCard** — When building team-invite.
- **PayslipCard** — When building my-payslips.
- **BackLink** — Optional; Link + Icon at call site is enough.
- **FilterSelect** — When building filter toolbars with dropdowns.

---

## 5. File structure (per molecule)

Each molecule follows the existing pattern:

```
src/components/molecules/
├── MoleculeName/
│   ├── MoleculeName.tsx
│   ├── MoleculeName.types.ts
│   ├── index.ts
│   └── (optional) MoleculeName.stories.tsx
```

- **Types:** Props use only atoms or primitives (no other design-system molecules in prop types).
- **Styling:** Tailwind + `cn()`; CSS module only if needed.
- **Exports:** Re-export from `src/components/molecules/index.ts`.

---

## 6. Explicitly out of scope (not molecules)

| Item | Reason |
|------|--------|
| Data table row (checkbox + cells + menu) | Organism. Use EmployeeRowCell and other molecules inside the organism. |
| Full breadcrumb trail as single “component” | Breadcrumb is a molecule (list of links + separators). The *page* composes it. |
| Form (multi-field) | Organism. Composes FormInput, FormSelect, etc. |
| Sidebar / Header / Page layout | Organism or template. |
| Bulk action bar | Organism. |
| Report table (rows of ExportRow) | Organism. Table + rows. |
| Settings subnav | Can be NavItem × N or a small organism. |

---

## 7. Summary

| Phase | Molecules | Status |
|-------|-----------|--------|
| 1 | FormField, FormInput, FormTextarea, FormSelect, FormCheckbox, FormRadioGroup, FormSwitch, FormDateInput, AuthTabs, SocialLoginButtons, EmptyState | ✅ Done |
| 2 | StatCard, KpiCard, AlertBanner, ListCard | ✅ Done |
| 3 | InfoRow, PayrollStatusRow, PendingApprovalRow, EmployeeRowCell | ✅ Done |
| 4 | NavItem, TabFilter, SearchBar, FilterChip, Pagination | ✅ Done |
| 5 | StatusStepper, ProfileHeader, UnderlineTabs, DateRangeTrigger, SidebarUser | ✅ Done |
| 6 (optional) | Breadcrumb, LeaveBalanceRow, AttachmentChip, TimelineItem, ReportCard, PlanCard, PaymentMethodRow, PageHeader, RoleCard, PayslipCard, BackLink, FilterSelect | To implement when needed |

**Total implemented:** 30 (Card + 29 from plan). **Optional/future:** 12.

All molecules must use only `@/components/atoms`. Revisit when adding new mockups or organisms.

---

## 8. Lead engineer roast & boundary check

### 8.1 Molecule or organism?

| Item | Verdict | Why |
|------|--------|-----|
| **ProfileHeader** | At the line. | Many composed elements. Cap as “maximal molecule” or split into ProfileAvatarBlock + ProfileMetaRow and make the full header an organism. |
| **ListCard** | Molecule OK. | Only if it never imports PayrollStatusRow or PendingApprovalRow. Rows are **children** from the organism. |
| **SearchBar** | Molecule OK. | Implemented with role="search" and clear; qualifies as molecule. |
| **DividerWithText** | Not a molecule. | Use `Divider` atom with `label` prop. |

### 8.2 Optional molecules (Phase 6)

- **ReportCard** and **PlanCard** are molecule-sized (Surface + atoms). Keep them as molecules when built.
- **PageHeader** is minimal (Text × 2); could be a molecule for consistency or just use Text at call site.
- **BackLink** — Link + Icon; optional molecule or call-site composition.

### 8.3 What’s right

- KpiCard, StatCard, ListCard use Surface/Box + atoms; no Card molecule inside.
- Form* molecules use only Label, Input, Text, etc. (atoms).
- No molecule imports another molecule in the codebase.

---

## 9. Molecule-only implementation rules (enforce in review)

To guarantee we build **only molecules** (no organism creep, no molecule-in-molecule):

### 9.1 Hard rule

**A molecule must NOT import or render any component from:**

- `@/components/molecules` (including other molecules)

**A molecule MAY use:**

- Any component from `@/components/atoms`
- Native HTML elements
- React, `@/utils`, `@/config`, its own types

### 9.2 Checklist (before merging a molecule)

1. [ ] No `import … from '@/components/molecules'` (except re-exports in `molecules/index.ts`).
2. [ ] All UI building blocks come from `@/components/atoms`.
3. [ ] ListCard (and similar) receives list content as **children**; it does not import or map over PayrollStatusRow, PendingApprovalRow, etc.
4. [ ] Content that is “section-level” (e.g. full table, full sidebar) belongs in an organism, not a molecule.

### 9.3 Edge cases

| Case | Allowed? | Why |
|------|----------|-----|
| Molecule accepts `children: ReactNode` | Yes | Caller (organism/page) composes; molecule is still a single building block. |
| Molecule uses Card (existing molecule) inside | **No** | That would be molecule composing molecule. Use Surface + atoms instead. |
| Molecule uses FormField inside another molecule | **No** | Use Label + Input (atoms) inside the molecule. |
| ListCard renders `children` (rows passed from parent) | Yes | ListCard does not import row molecules; parent does. |

---

Revisit this doc when adding new mockups or organisms.
