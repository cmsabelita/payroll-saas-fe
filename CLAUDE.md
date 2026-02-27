# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start Next.js dev server
npm run build            # Build for production (runs generate:theme first via prebuild)
npm run lint             # Run ESLint
npm run storybook        # Storybook dev server at http://localhost:6006
npm run generate:theme   # Regenerate src/app/theme-variables.css from src/config/theme.ts
npx vitest               # Run all tests (Storybook-integrated, runs in Chromium via Playwright)
```

## Architecture

### Stack
- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** for styling
- **class-variance-authority (cva)** for variant-based component APIs
- **MobX + mobx-react-lite** for state management
- **next-themes** for light/dark mode (`data-theme` attribute on `<html>`)
- **Storybook 10** with Vitest integration (stories run as browser tests via Playwright/Chromium)

### Atomic Design component hierarchy

```
src/components/
├── atoms/       # Primitive UI (Button, Text, Input, Icon, …)
├── molecules/   # Composed from atoms (Card, …)
├── organisms/   # Section-level (Header, …)
└── templates/   # Page-level layouts (PageLayout)
```

Each component lives in its own folder with `ComponentName.tsx`, `ComponentName.types.ts`, `index.ts`, and optionally `ComponentName.stories.tsx` / `ComponentName.test.tsx`.

**Composition rules:**
- Pages (`app/**/page.tsx`) → compose one template, pass content
- Templates → compose organisms
- Organisms → compose molecules/atoms
- Molecules → compose atoms only
- Atoms → no composition of other design components

### Theming pipeline

Design tokens are the single source of truth:

1. **`src/config/theme.ts`** — define all tokens (palette, spacing, radius, shadow, animation, z-index, etc.)
2. **`npm run generate:theme`** — writes `src/app/theme-variables.css` (auto-runs before `build`)
3. **`src/app/globals.css`** — imports the CSS vars and exposes them to Tailwind via `@theme inline`

Light/dark switching uses `data-theme="light"` / `data-theme="dark"` on `<html>` via `ThemeProvider` (next-themes). To add a new palette color: add to `src/config/theme.ts`, regenerate, then add the `@theme inline` mapping in `globals.css`.

### State management

`RootStore` (`src/app/store/RootStore.ts`) uses `makeAutoObservable`. Add domain stores as properties of `RootStore`. Access via `useRootStore()` hook. `StoreProvider` wraps the app in `layout.tsx`.

### Path alias

`@/` maps to `src/`. Use for all imports: `@/components`, `@/hooks`, `@/utils`, `@/types`, `@/services`, etc.

### Component patterns

Use `cn()` from `@/utils` (clsx + tailwind-merge) when merging classes. Use `cva()` for variant-based components — see `Button.tsx` as the canonical example (`buttonVariants` exported for reuse). Split props into a `.types.ts` file per component.

### Route groups

- `src/app/(marketing)/` — public-facing pages (landing, pricing, etc.)
- `src/app/(dashboard)/` — authenticated app shell

### Fonts

- **DM Sans** — loaded via Google Fonts link in `layout.tsx` (sans-serif body font, `--font-sans`)
- **Geist Mono** — loaded via `next/font/google` (`--font-mono`)
- **Circular** — self-hosted in `public/fonts/circular/` (loaded via `src/app/circular-font.css`)

### docs/

`docs/` contains project documentation:
- `ARCHITECTURE.md` — Atomic Design details and Storybook configuration
- `THEMING.md` — Full token reference and theming workflow
- `USER_FLOWS.md`, `DESIGN-SUPABASE.md`, `ATOMS-INVENTORY.md`, `ATOMS-EVERYPESO-MOBILE-MAP.md`
