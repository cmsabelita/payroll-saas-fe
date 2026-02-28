import type { ReactNode } from "react";

export interface PendingApprovalRowProps {
  /** Avatar image or fallback */
  avatar: ReactNode;
  primaryText: string;
  secondaryText?: string;
  /** Badge content (e.g. "Pending") */
  badge?: ReactNode;
  onClick?: () => void;
  className?: string;
}
