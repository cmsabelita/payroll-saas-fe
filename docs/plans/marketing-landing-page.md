# Marketing Landing Page — Implementation Plan

**Mockup:** `docs/mockups/marketing-landing.html`
**Template:** `src/components/templates/MarketingTemplate/`
**Route:** `src/app/(marketing)/page.tsx`

---

## Overview

Build the **MarketingTemplate** (sticky nav + `{children}` + dark footer shell) and the **LandingPage** that fills it with eight section organisms. The template is the reusable shell for all future `(marketing)` routes; the organisms are landing-page-specific but scoped to `organisms/`.

Build order: nav + footer organisms → template → section organisms → page.

---

## Affected Files

| File | Action |
|------|--------|
| `src/components/organisms/MarketingNav/MarketingNav.types.ts` | ✨ Create |
| `src/components/organisms/MarketingNav/MarketingNav.tsx` | ✨ Create |
| `src/components/organisms/MarketingNav/index.ts` | ✨ Create |
| `src/components/organisms/MarketingFooter/MarketingFooter.types.ts` | ✨ Create |
| `src/components/organisms/MarketingFooter/MarketingFooter.tsx` | ✨ Create |
| `src/components/organisms/MarketingFooter/index.ts` | ✨ Create |
| `src/components/templates/MarketingTemplate/MarketingTemplate.types.ts` | ✨ Create |
| `src/components/templates/MarketingTemplate/MarketingTemplate.tsx` | ✨ Create |
| `src/components/templates/MarketingTemplate/index.ts` | ✨ Create |
| `src/components/templates/MarketingTemplate/MarketingTemplate.stories.tsx` | ✨ Create |
| `src/components/templates/index.ts` | ✏️ Modify |
| `src/components/organisms/MarketingHero/MarketingHero.types.ts` | ✨ Create |
| `src/components/organisms/MarketingHero/MarketingHero.tsx` | ✨ Create |
| `src/components/organisms/MarketingHero/index.ts` | ✨ Create |
| `src/components/organisms/MarketingFeatureGrid/MarketingFeatureGrid.types.ts` | ✨ Create |
| `src/components/organisms/MarketingFeatureGrid/MarketingFeatureGrid.tsx` | ✨ Create |
| `src/components/organisms/MarketingFeatureGrid/index.ts` | ✨ Create |
| `src/components/organisms/MarketingHowItWorks/MarketingHowItWorks.types.ts` | ✨ Create |
| `src/components/organisms/MarketingHowItWorks/MarketingHowItWorks.tsx` | ✨ Create |
| `src/components/organisms/MarketingHowItWorks/index.ts` | ✨ Create |
| `src/components/organisms/MarketingPricingTeaser/MarketingPricingTeaser.types.ts` | ✨ Create |
| `src/components/organisms/MarketingPricingTeaser/MarketingPricingTeaser.tsx` | ✨ Create |
| `src/components/organisms/MarketingPricingTeaser/index.ts` | ✨ Create |
| `src/components/organisms/MarketingTestimonials/MarketingTestimonials.types.ts` | ✨ Create |
| `src/components/organisms/MarketingTestimonials/MarketingTestimonials.tsx` | ✨ Create |
| `src/components/organisms/MarketingTestimonials/index.ts` | ✨ Create |
| `src/components/organisms/MarketingCtaBanner/MarketingCtaBanner.types.ts` | ✨ Create |
| `src/components/organisms/MarketingCtaBanner/MarketingCtaBanner.tsx` | ✨ Create |
| `src/components/organisms/MarketingCtaBanner/index.ts` | ✨ Create |
| `src/components/organisms/index.ts` | ✏️ Modify |
| `src/app/(marketing)/page.tsx` | ✨ Create |

---

## Pre-implementation Decisions

