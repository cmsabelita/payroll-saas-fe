import type { HTMLAttributes } from "react";

export type DotVariant = "default" | "success" | "warning" | "destructive" | "muted";

export type DotSize = "xs" | "sm";

export interface DotProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: DotVariant;
  /** xs = 8px (e.g. notification indicator), sm = default 8px (alias for backward compat) */
  size?: DotSize;
}
