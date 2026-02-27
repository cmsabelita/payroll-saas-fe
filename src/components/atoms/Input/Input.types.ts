import type { InputHTMLAttributes } from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  error?: boolean;
  /** Left slot (e.g. Icon, search icon) */
  leftAdornment?: React.ReactNode;
  /** Right slot (e.g. IconButton for password visibility, clear) */
  rightAdornment?: React.ReactNode;
}
