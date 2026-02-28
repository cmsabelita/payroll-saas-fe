# Dashboard Page — Implementation Plan

**Mockup:** `docs/mockups/dashboard.html`
**Route:** `src/app/(dashboard)/dashboard/page.tsx`
**Template:** `src/components/templates/DashboardTemplate/`

---

## Overview

The dashboard page has three layers to build:

1. **DashboardTemplate** — new template wrapping `AppSidebar` + `AppTopbar` + `{children}` scroll area
2. **Two new organisms** — `PayrollTrendChart` and `AlertsDeadlines`
3. **DashboardPage** — the `(dashboard)/dashboard/page.tsx` that composes everything

All other building blocks (`AppSidebar`, `AppTopbar`, `DashboardKpiStrip`, `KpiCard`, `PayrollStatusRow`, `PendingApprovalRow`, `AlertBanner`) already exist.

---

## What Already Exists (no changes needed)

| Component | Location | Role in dashboard |
|---|---|---|
| `AppSidebar` | `organisms/AppSidebar/` | Left nav (232 px) |
| `AppTopbar` | `organisms/AppTopbar/` | Top header bar (h-14) |
| `DashboardKpiStrip` | `organisms/DashboardKpiStrip/` | 4-col KPI grid |
| `KpiCard` | `molecules/KpiCard/` | Individual KPI card |
| `PayrollStatusRow` | `molecules/PayrollStatusRow/` | Payroll period list item |
| `PendingApprovalRow` | `molecules/PendingApprovalRow/` | Approval queue list item |
| `AlertBanner` | `molecules/AlertBanner/` | Alert/deadline item |
| `NavItem` | `molecules/NavItem/` | Sidebar navigation item |
| `SidebarUser` | `molecules/SidebarUser/` | Sidebar user block |
| `Avatar` | `atoms/Avatar/` | User initials circle |
| `Badge` | `atoms/Badge/` | Status badge |
| `Button` | `atoms/Button/` | CTA buttons |
| `Surface` | `atoms/Surface/` | Bordered card surface |
| `Text` | `atoms/Text/` | All text variants |

---

## Phase 1 — DashboardTemplate

**File:** `src/components/templates/DashboardTemplate/DashboardTemplate.tsx`

### Layout structure (matches mockup exactly)

```
<div class="flex h-screen overflow-hidden bg-muted/30">
  <AppSidebar />                    ← 232px, fixed left
  <div class="flex flex-1 flex-col min-w-0 overflow-hidden">
    <AppTopbar />                   ← h-14, top
    <main class="flex-1 overflow-y-auto p-6">
      {children}                    ← scrollable content
    </main>
  </div>
</div>
```

### Props

```ts
// DashboardTemplate.types.ts
export interface DashboardTemplateProps {
  /** Sidebar logo node */
  logo: ReactNode;
  /** Sidebar nav sections */
  navSections: AppSidebarNavSection[];
  /** Sidebar user block */
  user: React.ReactElement<SidebarUserProps>;
  /** Topbar title */
  topbarTitle: string;
  /** Topbar trailing actions (notifications, avatar) */
  topbarTrailing?: ReactNode;
  /** Topbar date range picker */
  topbarDateRange?: ReactNode;
  /** Page content */
  children: ReactNode;
  /** Optional class on the outer wrapper */
  className?: string;
}
```

### Files to create

```
src/components/templates/DashboardTemplate/
  DashboardTemplate.tsx
  DashboardTemplate.types.ts
  index.ts
```

Export from `src/components/templates/index.ts`.

---

## Phase 2 — New Organisms

### 2a. `PayrollTrendChart`

**File:** `organisms/PayrollTrendChart/PayrollTrendChart.tsx`

Renders the bar chart panel from the mockup (left 2/3 of the chart row).

- **Props:** `months: { label: string; grossPct: number; netPct: number; current?: boolean; currentLabel?: string }[]`
- Each bar pair: a green `grossPct` bar + a blue `netPct` bar, both `border-radius: 4px 4px 0 0`
- Current month: green label above + glowing shadow + bold label below
- Legend: Gross (green square) · Net (blue square)
- Uses `Surface elevation="none"` as wrapper with `p-5`
- No external chart library — pure CSS flex bars (matches mockup)
- Height of bar area: `130px` with bars in inner `110px` container

```ts
// PayrollTrendChart.types.ts
export interface PayrollTrendChartMonth {
  label: string;
  grossPct: number;   // 0–100, height % of bar area
  netPct: number;     // 0–100
  current?: boolean;  // highlights this bar with glow + label
  currentLabel?: string; // e.g. "₱4.28M"
}

export interface PayrollTrendChartProps {
  title?: string;          // default "Payroll Trend"
  subtitle?: string;       // default "Gross payroll · last 6 months"
  months: PayrollTrendChartMonth[];
  className?: string;
}
```