- **Template shell:** `MarketingTemplate` renders `<MarketingNav>` fixed to top + `<main className="flex-1">{children}</main>` + `<MarketingFooter>` in a `min-h-screen flex flex-col bg-background` wrapper so the page respects light/dark theme. The nav and footer are internal — the template only exposes a `ctaHref`/`ctaLabel` override for the primary nav button.
- **PayroLogo:** Inline the coin SVG + "Payro" wordmark directly inside both `MarketingNav` and `MarketingFooter` — it is ~5 lines of JSX and duplicating it avoids creating an atom for a single brand mark used only in marketing. Do **not** create a separate component.
- **Theme modes (required):** The marketing landing must support **light and dark** theme. Follow `docs/prompt/implementation-task.md` theming rules: use **semantic tokens only** (`bg-background`, `bg-primary`, `text-primary-foreground`, `text-foreground`, `text-muted-foreground`, `bg-muted`, `bg-card`, `border-border`, etc.). Never hardcode hex/rgb/hsl or raw Tailwind palette classes (e.g. `bg-white`, `bg-gray-50`, `text-emerald-700`) in component classNames so that `data-theme` on `<html>` drives appearance. Verify every section in both themes before marking done.
- **Tokens vs raw classes:** Use semantic tokens exclusively so theme switching works. Use `bg-primary` / `text-primary` / `text-primary-foreground` for primary green and text on primary. Use `bg-background`, `bg-card`, `bg-muted`, `text-foreground`, `text-muted-foreground`, `border-border` everywhere. Do **not** use raw `gray-*` or `emerald-*` for layout/UI; reserve raw palette only for non-semantic accents (e.g. browser chrome dots) if needed.
- **CTA Banner bg:** Use `style={{ background: 'var(--color-primary)' }}` instead of `bg-primary` on the full-bleed banner element — Tailwind's `bg-primary` applies to padding-box only, but `style` ensures the section bg fills edge-to-edge reliably.
- **Browser mockup in hero:** Render inline inside `MarketingHero` — macOS chrome (3 dots + URL bar) wrapping a `preview` slot. No separate molecule; it appears only here.
- **Pricing card "Most Popular" badge:** Absolute-positioned `<span>` chip rendered inside the card — not the `Badge` atom, which doesn't support absolute placement out of the box.
- **Feature card icons:** Accept as `icon: ReactNode` — callers pass inline SVG strings (heroicons stroke, `w-5 h-5`). No icon library.
- **Logo strip:** Inline `LogoStrip` function component in the page file — 5 placeholder chips, too simple for an organism.
- **`"use client"`:** None of the new files require it — no hooks, no event handlers.
- **No `forwardRef`:** Layout/display only; not needed.
- **Stories:** Only `MarketingTemplate` needs a Storybook story (layout verification). Section organisms are covered by the page itself.

---

## Steps

### Step 1 — MarketingNav types

**File:** `src/components/organisms/MarketingNav/MarketingNav.types.ts`
**Action:** Create

```ts
import type { ReactNode } from "react";

export interface MarketingNavProps {
  /** Primary CTA href. Default: "/signup" */
  ctaHref?: string;
  /** Primary CTA label. Default: "Start Free Trial →" */
  ctaLabel?: string;
  className?: string;
}
```

---

### Step 2 — Implement MarketingNav

**File:** `src/components/organisms/MarketingNav/MarketingNav.tsx`
**Action:** Create

- Imports: `cn` from `@/utils`, `type { MarketingNavProps }` from `./MarketingNav.types`.
- Root: `<nav className={cn("bg-white/95 backdrop-blur border-b border-border sticky top-0 z-50 px-6 py-3", className)}>`.
- Inner: `<div className="max-w-6xl mx-auto flex items-center justify-between">`.
- Left group: `<div className="flex items-center gap-8">` containing:
  - **PayroLogo** — `<div className="flex items-center gap-2">` with a `w-7 h-7 rounded-lg flex items-center justify-center bg-primary` wrapper around the coin SVG (`w-4 h-4 text-white`) and a `<span className="font-bold text-foreground text-lg">Payro</span>`.
  - Nav links: `<div className="hidden md:flex items-center gap-6">` with four `<a>` tags — Features (`href="#features"`), Pricing (`href="/pricing"`), Docs (`href="#"`), Blog (`href="#"`) — each `text-sm text-muted-foreground hover:text-foreground`.
- Right group: `<div className="flex items-center gap-3">` with:
  - Login link: `<a href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">Log In</a>`.
  - CTA: `<a href={ctaHref ?? "/signup"} className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary">{ctaLabel ?? "Start Free Trial →"}</a>`.
- No `Button` atom for the CTA — it is a plain `<a>` matching the mockup exactly.
- Export named function `MarketingNav`.

Coin SVG to inline (copy from mockup):
```tsx
<svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
</svg>
```

---

### Step 3 — MarketingNav barrel

**File:** `src/components/organisms/MarketingNav/index.ts`
**Action:** Create

```ts
export { MarketingNav } from "./MarketingNav";
export type { MarketingNavProps } from "./MarketingNav.types";
```

---

### Step 4 — MarketingFooter types

**File:** `src/components/organisms/MarketingFooter/MarketingFooter.types.ts`
**Action:** Create

```ts
export interface MarketingFooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

export interface MarketingFooterProps {
  /** Override the three link column groups. Default: Product · Resources · Legal */
  linkGroups?: MarketingFooterLinkGroup[];
  copyrightText?: string;
  tagline?: string;
  className?: string;
}
```

---

### Step 5 — Implement MarketingFooter

**File:** `src/components/organisms/MarketingFooter/MarketingFooter.tsx`
**Action:** Create

