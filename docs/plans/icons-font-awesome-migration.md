# Icons & SVG → Font Awesome Migration — Implementation Plan

**Reference:** `docs/prompt/implementation-plan.md`  
**Scope:** Examine all icons and SVG usage across the codebase; replace with Font Awesome (React).  
**Out of scope:** Design of new icons; adding icons for features not yet built.

---

## Overview

The codebase currently uses **inline SVGs** and a few **standalone SVG files** for icons. This plan audits every icon/SVG usage and replaces them with **Font Awesome** (React) for consistency, tree-shaking, and maintainability. The existing **Icon** atom remains as the wrapper for size and accessibility; it will wrap Font Awesome icon components. A thin **FaIcon** atom (or Icon enhancement) will standardize Font Awesome usage and map to the design-system `IconSize`. All hardcoded SVG markup and SVG file references will be removed or replaced.

---

## Audit: Current Icon & SVG Usage

### 1. Inline SVGs in app and components (production)

| Location | Purpose | Suggested Font Awesome icon |
|----------|---------|-----------------------------|
| `src/app/(auth)/login/page.tsx` | BackArrowIcon (chevron left) | `faChevronLeft` |
| `src/app/(auth)/login/page.tsx` | LogoIcon (circle with dollar/sign) | Keep as custom SVG or use `faCircleDollarSign` / app logo asset |
| `src/app/(auth)/login/page.tsx` | SOCIAL_BUTTONS: Google, Apple, Facebook, X | Brand icons: keep SVG or use `faGoogle`, `faApple`, `faFacebookF`, `faXTwitter` (brand styling may need custom color classes) |
| `src/components/organisms/LoginForm/LoginForm.tsx` | EmailIcon (envelope) | `faEnvelope` |
| `src/components/organisms/LoginForm/LoginForm.tsx` | LockIcon (lock) | `faLock` |
| `src/components/organisms/LoginForm/LoginForm.tsx` | EyeIcon (eye / show password) | `faEye` / `faEyeSlash` (toggle) |
| `src/components/organisms/LoginBrandingPanel/LoginBrandingPanel.tsx` | Logo mark in circle (same as LogoIcon) | Same as login LogoIcon |
| `src/components/molecules/AuthBranding/AuthBranding.tsx` | PayroIcon (default logo mark) | Same as LogoIcon — app logo |
| `src/components/organisms/ForgotPasswordForm/ForgotPasswordForm.tsx` | Envelope icon in Icon; arrow in link | `faEnvelope`, `faArrowRight` or `faChevronRight` |
| `src/components/organisms/VerifyEmailScreen/VerifyEmailScreen.tsx` | Envelope icon; arrow in link | `faEnvelope`, `faArrowRight` / `faChevronRight` |
| `src/components/organisms/ResetPasswordForm/ResetPasswordForm.tsx` | Check / X icons in password rules | `faCheck`, `faXmark` |
| `src/components/atoms/StepperDot/StepperDot.tsx` | CheckSvg (checkmark when done) | `faCheck` |
| `src/components/atoms/Select/Select.tsx` | Chevron dropdown (data URI in background) | `faChevronDown` (replace with element or FaIcon, not data URI) |

### 2. Inline SVGs in Storybook only (stories)

