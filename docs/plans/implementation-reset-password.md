# Implementation Plan: Reset Password Page

**Mockup:** `docs/mockups/reset-password.html`  
**Route:** `src/app/(auth)/reset-password/page.tsx`  
**Template:** Auth layout (centered card).

---

## Overview

Build the reset-password page: auth layout with heading (e.g. "Set new password"), token from URL (or handled by backend), password + confirm password fields, submit button, and optional back link. Reuse or create ResetPasswordForm organism; page composes auth template.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/organisms/ResetPasswordForm/ResetPasswordForm.tsx` | ✏️ or ✨ |
| `src/components/organisms/ResetPasswordForm/ResetPasswordForm.types.ts` | ✏️ or ✨ |
| `src/app/(auth)/reset-password/page.tsx` | ✨ Create |
| Organisms barrel | ✏️ |

---

## Pre-implementation decisions

- **Form:** password, confirmPassword; both with Controller. Validation: required, min length, match. Submit "Reset password".
- **Token:** Page may receive token via searchParams or route; form submits token with new password (implementation detail in submit handler).
- **"use client":** Yes (form, hooks).

---

## Steps

1. **ResetPasswordForm** — Define props (optional token prop or get from context/URL in page). Fields: password, confirmPassword. Controller for each; rules for match.
2. **Page** — Create `(auth)/reset-password/page.tsx`; render auth layout + ResetPasswordForm; pass token if from URL.
3. **Barrel + Stories** — Export organism; add story.

---

## Verification checklist

- [ ] `tsc --noEmit` and `npm run lint` pass
- [ ] Controller used; semantic tokens; `@/` and `import type`
