import { cn } from "@/utils";
import type { BoxProps } from "./Box.types";

/** Layout wrapper (web equivalent of RN View). Renders a div with optional className. */
export function Box({ className, ...rest }: BoxProps) {
  return <div className={cn(className)} {...rest} />;
}
