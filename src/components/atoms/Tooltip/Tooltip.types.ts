import type { ReactNode } from "react";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  /** Trigger element (e.g. button or icon). */
  children: ReactNode;
  /** Tooltip content. Rendered in a portal as raw content (no design-system components). */
  content: ReactNode;
  /** Placement relative to trigger. */
  placement?: TooltipPlacement;
  /** Optional delay in ms before showing (default 0). */
  delay?: number;
  /** Optional class for the tooltip content wrapper. */
  contentClassName?: string;
  /** Disabled: tooltip never shows. */
  disabled?: boolean;
}
