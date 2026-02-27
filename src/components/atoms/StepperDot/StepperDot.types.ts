import type { HTMLAttributes } from "react";

export type StepperDotState = "active" | "done" | "pending";

export interface StepperDotProps extends HTMLAttributes<HTMLSpanElement> {
  /** Step state */
  state?: StepperDotState;
  /** Step number (1-based). When state is "done", can show check instead if renderCheck is true */
  step?: number;
  /** Optional label below the dot */
  label?: string;
}
