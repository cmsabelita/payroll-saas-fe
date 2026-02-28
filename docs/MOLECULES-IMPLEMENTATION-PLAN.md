# Molecule Components — Implementation Plan (from mockups)

**Source:** `docs/mockups/` (all HTML mockups)  
**Constraint:** Molecules must compose **only** atoms from `@/components/atoms`.  
**Reference:** Existing molecule `Card` (Text + container); Atomic Design in `docs/ARCHITECTURE.md`.

---

## 1. Molecules identified from mockups

| # | Molecule | Mockup(s) | Description |
|---|----------|-----------|-------------|
| 1 | **KpiCard** | dashboard, payroll | Icon + optional badge/trend + value + label in a bordered card |
| 2 | **StatCard** | payroll, dashboard | Simpler: label + value + optional sublabel (no icon); reuse for summary KPIs |
| 3 | **PayrollStatusRow** | dashboard | Two-line title/subtitle + status Badge + optional divider |
| 4 | **PendingApprovalRow** | dashboard | Avatar + primary text + secondary text + Badge; clickable row |
| 5 | **AlertBanner** | dashboard | Icon in colored box + title + description; variants: error, warning, info, success |
| 6 | **FormField** | login, signup, forgot-password, reset-password, onboarding-* | Label + Input (with optional left/right adornment); required asterisk |
| 7 | **AuthTabs** | login | Two-panel toggle (Sign In / Sign Up) built from TabSegment or Button group |
| 8 | ~~DividerWithText~~ | login, signup | **Use `Divider` atom with `label` prop** — do not implement as molecule (see §8). |
| 9 | **SocialLoginButtons** | login, signup | Row of IconButtons (Google, Apple, etc.) |
| 10 | **EmptyState** | forgot-password, verify-email | Centered icon in circle + heading + description |
| 11 | **TabFilter** | employees, payroll | Pill-style tab group with counts (TabSegment × N with count) |
| 12 | **SearchBar** | employees | Input + Icon (left adornment). Optional: only add if needed for role="search", clear, or debounce; otherwise use Input at call site. |
| 13 | **FilterChip** | employees | Button with filter icon + label + chevron (Button + Icon) |
| 14 | **EmployeeRowCell** | employees, employees-profile | Avatar + primary line + secondary line (Avatar, Text × 2) |
| 15 | **InfoRow** | employees-profile | Label (fixed width) + value; for key-value blocks |
| 16 | **ProfileHeader** | employees-profile | Avatar + name + badges + subtitle + meta row (Icon + Text) + actions. Atoms only; if it grows, split into ProfileAvatarBlock + MetaStatsRow and move header to organisms. |
| 17 | **UnderlineTabs** | employees-profile | Horizontal tabs with underline active state (TabSegment variant or new) |
| 18 | **StatusStepper** | payroll, onboarding-* | Horizontal stepper: StepperDot + StepperConnector + label per step |
| 19 | **Pagination** | employees, payroll | “Showing X–Y of Z” (Text) + Prev/Next + page number buttons (PaginationButton) |
| 20 | **NavItem** | dashboard, employees, portal, payroll, sidebar | Icon + label + optional Badge/count; link or button |
| 21 | **SidebarUser** | dashboard, employees | Avatar + name + role + optional IconButton |
| 22 | **DateRangeTrigger** | dashboard | Button with calendar icon + label + chevron (Button + Icon) |
| 23 | **ListCard** | dashboard (Pending Approvals, Payroll Status) | Card with title + optional badge + list of rows + “View all” Button |

---

## 2. Atom usage map (must use only these)

