import type { HTMLAttributes } from "react";

export type DotVariant = "default" | "success" | "warning" | "destructive" | "muted";

export interface DotProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: DotVariant;
}
