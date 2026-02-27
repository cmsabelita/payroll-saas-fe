# Theming configuration

All design tokens live in **`src/config/theme.ts`**. Changing that file and running **`npm run generate:theme`** updates `src/app/theme-variables.css`. The app and Tailwind use those variables via `src/app/globals.css` (`@theme inline`).

## 1. Palette (light / dark)

Semantic colors; each has a light and dark value. next-themes switches `[data-theme="light"]` / `[data-theme="dark"]` on `<html>`.

| Token | Usage |
|-------|--------|
| `background`, `foreground` | Page and default text |
| `primary`, `primaryForeground` | Primary actions (e.g. main button) |
| `secondary`, `secondaryForeground` | Secondary actions, subtle surfaces |
| `muted`, `mutedForeground` | Muted backgrounds and captions |
| `accent`, `accentForeground` | Hover/active states, highlights |
| `border` | Borders and dividers |
| `ring` | Focus ring color |
| `input`, `inputForeground` | Input backgrounds and text |
| `destructive`, `destructiveForeground` | Errors, delete actions |
| `success`, `successForeground` | Success states |
| `warning`, `warningForeground` | Warnings |
| `info`, `infoForeground` | Informational |
| `card`, `cardForeground` | Cards and panels |
| `popover`, `popoverForeground` | Popovers and dropdowns |

**Tailwind:** `bg-primary`, `text-muted-foreground`, `border-border`, `ring-ring`, etc.

**Optional:** `palette.light.chart` / `palette.dark.chart` (array of hex colors for charts). Not emitted as CSS vars; use from JS/TS.

---

## 2. Spacing

Scale: `0`, `0.5`, `1`, `1.5`, `2`, `2.5`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `28`, `32`, `36`, `40`, `44`, `48`, `52`, `56`, `60`, `64`, `72`, `80`, `96`, `px`.

**Tailwind:** `p-4`, `m-2`, `gap-3`, `space-x-2`, etc.

---

## 3. Typography

- **Font size** (with line height): `xs`, `sm`, `base`, `lg`, `xl`, `2xl` … `9xl`.
- **Font weight:** `thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`.
- **Letter spacing (tracking):** `tighter`, `tight`, `normal`, `wide`, `wider`, `widest`.
- **Font family:** `sans`, `mono` (wired in globals; Geist vars).

**Tailwind:** `text-sm`, `font-medium`, `tracking-tight`, `font-sans`, etc.

---

## 4. Radius

`none`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full`.

**Tailwind:** `rounded-lg`, `rounded-full`, etc.

---

## 5. Shadow

`none`, `sm`, `DEFAULT`, `md`, `lg`, `xl`, `2xl`, `inner`.

**Tailwind:** `shadow`, `shadow-md`, `shadow-lg`, etc.

---

## 6. Animation

- **Duration:** `fast` (150ms), `normal` (200ms), `slow` (300ms), `slower` (500ms).
- **Easing:** `DEFAULT`, `in`, `out`, `in-out`, `bounce`.

**CSS vars:** `--animate-duration-fast`, `--animate-ease-bounce`, etc. Use in `transition` or custom keyframes.

---

## 7. Z-index

`auto`, `dropdown` (1000), `sticky` (1020), `fixed` (1030), `modal-backdrop` (1040), `modal` (1050), `popover` (1060), `tooltip` (1070), `toast` (1080), `max` (9999).

**Usage:** `z-[var(--z-index-modal)]`, or add utilities in globals if needed.

---

## 8. Border & ring

- **Border width:** `0`, `DEFAULT` (1px), `2`, `4`, `8`.
- **Ring width:** `0`, `1`, `2`, `4`, `8`, `DEFAULT` (2px).
- **Ring offset:** `0`, `1`, `2`, `4`, `DEFAULT` (2px).

**Tailwind:** `border`, `border-2`, `ring-2`, `ring-offset-2`, etc.

---

## 9. Blur

`none`, `sm`, `DEFAULT`, `md`, `lg`, `xl`, `2xl`, `3xl`.

**Tailwind:** `blur`, `blur-sm`, `backdrop-blur-md`, etc.

---

## 10. Breakpoints (reference)

Defined in config for documentation; Tailwind uses its own breakpoints. Values: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.

---

## Workflow

1. Edit **`src/config/theme.ts`** (palette, spacing, radius, shadow, animation, z-index, etc.).
2. Run **`npm run generate:theme`** (or let **`prebuild`** run it).
3. Use Tailwind classes or CSS vars; light/dark is driven by `data-theme` and next-themes.

## Adding a new palette color

1. Add the key to `Palette` and to both `palette.light` and `palette.dark` in `theme.ts`.
2. Run `npm run generate:theme`. The generator emits `--color-<key>` for each palette entry.
3. In `globals.css` `@theme inline`, add e.g. `--color-my-token: var(--color-my-token);` so Tailwind exposes it (e.g. `bg-my-token`).
