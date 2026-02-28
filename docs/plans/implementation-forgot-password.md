# Implementation Plan: Forgot Password Page

**Mockup:** `docs/mockups/forgot-password.html`  
**Route:** `src/app/(auth)/forgot-password/page.tsx`  
**Template:** Auth layout (centered card); reuse same shell as login/signup.

---

## Overview

Build the forgot-password page: single panel or two-panel auth layout, heading, description, email field, "Send reset link" button, back-to-login link. Reuse ForgotPasswordForm organism and auth template; ensure page exists and is wired.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/organisms/ForgotPasswordForm/ForgotPasswordForm.tsx` | ✏️ Align with mockup |
| `src/app/(auth)/forgot-password/page.tsx` | ✨ Create if missing |
| Auth layout/template usage | ✏️ As needed |

---

## Pre-implementation decisions

- **Layout:** Same auth card/layout as login; single main content area with form.
- **Form:** One field (email); submit "Send reset link"; link back to login. react-hook-form + Controller.
- **"use client":** Yes on page and form organism.

---

## Steps

1. **Audit** — Confirm ForgotPasswordForm exists and matches mockup (heading, copy, email field, CTA, back link).
2. **Page** — Create or update `(auth)/forgot-password/page.tsx` to render auth template + ForgotPasswordForm.
3. **Barrels** — Ensure organism exported.
4. **Stories** — ForgotPasswordForm story.

---

## Verification checklist

- [ ] `tsc --noEmit` and `npm run lint` pass
- [ ] Controller for email field; semantic tokens only
- [ ] `@/` and `import type` used
