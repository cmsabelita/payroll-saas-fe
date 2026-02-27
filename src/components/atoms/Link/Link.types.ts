import type { AnchorHTMLAttributes } from "react";

export type LinkVariant = "default" | "muted" | "primary";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  children: React.ReactNode;
}
