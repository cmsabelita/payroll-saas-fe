# Code Review: Login template, LoginForm, FloatingPayslipCards, SignupForm refactor

## Summary

Session added LoginTemplate, LoginBrandingPanel, LoginForm organism, FloatingPayslipCards molecule, (auth)/login page, and refactored SignupForm to react-hook-form. Composition and form patterns are correct. A few standards gaps: missing stories for new molecule, types in wrong file, magic strings in JSX, inline style.

---

## Findings

**[WARN] FloatingPayslipCards** — Missing `FloatingPayslipCards.stories.tsx`. Required for all new molecules (code-review §2, implementation-task checklist).
> Add `FloatingPayslipCards.stories.tsx` with at least Default story; register in Storybook.

**[WARN] FloatingPayslipCards.tsx** — Magic strings (dates, amounts, labels) hardcoded in JSX (e.g. "My Payslip · Feb 1–15, 2026", "₱ 28,450.00"). Implementation-task: "Do not hardcode magic strings (names, amounts, dates) inside JSX — define them as named constants."
> Extract display copy and amounts to named constants at top of file or in a small data object.

**[WARN] FloatingPayslipCards.tsx:65** — `style={{ width: "85%" }}` used for progress bar. Prefer Tailwind when available (e.g. `className="w-[85%]"`).
> Replace with `className="w-[85%]"` on the inner div.

**[WARN] SignupForm.tsx:11–17** — `SignupFormValues` interface is defined in the implementation file. Standards: "Types must live in `.types.ts`, not inline in the implementation file."
> Move `SignupFormValues` to `SignupForm.types.ts` and export; import in `SignupForm.tsx`.

**[NIT] login/page.tsx** — SOCIAL_BUTTONS use SVG `fill="#4285F4"` etc. (brand colors). Rule targets classNames; SVG brand colors are a known exception. Optional: document or leave as-is.

---

## Verdict: APPROVE

All four [WARN] items were resolved per implementation-task standards:

1. **FloatingPayslipCards.stories.tsx** — Added with `meta`, `Default` story, and `autodocs` tag.
2. **FloatingPayslipCards magic strings** — Extracted to named constants `PAYSLIP_CARD` and `PAYROLL_CARD` at top of file.
3. **Progress bar width** — Replaced `style={{ width: "85%" }}` with Tailwind class `w-[85%]`.
4. **SignupFormValues** — Moved to `SignupForm.types.ts` and exported; `SignupForm.tsx` now imports it from the types file.

Lint passes with zero errors and zero warnings.
