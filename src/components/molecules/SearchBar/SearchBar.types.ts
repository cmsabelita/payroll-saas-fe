import type { InputHTMLAttributes } from "react";

export interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Placeholder (default: "Search") */
  placeholder?: string;
  /** When set, a clear button is shown and clicking it clears the value and calls this */
  onClear?: () => void;
  size?: "sm" | "md" | "lg";
}