### 2b. `AlertsDeadlines`

**File:** `organisms/AlertsDeadlines/AlertsDeadlines.tsx`

Renders the "Alerts & Deadlines" panel (right side of the bottom row in mockup, but panel is standalone).

- **Props:** `items: AlertDeadlineItem[]`
- Uses existing `AlertBanner` molecule for each item
- Each `AlertBanner` has `variant` (`error` | `warning` | `info` | `success`), `icon`, `title`, `description`
- Wrapped in `Surface elevation="none"` with `p-5`
- Header: "Alerts & Deadlines" using `Text variant="label"`

```ts
export interface AlertDeadlineItem {
  variant: 'error' | 'warning' | 'info' | 'success';
  icon: ReactNode;
  title: string;
  description?: string;
}

export interface AlertsDeadlinesProps {
  items: AlertDeadlineItem[];
  className?: string;
}
```

> Note: `AlertBanner` already renders `role="alert"` with the right variant colors. We just stack them in a `space-y-2.5` container.

### Files to create

```
src/components/organisms/PayrollTrendChart/
  PayrollTrendChart.tsx
  PayrollTrendChart.types.ts
  index.ts

src/components/organisms/AlertsDeadlines/
  AlertsDeadlines.tsx
  AlertsDeadlines.types.ts
  index.ts
```

Export both from `src/components/organisms/index.ts`.

---

## Phase 3 — Dashboard Page

**File:** `src/app/(dashboard)/dashboard/page.tsx`

The page wires together all organisms inside the `DashboardTemplate`.

### Page layout (exact mockup sections)

```
DashboardTemplate
  ├── logo: <PayroLogo />               (inline svg + wordmark)
  ├── navSections: DASHBOARD_NAV        (constant below)
  ├── user: <SidebarUser ... />
  ├── topbarTitle: "Dashboard"
  ├── topbarDateRange: <DateRangeTrigger />
  └── topbarTrailing: [NotificationButton, AvatarButton]
  └── children:
        ├── Page heading (date + greeting)
        ├── DashboardKpiStrip (4 KPI cards)
        ├── grid grid-cols-3 gap-4
        │     ├── col-span-2: PayrollTrendChart
        │     └── col-span-1: PayrollStatusPanel (new small organism or inline)
        └── grid grid-cols-2 gap-4
              ├── PendingApprovalsPanel
              └── AlertsDeadlines
```

### Payroll Status panel

The right column of the chart row is a simple `Surface` wrapper listing `PayrollStatusRow` items + a "View all" button. This can be done **inline in the page** (no new organism needed) since it's just a surface + list + button.

```tsx
<Surface elevation="none" className="p-5">
  <Text variant="label" as="h3" className="mb-4">Payroll Status</Text>
  <div className="space-y-3">
    <PayrollStatusRow title="Feb 2026 (2nd Half)" subtitle="Feb 16–28 · 128 emp." status="Draft" showDivider />
    <PayrollStatusRow title="Feb 2026 (1st Half)" subtitle="Feb 1–15 · 128 emp."  status="Approved" showDivider />
    <PayrollStatusRow title="Jan 2026 (2nd Half)" subtitle="Jan 16–31 · 126 emp." status="Paid" showDivider />
    <PayrollStatusRow title="Jan 2026 (1st Half)" subtitle="Jan 1–15 · 126 emp."  status="Paid" />
  </div>
  <Button variant="outline" size="sm" className="mt-4 w-full">View all periods</Button>
</Surface>
```

### Pending Approvals panel

Also inline in the page — `Surface` + title + `PendingApprovalRow` list + "View all" button.

```tsx
<Surface elevation="none" className="p-5">
  <div className="flex items-center justify-between mb-4">
    <Text variant="label" as="h3">Pending Approvals</Text>
    <Badge variant="warning">12 pending</Badge>
  </div>
  <div className="space-y-1">
    <PendingApprovalRow avatar={...} primaryText="Juan dela Cruz" secondaryText="Leave · Feb 28–Mar 1" badge={<Badge variant="info">Leave</Badge>} onClick={...} />
    ...
  </div>
  <Button variant="outline" size="sm" className="mt-3 w-full">View all approvals</Button>
</Surface>
```

### Sidebar nav constant

Define in `src/app/(dashboard)/dashboard/_data/nav.tsx` (or inline in page if small):

