import type { ButtonHTMLAttributes } from "react";

export interface TabSegmentProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Segment label */
  children: React.ReactNode;
  /** Whether this segment is selected */
  active?: boolean;
  /** Optional count badge (e.g. "12") */
  count?: number | string;
}
