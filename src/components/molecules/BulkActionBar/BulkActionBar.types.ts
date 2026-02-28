import type { ReactNode } from "react";

export interface BulkActionBarProps {
  /** Number of selected items (e.g. 3) */
  selectedCount: number;
  /** Primary action (e.g. Approve button) */
  primaryAction: ReactNode;
  /** Secondary action (e.g. Reject button) */
  secondaryAction?: ReactNode;
  /** Clear selection control (e.g. Link "Clear selection") */
  onClear: () => void;
  /** Label for clear action (default: "Clear selection") */
  clearLabel?: string;
  /** Optional class name */
  className?: string;
}
