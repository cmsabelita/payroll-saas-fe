# Atoms Implementation Plan (Updated)

**Source:** `docs/mockups/` — full set of HTML mockups (60+ pages).  
**Goal:** Extract all possible **atom** components we can add to `src/components/atoms/` so molecules and organisms have the primitives they need.  
**Rule:** Atoms are indivisible UI building blocks; they do **not** compose other design-system components (no molecules or other atoms in their tree). See §10 for strict implementation rules.  
**Reference:** `docs/ATOMS-INVENTORY.md`, `docs/ARCHITECTURE.md`, existing `src/components/atoms/`.

---

## 1. Mockup coverage (pages re-evaluated)

Mockups were scanned across these areas:

| Area | Mockups | Notes |
|------|---------|--------|
| **Auth & onboarding** | login, signup, forgot-password, reset-password, verify-email, onboarding-company, onboarding-business, onboarding-payroll-settings, onboarding-plan | Forms, stepper, empty states |
| **Dashboard & portal** | dashboard, portal | KPIs, nav, sidebar, date range, list cards |
| **People** | employees, employees-new, employees-profile, employees-salary, employees-separation, employees-finalpay, organization-departments, organization-positions, team, team-id, team-invite | Tables, filters, tabs, avatars, role cards |
| **Time & requests** | attendance, attendance-id, my-attendance, my-requests, my-requests-leave-new, my-requests-ot-new, my-requests-attendance-new, approvals, approvals-id | Tabs, approve/reject actions, detail rows, file chips, timeline |
| **Payroll** | payroll, payroll-employees, payroll-payslips, payroll-adjust, payroll-employee-breakdown | Stepper, status, tables |
| **Compliance** | compliance, compliance-incidents, compliance-incidents-id, compliance-training, compliance-disciplinary, compliance-remittances, compliance-alphalist, compliance-bir-2316, compliance-bir-1601c | Underline tabs, KPIs, tables |
| **Reports & analytics** | reports, reports-payroll, reports-attendance, reports-leave, reports-government, reports-headcount | Report cards, badges (PDF/Excel), tables |
| **Settings** | settings-company, settings-payroll-config, settings-holidays, settings-leave-policies, settings-billing, settings-integrations | Forms, plan cards, payment method block |
| **My account (portal)** | my-payslips, my-payslips-detail, my-profile | Summary blocks, selects, breadcrumbs |
| **Marketing** | marketing-landing, marketing-pricing | Hero, pills, CTAs, pricing cards |
| **Other** | invalid-company | Empty/error state |

---

## 2. Current atoms (already in `src/components/atoms/`)

These **already exist** and are used across mockup-derived molecules. No implementation needed.  
**Note:** `docs/ATOMS-INVENTORY.md` currently says "28 atoms" and is stale; sync it to **33** and add the atoms below that are missing from the inventory (e.g. AccentBar, DateInput, PasswordStrength, PaginationButton, StepperConnector, StepperDot, TabSegment, Textarea).

| Atom | Purpose |
|------|--------|
| AccentBar | Top accent strip (auth, empty state) |
| Avatar | User image or initials |
| Badge | Status/count pill (green, yellow, blue, red, gray, purple, outline) |
| Box | Layout wrapper |
| Button | CTA; variants & sizes |
| ChatBubble | Message bubble (future) |
| Checkbox | Boolean toggle |
| Chip | Filter/tag; optional onRemove |
| DateInput | type="date" with value/onChange |
| Divider | Horizontal/vertical rule; optional label |
| Dot | Small status dot (variants) |
| Icon | SVG wrapper; sizes |
| IconButton | Icon-only button |
| Image | img with fallback |
| Input | Text input; sizes; left/right adornment |
| Label | Field label; optional required asterisk |
| Link | Anchor; variants |
| PasswordStrength | Strength meter (segments) |
| PaginationButton | Prev/next/page/ellipsis |
| Progress | Linear progress bar |
| Radio | Radio input |
| Rating | Star rating |
| Select | Native select; options; placeholder |
| Skeleton | Shimmer placeholder |
| Slider | Range input |
| Spacer | Invisible spacing |
| Spinner | Loading indicator |
| StepperConnector | Line between stepper steps |
| StepperDot | Step circle + optional label |
| Surface | Card-like container (elevation) |
| Switch | On/off toggle |
| TabSegment | Pill tab with optional count |
| Text | Body, caption, label, heading, code |
| Textarea | Multi-line input |
| ThemeToggle | Light/dark/system |

