import type { ReactNode } from "react";

export type AlertBannerVariant = "error" | "warning" | "info" | "success";

export interface AlertBannerProps {
  variant: AlertBannerVariant;
  title: string;
  description?: string;
  /** Optional custom icon (otherwise variant drives default) */
  icon?: ReactNode;
  className?: string;
}
