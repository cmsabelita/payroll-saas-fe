# Atomic Design Architecture

This Next.js app follows **Atomic Design** (atoms → molecules → organisms → templates) with TypeScript and a clear separation of concerns, as described in [Vishal Kothari’s post](https://www.linkedin.com/posts/vishal-kothari-29b105174_nextjs-react-typescript-activity-7353067620394270720-7eUm/).

## Folder structure

```
src/
├── app/                    # Next.js App Router (pages, layout, globals)
│   ├── (marketing)/        # Marketing route group (landing, pricing, …)
│   └── (dashboard)/       # Dashboard route group (app shell)
├── assets/                 # Static assets (images, fonts)
│   ├── images/
│   └── fonts/
├── components/
│   ├── atoms/              # Smallest building blocks (Button, Text, …)
│   ├── molecules/          # Combinations of atoms (Card, form fields, …)
│   ├── organisms/          # UI sections (Header, sidebar, forms, …)
│   └── templates/          # Page-level layouts (PageLayout, …)
├── config/                 # App config (env, feature flags, URLs)
├── constants/              # App constants (routes, defaults, …)
├── hooks/                  # Shared React hooks
├── services/               # API / external service clients
├── styles/                 # Global styles (if any beyond app/globals.css)
├── types/                  # Shared TypeScript types
└── utils/                  # Shared utilities (e.g. cn)

docs/                       # Project documentation
```

## Variants with class-variance-authority (cva)

Variant-based atoms use **class-variance-authority** and **Tailwind** so variants stay consistent and composable:

- **`cn()`** (`@/utils`) – built with `clsx` + `tailwind-merge` for merging and deduplicating Tailwind classes.
- **Button** – `buttonVariants` defined with `cva()` (variant: primary, secondary, outline, ghost, destructive; size: sm, md, lg). Exported so other components can reuse the same variants.
- **Text** – `textVariants` with `cva()` (variant: body, caption, label, heading).

Use `cn(buttonVariants({ variant, size }), className)` when building new components that should match Button styling.

Optional per component (when you add Storybook/tests):

- **`ComponentName.stories.tsx`** – Storybook
- **`ComponentName.test.tsx`** – tests

## Layers

| Layer       | Role |
|------------|------|
| **Atoms**  | Buttons, labels, inputs, icons. No composition of other design components. |
| **Molecules** | Cards, form fields, list items. Built from atoms. |
| **Organisms** | Header, sidebar, data tables, forms. Built from molecules/atoms. |
| **Templates** | Full-page layout (e.g. header + main). Used by app routes. |

## Usage

- **Pages** (`app/**/page.tsx`): Compose one template and pass content; avoid inline layout structure.
- **Templates**: Compose organisms (and optionally molecules/atoms) for the page shell.
- **Organisms**: Compose molecules and atoms.
- **Molecules**: Compose atoms only.
- **Atoms**: No composition of other design components; use `utils`, `types`, and global CSS variables as needed.

## Path alias

Use `@/` for `src/`:

- `@/components` – design system
- `@/hooks`, `@/utils`, `@/types`, `@/services` – shared code

## Storybook

Storybook is integrated for isolated component development. Stories live next to each component (e.g. `Button.stories.tsx` in `components/atoms/Button/`).

**Commands:**

- `npm run storybook` — start dev server at http://localhost:6006
- `npm run build-storybook` — build static Storybook to `storybook-static/`

**Configured:**

- Path alias `@/` → `src/` (same as Next.js)
- Global styles: `src/app/globals.css` (Tailwind + CSS variables) imported in `.storybook/preview.ts`
- Addons: docs, a11y, Vitest, Chromatic

**Stories included:** Atoms (Button, Text), Molecules (Card), Organisms (Header), Templates (PageLayout).

## Theming

Design tokens (palette, spacing, typography, radius, shadow, animation, z-index, border, ring, blur) are defined in **`src/config/theme.ts`**. Run **`npm run generate:theme`** to regenerate **`src/app/theme-variables.css`**. See **[THEMING.md](./THEMING.md)** for the full configuration reference.