---

## 3. New atoms to add (extracted from mockups)

These are **indivisible** UI primitives that appear in mockups and are not yet implemented, or are only partially covered.

### 3.1 High priority (used in many mockups)

| # | Atom | Mockup evidence | Description | Notes |
|---|------|-----------------|-------------|--------|
| 1 | **Tooltip** | Icon buttons (bell, settings, export), table headers | Short hover/focus hint. Single component: trigger + content + positioning (top/bottom/left/right). Implement as one “compound atom” (trigger + portal content). | **Atom only:** Render overlay content as raw `div`/`span` + Tailwind; do **not** import `Text`, `Icon`, `Button`, or any other atom. Trigger is provided by caller. |
| 2 | **SortIndicator** | employees, payroll, reports, approvals (table headers) | Sort direction icon (asc/desc/both) for table column headers. Single primitive: icon state. | **Atom only:** Implement as single `span` or `svg` with Tailwind/CVA; do **not** use the `Icon` atom. Inline SVG or a single wrapper only. |
| 3 | ~~**NotificationDot**~~ | Bell icon in header (dashboard, employees, etc.) | **Do not add.** Use existing **Dot** atom; document “notification badge” pattern (Dot inside relative wrapper, e.g. on IconButton) in Storybook. | See §9. |
| 4 | **FileDropzone** | my-requests-leave-new (Supporting Document), future upload flows | Dashed border area + optional label/hint or children; accepts drag & drop and file input. Single primitive: visual zone + input[type=file]. **API:** optional `label`, `hint` (strings), or `children` for custom content. | **Atom only:** Use native `input[type="file"]` and raw `div`/`span` for zone and optional label/hint; do **not** import `Label`, `Input`, `Text`, or `Icon`. |

### 3.2 Medium priority (overlay & feedback)

| # | Atom | Mockup evidence | Description | Notes |
|---|------|-----------------|-------------|--------|
| 5 | **Modal** | Not explicitly in mockups; needed for confirm (e.g. reject request, delete) | Overlay + focus trap + optional close. Content is slots/children from organism. | **Atom only:** Render overlay + container `div` only; no internal `Button`, `Surface`, or `Text`. All content (title, body, actions) is **children** from the caller. |
| 6 | **Popover** | Dropdowns (Filters, Department, Export, “Change Plan”, row actions) | Floating panel triggered by click/focus; positioning; optional arrow. | **Atom only:** Render positioning wrapper + panel `div` only; do **not** use `Button`, `Surface`, or `Text` inside. Trigger and content are provided by caller. |
| 7 | **Alert** | settings-billing (over plan limit), compliance, inline warnings | Inline message box: variant (info, success, warning, error), optional icon slot, single message text. | **Consider Surface variant first** (e.g. `variant="alert"`, `tone="info|success|warning|error"`, `role="alert"`). Add Alert atom only if we need a distinct API (e.g. mandatory aria-live) that Surface shouldn’t own. Distinct from **AlertBanner** molecule. |

### 3.3 Lower priority (nice-to-have)

