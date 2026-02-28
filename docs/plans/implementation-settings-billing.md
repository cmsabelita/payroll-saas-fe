# Implementation Plan: Settings — Billing

**Mockup:** `docs/mockups/settings-billing.html`  
**Route:** `src/app/(dashboard)/settings/billing/page.tsx`  
**Template:** DashboardTemplate; SettingsLayout.

---

## Overview

Billing settings: plan info, payment method, invoices. Organism(s); page composes DashboardTemplate + SettingsLayout.

---

## Affected files

- `src/components/organisms/SettingsBillingSection/` ✨
- `src/app/(dashboard)/settings/billing/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
