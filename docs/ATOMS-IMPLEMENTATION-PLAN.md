# Atoms Implementation Plan (from Mockups)

This document lists **atom-level components** that can be extracted from `docs/mockups/` and added to `src/components/atoms/`. It is a **plan only** — no code is implemented yet. Review and approve before implementation.

**Scope:** Only **atoms** (smallest, indivisible UI primitives — one element type, not composed of other design-system components). Molecules (e.g. SearchInput = Input + Icon, Alert = Icon + Text + Box) and organisms are out of scope; they are built *from* these atoms.

**Reference:** Existing atoms and gaps are documented in `docs/ATOMS-INVENTORY.md`.

---

## Lead engineering review (summary)

- **Label:** Already has `required` and renders asterisk; remove from “to add” and treat as done. Ensure `htmlFor` / a11y are used in forms.
- **NotificationDot vs Dot:** Dot exists (variants: default, success, warning, destructive, muted). Option A: add a small `size` (e.g. `xs`) to Dot and use it for notification (variant could be `destructive` or new `notification`). Option B: keep NotificationDot as a separate atom if we want a dedicated API (`visible`, absolute positioning). Recommend: **Option A** unless we need distinct behaviour (e.g. mount/unmount animation); then one atom, less surface area.
- **TabSegment / PaginationButton vs Button:** Button has primary, secondary, outline, ghost, destructive. Segment and pagination need clear semantics (e.g. `role="tab"`, `aria-selected`, `aria-current="page"`). Adding many variants to Button bloats its API. Recommend: **keep TabSegment and PaginationButton as separate atoms** for clearer semantics and focused APIs.
- **AccentBar vs Divider:** Divider is a rule (optionally with center label). AccentBar is a thin gradient bar (decorative). Option A: add `variant="accent"` (and optional gradient) to Divider. Option B: keep AccentBar as a tiny primitive. Recommend: **Option B** — different purpose (decoration vs separation), keeps Divider simple.
- **Code vs Text:** Code could be a `variant="code"` on Text (mono font, optional background). ATOMS-INVENTORY lists Code as its own atom. Recommend: **either** Text variant **or** Code atom; pick one and document. Prefer **Text variant** to reduce new components if styling is the only difference.
- **PasswordStrength:** Single “meter” primitive (internal 4 segments). Good as atom.
- **StepperDot / StepperConnector:** Distinct from Dot (content inside circle, step semantics). Keep as separate atoms.
- **DateInput:** Styled native `<input type="date">` = one primitive. Future date-picker with calendar = molecule (DateInput + Popover + calendar). Plan is correct.
- **Tooltip:** Often implemented as wrapper (trigger + content) = molecule. If we need an atom, it’s the floating content piece; many systems use a shared “Popover”/“Floating” primitive. Defer until we implement; likely molecule or use Radix/Vanilla.

**Decisions to confirm before implementation:** (1) NotificationDot → Dot with size/variant vs new atom. (2) Code → Text variant vs Code atom. (3) Label → remove from “to add” (already implemented).

---

## 1. Summary: Existing vs New (atoms only)

| Category            | Already in atoms        | To add (atoms only) |
|---------------------|--------------------------|----------------------|
| Form & input        | Input, Select, Label, Checkbox, Radio, Switch | Textarea, DateInput, PasswordStrength; extend Input (adornments). Label: **verify** (has `required`; confirm a11y in forms). |
| Typography          | Text, Link               | Code — or Text variant `code` (decide in review). |
| Display & feedback  | Badge, Spinner, Progress, Skeleton, Dot | NotificationDot — or Dot with size/variant (decide in review). |
| Buttons & controls  | Button, IconButton, ThemeToggle | TabSegment, PaginationButton |
| Layout & structure  | Divider, Spacer, Dot, Box, Surface | StepperDot, StepperConnector, AccentBar |
| Media & icons       | Icon, Image, Avatar       | — |

---

## 2. New Atoms (Extracted from Mockups)