| Atom | Used by molecules |
|------|-------------------|
| **AccentBar** | (optional) EmptyState, auth layouts |
| **Avatar** | PendingApprovalRow, EmployeeRowCell, ProfileHeader, SidebarUser |
| **Badge** | KpiCard, PayrollStatusRow, PendingApprovalRow, AlertBanner (optional), TabFilter (count), ProfileHeader, NavItem |
| **Box** | Layout wrappers where needed |
| **Button** | FormField (submit), SocialLoginButtons (wrap IconButton), FilterChip, Pagination, ListCard “View all”, ProfileHeader, DateRangeTrigger |
| **Checkbox** | (Data table row — organism concern; molecule can receive slot) |
| **Chip** | FilterChip could use Chip atom if semantics fit |
| **Divider** | PayrollStatusRow, InfoRow blocks; use with `label` for “Or continue with” in auth |
| **Icon** | KpiCard, AlertBanner, NavItem, SearchBar (adornment), FilterChip, ProfileHeader, DateRangeTrigger, EmptyState |
| **IconButton** | SocialLoginButtons, SidebarUser, NavItem (optional) |
| **Input** | FormField, SearchBar (with leftAdornment) |
| **Label** | FormField, InfoRow |
| **Link** | ProfileHeader (e.g. “Reports to”), NavItem (if link) |
| **PasswordStrength** | FormField (when type=password and showStrength) |
| **PaginationButton** | Pagination |
| **Progress** | (Dashboard float card progress bar — optional in KpiCard/StatCard) |
| **Select** | (Filter dropdowns — organism/toolbar; molecule can be FilterSelect) |
| **Spacer** | When spacing is not from layout |
| **StepperConnector** | StatusStepper |
| **StepperDot** | StatusStepper |
| **Surface** | Card-like containers; KpiCard, StatCard, ListCard use Surface (or Box) + atoms — **do not** compose the Card molecule |
| **TabSegment** | AuthTabs, TabFilter, UnderlineTabs |
| **Text** | All molecules (labels, titles, values, descriptions) |
| **Textarea** | FormField (optional variant) |

**Not used in this plan:** ChatBubble, DateInput (use in FormField when needed), Dot, Image, Radio, Rating, Skeleton, Slider, Spinner, Switch, ThemeToggle — use in future molecules or organisms as needed.

---

## 3. Implementation order (phased)

### Phase 1 — Foundation (forms & auth)
- **FormField** — Label + Input (+ optional PasswordStrength); used everywhere.
- **Divider with label** — Use `<Divider label="Or continue with" />` at call sites; no DividerWithText molecule.
- **AuthTabs** — TabSegment × 2 (or segment group).
- **SocialLoginButtons** — IconButton × N in a flex row.
- **EmptyState** — Icon + Text (heading + body).

### Phase 2 — Cards & stats
- **StatCard** — Text (label, value, sublabel); minimal block using **Surface** or **Box** + Text (no Card molecule).
- **KpiCard** — Icon + optional Badge/trend + value + label; **Surface** or **Box** + Icon, Text, Badge (no Card molecule).
- **AlertBanner** — Icon + Text × 2; variant drives icon and background (use Badge/Surface for color).
- **ListCard** — **Surface** or **Box** + title (Text) + optional Badge + children (rows slot) + footer Button (no Card molecule).

### Phase 3 — Rows & lists
- **InfoRow** — Label + value (Text × 2 or Label + Text).
- **PayrollStatusRow** — Text (title + subtitle) + Badge.
- **PendingApprovalRow** — Avatar + Text × 2 + Badge.
- **EmployeeRowCell** — Avatar + two Text lines (name + ID).

### Phase 4 — Navigation & filters
- **NavItem** — Icon + Text + optional Badge; render as Link or button.
- **TabFilter** — Group of TabSegment with count prop.
- **SearchBar** — Input with leftAdornment (Icon).
- **FilterChip** — Button + Icon (filter) + Text + Icon (chevron).
- **Pagination** — Text + PaginationButton group.

### Phase 5 — Composite & layout
- **StatusStepper** — StepperDot + StepperConnector + labels (horizontal flex).
- **ProfileHeader** — Avatar + Text (name) + Badge group + Text (subtitle) + meta row (Icon + Text) + Button group.
- **UnderlineTabs** — TabSegment with underline-active styling (variant or wrapper).
- **DateRangeTrigger** — Button + Icon + Text + Icon.
- **SidebarUser** — Avatar + Text × 2 + IconButton.

---

## 4. File structure (per molecule)

Each molecule follows the existing pattern (see `Card`):

```
src/components/molecules/
├── KpiCard/
│   ├── KpiCard.tsx
│   ├── KpiCard.types.ts
│   ├── index.ts
│   └── (optional) KpiCard.stories.tsx
```

- **Types:** Props extend `HTMLAttributes` where appropriate; no composition of other design-system molecules in props (only atoms or primitives).
- **Styling:** Prefer Tailwind + `cn()`; use CSS module only if needed (e.g. Card.module.css).
- **Exports:** Re-export from `src/components/molecules/index.ts`.

---

