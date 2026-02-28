import type { ReactNode } from "react";

export interface SettingsLayoutProps {
  /** Sidebar nav (NavItem[] or UnderlineTabs) */
  nav: ReactNode;
  /** Main content (e.g. FormSection components) */
  children: ReactNode;
  className?: string;
}
