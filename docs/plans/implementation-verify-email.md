# Implementation Plan: Verify Email Page

**Mockup:** `docs/mockups/verify-email.html`  
**Route:** `src/app/(auth)/verify-email/page.tsx`  
**Template:** Auth layout (centered card or full-screen message).

---

## Overview

Build the verify-email page: auth layout with message (e.g. "Check your email", "We sent a link to …", resend button, change email link). Reuse VerifyEmailScreen organism if it exists; ensure page exists and matches mockup.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/organisms/VerifyEmailScreen/VerifyEmailScreen.tsx` | ✏️ Align with mockup |
| `src/app/(auth)/verify-email/page.tsx` | ✨ Create if missing |
| Organisms barrel | ✏️ As needed |

---

## Pre-implementation decisions

- **Content:** Heading, body text, optional resend button, optional "Wrong email?" link. No form fields unless resend is a form.
- **"use client":** Yes if resend has onClick/async.

---

## Steps

1. **Audit** — Confirm VerifyEmailScreen exists; compare to mockup copy and actions.
2. **Page** — Create or update `(auth)/verify-email/page.tsx` with auth layout + VerifyEmailScreen.
3. **Barrel + Stories** — Export and story.

---

## Verification checklist

- [ ] `tsc --noEmit` and `npm run lint` pass
- [ ] Semantic tokens only; `@/` and `import type`
