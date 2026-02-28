import type { HTMLAttributes } from "react";

export type SortIndicatorState = "asc" | "desc" | "none";

export interface SortIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** Current sort direction: asc, desc, or none (show both/unsorted). */
  state?: SortIndicatorState;
}