- Root: `<footer className={cn("bg-gray-900 text-gray-400 px-6 py-12", className)}>`.
- Inner: `<div className="max-w-6xl mx-auto">`.
- Top grid: `<div className="grid grid-cols-5 gap-8 mb-10">`.
  - Logo block (`col-span-2`): `<div className="col-span-2">` with PayroLogo (same SVG as `MarketingNav`, rendered identically) + `<p className="text-sm text-gray-500 mt-3">{tagline ?? "Philippine payroll SaaS — SSS, PhilHealth, Pag-IBIG & BIR compliance built-in."}</p>`.
  - Link groups: iterate `(linkGroups ?? DEFAULT_LINK_GROUPS)`, each renders a `<div>` with `<h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-3">{group.heading}</h4>` and `<div className="space-y-2 text-sm">` of `<p><a href={link.href} className="hover:text-white">{link.label}</a></p>` items.
- Bottom row: `<div className="border-t border-gray-800 pt-6 flex items-center justify-between">` with copyright left and "Made for Filipino businesses" right.
- Define `DEFAULT_LINK_GROUPS` as a module-level constant (Product: Features/Pricing/Security/Changelog; Resources: Docs/API Reference/Status/Help Center; Legal: Privacy/Terms/Cookies). Use `href="#"` for placeholder links.
- Export named function `MarketingFooter`.

---

### Step 6 — MarketingFooter barrel

**File:** `src/components/organisms/MarketingFooter/index.ts`
**Action:** Create

```ts
export { MarketingFooter } from "./MarketingFooter";
export type { MarketingFooterProps, MarketingFooterLinkGroup } from "./MarketingFooter.types";
```

---

### Step 7 — MarketingTemplate types

**File:** `src/components/templates/MarketingTemplate/MarketingTemplate.types.ts`
**Action:** Create

```ts
import type { ReactNode } from "react";

export interface MarketingTemplateProps {
  /** Override primary nav CTA href. Default: "/signup" */
  ctaHref?: string;
  /** Override primary nav CTA label. Default: "Start Free Trial →" */
  ctaLabel?: string;
  children: ReactNode;
  className?: string;
}
```

---

### Step 8 — Implement MarketingTemplate

**File:** `src/components/templates/MarketingTemplate/MarketingTemplate.tsx`
**Action:** Create

- Imports: `cn` from `@/utils`, `MarketingNav` and `MarketingFooter` from `@/components/organisms`, `type { MarketingTemplateProps }` from `./MarketingTemplate.types`.
- Structure:
```tsx
export function MarketingTemplate({ ctaHref, ctaLabel, children, className }: MarketingTemplateProps) {
  return (
    <div className={cn("min-h-screen flex flex-col bg-white", className)}>
      <MarketingNav ctaHref={ctaHref} ctaLabel={ctaLabel} />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </div>
  );
}
```
- No `"use client"`, no `forwardRef`.
- `MarketingNav` and `MarketingFooter` receive no data beyond the CTA override — all other content is hardcoded inside those organisms.

---

### Step 9 — MarketingTemplate barrel

**File:** `src/components/templates/MarketingTemplate/index.ts`
**Action:** Create

```ts
export { MarketingTemplate } from "./MarketingTemplate";
export type { MarketingTemplateProps } from "./MarketingTemplate.types";
```

**File:** `src/components/templates/index.ts`
**Action:** Modify — add in alphabetical order (after `LoginTemplate`, before `PageLayout`):

```ts
export { MarketingTemplate } from "./MarketingTemplate";
export type { MarketingTemplateProps } from "./MarketingTemplate";
```

---

### Step 10 — MarketingTemplate Storybook story

**File:** `src/components/templates/MarketingTemplate/MarketingTemplate.stories.tsx`
**Action:** Create

- `meta.title`: `"Templates/MarketingTemplate"`, `tags: ["autodocs"]`, `parameters.layout: "fullscreen"`.
- Stories:
  - **Default:** `<MarketingTemplate><div className="p-20 text-center text-muted-foreground">Page content goes here</div></MarketingTemplate>`.
  - **WithCtaOverride:** Same but with `ctaHref="/pricing"` and `ctaLabel="See pricing →"` to verify prop threading.

---

### Step 11 — MarketingHero types

**File:** `src/components/organisms/MarketingHero/MarketingHero.types.ts`
**Action:** Create

```ts
import type { ReactNode } from "react";

export interface MarketingHeroProps {
  badgeLabel?: string;
  headline?: ReactNode;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLine?: string;
  /** Node rendered inside the browser chrome preview area */
  preview?: ReactNode;
  className?: string;
}
```

---

### Step 12 — Implement MarketingHero

**File:** `src/components/organisms/MarketingHero/MarketingHero.tsx`
**Action:** Create