## 5. Roast / Reevaluation (pass 1)

**Risks and gaps:**

- **Scope creep:** ListCard and ProfileHeader are large; they might blur into organisms.  
  **Mitigation:** Keep ListCard to “title + optional badge + list slot + footer button”. ProfileHeader to “avatar + name + badges + subtitle + meta row + actions” with no internal table or complex layout. **KpiCard, StatCard, ListCard must use Surface/Box + atoms only; they must not use the Card molecule** (that would make them organisms).

- **UnderlineTabs vs TabSegment:** TabSegment is pill-style. Underline tabs are a different visual.  
  **Decision:** Either add an `appearance: "underline"` variant to TabSegment (atom) or build **UnderlineTabs** as a molecule that composes multiple buttons + Divider/AccentBar. Prefer molecule wrapper so the atom stays simple.

- **FormField and Input:** Input already has `leftAdornment`/`rightAdornment`. FormField = Label + Input (+ hint/error).  
  **Decision:** FormField does not duplicate Input’s adornment API; it wraps Input and passes through props. Use Label and Input from atoms.

- **Missing from list:** Data table header/row (checkbox + cells + menu).  
  **Decision:** Table row is organism-level (Table + many cells). EmployeeRowCell is only the “avatar + name + ID” cell; the full row is composed in the organism.

- **Badge vs Chip:** Mockups use “badge” for status pills. We have both Badge and Chip.  
  **Decision:** Use **Badge** for status (green/yellow/blue, etc.); use Chip only where we need removable/toggle semantics (e.g. filter chips). FilterChip in toolbar can be Button + Icon or Chip depending on UX.

---

## 6. Roast / Reevaluation (pass 2)

**Second pass:**

- **Redundancy:** StatCard vs KpiCard — StatCard is “label + value + sublabel”; KpiCard adds icon and optional trend/badge. Keep both: StatCard is the minimal block for summary numbers; KpiCard is the dashboard tile with icon and badge. They can share a base (e.g. same card wrapper) but different props.

- **EmptyState:** Uses “icon in circle”. We have Icon; the circle is Box + rounded-full + background. No new atom needed.

- **AccentBar:** Forgot-password mockup has a top accent bar. We have AccentBar atom. Use it in auth layout (organism/template), not inside EmptyState. Plan stays correct.

- **Pagination:** “Showing X–Y of Z” is one Text; buttons use PaginationButton. Confirm PaginationButton exists and supports “prev/next” and page numbers. Plan references it; implementation will use existing atom.

- **Naming:** “EmployeeRowCell” is the avatar+name+id cell only. “PendingApprovalRow” is the full row (avatar + texts + badge). Names are clear.

- **Order:** Phase 1 (FormField, AuthTabs, etc.) unblocks auth pages. Phase 2 unblocks dashboard. Phase 3 unblocks employees list and profile. Phase 4 unblocks nav and toolbars. Phase 5 ties stepper, profile header, and sidebar. Order is sound.

**Final cut:** No molecules removed. Optional future molecules (e.g. **FilterSelect** for dropdown, **DataTableRow** as thin wrapper) can be added when building organisms; this plan stays focused on mockup-derived molecules that compose atoms only.

---

## 7. Summary

| Phase | Molecules | Atom focus |
|-------|-----------|------------|
| 1 | FormField, AuthTabs, SocialLoginButtons, EmptyState; use Divider (label) at call sites | Label, Input, Divider, Text, TabSegment, IconButton, Icon, Box |
| 2 | StatCard, KpiCard, AlertBanner, ListCard | **Surface**, Box, Text, Icon, Badge, Button (do not use Card molecule inside these) |
| 3 | InfoRow, PayrollStatusRow, PendingApprovalRow, EmployeeRowCell | Text, Label, Badge, Avatar, Divider |
| 4 | NavItem, TabFilter, SearchBar, FilterChip, Pagination | Icon, Text, Badge, Link/Button, Input, TabSegment, Button, PaginationButton |
| 5 | StatusStepper, ProfileHeader, UnderlineTabs, DateRangeTrigger, SidebarUser | StepperDot, StepperConnector, Avatar, Text, Badge, Button, Icon, TabSegment |

All molecules must use only `@/components/atoms`. Implement in phases 1 → 5; add stories and tests per project norms. Revisit this doc when adding new mockups or organisms.

---

## 8. Lead engineer roast & boundary check

