import type { ReactNode } from "react";

export interface AppTopbarProps {
  /** Page or section title */
  title: string;
  /** Optional subtitle below the title */
  subtitle?: string;
  /** Optional primary CTA (e.g. Button) */
  primaryAction?: ReactNode;
  /** Optional date range trigger (e.g. DateRangeTrigger) */
  dateRangeTrigger?: ReactNode;
  /** Optional trailing area (e.g. IconButton notifications + Avatar) */
  trailing?: ReactNode;
  /** Optional class name for the topbar root */
  className?: string;
}
