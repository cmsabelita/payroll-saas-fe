# Standard Web Project — Atoms Inventory

Atoms are the smallest, indivisible UI building blocks. This document lists common atoms for a typical web project, aligned with atomic design and your existing patterns (CVA, TypeScript, CSS modules).

**In this project:** 28 atoms. See also `docs/ATOMS-EVERYPESO-MOBILE-MAP.md` for alignment with everypeso-mobile (RN) atoms.

---

## Form & input

| Atom | Description | Status |
|------|-------------|--------|
| **Input** | Single-line text input. Variants: error; sizes sm/md/lg. | ✅ Exists |
| **Textarea** | Multi-line text input. Resize options, min/max rows. | — |
| **Select** | Native dropdown; options, placeholder, sizes. | ✅ Exists |
| **Checkbox** | Boolean toggle. Checked, disabled. | ✅ Exists |
| **Radio** | Single choice within a group. | ✅ Exists |
| **Switch** | On/off toggle. | ✅ Exists |
| **Label** | Form field label; `htmlFor`, optional required indicator. | ✅ Exists |
| **SearchInput** | Input with search icon/clear. (Can be Input variant.) | — |

---

## Typography & content

| Atom | Description | Status |
|------|-------------|--------|
| **Text** | Body, caption, label, heading variants; polymorphic `as`. | ✅ Exists |
| **Link** | Anchor with variants: default, muted, primary. | ✅ Exists |
| **Code** | Inline or block code styling. | — |
| **Kbd** | Keyboard shortcut display (e.g. `⌘K`). | — |

---

## Display & feedback

| Atom | Description | Status |
|------|-------------|--------|
| **Badge** | Small count or status pill. Variants: default, secondary, success, warning, destructive, outline. | ✅ Exists |
| **Spinner** | Loading indicator. Sizes sm/md/lg. | ✅ Exists |
| **Progress** | Linear progress bar. Determinate or indeterminate; variants. | ✅ Exists |
| **Skeleton** | Placeholder shimmer. Variants: default, text, circular. | ✅ Exists |
| **Tooltip** | Short hover/focus hint. | — |
| **Alert** | Inline message (info, success, warning, error). | — |

---

## Media & icons

| Atom | Description | Status |
|------|-------------|--------|
| **Icon** | Wrapper for SVG/icon; sizes xs/sm/md/lg. | ✅ Exists |
| **Image** | `img` with error fallback, variants: rounded, circle, square. | ✅ Exists |
| **Avatar** | User image or fallback initials. Sizes xs/sm/md/lg. | ✅ Exists |

---

## Buttons & controls

| Atom | Description | Status |
|------|-------------|--------|
| **Button** | Primary CTA; variants, sizes. | ✅ Exists |
| **IconButton** | Icon-only button; same variants/sizes, square. | ✅ Exists |
| **ThemeToggle** | Light/dark/system switch. | ✅ Exists |

---

## Layout & structure

| Atom | Description | Status |
|------|-------------|--------|
| **Divider** | Horizontal or vertical rule. Optional center label. | ✅ Exists |
| **Spacer** | Invisible spacing; direction horizontal/vertical, size 1–8. | ✅ Exists |
| **Dot** | Small status indicator. Variants: default, success, warning, destructive, muted. | ✅ Exists |
| **Box** | Layout wrapper (web equivalent of RN View). | ✅ Exists |
| **Surface** | Elevated/outlined container; elevation none/sm/md/lg. | ✅ Exists |

---

## Other

| Atom | Description | Status |
|------|-------------|--------|
| **Chip** | Filter/tag; selectable, optional onRemove. Variants. | ✅ Exists |
| **Rating** | Star rating display; value, max, size, read-only. | ✅ Exists |
| **Slider** | Range input (min/max/step). | ✅ Exists |
| **ChatBubble** | Message bubble; sender user/other, variants. | ✅ Exists |

---

## Overlay & disclosure

| Atom | Description | Status |
|------|-------------|--------|
| **Modal** | Full overlay + focus trap. | — |
| **Popover** | Floating panel triggered by click/focus. | — |

---

## Summary

- **Implemented:** 28 atoms (including Label, ThemeToggle, Box, Surface, Chip, Rating, Slider, ChatBubble).
- **Not yet:** Textarea, SearchInput, Code, Kbd, Tooltip, Alert, Modal, Popover.

Use this as a checklist; add atoms when a feature needs them.