| # | Atom | Mockup evidence | Description | Notes |
|---|------|-----------------|-------------|--------|
| 8 | **Code** | Settings, docs, future API/configuration | Inline or block code styling (mono, background). | **Atom only:** Implement as `<code>` or `<pre>` with Tailwind only; do **not** use `Text` atom. Check Text for `variant="code"` first; then add only if needed. |
| 9 | **Kbd** | Keyboard shortcuts (future) | Keyboard key display (e.g. ⌘K). | **Atom only:** Implement as `<kbd>` or `<span>` with Tailwind only; do **not** use `Text` atom. |
| 10 | **SectionLabel** | Sidebar nav (e.g. “MAIN”, “PEOPLE”, “Finance”) | Uppercase, small, letter-spacing, muted. | Could be a **Text** variant (e.g. `variant="section"`) instead of new atom; if so, extend Text only. |
| 11 | **BreadcrumbSeparator** | my-requests-leave-new, approvals-id, team-invite | Visual separator between breadcrumb items (“/” or chevron). | Very small; could use **Icon** or **Text** “/”. Optional dedicated atom only if we want consistent spacing/aria. |
| 12 | **FileChip** | approvals-id (attachment with icon + name) | Chip-like display for a file: icon + name + optional action (download/remove). | If **Chip** atom can accept leading icon + trailing action, we may not need this. Prefer extending Chip; add **FileChip** only if semantics differ (e.g. file-specific a11y). |

---

## 4. Explicitly out of scope (not atoms)

These appear in mockups but belong to **molecules** or **organisms**. Do **not** add them as atoms.

| Item | Reason |
|------|--------|
| Nav item (icon + label + badge) | **NavItem** molecule. |
| Tab group (pill or underline) | **TabFilter** / **UnderlineTabs** molecules; use **TabSegment** or buttons. |
| Form field (label + input + error) | **FormField** / **FormInput** molecules. |
| Search bar | **SearchBar** molecule (or Input with leftAdornment at call site). |
| KPI card / stat card | **KpiCard** / **StatCard** molecules (Surface + atoms). |
| Table row / header row | Organism (table layout + selection + actions). |
| Breadcrumb trail | Molecule (list of Link + BreadcrumbSeparator). |
| Stepper (full) | **StatusStepper** molecule (StepperDot + StepperConnector). |
| Approve/Reject button group | Organism or molecule (Button with variant). |
| Bulk action bar | Organism. |
| Role card (radio style) | Molecule (Radio + Text + container). |
| Leave balance progress row | Molecule (Text + Progress + caption). |
| Payment method block | Molecule (Icon/Image + Text + Link). |

---

## 5. Implementation order (phased)

### Phase 1 — Feedback & tables

- **Tooltip** — Needed for icon buttons and table headers. No dependency.
- **SortIndicator** — Used in all data tables. No dependency.

### Phase 2 — Overlay & disclosure

- **Modal** — Confirmations and critical flows. No dependency.
- **Popover** — Filters, dropdowns, row menus. No dependency on Modal; implement shared Portal/overlay only if we extract it later.

### Phase 3 — Notifications & files

- **Notification badge pattern** — Use **Dot** atom; document in Storybook (e.g. Dot inside relative-positioned IconButton for bell “unread” state). No new atom.
- **FileDropzone** — Leave request, incident report, profile upload. No dependency.

### Phase 4 — Inline feedback & content

- **Alert** — Prefer **Surface** variant (e.g. alert tone) first; add Alert atom only if we need distinct API (role/aria). Optional icon slot. Keeps AlertBanner as molecule.
- **Code** — Inline/block code; only block if Text has `variant="code"`. Low urgency.
- **Kbd** — Keyboard shortcut display. Low urgency.

### Phase 5 — Optional / defer

- **SectionLabel** — Prefer **Text** variant `section` unless we need extra behavior.
- **BreadcrumbSeparator** — Prefer **Icon** or **Text**; add atom only if we standardize breadcrumb a11y.
- **FileChip** — Prefer **Chip** with icon + optional trailing action; add **FileChip** only if file-specific API is required.

---

## 6. Atom ↔ mockup map (new atoms only)

