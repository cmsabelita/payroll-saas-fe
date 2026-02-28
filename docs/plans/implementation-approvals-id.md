# Implementation Plan: Approval Request Detail

**Mockup:** `docs/mockups/approvals-id.html`  
**Route:** `src/app/(dashboard)/approvals/[id]/page.tsx`  
**Template:** DashboardTemplate.

---

## Overview

Single approval request detail: summary, approve/reject actions. Organism(s); page with [id].

---

## Affected files

- `src/components/organisms/ApprovalDetail/` ✨
- `src/app/(dashboard)/approvals/[id]/page.tsx` ✨
- Organisms barrel ✏️

---

## Steps

1. Audit mockup; create organism and page. Barrels and stories.

---

## Verification checklist

- [ ] tsc --noEmit, npm run lint; semantic tokens
