import type { ButtonHTMLAttributes } from "react";

export type TabSegmentAppearance = "default" | "card";

export interface TabSegmentProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Segment label */
  children: React.ReactNode;
  /** Whether this segment is selected */
  active?: boolean;
  /** "card" = white active tab + shadow (auth mockup) */
  appearance?: TabSegmentAppearance;
  /** Optional count badge (e.g. "12") */
  count?: number | string;
}
