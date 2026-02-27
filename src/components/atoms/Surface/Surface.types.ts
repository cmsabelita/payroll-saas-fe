import type { HTMLAttributes } from "react";

export type SurfaceElevation = "none" | "sm" | "md" | "lg";

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: SurfaceElevation;
}