**TL;DR:** One molecule is likely redundant (atom already does it). One is organism territory. One is borderline “enhanced atom.” The rest respect the atom/molecule boundary. Lock the rules below so we don’t slip.

### 8.1 Not a molecule — it’s the atom

| Item | Verdict | Why |
|------|--------|-----|
| **DividerWithText** | **Don’t build it (or treat as atom usage).** | `Divider` already has a `label` prop and renders horizontal rule + centered text. Using `<Divider label="Or continue with" />` is the atom. A “DividerWithText” molecule would just wrap that and add no composition — so it’s either redundant or a styling variant that belongs on the atom. **Action:** Use `Divider` with `label` at call sites; drop DividerWithText from the molecule list unless you need a distinctly different visual (then extend Divider, don’t add a molecule). |

### 8.2 Molecule or organism?

| Item | Verdict | Why |
|------|--------|-----|
| **ProfileHeader** | **Organism risk.** | Avatar + name + badges + subtitle + meta row (Icon + Text) + actions (Button group) is 6+ composed elements and a clear “section” of the page. You already noted “if it grows, split… and move header to organisms.” It’s already at the line. **Action:** Either (a) cap it as the one “maximal molecule” (no new elements; any expansion becomes an organism that composes smaller molecules), or (b) split now into e.g. ProfileAvatarBlock + ProfileMetaRow (molecules) and keep “ProfileHeader” as an organism that composes them. |
| **ListCard** | **Molecule OK if children are not molecules.** | ListCard = Surface + title + optional Badge + **children** + footer Button. It only composes atoms and a slot. **Rule:** ListCard must not import or render other molecules. The “list of rows” is passed as `children` by the **organism** (e.g. dashboard section). If ListCard ever takes “rows” as a prop and maps over PayrollStatusRow / PendingApprovalRow, it has become an organism. |

### 8.3 Borderline: molecule vs “enhanced atom”

| Item | Verdict | Why |
|------|--------|-----|
| **SearchBar** | **Only a molecule if it adds behavior.** | Input already has `leftAdornment`. If SearchBar is just “Input with a search icon,” that’s a usage of the atom, not a new component. **Action:** Implement a SearchBar molecule only if you add at least one of: `role="search"`, clear button (Input + IconButton), or debounce. Otherwise use `<Input leftAdornment={<Icon name="search" />} />` at the call site and do not add a molecule. |

### 8.4 Naming / clarity

- **EmployeeRowCell** vs **PendingApprovalRow:** “Row” means “cell content” in one and “full row” in the other. Consider **EmployeeCell** or **EmployeeAvatarCell** to avoid “row” overload, or document the distinction clearly in the molecule’s description.
- **FilterChip:** Plan says “Button + Icon + label + chevron” and optionally Chip. If you use the **Chip** atom, FilterChip is Chip + specific content (molecule). If you use Button + Icons + Text, avoid duplicating Chip’s look; reuse Chip’s variants or keep the design aligned.

### 8.5 What you got right

- **KpiCard, StatCard, ListCard** — Explicit “Surface/Box + atoms only; do not use Card molecule” avoids molecule-in-molecule (organism creep). Good.
- **UnderlineTabs** — Preferring a molecule wrapper over overloading TabSegment keeps the atom simple. Good.
- **FormField** — Label + Input (+ hint/error); passes through Input props (e.g. adornments). Doesn’t duplicate Input; clear molecule.
- **StatusStepper, Pagination, AuthTabs, SocialLoginButtons, etc.** — All compose only atoms; no molecule composition. Good.
- **Data table row** — Correctly deferred to organism; EmployeeRowCell is only the avatar+name+id cell. Good.

### 8.6 Hard rules (enforce in review)

1. **Molecules** compose only from `@/components/atoms`. No `import … from '@/components/molecules'` inside a molecule (except re-export/index).
2. **ListCard** never imports or maps over PayrollStatusRow, PendingApprovalRow, or any other molecule; rows are `children` from the parent.
3. **ProfileHeader** is either the single allowed “fat” molecule with a strict cap, or it’s split into smaller molecules and the header becomes an organism.
4. **SearchBar** is only added as a molecule when it adds role/clear/debounce; otherwise it’s Input usage at the call site.
5. **DividerWithText** is not implemented as a molecule; use `Divider` with `label` (or extend the atom if the design diverges).
