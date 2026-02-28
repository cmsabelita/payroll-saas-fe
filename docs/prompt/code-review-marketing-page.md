# Code Review: Marketing landing page (`src/app/(marketing)/page.tsx`)

## Summary

The landing page composes `MarketingTemplate` with a single local section (`LogoStrip`) and typed data constants passed into marketing organisms (Hero, FeatureGrid, HowItWorks, PricingTeaser, Testimonials, CtaBanner). Overall structure is correct (one template, organisms as content), but **theming and decomposition rules are violated**: hardcoded palette classes are used instead of semantic tokens, and a repeating list is inlined in the page without an extracted molecule/organism.

---

## Findings

**[BLOCK] page.tsx:43–45 (LogoStrip)** — Hardcoded palette colors instead of semantic tokens.

- `bg-gray-100` and `text-gray-400` bypass the token system and will not respect `data-theme`. Use semantic tokens (e.g. `bg-muted`, `text-muted-foreground`) so the section works in both light and dark themes.

> Replace with token-based classes, e.g. `bg-muted` and `text-muted-foreground`, and ensure contrast in both themes.

---

**[BLOCK] page.tsx:59–186 (FEATURES)** — Hardcoded palette in feature item data.

- `iconBg` and `iconColor` use raw Tailwind palette classes: `bg-emerald-50`, `bg-red-50`, `text-red-500`, `bg-blue-50`, `text-blue-500`, `bg-orange-50`, `text-orange-500`, `bg-purple-50`, `text-purple-500`, `bg-teal-50`, `text-teal-500`. These are not semantic and will not follow theme or design-token changes.

> Either (a) change organism API to support semantic variants (e.g. `iconVariant: "primary" | "destructive" | "info"` and map to tokens in the organism), or (b) add any needed semantic tokens to `src/config/theme.ts`, regenerate theme, and use only those in the page. Do not pass raw Tailwind palette classes from the page.

---

**[BLOCK] page.tsx:281–302 (TESTIMONIALS)** — Hardcoded palette in avatar backgrounds.

- `avatarBg: "bg-blue-400"`, `"bg-purple-400"`, `"bg-orange-400"` are hardcoded palette values.

> Use semantic tokens or a small set of allowed variants defined in the organism (e.g. mapped from theme tokens). Avoid raw Tailwind color classes in page data.

---

**[BLOCK] page.tsx:33–51 (LogoStrip)** — Repeating item pattern inlined in page with no molecule extracted.

- A full section is implemented as a local component that renders a list via `.map()` over `LOGO_NAMES` with no extracted molecule for the repeated item. The review standard states: “A repeating item pattern rendered via `.map()` inlined in an organism or page with no molecule extracted” is a block.

> Extract the strip to an organism (e.g. `MarketingLogoStrip`) under `src/components/organisms/`, with a proper folder (`.tsx`, `.types.ts`, `index.ts`, stories). Extract the single logo item as a molecule (e.g. `MarketingLogoItem`) if it has its own structure and styling, then use it inside the organism. The page should only compose the template and pass organisms + data.

---

**[WARN] page.tsx:33–51 (LogoStrip)** — Full page section as local function in page.

- A named section (~20 lines) that could be reused or tested in isolation lives inline in the page. This blurs the “page composes one template and content” rule and makes the page harder to scan.

> Resolved by the same extraction as above: move to `MarketingLogoStrip` organism and optionally a small molecule for the logo item.

---

**[NIT] page.tsx** — Data constants and import order.

- Typed data constants (`FEATURES`, `HOW_IT_WORKS`, etc.) at the bottom are acceptable. Consider grouping them (e.g. a single `LANDING_PAGE_CONTENT` object or a short comment block) for quicker navigation. Optional.

---

## Verdict: REQUEST CHANGES

Before merge:

1. **Remove all hardcoded palette usage**: Replace `gray-*` in LogoStrip with semantic tokens; replace feature `iconBg`/`iconColor` and testimonial `avatarBg` with semantic tokens or organism-defined variants backed by theme tokens.
2. **Extract LogoStrip**: Implement `MarketingLogoStrip` (and optionally a logo-item molecule), wire it from the page, and remove the inline `LogoStrip` and its `.map()` from `page.tsx`.

After these are done, the page will comply with atomic design composition and theming standards.
