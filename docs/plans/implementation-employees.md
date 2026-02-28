# Implementation Plan: Employees List Page

**Mockup:** `docs/mockups/employees.html`  
**Route:** `src/app/(dashboard)/employees/page.tsx`  
**Template:** DashboardTemplate (sidebar + topbar + main).

---

## Overview

Build the employees list page: dashboard shell, page title "Employees", filters/search, tabs (e.g. All / Active / Inactive), "Add employee" button, and a data table (columns per mockup: name/avatar, role, department, status badge, etc.) with row actions. Decompose: EmployeesToolbar (filters, tabs, add button), EmployeesTable (or DataTable organism with configurable columns), and page that composes DashboardTemplate and these organisms with typed data.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/organisms/EmployeesToolbar/` (filters, tabs, add CTA) | ✨ Create |
| `src/components/organisms/EmployeesTable/` (or generic DataTable) | ✨ Create |
| `src/app/(dashboard)/employees/page.tsx` | ✨ Create |
| Molecules: table row, status badge (reuse Badge atom) | Use existing or ✨ |
| Organisms barrel | ✏️ |

---

## Pre-implementation decisions

- **DashboardTemplate:** Reuse existing; pass nav, topbar, children. Employees page lives in main slot.
- **EmployeesToolbar:** Search input, filter dropdowns if any, tab group (All/Active/Inactive), primary "Add employee" button. Props: searchValue, onSearchChange, activeTab, onTabChange, onAddClick (or Link).
- **EmployeesTable:** Props: rows (typed array), columns config (key, label, render?), onRowClick?, sortable?. Use Table atoms if available; otherwise Surface + semantic table. Status badges use Badge atom with variant from data.
- **"use client":** Page or toolbar/table if state (filters, tabs, sort).

---

## Steps

1. **Audit** — Inspect mockup for exact columns, tab labels, filter UI. List existing Table, Input, Button, Badge, Avatar.
2. **EmployeesToolbar** — Create organism: layout (search + filters + tabs + button); use FormInput or Input for search; Button/Link for Add. Types: props for controlled search, tab, handlers.
3. **EmployeesTable** — Create organism: accept rows and column config; render header and body; use semantic tokens for hover/row. Export types for row shape.
4. **Page** — Create `(dashboard)/employees/page.tsx`: DashboardTemplate, then toolbar + table; pass mock or store data. Use typed constant for sample rows.
5. **Barrels + Stories** — Export both organisms; stories with mock data.
6. **Verification** — Lint, build, Storybook; light/dark.

---

## Verification checklist

- [ ] `tsc --noEmit`, `npm run lint`, `npm run build` pass
- [ ] Semantic tokens only; no `dark:`; `@/` and `import type`
- [ ] Stories for new organisms
