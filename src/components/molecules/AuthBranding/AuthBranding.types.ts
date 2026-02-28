import type { ReactNode } from "react";

export interface AuthBrandingProps {
  /** App icon (e.g. logo mark) shown above tagline */
  icon?: ReactNode;
  /** Main tagline (e.g. "Philippine Payroll, Simplified.") */
  tagline?: ReactNode;
  /** Short description below tagline */
  description?: ReactNode;
  /** Pagination dots (e.g. carousel indicator); 0-based active index */
  activeDotIndex?: number;
  dotCount?: number;
  /** Optional floating cards area (e.g. payslip previews) */
  floatingCards?: ReactNode;
  className?: string;
}