| Location | Purpose | Replace with |
|----------|---------|--------------|
| `src/components/atoms/IconButton/IconButton.stories.tsx` | SampleIcon (circle) | `faCircle` or generic `faGear` |
| `src/components/atoms/Input/Input.stories.tsx` | Sample SVG icons (search, clear) | `faMagnifyingGlass`, `faXmark` |
| `src/components/organisms/AppSidebar/AppSidebar.stories.tsx` | DashboardIcon, UsersIcon, ChevronLeftIcon | `faGaugeHigh`, `faUsers`, `faChevronLeft` |
| `src/components/organisms/AuthLayout/AuthLayout.stories.tsx` | LogoIcon, placeholder icons | Logo as above; placeholders → `faGoogle`, etc. |
| `src/components/organisms/AuthFormCard/AuthFormCard.stories.tsx` | LogoIcon, envelope, arrow | Same as production mapping |
| `src/components/organisms/ForgotPasswordForm/ForgotPasswordForm.stories.tsx` | LogoIcon | Same as LogoIcon |
| `src/components/organisms/ResetPasswordForm/ResetPasswordForm.stories.tsx` | LogoIcon | Same as LogoIcon |
| `src/components/organisms/VerifyEmailScreen/VerifyEmailScreen.stories.tsx` | LogoIcon | Same as LogoIcon |
| `src/components/organisms/ReportCategoryGrid/ReportCategoryGrid.stories.tsx` | ReportIcon | `faChartSimple` or `faFileLines` |
| `src/components/organisms/SettingsLayout/SettingsLayout.stories.tsx` | SettingsIcon | `faGear` |
| `src/components/organisms/DashboardKpiStrip/DashboardKpiStrip.stories.tsx` | UsersIcon | `faUsers` |
| `src/components/organisms/PortalTopbar/PortalTopbar.stories.tsx` | BellIcon, ChevronDownIcon | `faBell`, `faChevronDown` |
| `src/components/organisms/AppTopbar/AppTopbar.stories.tsx` | BellIcon | `faBell` |
| `src/components/molecules/SocialLoginButtons/SocialLoginButtons.stories.tsx` | GoogleIcon, AppleIcon | `faGoogle`, `faApple` (or keep SVG for brand colors) |
| `src/components/molecules/SidebarUser/SidebarUser.stories.tsx` | MenuIcon | `faEllipsisVertical` or `faBars` |
| `src/components/molecules/NavItem/NavItem.stories.tsx` | DashboardIcon | `faGaugeHigh` |

### 3. Standalone SVG files (public/)

| File | Usage | Action |
|------|--------|--------|
| `public/vercel.svg` | Not referenced in src (Next.js default) | Remove or keep for non-app use |
| `public/file.svg`, `public/window.svg`, `public/next.svg`, `public/globe.svg` | Not referenced in src grep | Audit; remove if unused, else document |

### 4. Icon atom and IconButton

- **`src/components/atoms/Icon/Icon.tsx`** — Wrapper with `iconVariants` (size xs/sm/md/lg). Kept; will wrap Font Awesome output.
- **`src/components/atoms/IconButton/IconButton.tsx`** — Composes Icon or raw children. Styling `[&_svg]:size-*` targets SVG; Font Awesome uses `<i>` or `<svg>` depending on package — ensure FaIcon renders in a way Icon/IconButton can size (e.g. via `className` or wrapper).

### 5. Components that accept `icon` as ReactNode

- `AuthBranding`, `AuthFormCard`, `AuthLayout`, `LoginBrandingPanel` (logo slot), `SocialLoginButtons`, `AlertBanner`, `DashboardKpiStrip`, `NavItem`, `AppSidebar` nav items — all accept `icon?: ReactNode`. After migration, callers pass `<FaIcon icon={faX} size="md" />` or `<Icon><FontAwesomeIcon icon={faX} /></Icon>`; no API change beyond content of `icon`.

---

## Pre-implementation decisions