```ts
export const DASHBOARD_NAV: AppSidebarNavSection[] = [
  {
    label: "Main",
    items: [{ label: "Dashboard", href: "/dashboard", active: true, icon: <HomeIcon /> }],
  },
  {
    label: "People",
    items: [
      { label: "Employees",    href: "/employees",    icon: <UsersIcon /> },
      { label: "Organization", href: "/organization", icon: <OrgIcon /> },
      { label: "Team",         href: "/team",         icon: <TeamIcon /> },
    ],
  },
  {
    label: "Time & Requests",
    items: [
      { label: "Attendance", href: "/attendance", icon: <CalendarIcon /> },
      { label: "Approvals",  href: "/approvals",  icon: <CheckIcon />, badge: 12 },
    ],
  },
  {
    label: "Finance",
    items: [
      { label: "Payroll",    href: "/payroll",    icon: <WalletIcon /> },
      { label: "Compliance", href: "/compliance", icon: <DocIcon /> },
    ],
  },
  {
    label: "Analytics",
    items: [{ label: "Reports", href: "/reports", icon: <ChartIcon /> }],
  },
  {
    label: "System",
    items: [{ label: "Settings", href: "/settings", icon: <GearIcon /> }],
  },
  {
    label: "My Account",
    items: [
      { label: "My Dashboard", href: "/my/dashboard", icon: <PersonIcon /> },
      { label: "My Payslips",  href: "/my/payslips",  icon: <PayslipIcon /> },
      { label: "My Requests",  href: "/my/requests",  icon: <ChatIcon /> },
    ],
  },
];
```

Use inline SVG nodes matching the mockup icons (heroicons stroke style, `w-4 h-4`).

### KPI strip data

```ts
const KPI_ITEMS = [
  {
    value: "128",
    label: "Total Employees",
    icon: <UsersIcon className="h-5 w-5 text-blue-500" />,
    badge: <span className="text-xs font-semibold text-success flex items-center gap-0.5">↑ 3 new</span>,
  },
  {
    value: "₱4.28M",
    label: "Gross Payroll (Last Period)",
    icon: <WalletIcon className="h-5 w-5 text-primary" />,
    badge: <span className="text-xs font-semibold text-destructive flex items-center gap-0.5">↓ 2.1%</span>,
  },
  {
    value: "12",
    label: "Pending Approvals · Leave: 7, OT: 5",
    icon: <ClockIcon className="h-5 w-5 text-orange-500" />,
    badge: <Badge variant="warning">Needs action</Badge>,
  },
  {
    value: "2",
    label: "Active Payroll Periods",
    icon: <ClipboardIcon className="h-5 w-5 text-purple-500" />,
    badge: <Badge variant="info">Feb 2026</Badge>,
  },
];
```

### Greeting heading

```tsx
<div className="mb-6">
  <Text variant="caption" as="p" className="mb-0.5 text-muted-foreground">
    Thursday, February 27, 2026
  </Text>
  <Text variant="heading" as="h2" className="text-xl font-bold">
    Good morning, Mark 👋
  </Text>
</div>
```

---

## Files to create / modify

### New files

| File | Description |
|---|---|
| `src/components/templates/DashboardTemplate/DashboardTemplate.tsx` | Shell template |
| `src/components/templates/DashboardTemplate/DashboardTemplate.types.ts` | Props |
| `src/components/templates/DashboardTemplate/index.ts` | Re-export |
| `src/components/organisms/PayrollTrendChart/PayrollTrendChart.tsx` | Bar chart organism |
| `src/components/organisms/PayrollTrendChart/PayrollTrendChart.types.ts` | Props |
| `src/components/organisms/PayrollTrendChart/index.ts` | Re-export |
| `src/components/organisms/AlertsDeadlines/AlertsDeadlines.tsx` | Alert list organism |
| `src/components/organisms/AlertsDeadlines/AlertsDeadlines.types.ts` | Props |
| `src/components/organisms/AlertsDeadlines/index.ts` | Re-export |
| `src/app/(dashboard)/dashboard/page.tsx` | Dashboard page |

### Modified files

| File | Change |
|---|---|
| `src/components/templates/index.ts` | Export `DashboardTemplate` |
| `src/components/organisms/index.ts` | Export `PayrollTrendChart`, `AlertsDeadlines` |

---

## Implementation order

1. `DashboardTemplate` (template) — needed first, unlocks all dashboard routes
2. `PayrollTrendChart` (organism) — isolated, pure CSS bars
3. `AlertsDeadlines` (organism) — simple AlertBanner wrapper
4. `src/app/(dashboard)/dashboard/page.tsx` — wires everything together

---

## Open questions / decisions

- **Icons:** Use inline SVG strings matching mockup exactly (heroicons style). No icon library dependency needed.
- **Date/greeting:** Hard-coded for mockup fidelity now; replace with `new Date()` + auth store later.
- **Badge variants:** `KpiCard.badge` accepts `ReactNode` — pass custom colored spans for the ↑/↓ indicators to match mockup colors (green/red), not the `Badge` atom (which only has semantic variants).
- **`PayrollTrendChart` data:** Static prop data for now; connect to `PayrollStore` in a later phase.
- **Notifications button:** Inline in page as a plain `<button>` with red dot — no `Notification` molecule exists yet.