- Root: `<section className={cn("max-w-6xl mx-auto px-6 pt-20 pb-16 text-center", className)}>`.
- **Badge pill:** `<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-6"><span className="text-xs font-semibold text-emerald-700">{badgeLabel ?? DEFAULT_BADGE}</span></div>`.
- **H1:** `<h1 className="text-5xl font-black text-foreground leading-tight mb-4">{headline ?? DEFAULT_HEADLINE}</h1>`. `DEFAULT_HEADLINE` is a JSX fragment: `<>Philippine Payroll,<br /><span className="text-primary">Done Right.</span></>`.
- **Subtext:** `<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">{subtext ?? DEFAULT_SUBTEXT}</p>`.
- **CTA row:** `<div className="flex items-center justify-center gap-4 mb-6">` with:
  - Primary: `<a href={primaryCta?.href ?? "/signup"} className="px-6 py-3 text-base font-semibold text-white rounded-xl shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition bg-primary">{primaryCta?.label ?? "Start Free — No credit card →"}</a>`.
  - Secondary: `<a href={secondaryCta?.href ?? "/dashboard"} className="px-6 py-3 text-base font-medium text-foreground bg-white border border-border rounded-xl hover:bg-muted flex items-center gap-2">{secondaryCta?.label ?? "View Demo"} <ChevronSVG /></a>`. Inline the chevron SVG from the mockup.
- **Trust line:** `<p className="text-sm text-muted-foreground">{trustLine ?? DEFAULT_TRUST_LINE}</p>`.
- **Browser mockup:** rendered below the trust line in `<section className="max-w-5xl mx-auto px-6 pb-16">`:
  ```tsx
  <div className="rounded-2xl border border-border overflow-hidden shadow-2xl shadow-gray-100">
    <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
      <span className="ml-3 text-xs text-gray-400 font-mono">app.payro.ph/dashboard</span>
    </div>
    <div className="bg-gray-50 h-80 flex items-center justify-center">
      {preview ?? <DefaultPreviewPlaceholder />}
    </div>
  </div>
  ```
  `DefaultPreviewPlaceholder` is an inline JSX fragment (icon + "View live dashboard mockup →" link) matching the mockup. No separate component.
- Define all `DEFAULT_*` constants at the top of the file (not inline in JSX) so the component body stays readable.
- Export named function `MarketingHero`.

---

### Step 13 — MarketingHero barrel

**File:** `src/components/organisms/MarketingHero/index.ts`
**Action:** Create

```ts
export { MarketingHero } from "./MarketingHero";
export type { MarketingHeroProps } from "./MarketingHero.types";
```

---

### Step 14 — MarketingFeatureGrid types

**File:** `src/components/organisms/MarketingFeatureGrid/MarketingFeatureGrid.types.ts`
**Action:** Create

```ts
import type { ReactNode } from "react";

export interface MarketingFeatureItem {
  icon: ReactNode;
  iconBg: string;    // Tailwind bg class — e.g. "bg-emerald-50"
  iconColor: string; // Tailwind text class — e.g. "text-primary"
  title: string;
  description: string;
}

export interface MarketingFeatureGridProps {
  heading?: string;
  subtext?: string;
  items: MarketingFeatureItem[];
  className?: string;
}
```

---

### Step 15 — Implement MarketingFeatureGrid

**File:** `src/components/organisms/MarketingFeatureGrid/MarketingFeatureGrid.tsx`
**Action:** Create

- Root: `<section id="features" className={cn("max-w-6xl mx-auto px-6 pb-20", className)}>`.
- Header block: `<div className="text-center mb-12">` with `<h2 className="text-3xl font-black text-foreground mb-3">{heading}</h2>` and `<p className="text-muted-foreground max-w-xl mx-auto">{subtext}</p>`.
- Grid: `<div className="grid grid-cols-3 gap-6">`.
- Each item: `<div className="p-6 rounded-xl border border-border hover:border-emerald-200 hover:shadow-sm transition">` containing:
  - Icon wrapper: `<div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-4", item.iconBg)}><span className={item.iconColor}>{item.icon}</span></div>`.
  - `<h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>`.
  - `<p className="text-sm text-muted-foreground">{item.description}</p>`.
- No sub-component for the card — inline per card.
- Export named function `MarketingFeatureGrid`.

---

### Step 16 — MarketingFeatureGrid barrel

**File:** `src/components/organisms/MarketingFeatureGrid/index.ts`
**Action:** Create

```ts
export { MarketingFeatureGrid } from "./MarketingFeatureGrid";
export type { MarketingFeatureGridProps, MarketingFeatureItem } from "./MarketingFeatureGrid.types";
```

---

### Step 17 — MarketingHowItWorks types

**File:** `src/components/organisms/MarketingHowItWorks/MarketingHowItWorks.types.ts`
**Action:** Create

