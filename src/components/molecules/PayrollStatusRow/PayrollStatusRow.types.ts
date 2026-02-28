import type { ReactNode } from "react";

export interface PayrollStatusRowProps {
  title: string;
  subtitle?: string;
  /** Status badge content (e.g. "Pending", "Completed") */
  status: ReactNode;
  /** Show divider below the row */
  showDivider?: boolean;
  className?: string;
}
