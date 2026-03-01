export interface PortalPayslipCardBreakdownLine {
  label: string;
  amount: string;
  isDeduction?: boolean;
}

export interface PortalPayslipCardProps {
  /** e.g. "Feb 1–15, 2026 · Semi-monthly" */
  periodLabel: string;
  /** e.g. "Released", "Pending" */
  statusLabel: string;
  /** Badge variant for status */
  statusVariant?: "success" | "warning" | "secondary";
  grossPay: string;
  deductions: string;
  netPay: string;
  breakdown: PortalPayslipCardBreakdownLine[];
  viewAllHref?: string;
  onDownload?: () => void;
  className?: string;
}
