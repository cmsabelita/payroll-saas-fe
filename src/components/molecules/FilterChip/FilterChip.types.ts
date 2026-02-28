import type { ReactNode } from "react";

export interface FilterChipProps {
  label: string;
  /** Filter icon (e.g. funnel) */
  icon?: ReactNode;
  onClick?: () => void;
  /** Show chevron (open/closed state can be indicated by parent via className) */
  showChevron?: boolean;
  className?: string;
}
