import type { HTMLAttributes } from "react";

export type IconSize = "xs" | "sm" | "md" | "lg";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: IconSize;
  "aria-hidden"?: boolean;
  children: React.ReactNode;
}
