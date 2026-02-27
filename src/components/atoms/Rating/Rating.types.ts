import type { HTMLAttributes } from "react";

export interface RatingProps extends HTMLAttributes<HTMLSpanElement> {
  /** Current value (e.g. 3.5). Can be fractional for half-star display. */
  value: number;
  /** Max value (default 5) */
  max?: number;
  /** Size of each star */
  size?: "sm" | "md" | "lg";
  /** When true, show as read-only (no interaction) */
  readOnly?: boolean;
}
