import type { HTMLAttributes } from "react";

export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;
  /** Optional label shown in the center (horizontal only) */
  label?: React.ReactNode;
}