- **Font Awesome package:** Use `@fortawesome/react-fontawesome` with `@fortawesome/fontawesome-svg-core` and free icon packs: `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons` (for Google, Apple, Facebook, X). Pro icons are out of scope.
- **Tree-shaking:** Import only used icons (e.g. `import { faEnvelope } from '@fortawesome/free-solid-svg-icons'`) and add them to a library or pass to `<FontAwesomeIcon icon={faEnvelope} />`; do not import entire packs.
- **FaIcon atom:** Create a new atom **FaIcon** in `src/components/atoms/FaIcon/` that accepts `icon: IconDefinition`, `size?: IconSize` (maps to existing xs/sm/md/lg), `className?`, and forwards to `FontAwesomeIcon` with size mapped to Tailwind/CSS. This keeps Icon as the generic wrapper and FaIcon as the Font-Awesome-specific primitive. **Alternative:** Add an optional `name` or `faIcon` prop to Icon and render Font Awesome inside Icon; decision: **create FaIcon** for clarity and single responsibility.
- **Icon atom:** Unchanged. Molecules/organisms can use `<Icon size="md"><FontAwesomeIcon icon={faX} /></Icon>` or use FaIcon which internally applies size. FaIcon will use the same size scale as Icon (xs/sm/md/lg) so that `[&_svg]:size-*` or FaIcon’s own classes align.
- **Logo / app mark:** The “circle with dollar/sign” (Peso-like) icon has no direct FA equivalent. **Decision:** Keep as a single shared inline SVG component in `src/components/atoms/` or `src/components/molecules/` (e.g. `AppLogoIcon`) or retain in AuthBranding/LoginBrandingPanel as a small shared component. Do not replace with Font Awesome for that one asset.
- **Brand icons (Google, Apple, Facebook, X):** Font Awesome Brands provide these; use `faGoogle`, `faApple`, `faFacebookF`, `faXTwitter`. Apply `className` for brand colors where needed (e.g. Google multicolor may still need custom SVG or FA’s default).
- **Select dropdown chevron:** Replace data-URI background with a real element: either a wrapper with FaIcon (`faChevronDown`) positioned absolute right, or a pseudo-element + FA webfont. Prefer FaIcon in the Select component for consistency.
- **forwardRef / "use client":** FaIcon does not need forwardRef unless form-related. "use client" not required for FaIcon (FontAwesomeIcon is a client component; if the app uses RSC, FaIcon may need "use client" if FontAwesomeIcon is client-only — verify and add if needed).
- **Token usage:** Size mapping in FaIcon uses semantic spacing/size (e.g. `size-4`, `size-5`) or theme; no hardcoded hex for icon color — use `text-foreground`, `text-muted-foreground`, `text-primary`, etc.

---

## Affected files

| File | Action |
|------|--------|
| `package.json` | ✏️ Add `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/react-fontawesome` |
| `src/components/atoms/FaIcon/FaIcon.types.ts` | ✨ Create |
| `src/components/atoms/FaIcon/FaIcon.tsx` | ✨ Create |
| `src/components/atoms/FaIcon/index.ts` | ✨ Create |
| `src/components/atoms/FaIcon/FaIcon.stories.tsx` | ✨ Create |
| `src/components/atoms/index.ts` | ✏️ Export FaIcon |
| `src/components/atoms/StepperDot/StepperDot.tsx` | ✏️ Replace CheckSvg with FaIcon |
| `src/components/atoms/Select/Select.tsx` | ✏️ Replace data-URI chevron with FaIcon |
| `src/app/(auth)/login/page.tsx` | ✏️ Replace BackArrowIcon, LogoIcon, SOCIAL_BUTTONS icons |
| `src/components/organisms/LoginForm/LoginForm.tsx` | ✏️ Replace EmailIcon, LockIcon, EyeIcon with FaIcon |
| `src/components/organisms/LoginBrandingPanel/LoginBrandingPanel.tsx` | ✏️ Replace logo SVG with shared AppLogoIcon or FaIcon if using generic |
| `src/components/molecules/AuthBranding/AuthBranding.tsx` | ✏️ Replace PayroIcon with shared AppLogoIcon |
| `src/components/organisms/ForgotPasswordForm/ForgotPasswordForm.tsx` | ✏️ Replace SVG icons with FaIcon |
| `src/components/organisms/VerifyEmailScreen/VerifyEmailScreen.tsx` | ✏️ Replace SVG icons with FaIcon |
| `src/components/organisms/ResetPasswordForm/ResetPasswordForm.tsx` | ✏️ Replace check/x SVGs with FaIcon |
| `src/components/atoms/IconButton/IconButton.stories.tsx` | ✏️ Use FaIcon in stories |
| `src/components/atoms/Input/Input.stories.tsx` | ✏️ Use FaIcon in stories |
| `src/components/organisms/AppSidebar/AppSidebar.stories.tsx` | ✏️ Use FaIcon |
| `src/components/organisms/AuthLayout/AuthLayout.stories.tsx` | ✏️ Use FaIcon + AppLogoIcon |
| `src/components/organisms/AuthFormCard/AuthFormCard.stories.tsx` | ✏️ Use FaIcon |
| `src/components/organisms/ForgotPasswordForm/ForgotPasswordForm.stories.tsx` | ✏️ Use AppLogoIcon / FaIcon |
| `src/components/organisms/ResetPasswordForm/ResetPasswordForm.stories.tsx` | ✏️ Use AppLogoIcon / FaIcon |
| `src/components/organisms/VerifyEmailScreen/VerifyEmailScreen.stories.tsx` | ✏️ Use AppLogoIcon / FaIcon |
| `src/components/organisms/ReportCategoryGrid/ReportCategoryGrid.stories.tsx` | ✏️ Use FaIcon |
| `src/components/organisms/SettingsLayout/SettingsLayout.stories.tsx` | ✏️ Use FaIcon |
| `src/components/organisms/DashboardKpiStrip/DashboardKpiStrip.stories.tsx` | ✏️ Use FaIcon |
| `src/components/organisms/PortalTopbar/PortalTopbar.stories.tsx` | ✏️ Use FaIcon |
| `src/components/organisms/AppTopbar/AppTopbar.stories.tsx` | ✏️ Use FaIcon |
| `src/components/molecules/SocialLoginButtons/SocialLoginButtons.stories.tsx` | ✏️ Use FaIcon (brands) |
| `src/components/molecules/SidebarUser/SidebarUser.stories.tsx` | ✏️ Use FaIcon |
| `src/components/molecules/NavItem/NavItem.stories.tsx` | ✏️ Use FaIcon |
| Shared app logo component (optional) | ✨ Create if extracting logo SVG to one place (e.g. `src/components/atoms/AppLogoIcon/` or molecule) |
| `public/*.svg` | ✏️ Remove or document after confirming unused |