Only **atoms** are listed below. Each is a single, indivisible primitive (one element type).

### 2.1 Form & Input

| Atom | Description | Mockup source | Why atom |
|------|-------------|---------------|----------|
| **Textarea** | Multi-line text input; resize, min/max rows. | employees-new (address) | Single form control primitive, like Input. |
| **DateInput** | Date picker input (native or styled). | employees-new (DOB, date fields) | Single form control primitive. |
| **PasswordStrength** | Horizontal strength indicator (4 segments: weak → strong). | signup.html (strength-dot) | Single visual indicator primitive (one “meter”). |
| **Input (extend)** | Support leading/trailing adornment slots. | login, signup (icon, visibility toggle) | Still the Input atom; add slots so molecules can compose Icon/Button. |
| **Label** | No new atom. Existing Label has `required` and asterisk. | All forms | **Verify only:** ensure `htmlFor` and a11y in form usage. |

### 2.2 Display & Feedback

| Atom | Description | Mockup source | Why atom |
|------|-------------|---------------|----------|
| **NotificationDot** | Small dot (e.g. red) for unread state. | dashboard, employees, portal (bell) | Single visual primitive. **Alternative:** extend Dot with size `xs` and use for notification (fewer atoms). |

### 2.3 Buttons & Controls

| Atom | Description | Mockup source | Why atom |
|------|-------------|---------------|----------|
| **TabSegment** | Single clickable segment in a segmented control. | login (Sign In/Sign Up), employees (All/Active), payroll | One interactive primitive (one “segment”); like a button variant. |
| **PaginationButton** | One button in pagination: page number, prev, next, or ellipsis. | employees (pagination row) | Single button primitive with variants. |

### 2.4 Layout & Structure

| Atom | Description | Mockup source | Why atom |
|------|-------------|---------------|----------|
| **StepperDot** | One circle for wizard/stepper (number or state). | employees-new, payroll (step-dot) | Single visual primitive; states: active, done, pending. |
| **StepperConnector** | One horizontal line between stepper steps. | employees-new, payroll (step-connector) | Single visual primitive; states: done, pending. |
| **AccentBar** | Thin horizontal bar (e.g. gradient). | forgot-password, verify-email (top bar) | Single decorative primitive. |

### 2.5 Optional / Defer

| Atom | Description | Mockup source | Why atom |
|------|-------------|---------------|----------|
| **Code** | Inline or block code styling. | invalid-company (URL in pill) | Single typography primitive. **Alternative:** add `variant="code"` to Text to reduce surface area. |
| **Tooltip** | Hover/focus hint. | — | Defer. Often a molecule (trigger + floating content); implement when needed (e.g. with Radix or shared Popover). |

---

## 2.6 Not atoms — build as molecules

These appear in the mockups but are **molecules** (composed of 2+ atoms). Build them in `molecules/` using the atoms above and existing atoms.

| Molecule | Composed of | Mockup source |
|----------|-------------|---------------|
| **SearchInput** | Input + Icon (leading) ± IconButton (clear) | employees toolbar |
| **Alert** | Box + Icon + Text (title) + Text (description) | dashboard Alerts & Deadlines |
| **Breadcrumb** | Link + Text/Icon (separator) repeated | employees-new “Employees › Add Employee” |
| **LogoMark** | Box + Icon | All headers/sidebars |
| **Pagination dots row** | Multiple Dot atoms (active/inactive) | login right panel — use existing **Dot** atom |

---

## 3. Implementation Order (Recommended)

Implement in phases so that molecules/pages can consume atoms as they’re built.

### Phase 1 — Forms (needed for auth & employee flows)

1. **Textarea** — address and long text.
2. **Input** — add left/right adornment support (for SearchInput molecule, password visibility, etc.).
3. **PasswordStrength** — signup flow.
4. **DateInput** — employee forms (DOB, dates).
5. **Label** — verify only: `required` and asterisk already exist; confirm `htmlFor` / a11y in form usage.

