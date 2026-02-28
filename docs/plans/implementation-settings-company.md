# Implementation Plan: Settings — Company

**Mockup:** `docs/mockups/settings-company.html`  
**Route:** `src/app/(dashboard)/settings/company/page.tsx`  
**Template:** DashboardTemplate; reuse SettingsLayout if exists (sidebar nav + content).

---

## Overview

Company settings: form for company name, address, registration, etc. Form organism; page uses DashboardTemplate and SettingsLayout (or content area). Decompose per mockup sections.

---

## Affected files

- `src/components/organisms/SettingsCompanyForm/` or sections ✨
- `src/app/(dashboard)/settings/company/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup form sections.
2. Create form organism(s); create page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
