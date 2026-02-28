import type { ReactNode } from "react";

export interface NavItemProps {
  icon?: ReactNode;
  label: string;
  badge?: ReactNode;
  /** When href is set, renders as Link; otherwise as button (requires onClick) */
  href?: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}