---

## Steps

### Step 1 — Add Font Awesome dependencies

**File:** `package.json`  
**Action:** Modify

Add dependencies:

- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/free-brands-svg-icons`
- `@fortawesome/react-fontawesome`

Run `npm install`. Use current stable versions (e.g. ^6.x). Do not add `@fortawesome/fontawesome-free` (webfont) if using SVG-only; SVG core + React is sufficient.

---

### Step 2 — Define FaIcon types

**File:** `src/components/atoms/FaIcon/FaIcon.types.ts`  
**Action:** Create

- Import `import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';` and `import type { IconSize } from '@/components/atoms/Icon';` (or define local `FaIconSize = "xs" | "sm" | "md" | "lg"` to avoid circular dependency — prefer re-export or same type from `Icon.types.ts`).
- Define `FaIconProps`: `icon: IconDefinition`, `size?: IconSize` (default `"md"`), `className?: string`, and extend or allow `Omit` of `SVGProps<SVGSVGElement>` for `color`, `style` if needed. Keep minimal: `icon`, `size`, `className`, and rest for FontAwesomeIcon.
- Lint/type: Use `import type` for IconDefinition and IconSize.

---

### Step 3 — Implement FaIcon atom

**File:** `src/components/atoms/FaIcon/FaIcon.tsx`  
**Action:** Create

- Import `FontAwesomeIcon` from `@fortawesome/react-fontawesome`, `cn` from `@/utils`, and `type { FaIconProps }` from `./FaIcon.types`.
- Map `IconSize` to pixel or Tailwind class: xs → `size-3.5`, sm → `size-4`, md → `size-5`, lg → `size-6` (match Icon atom sizes).
- Render `<FontAwesomeIcon icon={icon} className={cn(sizeClass, className)} ... />`. Pass through `className` and any allowed rest props. Set `aria-hidden={true}` by default unless overridden.
- Export FaIcon; no CVA needed unless adding variant (e.g. muted). Single size variant is sufficient via prop.
- If `FontAwesomeIcon` from the package is a client component, add `"use client"` at top of FaIcon.tsx.

---

### Step 4 — FaIcon barrel and stories

**File:** `src/components/atoms/FaIcon/index.ts`  
**Action:** Create

Export FaIcon and types (e.g. `FaIconProps`, `FaIconSize` if defined locally).

**File:** `src/components/atoms/FaIcon/FaIcon.stories.tsx`  
**Action:** Create

- Meta title `"Atoms/FaIcon"`, autodocs, centered.
- Stories: Default (one solid icon, e.g. `faEnvelope`), Sizes (xs, sm, md, lg), WithClassName (e.g. `text-primary`). Import icons from `@fortawesome/free-solid-svg-icons` in stories only.

