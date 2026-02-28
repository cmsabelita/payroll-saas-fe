# Implementation Plan: Signup Page

**Mockup:** `docs/mockups/signup.html`  
**Route:** `src/app/(auth)/signup/page.tsx`  
**Template:** Reuse or extend auth layout (centered card, two-panel). Reference `LoginTemplate` pattern if signup shares same shell.

---

## Overview

Build the signup page: two-panel layout (form left, branding right), heading "Create your account", form with Full Name, Work Email, Password (with strength indicator), Terms checkbox, Submit, and link to login. Uses existing auth card shell and form molecules; add SignupForm organism if not present or extend it to match mockup (password strength dots, terms checkbox). Page composes one template and passes form organism.

---

## Affected files

| File | Action |
|------|--------|
| `src/components/organisms/SignupForm/SignupForm.tsx` | ✏️ Modify (or ✨ if missing) |
| `src/components/organisms/SignupForm/SignupForm.types.ts` | ✏️ / ✨ |
| `src/app/(auth)/signup/page.tsx` | ✨ Create |
| Barrel updates for organisms/templates as needed | ✏️ |

---

## Pre-implementation decisions

- **Layout:** Same pattern as login: left panel form (e.g. max-w-[460px]), right panel optional branding. Use existing AuthCardShell or AuthLayout if available; else slot-based template.
- **Form fields:** FormInput (full name, email), FormInput type="password" with strength indicator (molecule or inline 4 dots using semantic tokens), FormCheckbox (terms), Button submit. All via react-hook-form Controller; generic `SignupForm<TFieldValues>` if extending shared form types.
- **Password strength:** Extract to molecule `PasswordStrengthDots` (4 segments, semantic tokens for on/off) or inline in SignupForm; no hardcoded hex.
- **forwardRef:** Not on template; form ref if needed for submit from parent.
- **"use client":** Yes on page (form) and SignupForm (hooks, Controller).

---

## Steps

1. **Audit** — Confirm `SignupForm` and auth template/layout exist; list any new molecules (e.g. PasswordStrengthDots).
2. **SignupForm** — Ensure fields match mockup: fullName, workEmail, password, acceptTerms. Add password strength UI (semantic tokens). Use Controller for every field; defaultValues from useForm.
3. **Signup page** — Create `(auth)/signup/page.tsx`: render auth layout/template with SignupForm in content slot; optional branding panel.
4. **Barrels** — Export new components; add signup route to any nav/docs if needed.
5. **Stories** — SignupForm story with all states (empty, filled, error, strength levels).

---

## Verification checklist

- [ ] `tsc --noEmit` and `npm run lint` pass
- [ ] All form fields use Controller; no register
- [ ] Semantic tokens only; no hardcoded colors; no `dark:` overrides
- [ ] `@/` imports; `import type` for types
- [ ] Storybook story for SignupForm
