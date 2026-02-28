import type { ReactNode } from "react";

export interface DashboardKpiStripItem {
  value: string | number;
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
}

export interface DashboardKpiStripProps {
  /** KPI items (each rendered as KpiCard) */
  items: DashboardKpiStripItem[];
  className?: string;
}
