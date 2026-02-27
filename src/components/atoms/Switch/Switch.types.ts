import type { ButtonHTMLAttributes } from "react";

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Optional label for accessibility */
  "aria-label"?: string;
}
