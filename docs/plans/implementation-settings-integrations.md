# Implementation Plan: Settings — Integrations

**Mockup:** `docs/mockups/settings-integrations.html`  
**Route:** `src/app/(dashboard)/settings/integrations/page.tsx`  
**Template:** DashboardTemplate; SettingsLayout.

---

## Overview

Integrations: list of available/connected integrations, connect/disconnect. Organism(s); page composes DashboardTemplate + SettingsLayout.

---

## Affected files

- `src/components/organisms/SettingsIntegrationsSection/` ✨
- `src/app/(dashboard)/settings/integrations/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism(s) and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