```ts
export interface MarketingHowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface MarketingHowItWorksProps {
  heading?: string;
  subtext?: string;
  steps: MarketingHowItWorksStep[];
  className?: string;
}
```

---

### Step 18 — Implement MarketingHowItWorks

**File:** `src/components/organisms/MarketingHowItWorks/MarketingHowItWorks.tsx`
**Action:** Create

- Root: `<section className={cn("bg-gray-50 py-20", className)}>`.
- Inner: `<div className="max-w-6xl mx-auto px-6 text-center">`.
- Header: `<h2>` + `<p>` matching feature grid structure.
- Steps grid: `<div className="grid grid-cols-3 gap-8">`, each step:
  ```tsx
  <div className="text-center">
    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-black mx-auto mb-4 bg-primary">
      {step.step}
    </div>
    <h3 className="text-sm font-bold text-foreground mb-2">{step.title}</h3>
    <p className="text-sm text-muted-foreground">{step.description}</p>
  </div>
  ```
- Export named function `MarketingHowItWorks`.

---

### Step 19 — MarketingHowItWorks barrel

**File:** `src/components/organisms/MarketingHowItWorks/index.ts`
**Action:** Create

```ts
export { MarketingHowItWorks } from "./MarketingHowItWorks";
export type { MarketingHowItWorksProps, MarketingHowItWorksStep } from "./MarketingHowItWorks.types";
```

---

### Step 20 — MarketingPricingTeaser types

**File:** `src/components/organisms/MarketingPricingTeaser/MarketingPricingTeaser.types.ts`
**Action:** Create

```ts
export interface MarketingPricingTier {
  name: string;
  price: string;        // e.g. "₱0", "₱499"
  period: string;       // e.g. "/mo"
  description: string;  // e.g. "Up to 10 employees"
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  /** Renders a highlighted emerald border + shadow */
  highlighted?: boolean;
  /** Floating chip above the card — e.g. "Most Popular" */
  badge?: string;
  /** Visual style of the CTA button */
  ctaVariant?: "primary" | "outline" | "ghost";
}

export interface MarketingPricingTeaserProps {
  heading?: string;
  subtext?: string;
  tiers: MarketingPricingTier[];
  className?: string;
}
```

---

### Step 21 — Implement MarketingPricingTeaser

**File:** `src/components/organisms/MarketingPricingTeaser/MarketingPricingTeaser.tsx`
**Action:** Create

- Root: `<section className={cn("max-w-6xl mx-auto px-6 py-20", className)}>`.
- Header block same pattern as other organisms.
- Tiers grid: `<div className="grid grid-cols-3 gap-5 mb-8">`, each tier:
  ```tsx
  <div className={cn(
    "bg-card rounded-2xl p-6 relative",
    tier.highlighted
      ? "border-2 border-primary shadow-lg shadow-emerald-100"
      : "border border-border"
  )}>
    {tier.badge && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold text-white rounded-full bg-primary">
        {tier.badge}
      </span>
    )}
    <p className="text-sm font-semibold text-muted-foreground mb-1">{tier.name}</p>
    <p className="text-3xl font-black text-foreground mb-1">
      {tier.price}<span className="text-sm font-normal text-muted-foreground">{tier.period}</span>
    </p>
    <p className="text-xs text-muted-foreground mb-5">{tier.description}</p>
    <ul className="space-y-2 text-sm text-foreground mb-6">
      {tier.features.map((f) => <li key={f}>✓ {f}</li>)}
    </ul>
    <a href={tier.ctaHref} className={CTA_CLASS[tier.ctaVariant ?? "outline"]}>{tier.ctaLabel}</a>
  </div>
  ```
- Define `CTA_CLASS` as a module-level record mapping variant → className string:
  - `primary`: `"block text-center py-2.5 text-sm font-semibold text-white rounded-xl bg-primary"`.
  - `outline`: `"block text-center py-2.5 text-sm font-semibold border-2 border-primary text-primary rounded-xl hover:bg-emerald-50"`.
  - `ghost`: `"block text-center py-2.5 text-sm font-semibold text-foreground border border-border rounded-xl hover:bg-muted"`.
- Export named function `MarketingPricingTeaser`.

---

### Step 22 — MarketingPricingTeaser barrel

**File:** `src/components/organisms/MarketingPricingTeaser/index.ts`
**Action:** Create

```ts
export { MarketingPricingTeaser } from "./MarketingPricingTeaser";
export type { MarketingPricingTeaserProps, MarketingPricingTier } from "./MarketingPricingTeaser.types";
```

---

### Step 23 — MarketingTestimonials types

**File:** `src/components/organisms/MarketingTestimonials/MarketingTestimonials.types.ts`
**Action:** Create

