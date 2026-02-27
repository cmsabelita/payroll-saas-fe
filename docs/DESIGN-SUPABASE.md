# Design extraction: Supabase (supabase.com)

This document captures design tokens and patterns extracted from [Supabase](https://supabase.com) so we can replicate them in this project. Source: Supabase monorepo (`packages/config`, `apps/www`).

---

## Font

| Role | Supabase (extracted) | Our replication |
|------|----------------------|------------------|
| **Sans** | `Circular, custom-font, Helvetica Neue, Helvetica, Arial, sans-serif` | **Circular** / **Flow Circular** – Flow Circular from Google Fonts CDN by default; optional local Circular (Lineto) in `public/fonts/circular/` (see `src/app/circular-font.css`) |
| **Mono** | `Source Code Pro, Office Code Pro, Menlo, monospace` | **Geist Mono** (next/font) |

- **CDN (default):** Flow Circular is loaded from Google Fonts in `circular-font.css`; same geometric style as Supabase.
- **Download:** To use the exact Supabase font (Circular by Lineto), add `.woff2` files to `public/fonts/circular/` and uncomment the `@font-face` block in `circular-font.css`.

---

## Spacing

Supabase uses Tailwind’s default spacing scale plus:

| Token | Value | Usage |
|-------|--------|--------|
| `content` | 21px | Content padding (e.g. prose, panels) |
| `listbox` | 320px | Dropdown/list width |

Our theme includes a full spacing scale (0, 0.5, 1 … 96, px) and we add **content: 1.3125rem** (21px) to mirror Supabase.

---

## Radius

| Token | Value | Usage |
|-------|--------|--------|
| `panel` | 6px | Panels, cards, code blocks |
| (defaults) | lg, md, sm | Buttons, inputs, etc. |

We use **radius.panel: 0.375rem** (6px) and keep lg/md/sm for components.

---

## Breakpoints

Supabase adds an extra small breakpoint:

| Name | Value |
|------|--------|
| `xs` | 480px |
| `sm` | 640px |
| `md` | 768px |
| … | (Tailwind defaults) |

Our **breakpoint.xs** is set to **480px** for consistency.

---

## Animation & transition

| Token | Value | Usage |
|-------|--------|--------|
| **Duration** | 150ms | Default transition (buttons, overlays) |
| **Easing** | `cubic-bezier(0.4, 0, 0.2, 1)` | Default easing |
| **Overlay/dropdown** | 100ms, `cubic-bezier(0.16, 1, 0.3, 1)` | Content show/hide |
| **Flash code** | `rgba(63, 207, 142, 0.1)` → transparent | Green highlight (brand green #3ECF8E) |

Our theme already uses **150ms** and **cubic-bezier(0.4, 0, 0.2, 1)** for default motion.

---

## Color (brand)

| Token | Value |
|-------|--------|
| **Brand green** | `#3ECF8E` (Supabase green) |
| **Green 10%** | `rgba(63, 207, 142, 0.1)` (accents, highlights) |

Our palette uses **#3ECF8E** for primary, success, and ring; dark accent uses a green-tinted dark (**#1A2E26**) for the 10% effect.

---

## Typography (prose)

From Supabase docs/typography:

- **Headings**: font-weight 400 (not bold)
- **Body**: font-weight 400
- **Strong**: font-weight 500
- **Links**: underline, 1px thickness, 2px offset; hover: default foreground color
- **Code**: background `--background-surface-200`, border `--background-surface-300`, border-radius lg

We keep our **fontWeight** scale (normal 400, medium 500, semibold 600, etc.) so we can match these where needed.

---

## Summary of what we replicate

1. **Font**: DM Sans (sans), Geist Mono or Source Code Pro (mono)
2. **Spacing**: Full scale + **content** 21px
3. **Radius**: Full scale + **panel** 6px
4. **Breakpoint**: **xs** 480px
5. **Animation**: 150ms default, cubic-bezier(0.4, 0, 0.2, 1)
6. **Colors**: Supabase green #3ECF8E and green-alpha-10% already in palette
7. **Button**: Pill shape (rounded-full), green primary, 150ms transition (already applied)
