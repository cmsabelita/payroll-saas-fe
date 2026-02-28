import type { ReactNode } from "react";

export interface PortalStatsStripItem {
  value: string | number;
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
}

export interface PortalStatsStripProps {
  items: PortalStatsStripItem[];
  className?: string;
}
