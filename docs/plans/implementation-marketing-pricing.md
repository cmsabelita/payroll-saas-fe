# Implementation Plan: Marketing Pricing Page

**Mockup:** `docs/mockups/marketing-pricing.html`  
**Route:** `src/app/(marketing)/pricing/page.tsx`  
**Template:** Reuse MarketingTemplate (nav + content + footer).

---

## Overview

Build the marketing pricing page: public layout with MarketingNav, pricing section (tiers, features, CTA), and MarketingFooter. Decompose into organisms: pricing section (e.g. PricingTiers or MarketingPricingSection), optional FAQ. Page composes MarketingTemplate and passes section content.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/organisms/MarketingPricingSection/` (or equivalent) | ✨ Create if missing |
| `src/app/(marketing)/pricing/page.tsx` | ✨ Create |
| Organisms/templates barrel | ✏️ |

---

## Pre-implementation decisions

- **Template:** MarketingTemplate with slots for nav, main, footer. No sidebar.
- **Pricing block:** Organism with tier cards (title, price, features list, CTA). Use semantic tokens; no hardcoded colors.
- **"use client":** Only if pricing has tabs/toggle (e.g. monthly/yearly); otherwise optional.

---

## Steps

1. **Audit** — Confirm MarketingTemplate, MarketingNav, MarketingFooter exist. Inspect mockup for tier count, feature list, CTAs.
2. **Pricing organism** — Create MarketingPricingSection (or PricingTiers): props for tiers array (name, price, features[], ctaText, ctaHref). Use Surface/Card, Button, Text.
3. **Page** — Create `(marketing)/pricing/page.tsx`: MarketingTemplate with nav, pricing organism, footer. Static tier data typed and passed as props.
4. **Barrels + Stories** — Export organism; add story for pricing section.
5. **Verification** — Build, lint, Storybook; light/dark both work.

---

## Verification checklist

- [ ] `tsc --noEmit`, `npm run lint`, `npm run build` pass
- [ ] Semantic tokens only; no `dark:`; `@/` and `import type`
- [ ] Story for new organism
