import type { ReactNode } from "react";

export interface ProfileHeaderProps {
  avatar: ReactNode;
  name: string;
  /** Badges (e.g. role, status) */
  badges?: ReactNode;
  subtitle?: string;
  /** Meta row: e.g. Icon + Text (reports to, department) */
  metaRow?: ReactNode;
  /** Action buttons (e.g. "Edit", "Reports to" link) */
  actions?: ReactNode;
  className?: string;
}
