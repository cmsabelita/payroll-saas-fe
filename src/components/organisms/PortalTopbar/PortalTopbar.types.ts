import type { ReactNode } from "react";

export interface PortalTopbarProps {
  /** Logo (left side). Use with companyName for "Logo · Company" layout. */
  logo: ReactNode;
  /** Company name shown after logo with separator (e.g. "Acme Corporation") */
  companyName?: string;
  /** Portal nav tabs (e.g. UnderlineTabs). When omitted, default nav links (Home, My Payslips, Attendance, Requests) are rendered. */
  tabs?: ReactNode;
  /** Badge count shown on the Requests nav link when using default nav. Ignored when tabs is provided. */
  requestsBadgeCount?: number;
  /** Optional trailing area (e.g. IconButton notifications + user dropdown with Avatar + Text + Icon) */
  trailing?: ReactNode;
  /** Optional class name for the topbar root */
  className?: string;
}