```ts
export interface MarketingTestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatarInitials: string;
  /** Tailwind bg class for the avatar circle. Default: "bg-blue-400" */
  avatarBg?: string;
}

export interface MarketingTestimonialsProps {
  heading?: string;
  items: MarketingTestimonialItem[];
  className?: string;
}
```

---

### Step 24 — Implement MarketingTestimonials

**File:** `src/components/organisms/MarketingTestimonials/MarketingTestimonials.tsx`
**Action:** Create

- Root: `<section className={cn("bg-muted py-20", className)}>`.
- Inner: `<div className="max-w-6xl mx-auto px-6">`.
- Heading: `<h2 className="text-3xl font-black text-foreground text-center mb-10">{heading ?? "What our customers say"}</h2>`.
- Grid: `<div className="grid grid-cols-3 gap-5">`, each item:
  ```tsx
  <div className="bg-card border border-border rounded-2xl p-6">
    <p className="text-sm text-muted-foreground italic mb-4">"{item.quote}"</p>
    <div className="flex items-center gap-3">
      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold", item.avatarBg ?? "bg-primary")}>
        {item.avatarInitials}
      </div>
      <div>
        <p className="text-xs font-semibold text-foreground">{item.name}</p>
        <p className="text-xs text-muted-foreground">{item.role}</p>
      </div>
    </div>
  </div>
  ```
- Do not use the `Avatar` atom — it does not accept a custom `bg` class without extra props; the inline div is simpler for this controlled case.
- Export named function `MarketingTestimonials`.

---

### Step 25 — MarketingTestimonials barrel

**File:** `src/components/organisms/MarketingTestimonials/index.ts`
**Action:** Create

```ts
export { MarketingTestimonials } from "./MarketingTestimonials";
export type { MarketingTestimonialsProps, MarketingTestimonialItem } from "./MarketingTestimonials.types";
```

---

### Step 26 — MarketingCtaBanner types

**File:** `src/components/organisms/MarketingCtaBanner/MarketingCtaBanner.types.ts`
**Action:** Create

```ts
export interface MarketingCtaBannerProps {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}
```

---

### Step 27 — Implement MarketingCtaBanner

**File:** `src/components/organisms/MarketingCtaBanner/MarketingCtaBanner.tsx`
**Action:** Create

- Root: `<section className={cn("py-20 px-6", className)} style={{ background: 'var(--color-primary)' }}>`.
- Inner: `<div className="max-w-2xl mx-auto text-center">`.
- Heading: `<h2 className="text-3xl font-black text-white mb-3">{heading ?? "Ready to simplify your payroll?"}</h2>`.
- Subtext: `<p className="text-white/80 mb-8">{subtext ?? "Join 500+ Philippine businesses using Payro. No credit card required."}</p>`.
- CTA: `<a href={ctaHref ?? "/signup"} className="inline-block px-8 py-3.5 text-base font-bold bg-white rounded-xl hover:bg-gray-50 transition text-emerald-700">{ctaLabel ?? "Start Free — No credit card →"}</a>`.
- Use `text-white/80` for subtext — semi-transparent white on the primary bg.
- Export named function `MarketingCtaBanner`.

---

### Step 28 — MarketingCtaBanner barrel

**File:** `src/components/organisms/MarketingCtaBanner/index.ts`
**Action:** Create

```ts
export { MarketingCtaBanner } from "./MarketingCtaBanner";
export type { MarketingCtaBannerProps } from "./MarketingCtaBanner.types";
```

---

### Step 29 — Update organisms barrel

**File:** `src/components/organisms/index.ts`
**Action:** Modify — insert new exports in alphabetical order. Do not rewrite existing lines.

Add:
```ts
export { MarketingCtaBanner } from "./MarketingCtaBanner";
export type { MarketingCtaBannerProps } from "./MarketingCtaBanner";
export { MarketingFeatureGrid } from "./MarketingFeatureGrid";
export type { MarketingFeatureGridProps, MarketingFeatureItem } from "./MarketingFeatureGrid";
export { MarketingFooter } from "./MarketingFooter";
export type { MarketingFooterProps, MarketingFooterLinkGroup } from "./MarketingFooter";
export { MarketingHero } from "./MarketingHero";
export type { MarketingHeroProps } from "./MarketingHero";
export { MarketingHowItWorks } from "./MarketingHowItWorks";
export type { MarketingHowItWorksProps, MarketingHowItWorksStep } from "./MarketingHowItWorks";
export { MarketingNav } from "./MarketingNav";
export type { MarketingNavProps } from "./MarketingNav";
export { MarketingPricingTeaser } from "./MarketingPricingTeaser";
export type { MarketingPricingTeaserProps, MarketingPricingTier } from "./MarketingPricingTeaser";
export { MarketingTestimonials } from "./MarketingTestimonials";
export type { MarketingTestimonialsProps, MarketingTestimonialItem } from "./MarketingTestimonials";
```

