# Store (MobX)

Client state is managed with **MobX** in `src/app/store/`. The root store is provided via React context and is available to all client components under `StoreProvider` in the root layout.

## Structure

Each domain has a subfolder with three files:

```
src/app/store/
├── RootStore.ts
├── StoreContext.tsx
├── index.ts
└── user/
    ├── User.types.ts   — domain types
    ├── User.api.ts     — API calls (imports from @/services)
    └── User.store.ts   — MobX store class (imports from User.api.ts)
```

## HTTP service

All API calls go through `src/services/http` — an Axios-based client that:
- Sets `baseURL` from `config.apiUrl`
- Transforms empty strings → `null` before sending
- Logs requests/responses via `console.debug` (suppress with `skipLogging: true`)
- Rejects with an `HttpError` shape on non-2xx responses

**Available helpers (import from `@/services`):**

```ts
import { get, post, put, patch, deleteRequest } from "@/services";
```

Each returns `Promise<HttpResponse<T>>` where `HttpResponse<T>` is:

```ts
interface HttpResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}
```

## Domain.api.ts

Create an `Api` object per domain. Always import HTTP helpers from `@/services`. Return only `res.data` so stores receive plain typed values.

**user/User.api.ts**
```ts
import { get, patch } from "@/services";
import type { User } from "./User.types";

const BASE = "/users";

export const UserApi = {
  async getMe(): Promise<User> {
    const res = await get<User>(`${BASE}/me`);
    return res.data;
  },

  async getById(id: string): Promise<User> {
    const res = await get<User>(`${BASE}/${id}`);
    return res.data;
  },

  async updateMe(payload: Partial<Pick<User, "name" | "email">>): Promise<User> {
    const res = await patch<User>(`${BASE}/me`, payload);
    return res.data;
  },
};
```

## Domain.store.ts

The store holds observable state, exposes actions that mutate state, and calls `Domain.api.ts` for async work. Track loading/error state for every async action.

**user/User.store.ts**
```ts
import { makeAutoObservable, runInAction } from "mobx";
import { UserApi } from "./User.api";
import type { User } from "./User.types";

export class UserStore {
  user: User | null = null;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Sync actions — mutate state directly
  setUser(user: User | null) {
    this.user = user;
  }

  clearUser() {
    this.user = null;
  }

  // Async actions — call API then update state inside runInAction
  async fetchCurrentUser() {
    this.isLoading = true;
    this.error = null;
    try {
      const user = await UserApi.getMe();
      runInAction(() => {
        this.user = user;
      });
      return user;
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : "Failed to fetch user";
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async updateProfile(payload: Partial<Pick<User, "name" | "email">>) {
    this.isLoading = true;
    this.error = null;
    try {
      const user = await UserApi.updateMe(payload);
      runInAction(() => {
        this.user = user;
      });
      return user;
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : "Failed to update profile";
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  // Computed — derived from observable state, no setter needed
  get isAuthenticated() {
    return this.user !== null;
  }
}
```

> **Why `runInAction`?** MobX requires state mutations to happen inside actions. After an `await`, you're no longer in the synchronous action context, so wrap all post-await state writes in `runInAction`.

## Using the store in components

In any **client component** (`"use client"`), use `useRootStore()` to access stores. Wrap with `observer()` from `mobx-react-lite` so the component re-renders when observed state changes.

```tsx
"use client";

import { observer } from "mobx-react-lite";
import { useRootStore } from "@/app/store";

export const UserProfile = observer(function UserProfile() {
  const { userStore } = useRootStore();

  if (userStore.isLoading) return <p>Loading…</p>;
  if (userStore.error) return <p>Error: {userStore.error}</p>;
  if (!userStore.user) return null;

  return <p>Hello, {userStore.user.name}</p>;
});
```

Trigger async actions from event handlers or `useEffect`:

```tsx
"use client";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/app/store";

export const App = observer(function App() {
  const { userStore } = useRootStore();

  useEffect(() => {
    userStore.fetchCurrentUser();
  }, [userStore]);

  // ...
});
```

## Adding a domain store (checklist)

1. **Create `src/app/store/<domain>/`** with three files:

   **Domain.types.ts**
   ```ts
   export type Employee = { id: string; name: string; role: string };
   ```

   **Domain.api.ts**
   ```ts
   import { get, post, patch, deleteRequest } from "@/services";
   import type { Employee } from "./Employee.types";

   const BASE = "/employees";

   export const EmployeeApi = {
     async list(): Promise<Employee[]> {
       const res = await get<Employee[]>(BASE);
       return res.data;
     },
     async getById(id: string): Promise<Employee> {
       const res = await get<Employee>(`${BASE}/${id}`);
       return res.data;
     },
     async create(payload: Omit<Employee, "id">): Promise<Employee> {
       const res = await post<Employee>(BASE, payload);
       return res.data;
     },
     async update(id: string, payload: Partial<Employee>): Promise<Employee> {
       const res = await patch<Employee>(`${BASE}/${id}`, payload);
       return res.data;
     },
     async remove(id: string): Promise<void> {
       await deleteRequest(`${BASE}/${id}`);
     },
   };
   ```

   **Domain.store.ts**
   ```ts
   import { makeAutoObservable, runInAction } from "mobx";
   import { EmployeeApi } from "./Employee.api";
   import type { Employee } from "./Employee.types";

   export class EmployeeStore {
     employees: Employee[] = [];
     selected: Employee | null = null;
     isLoading = false;
     error: string | null = null;

     constructor() {
       makeAutoObservable(this);
     }

     async fetchAll() {
       this.isLoading = true;
       this.error = null;
       try {
         const employees = await EmployeeApi.list();
         runInAction(() => { this.employees = employees; });
       } catch (err) {
         runInAction(() => { this.error = "Failed to load employees"; });
       } finally {
         runInAction(() => { this.isLoading = false; });
       }
     }

     get count() {
       return this.employees.length;
     }
   }
   ```

2. **Register in `RootStore.ts`:**

   ```ts
   import { makeAutoObservable } from "mobx";
   import { UserStore } from "./user/User.store";
   import { EmployeeStore } from "./employee/Employee.store";

   export class RootStore {
     userStore = new UserStore();
     employeeStore = new EmployeeStore();

     constructor() {
       makeAutoObservable(this);
     }
   }
   ```

3. **Export from `store/index.ts`:**

   ```ts
   export { EmployeeStore } from "./employee/Employee.store";
   export type { Employee } from "./employee/Employee.types";
   ```

## Rules

- **One subfolder per domain** with `Domain.types.ts`, `Domain.api.ts`, and `Domain.store.ts`.
- **`Domain.api.ts`** imports only from `@/services` — no MobX, no store references.
- **`Domain.store.ts`** imports only from `Domain.api.ts` — no raw `fetch`/`axios`.
- Always use `makeAutoObservable(this)` in store constructors.
- Always wrap post-`await` state writes in `runInAction`.
- Always track `isLoading` and `error` per async action.
- Only use stores in **client components**; wrap with `observer()` to get reactivity.
