import type { SVGProps } from "react";

export type AppLogoIconSize = "sm" | "md" | "lg";

export interface AppLogoIconProps extends SVGProps<SVGSVGElement> {
  size?: AppLogoIconSize;
}