| New atom | Mockups / usage |
|----------|------------------|
| Tooltip | Header icon buttons (all app shell), sort headers, export, filters |
| SortIndicator | employees, payroll, payroll-employees, payroll-payslips, reports, approvals, compliance-*, organization-* |
| Dot (notification pattern) | dashboard, employees, approvals, compliance, team, team-invite, attendance, etc. (bell icon) — no new atom |
| FileDropzone | my-requests-leave-new, my-requests-attendance-new (future), compliance-incidents (report), profile photo |
| Modal | approvals-id (confirm reject), delete confirmations, future dialogs |
| Popover | Filter dropdowns, Department, Export, row “…” menu, “Change Plan” |
| Alert | settings-billing (over plan), compliance warnings, form-level errors |
| Code | settings (RDO codes), future docs |
| Kbd | Future shortcuts (optional) |

---

## 7. File structure (per new atom)

Each new atom follows the existing pattern:

```
src/components/atoms/
├── Tooltip/
│   ├── Tooltip.tsx
│   ├── Tooltip.types.ts
│   ├── index.ts
│   └── (optional) Tooltip.stories.tsx
```

- **Types:** Extend appropriate HTML attributes; no composition of other design-system components.
- **Styling:** Tailwind + `cn()`; CVA for variants where appropriate.
- **Exports:** Add to `src/components/atoms/index.ts`.

---

## 8. Summary

| Category | Count | Atoms |
|----------|--------|--------|
| **Already implemented** | 33 | All current exports in `atoms/index.ts` |
| **New — high priority** | 3 | Tooltip, SortIndicator, FileDropzone (NotificationDot = use Dot + pattern; no new atom) |
| **New — medium priority** | 3 | Modal, Popover, Alert (consider Surface variant first) |
| **New — lower priority** | 5 (all optional/defer) | Code, Kbd, SectionLabel (or Text variant), BreadcrumbSeparator, FileChip |

**Recommended first steps:** Phase 1 (Tooltip, SortIndicator), then Phase 2 (Modal, Popover), then Phase 3 (Dot pattern docs, FileDropzone). Phases 4–5 can follow as needed.

Revisit this plan when adding new mockups or after implementing new organisms (e.g. DataTable, ApprovalDetail) to ensure all required atoms exist.

---

## 9. Lead engineer roast & evaluation

### 9.1 What’s wrong or fuzzy

| Issue | Roast | Resolution |
|-------|--------|------------|
| **Atom count mismatch** | Plan says 33 current atoms; ATOMS-INVENTORY says 28. One of them is wrong. | **33** is correct (per `atoms/index.ts`). ATOMS-INVENTORY is stale — sync it to 33 and add the newer atoms (AccentBar, DateInput, PasswordStrength, PaginationButton, StepperConnector, StepperDot, TabSegment, Textarea). |
| **Tooltip = atom or molecule?** | Tooltip is “trigger + content + positioning.” That’s two elements (trigger + floating content). Strictly, that’s a molecule. | Treat **Tooltip** as a single exported component that owns trigger + content + portal; document it as the one “compound atom” we allow for overlay UX. No new atom for “just the bubble.” |
| **NotificationDot** | Plan hedges: “add NotificationDot atom (or document Dot + relative wrapper).” We already have **Dot**. | **Do not add a new atom.** Use the **Dot** atom; document the “notification badge” pattern (Dot with size/variant inside a relative wrapper, e.g. on IconButton) in Storybook. Removes one “high priority” atom. |
| **Alert vs Surface** | Alert is “styled container + optional icon + text.” We have **Surface** with variants. | Consider **Surface** with a semantic variant (e.g. `variant="alert"` + `tone="info|success|warning|error"`) and `role="alert"` / `aria-live` before adding a separate Alert atom. Add **Alert** only if we need a distinct API (e.g. mandatory role/aria) that Surface shouldn’t own. |
| **Code vs Text** | Text already has a `code` variant in the codebase. | If **Text** has `variant="code"`, a **Code** atom is only for *block* code (multiline, wrapper with background). Otherwise add Code for both inline and block. Check Text variants before implementing. |
| **Phase 2 dependency** | “Popover may depend on Modal for focus/overlay patterns.” | Modal and Popover are independent. They may share a **Portal** or overlay layer; that’s an implementation detail. Remove the “depends on Modal” note; implement shared portal/overlay only if we extract it. |
| **FileDropzone API** | “Optional label/hint” is vague. | Clarify: FileDropzone accepts optional `label` (string) and/or `hint` (string), or `children` for full custom content. Document in the atom’s types. |
| **Summary “3–5”** | Lower-priority count is vague. | There are 5 items: Code, Kbd, SectionLabel (or Text variant), BreadcrumbSeparator, FileChip. Say “5 (all optional/defer).” |