---

### Step 30 — Landing page

**File:** `src/app/(marketing)/page.tsx`
**Action:** Create

The page is a thin composition layer. All section data is defined as typed module-level constants so the JSX stays clean.

```tsx
import {
  MarketingCtaBanner,
  MarketingFeatureGrid,
  MarketingHero,
  MarketingHowItWorks,
  MarketingPricingTeaser,
  MarketingTestimonials,
} from "@/components/organisms";
import { MarketingTemplate } from "@/components/templates";
import type {
  MarketingCtaBannerProps,
  MarketingFeatureGridProps,
  MarketingHowItWorksProps,
  MarketingPricingTeaserProps,
  MarketingTestimonialsProps,
} from "@/components/organisms";

export default function LandingPage() {
  return (
    <MarketingTemplate>
      <MarketingHero />
      <LogoStrip />
      <MarketingFeatureGrid {...FEATURES} />
      <MarketingHowItWorks {...HOW_IT_WORKS} />
      <MarketingPricingTeaser {...PRICING} />
      <MarketingTestimonials {...TESTIMONIALS} />
      <MarketingCtaBanner {...CTA} />
    </MarketingTemplate>
  );
}

// ─── Logo strip ───────────────────────────────────────────────────────────────
// Too simple for an organism — inline here.
const LOGO_NAMES = ["ACME CORP", "NEXGEN", "RETAIL CO", "TECH PH", "BUILD INC"];

function LogoStrip() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center mb-6">
        Trusted by leading Philippine companies
      </p>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {LOGO_NAMES.map((name) => (
          <div key={name} className="h-8 w-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-gray-400">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section data ─────────────────────────────────────────────────────────────

const FEATURES: MarketingFeatureGridProps = {
  heading: "Everything for Philippine payroll compliance",
  subtext: "From SSS computations to BIR filing, Payro handles the complexity so you can focus on your business.",
  items: [
    {
      iconBg: "bg-emerald-50",
      iconColor: "text-primary",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      title: "Automated Computations",
      description: "Auto-compute SSS, PhilHealth, Pag-IBIG & BIR withholding tax based on the latest government tables and TRAIN Law rates.",
    },
    {
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: "BIR Filing Ready",
      description: "Generate 1601-C, 2316, and Alphalist DAT files with one click. File via eBIRForms directly from Payro.",
    },
    {
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      title: "Attendance & Leave",
      description: "Track tardiness, absences, and leave requests with an integrated approval workflow. VL, SL, Emergency, Maternity, Paternity.",
    },
    {
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
      title: "Employee Self-Service",
      description: "Employees view their own payslips, check attendance records, and file leave & OT requests via the built-in portal.",
    },
    {
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      title: "Reports & Analytics",
      description: "Payroll trends, headcount, leave utilization, attendance, and government contribution reports — all exportable to Excel and PDF.",
    },
    {
      iconBg: "bg-teal-50",
      iconColor: "text-teal-500",
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      title: "Secure & Compliant",
      description: "End-to-end encryption, role-based access control, and audit logs. DICT cloud-ready infrastructure hosted in the Philippines.",
    },
  ],
};

const HOW_IT_WORKS: MarketingHowItWorksProps = {
  heading: "From timesheet to payslip in minutes",
  subtext: "No more manual Excel computations. No more last-minute BIR scrambles.",
  steps: [
    { step: 1, title: "Set up your company", description: "Add company details, departments, positions, and employees. Import from Excel or add one by one." },
    { step: 2, title: "Run payroll", description: "Payro auto-computes every deduction and contribution. Review, adjust, and approve in minutes — not days." },
    { step: 3, title: "Distribute & file", description: "Send payslips to employee portals. Generate BIR 1601-C, SSS R-3, PhilHealth RF-1 for filing in one click." },
  ],
};

const PRICING: MarketingPricingTeaserProps = {
  heading: "Simple, transparent pricing",
  subtext: "Start for free. Upgrade when you're ready.",
  tiers: [
    {
      name: "Free",
      price: "₱0",
      period: "/mo",
      description: "Up to 10 employees",
      features: ["Core payroll computation", "SSS/PhilHealth/Pag-IBIG", "Basic BIR withholding tax", "Employee portal"],
      ctaLabel: "Get Started Free",
      ctaHref: "/signup",
      ctaVariant: "outline",
    },
    {
      name: "Starter",
      price: "₱499",
      period: "/mo",
      description: "Up to 50 employees",
      features: ["Everything in Free", "BIR 1601-C & 2316", "Attendance tracking", "Leave management"],
      ctaLabel: "Start 14-Day Trial →",
      ctaHref: "/signup",
      highlighted: true,
      badge: "Most Popular",
      ctaVariant: "primary",
    },
    {
      name: "Growth",
      price: "₱1,499",
      period: "/mo",
      description: "Unlimited employees",
      features: ["Everything in Starter", "Advanced analytics", "API access", "Dedicated onboarding"],
      ctaLabel: "See full pricing →",
      ctaHref: "/pricing",
      ctaVariant: "ghost",
    },
  ],
};

const TESTIMONIALS: MarketingTestimonialsProps = {
  items: [
    { quote: "We reduced our payroll processing time from 3 days to 3 hours. The BIR form generation alone is worth it.", name: "Maria Santos", role: "CEO, TechCorp PH", avatarInitials: "MS", avatarBg: "bg-blue-400" },
    { quote: "Our accountant loves the automatic BIR 1601-C generation. No more manual computations or last-minute scrambles.", name: "Roberto Lim", role: "CFO, NexGen Solutions", avatarInitials: "RL", avatarBg: "bg-purple-400" },
    { quote: "The employee portal is a game-changer. Our team can check their payslips anytime without emailing HR.", name: "Ana Cruz", role: "HR Manager, Retail Group PH", avatarInitials: "AC", avatarBg: "bg-orange-400" },
  ],
};

const CTA: MarketingCtaBannerProps = {
  heading: "Ready to simplify your payroll?",
  subtext: "Join 500+ Philippine businesses using Payro. No credit card required.",
  ctaLabel: "Start Free — No credit card →",
  ctaHref: "/signup",
};
```

