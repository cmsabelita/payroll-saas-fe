import type { ReactNode } from "react";

export interface SidebarUserProps {
  avatar: ReactNode;
  name: string;
  role?: string;
  /** Optional action (e.g. IconButton for menu) */
  action?: ReactNode;
  className?: string;
}
