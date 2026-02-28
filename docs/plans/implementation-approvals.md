# Implementation Plan: Approvals List Page

**Mockup:** `docs/mockups/approvals.html`  
**Route:** `src/app/(dashboard)/approvals/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Approvals queue: filters (type, status), list of pending items (leave, OT, etc.). Reuse PendingApprovalRow if exists; toolbar and list organisms. Page composes DashboardTemplate.

---

## Affected files

- `src/components/organisms/ApprovalsToolbar/`, `ApprovalsList/` ✨
- `src/app/(dashboard)/approvals/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organisms and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
