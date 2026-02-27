import type { ButtonHTMLAttributes } from "react";

export type ChipVariant =
  | "default"
  | "secondary"
  | "outline"
  | "success"
  | "destructive";

export interface ChipProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ChipVariant;
  onRemove?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}