### 9.2 Boundary checks (atoms only)

- **Tooltip:** One component (trigger + floating content). Allowed as compound atom.
- **SortIndicator:** Single icon state. Pure atom.
- **FileDropzone:** One primitive (drop target + file input). Pure atom; label/hint are props or children.
- **Modal:** Overlay + focus trap + slot. Does not compose other design-system components. Atom.
- **Popover:** Floating panel + trigger. Same as above. Atom.
- **Alert:** If implemented as its own atom, it must not import Surface/Box/Text; it’s a single styled container with props. Prefer Surface variant first.

### 9.3 Decisions applied in this plan

1. **NotificationDot:** Removed as new atom. Use **Dot** + positioning; document pattern in §3.1 and Phase 3.
2. **Alert:** Mark as “consider Surface variant first”; add Alert atom only if needed (see §3.2 and §5 Phase 4).
3. **Code:** Clarify “block code only if Text has code variant” in §3.3 and Phase 4.
4. **Phase 2:** Remove Popover’s dependency on Modal in §5.
5. **FileDropzone:** Add API note (label/hint vs children) in §3.1.
6. **Summary:** Fix lower-priority count to 5 and sync ATOMS-INVENTORY reference in §2.

---

## 10. Atom-only implementation rules (enforce in review)

To guarantee we build **only atoms** and never slip molecules or organisms into `src/components/atoms/`:

### 10.1 Hard rule

**An atom must NOT import or render any component from:**

- `@/components/atoms` (including other atoms)
- `@/components/molecules`
- `@/components/organisms`

**An atom MAY use:**

- Native HTML elements (`div`, `span`, `button`, `input`, `label`, `svg`, `a`, etc.)
- React (e.g. `forwardRef`, `useState`, `useId`)
- `@/utils` (e.g. `cn`)
- `@/config` (e.g. theme tokens via CSS variables)
- Its own types from the same folder (e.g. `./Tooltip.types`)

### 10.2 Why this matters

- **Molecule:** Composes two or more atoms (e.g. FormField = Label + Input + Text). Those belong in `molecules/`.
- **Organism:** Composes molecules/atoms into a section (e.g. Header, DataTable). Those belong in `organisms/`.
- **Atom:** One primitive. If it needs a label, it accepts `label` as a prop (string) or `children`; it does not import our `Label` atom.

### 10.3 Per-atom checklist (before merging)

For each new or modified file under `src/components/atoms/`:

1. [ ] No `import … from '@/components/atoms'` (except re-exports in `atoms/index.ts`).
2. [ ] No `import … from '@/components/molecules'` or `'@/components/organisms'`.
3. [ ] No use of `<Button>`, `<Text>`, `<Icon>`, `<Label>`, `<Input>`, `<Surface>`, etc. inside the component.
4. [ ] Content/structure is either native HTML + Tailwind or passed in as `children` / render props.

### 10.4 Edge cases

| Case | Allowed? | Why |
|------|----------|-----|
| Atom accepts `children: ReactNode` | Yes | Caller (page/organism/molecule) composes; the atom is still a single primitive wrapper. |
| Atom accepts `label?: string` and renders `<span>{label}</span>` | Yes | Raw DOM, no design-system component. |
| Atom uses `<Icon>{svg}</Icon>` inside | **No** | That atom would compose another atom → molecule. Use raw `svg` or `span` + Tailwind. |
| Atom uses `<Text variant="caption">` for hint | **No** | Composes Text atom → molecule. Use `<span className="...">` with Tailwind. |
| Tooltip/Modal/Popover render a wrapper + portal | Yes | As long as the portal content is raw DOM (or caller’s children), not our Button/Text/Icon. |
