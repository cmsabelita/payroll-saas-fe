# Implementation Plan: Settings — Payroll Config

**Mockup:** `docs/mockups/settings-payroll-config.html`  
**Route:** `src/app/(dashboard)/settings/payroll-config/page.tsx`  
**Template:** DashboardTemplate; SettingsLayout.

---

## Overview

Payroll configuration: pay period, cutoff dates, defaults. Form organism; page composes DashboardTemplate + SettingsLayout.

---

## Affected files

- `src/components/organisms/SettingsPayrollConfigForm/` ✨
- `src/app/(dashboard)/settings/payroll-config/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields; create form organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
