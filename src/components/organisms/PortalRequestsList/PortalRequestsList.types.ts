import type { ReactNode } from "react";

export interface PortalRequestsListItem {
  /** e.g. "Vacation Leave", "OT Request" */
  title: string;
  /** e.g. "Pending", "Approved" */
  status: string;
  statusVariant?: "success" | "warning" | "secondary";
  /** Optional date range or description */
  detail?: string;
  href?: string;
  /** Optional icon (ReactNode) */
  icon?: ReactNode;
}

export interface PortalRequestsListAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export interface PortalRequestsListProps {
  title?: string;
  /** Primary/secondary action buttons above the list */
  actions?: PortalRequestsListAction[];
  items: PortalRequestsListItem[];
  viewAllHref?: string;
  className?: string;
}
