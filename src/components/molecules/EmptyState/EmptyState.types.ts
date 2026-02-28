import type { ReactNode } from "react";

export interface EmptyStateProps {
  /** Icon content (e.g. SVG) — rendered inside a circle */
  icon: ReactNode;
  /** Heading text */
  heading: string;
  /** Description text */
  description?: string;
  className?: string;
}
