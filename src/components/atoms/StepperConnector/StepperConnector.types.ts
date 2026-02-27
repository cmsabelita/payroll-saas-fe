import type { HTMLAttributes } from "react";

export interface StepperConnectorProps extends HTMLAttributes<HTMLSpanElement> {
  /** Whether the step before this connector is done (primary line vs muted) */
  done?: boolean;
}
