import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type FaIconSize = "xs" | "sm" | "md" | "lg";

export interface FaIconProps {
  icon: IconDefinition;
  size?: FaIconSize;
  className?: string;
  "aria-hidden"?: boolean;
}
