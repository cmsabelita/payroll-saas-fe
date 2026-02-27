"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { RootStore } from "./RootStore";

const StoreContext = createContext<RootStore | null>(null);

type StoreProviderProps = {
  children: ReactNode;
};

export function StoreProvider({ children }: StoreProviderProps) {
  const store = useMemo(() => new RootStore(), []);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useRootStore(): RootStore {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useRootStore must be used within a StoreProvider");
  }
  return store;
}