- `MarketingHero` uses all its built-in defaults; no props passed from the page.
- No `"use client"` — page is a Server Component.
- All JSX in data constants is valid because the file is `.tsx`.

---

## Token and Class Reference (mockup → implementation)

All values must use semantic tokens so light/dark theme works. Do not use raw palette classes.

| Mockup value | Implementation (theme-aware) |
|---|---|
| Page background | `bg-background` on template root |
| Nav bar | `bg-background/95` (or `bg-background`), `border-border` |
| Headings | `text-foreground` |
| Body / hint text | `text-muted-foreground` |
| Primary green | `bg-primary`, `text-primary`, `text-primary-foreground` (text on primary), `var(--color-primary)` for `style` when needed |
| Borders | `border-border` |
| Cards | `bg-card`, `text-card-foreground` |
| Section backgrounds (alternating) | `bg-muted` |
| Footer | `bg-muted`, `text-muted-foreground`, `text-foreground` (headings), `border-border` |
| Feature icon bg | `bg-primary/10` (primary tint) or `bg-muted`; icon color `text-primary` or `text-foreground` |
| CTA banner full-bleed | `style={{ background: 'var(--color-primary)' }}`; heading/subtext `text-primary-foreground`, button `bg-primary-foreground text-primary` |
| Badge / chip on primary | `text-primary-foreground` |
| Buttons on primary | `text-primary-foreground` |

---

## Verification Checklist

Before opening a PR, confirm:

- [ ] `tsc --noEmit` — no TypeScript errors
- [ ] `npm run lint` — no ESLint errors or warnings
- [ ] `npm run build` — clean build, no missing exports
- [ ] `npm run storybook` — `MarketingTemplate` stories render without console errors
- [ ] `npm run dev` — visit `/` and verify it matches `docs/mockups/marketing-landing.html` visually
- [ ] **Theme modes:** Toggle light/dark (e.g. nav theme switch or Storybook) and verify the entire landing (template, nav, footer, hero, features, how-it-works, pricing, testimonials, CTA banner, logo strip) looks correct in **both** themes with no hardcoded light-only colors
- [ ] All imports use `@/` path alias
- [ ] `import type` used for all type-only imports
- [ ] No `"use client"` in any new file (except where hooks/event handlers require it)
- [ ] No hardcoded hex/rgb/hsl or raw palette (e.g. `bg-white`, `bg-gray-50`, `text-emerald-700`) in className strings — semantic tokens only; use `style` prop only where necessary (e.g. CTA banner full-bleed bg)
- [ ] Barrels updated: `templates/index.ts`, `organisms/index.ts`
- [ ] Atoms composition rule satisfied: organisms do not import other organisms (except `MarketingTemplate` importing `MarketingNav` + `MarketingFooter`)

---

## Optional Follow-up

- Add `src/app/(marketing)/pricing/page.tsx` using the same `MarketingTemplate` shell with a full `MarketingPricingTeaser` (all tiers, annual/monthly toggle, enterprise row).
- Replace logo strip placeholder chips with actual company logos once assets are available.
- Connect `MarketingHero` `preview` slot to a screenshot or animated GIF of the real dashboard.