### Phase 2 — Feedback & navigation

6. **NotificationDot** — header bell (unread indicator).
7. **TabSegment** — tab filters (employees, payroll, login).
8. **StepperDot** + **StepperConnector** — add employee wizard, payroll status.

### Phase 3 — Lists & pagination

9. **PaginationButton** — tables (employees, payroll). Carousel dots: use existing **Dot** atom.

### Phase 4 — Polish

10. **AccentBar** — auth pages.
11. **Code** / **Tooltip** — as needed.

---

## 4. Per-Atom Spec (Concise)

Use these as acceptance criteria when implementing. **Atoms only.**

- **Textarea**  
  - Props: value, placeholder, disabled, error, rows, resize (none|vertical|horizontal|both), minRows, maxRows.  
  - Match Input border/radius/focus (emerald ring).

- **DateInput**  
  - Styled date input (native or wrapper).  
  - Props: value, onChange, min, max, disabled, error.  
  - Accessible (label, format hint).

- **PasswordStrength**  
  - 4 segments (e.g. bars); 0–4 filled.  
  - Props: level (0–4), label?: string (e.g. “Fair”).  
  - Theming: muted default, primary/green for filled.

- **Input (extend)**  
  - Add leftAdornment / rightAdornment (e.g. React nodes) so molecules can compose Icon, IconButton.  
  - Label already supports `required` (asterisk); verify a11y in forms.

- **NotificationDot**  
  - Small circle (e.g. 8px), absolute by default.  
  - Props: visible, color (default red), size.  
  - Used with IconButton in header.

- **TabSegment**  
  - One segment: label + optional count.  
  - Props: active, disabled, children (label), count?, onClick.  
  - Styling: active = elevated/primary; inactive = muted.

- **StepperDot**  
  - Circle with number or check.  
  - States: active, done, pending.  
  - Optional label below.

- **StepperConnector**  
  - Horizontal line.  
  - States: done (primary), pending (muted).

- **PaginationButton**  
  - Variants: page, prev, next, ellipsis.  
  - Props: variant, page?, active?, disabled?, onClick.

- **AccentBar**  
  - Thin bar; optional gradient.  
  - Props: gradient?: boolean, className.

- **Code** (or Text variant `code`)  
  - Inline or block code styling (mono font, optional background). Decide: new atom vs Text variant.  
- **Tooltip** — Defer. Implement as molecule (trigger + floating content) or use shared Popover when needed.

---

## 5. What Stays Out of Atoms

- **Molecules (build in `molecules/`):** NavItem, KpiCard, DataTable, FormField (Label + Input + error), FilterBar, EmptyState, WizardSteps (StepperDot + StepperConnector), **SearchInput** (Input + Icon ± IconButton), **Alert** (Box + Icon + Text), **Breadcrumb** (Link + Text/Icon separator), **LogoMark** (Box + Icon). Carousel dots = multiple **Dot** atoms.
- **Organisms:** Sidebar, Topbar, PageLayout.
- **Overlay/Disclosure:** Modal, Popover, Dropdown (add later as needed).

---

## 6. File and Export Conventions

For each new atom, follow existing patterns under `src/components/atoms/`:

- `ComponentName/ComponentName.tsx`
- `ComponentName/ComponentName.types.ts`
- `ComponentName/index.ts`
- `ComponentName/ComponentName.stories.tsx` (and test if applicable)
- Export from `src/components/atoms/index.ts`

Use CVA for variants, `cn()` for class merging, and `@/` path alias. Match design tokens from `src/config/theme.ts` and `theme-variables.css`.

---

## 7. Next Steps

1. **Close decisions** (see Lead engineering review): NotificationDot vs Dot variant; Code vs Text variant; Label = verify only (done).
2. Confirm Phase 1 atoms and Input adornment API (slots vs render props).
3. Implement Phase 1 atoms one by one with types, stories, and exports.
4. Use new atoms in molecules (SearchInput, Alert) and in auth/employee flows; then Phase 2–4.