---

### Step 5 — Register FaIcon in atoms barrel

**File:** `src/components/atoms/index.ts`  
**Action:** Modify — add export for FaIcon and its types in alphabetical order.

---

### Step 6 — Create shared AppLogoIcon (optional but recommended)

**File:** `src/components/atoms/AppLogoIcon/AppLogoIcon.types.ts` (or molecule if preferred)  
**Action:** Create

- Props: `className?: string`, optional `size` (e.g. sm/md/lg) mapping to Tailwind size classes. This is the existing “circle with dollar” SVG used on login, AuthBranding, LoginBrandingPanel.

**File:** `src/components/atoms/AppLogoIcon/AppLogoIcon.tsx`  
**Action:** Create

- Inline the single SVG used for the app logo (path from LoginBrandingPanel / AuthBranding). Use `cn(className)` for size and color. Export from barrel and atoms index.

This step avoids duplicating the logo SVG in multiple files; all login/branding surfaces use `<AppLogoIcon />`.

---

### Step 7 — Replace StepperDot check SVG

**File:** `src/components/atoms/StepperDot/StepperDot.tsx`  
**Action:** Modify

- Remove `CheckSvg` inline component. Import `FaIcon` and `faCheck` from `@fortawesome/free-solid-svg-icons`. Render `<FaIcon icon={faCheck} size="sm" className="size-4" />` (or equivalent) inside the “done” state. Ensure no duplicate size (FaIcon already sizes; adjust if StepperDot needs a specific size).

---

### Step 8 — Replace Select data-URI chevron

**File:** `src/components/atoms/Select/Select.tsx`  
**Action:** Modify

- Remove the `bg-[url('data:image/svg+xml;...')]` and related background utility classes. Add a wrapper `relative` and an absolutely positioned chevron (e.g. `right-3 top-1/2 -translate-y-1/2 pointer-events-none`). Render `<FaIcon icon={faChevronDown} size="sm" className="text-muted-foreground" />`. Adjust padding (e.g. `pr-10`) so text does not overlap the icon. Lint: ensure Select remains accessible; the chevron is decorative (aria-hidden or not exposed to screen readers as the select itself is the control).

---

### Step 9 — Replace login page icons

**File:** `src/app/(auth)/login/page.tsx`  
**Action:** Modify

- Replace `BackArrowIcon` with `<FaIcon icon={faChevronLeft} size="sm" />` (or wrap in Icon for size). Use class for size if FaIcon is sm.
- Replace `LogoIcon` with `<AppLogoIcon />` (from Step 6).
- Replace each entry in `SOCIAL_BUTTONS` icon: Google → `faGoogle`, Apple → `faApple`, Facebook → `faFacebookF`, X → `faXTwitter`. Import from `@fortawesome/free-brands-svg-icons`. Apply `className` for brand colors where desired (e.g. `text-[#1877F2]` for Facebook if needed). Remove inline SVG blocks.

---

### Step 10 — Replace LoginForm icons

**File:** `src/components/organisms/LoginForm/LoginForm.tsx`  
**Action:** Modify

- Remove `EmailIcon`, `LockIcon`, `EyeIcon` local components. Import `FaIcon` and `faEnvelope`, `faLock`, `faEye`, `faEyeSlash`. Use `<FaIcon icon={faEnvelope} size="sm" />` for leftAdornment email, `<FaIcon icon={faLock} size="sm" />` for password. For show/hide password button, use `faEye` when `showPassword === false` and `faEyeSlash` when true. Pass FaIcon as the rightAdornment child.

---

### Step 11 — Replace LoginBrandingPanel and AuthBranding logo

**File:** `src/components/organisms/LoginBrandingPanel/LoginBrandingPanel.tsx`  
**Action:** Modify

- Replace the inline SVG in the rounded box with `<AppLogoIcon className="h-8 w-8 text-primary-foreground" />` (or equivalent size/color).

**File:** `src/components/molecules/AuthBranding/AuthBranding.tsx`  
**Action:** Modify

- Remove `PayroIcon` and use `<AppLogoIcon />` as the default when `icon` is not provided. Ensure default export still renders the logo in the same place.

