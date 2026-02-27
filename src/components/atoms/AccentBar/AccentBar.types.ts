import type { HTMLAttributes } from "react";

export interface AccentBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Show gradient (primary → accent) instead of solid */
  gradient?: boolean;
}
