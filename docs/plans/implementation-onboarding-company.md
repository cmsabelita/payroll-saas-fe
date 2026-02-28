# Implementation Plan: Onboarding — Company Step

**Mockup:** `docs/mockups/onboarding-company.html`  
**Route:** `src/app/(onboarding)/company/page.tsx` (or step 1 of onboarding)  
**Template:** OnboardingTemplate (step wizard shell).

---

## Overview

Onboarding step: company info (name, address, etc.). Form organism; part of onboarding wizard. Use OnboardingTemplate if exists (stepper + content slot).

---

## Affected files

- `src/components/organisms/OnboardingCompanyForm/` ✨
- `src/app/(onboarding)/company/page.tsx` or layout ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup fields; create form organism. Create or wire onboarding route.
2. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; Controller; semantic tokens
