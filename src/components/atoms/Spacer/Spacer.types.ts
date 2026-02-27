import type { HTMLAttributes } from "react";

export type SpacerDirection = "horizontal" | "vertical";

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: SpacerDirection;
  /** Spacing size (Tailwind spacing scale: 1 = 0.25rem, 2 = 0.5rem, 4 = 1rem, etc.) */
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 8;
}
