# Cursor rules and knowledge

This folder and the root `.cursorrules` file give Cursor (and other AI tools) consistent context for this project so suggestions stay aligned with our patterns.

## What’s here

- **`.cursorrules`** (project root) — Global rules: path alias, stack, atomic design, component pattern, theming, docs references. Applied to all chats.

- **`.cursor/rules/`** — Rule files with optional `globs` so the right guidance is used in the right place:
  - **component-patterns.mdc** — File layout, CVA/cn usage, barrel exports, composition. Used when editing `src/components/**/*.tsx`.
  - **atoms-new.mdc** — Adding new atoms: checklist, canonical examples, decisions from `docs/ATOMS-IMPLEMENTATION-PLAN.md`. Used when editing `src/components/atoms/**`.
  - **theming-and-tokens.mdc** — Theme tokens, `generate:theme`, Tailwind/semantic usage. Used for theme and styling.
  - **app-and-routes.mdc** — App Router, route groups, MobX store, fonts. Used for `src/app/**` and store.

## Indexing and patterns

- Use **@docs** (e.g. `@docs/ATOMS-IMPLEMENTATION-PLAN.md`) when you want the atoms plan in context.
- Use **@.cursorrules** or **@.cursor/rules** to pull in these rules explicitly.
- New components should follow the same structure and patterns described here and in `docs/ARCHITECTURE.md`.
