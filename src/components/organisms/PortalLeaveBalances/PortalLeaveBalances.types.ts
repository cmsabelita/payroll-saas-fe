export interface PortalLeaveBalanceItem {
  /** e.g. "Vacation Leave", "Sick Leave" */
  name: string;
  /** Days used / available (e.g. 8.5) */
  used: number;
  /** Total days for the period (e.g. 15) */
  total: number;
  /** Optional bar color variant for progress */
  variant?: "primary" | "info" | "secondary";
}

export interface PortalLeaveBalancesProps {
  items: PortalLeaveBalanceItem[];
  /** href for "Apply for Leave" button. When omitted, button is not rendered. */
  applyLeaveHref?: string;
  className?: string;
}
