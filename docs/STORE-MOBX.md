# Store (MobX)

Client state is managed with **MobX** in `src/app/store/`. The root store is provided via React context and is available to all client components under `StoreProvider` in the root layout.

## Structure

```
src/app/store/
├── RootStore.ts
├── StoreContext.tsx
├── index.ts
└── user/
    ├── User.types.ts
    └── User.store.ts
```

Each domain has a subfolder with `Domain.types.ts` (types) and `Domain.store.ts` (store class).

## Using the store

In any **client component** (`"use client"`):

```tsx
"use client";

import { useRootStore } from "@/app/store";

export function MyComponent() {
  const store = useRootStore();
  // use store.uiStore, store.someDomainStore, etc.
}
```

`useRootStore()` must be used inside `StoreProvider` (already wrapped in `layout.tsx`).

## Adding a domain store

1. Create a subfolder `src/app/store/<domain>/` with types and store:

**payroll/Payroll.types.ts**
```ts
export type PayrollItem = { id: string; label: string };
```

**payroll/Payroll.store.ts**
```ts
import { makeAutoObservable } from "mobx";
import type { PayrollItem } from "./Payroll.types";

export class PayrollStore {
  items: PayrollItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item: PayrollItem) {
    this.items.push(item);
  }
}
```

2. Add the store to `RootStore`:

```ts
import { makeAutoObservable } from "mobx";
import { UserStore } from "./user/User.store";
import { PayrollStore } from "./payroll/Payroll.store";

export class RootStore {
  userStore = new UserStore();
  payrollStore = new PayrollStore();

  constructor() {
    makeAutoObservable(this);
  }
}
```

3. Export from `store/index.ts` and use in components:

```tsx
const store = useRootStore();
store.payrollStore.addItem({ id: "1", label: "foo" });
```

## Rules

- One subfolder per domain with `Domain.types.ts` and `Domain.store.ts`.
- Use `makeAutoObservable(this)` in store constructors so state and methods are observable/actions.
- Only use stores in client components; the provider and context are client-only.
