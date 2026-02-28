# Implementation Plan: Employee Edit (Overview) Page

**Mockup:** `docs/mockups/employees-edit.html`  
**Route:** `src/app/(dashboard)/employees/[id]/page.tsx` or `edit` segment  
**Template:** DashboardTemplate.

---

## Overview

Employee edit overview/detail: dashboard shell, breadcrumb or back link, employee name/header, tabs or sections (Profile, Employment, Salary, Tax, Gov IDs, Access), and content for selected section. Decompose: EmployeeEditHeader, EmployeeEditTabs (or sidebar nav), and section content organisms. Page uses DashboardTemplate and loads employee by id; tab state in URL or React state.

---

## Affected files

- `src/components/organisms/EmployeeEditHeader/` ✨
- `src/components/organisms/EmployeeEditTabs/` or section router ✨
- `src/app/(dashboard)/employees/[id]/page.tsx` (or nested layout) ✨
- Organisms barrel ✏️

---

## Pre-implementation decisions

- **Routing:** Optional: `employees/[id]/edit` with optional `?tab=employment` or nested routes per section. Single page with tab state is acceptable.
- **Sections:** Each section (profile, employment, salary, tax, govids, access) can be separate plan (employees-edit-employment, etc.) or one edit page with tab content. This plan covers the shell and tab navigation; section content may be in sibling plans.
- **"use client":** Yes for tab state and form interactions.

---

## Steps

1. Audit mockup: header content, tab labels, default section.
2. Create EmployeeEditHeader (name, avatar, back link).
3. Create tab nav organism; accept activeTab, onTabChange, tabs[].
4. Create page with [id]; fetch or mock employee; render header + tabs + first section content (or link to section-specific pages).
5. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint, npm run build
- [ ] Semantic tokens; @/ and import type
