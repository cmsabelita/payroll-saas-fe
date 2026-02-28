import type { InputHTMLAttributes } from "react";

export interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Field label (rendered with Label atom) */
  label: string;
  /** Show required asterisk */
  required?: boolean;
  /** Hint or helper text below the input */
  hint?: string;
  /** Error message (also sets Input error state) */
  error?: string;
  /** When true and type="password", show PasswordStrength below (caller controls level/label) */
  showPasswordStrength?: boolean;
  /** Password strength level 0–4 (only when showPasswordStrength) */
  passwordStrengthLevel?: 0 | 1 | 2 | 3 | 4;
  /** Password strength label (only when showPasswordStrength) */
  passwordStrengthLabel?: string;
  /** Input size */
  size?: "sm" | "md" | "lg";
}