---

### Step 12 — Replace ForgotPasswordForm, VerifyEmailScreen, ResetPasswordForm icons

**Files:**  
`src/components/organisms/ForgotPasswordForm/ForgotPasswordForm.tsx`  
`src/components/organisms/VerifyEmailScreen/VerifyEmailScreen.tsx`  
`src/components/organisms/ResetPasswordForm/ResetPasswordForm.tsx`

**Action:** Modify each

- ForgotPasswordForm: Replace envelope SVG in Icon with `<FaIcon icon={faEnvelope} size="lg" />`. Replace arrow in link with `<FaIcon icon={faArrowRight} size="sm" />` (or faChevronRight).
- VerifyEmailScreen: Same envelope and arrow replacements.
- ResetPasswordForm: Replace check and x SVG with `<FaIcon icon={faCheck} />` and `<FaIcon icon={faXmark} />` with appropriate size and semantic color (e.g. text-success, text-destructive).

---

### Step 13 — Update all Storybook stories that use inline SVGs

**Action:** Modify each story file listed in the Audit (Section 2).

- Replace local SVG components (e.g. `LogoIcon`, `DashboardIcon`, `BellIcon`) with `<FaIcon icon={faX} size="…" />` or `<AppLogoIcon />` as appropriate. Use solid and brand icons from Font Awesome. Ensure story meta and args are unchanged; only the icon content changes. No new stories required unless adding a “FaIcon” demo in FaIcon.stories.

---

### Step 14 — Public SVG files

**Action:** Verify and clean up

- Grep or search for references to `vercel.svg`, `file.svg`, `window.svg`, `next.svg`, `globe.svg` in `src/`. If none, remove from `public/` or document in this plan that they are unused and safe to delete. If any are used (e.g. in metadata or static HTML), leave them or replace with Font Awesome only if they represent UI icons.

---

### Verification checklist

Before opening a PR, confirm:

- [ ] `tsc --noEmit` — no TypeScript errors
- [ ] `npm run lint` — no ESLint errors or warnings
- [ ] `npm run build` — clean build
- [ ] `npm run storybook` — all stories render; no missing icons or console errors
- [ ] Login flow (and auth forms) render correct icons (envelope, lock, eye, brands, back, logo)
- [ ] Select shows chevron; StepperDot shows check when done
- [ ] No hardcoded hex/rgb for icon color except where brand colors are intentional (e.g. Facebook blue); prefer semantic tokens
- [ ] All new imports use `@/` for internal and named imports for Font Awesome
- [ ] FaIcon atom has stories and is exported from atoms barrel
- [ ] No remaining inline SVG components in production code except AppLogoIcon (single source of truth)
- [ ] Icon atom unchanged (still wraps children); FaIcon used wherever we render a Font Awesome icon
- [ ] Optional: Run a quick visual regression (login page, sidebar, topbar, settings, dashboard KPI strip) to confirm icon appearance and size

---

## Icon mapping quick reference

| Current usage | Font Awesome (solid unless noted) |
|---------------|-----------------------------------|
| Back / chevron left | `faChevronLeft` |
| Logo (app mark) | AppLogoIcon (keep SVG) |
| Email / envelope | `faEnvelope` |
| Lock | `faLock` |
| Eye / show password | `faEye` / `faEyeSlash` |
| Check / success | `faCheck` |
| Close / error | `faXmark` |
| Chevron down (select) | `faChevronDown` |
| Arrow right (links) | `faArrowRight` or `faChevronRight` |
| Google | `faGoogle` (brands) |
| Apple | `faApple` (brands) |
| Facebook | `faFacebookF` (brands) |
| X (Twitter) | `faXTwitter` (brands) |
| Dashboard / gauge | `faGaugeHigh` |
| Users | `faUsers` |
| Bell | `faBell` |
| Settings / gear | `faGear` |
| Menu / ellipsis | `faEllipsisVertical` or `faBars` |
| Report / chart | `faChartSimple` or `faFileLines` |
| Search | `faMagnifyingGlass` |
| Clear | `faXmark` |
| Sample / placeholder | `faCircle` or `faGear` |
