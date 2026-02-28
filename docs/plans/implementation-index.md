# Implementation Plan: Marketing Index / Home Redirect

**Mockup:** `docs/mockups/index.html`  
**Route:** `src/app/(marketing)/page.tsx` (root marketing home)  
**Template:** MarketingTemplate.

---

## Overview

The index mockup is the marketing home (landing). If the app root or (marketing) home should show the same content as the landing page, ensure `(marketing)/page.tsx` uses MarketingTemplate and the same hero/features/CTA as in marketing-landing-page.md. If index.html is a redirect or minimal shell, implement that: redirect to `/` or `/login` or render minimal landing. Confirm with mockup content.

---

## Affected files

| File | Action |
|------|--------|
| `src/app/(marketing)/page.tsx` | ✏️ Align with mockup or redirect |
| MarketingTemplate / landing organisms | ✏️ As per marketing-landing-page.md |

---

## Pre-implementation decisions

- **Behavior:** If index = landing, reuse MarketingTemplate + MarketingHero, MarketingFeatureGrid, etc. If index = redirect, use Next.js redirect() or Link.
- **"use client":** Only if client-side redirect; otherwise server component fine.

---

## Steps

1. **Compare** — Open `docs/mockups/index.html` and compare to `marketing-landing.html`. If same, implementation is covered by marketing-landing-page.md; this plan is "ensure (marketing)/page.tsx renders that."
2. **Page** — Ensure `src/app/(marketing)/page.tsx` composes MarketingTemplate and landing organisms with correct content.
3. **Verification** — Build, lint; root route shows correct page.

---

## Verification checklist

- [ ] `tsc --noEmit`, `npm run lint` pass
- [ ] Root or (marketing) home matches mockup intent
