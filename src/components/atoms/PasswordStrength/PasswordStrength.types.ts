import type { HTMLAttributes } from "react";

export interface PasswordStrengthProps extends HTMLAttributes<HTMLDivElement> {
  /** Strength level 0–4 (0 = none, 4 = strong) */
  level?: 0 | 1 | 2 | 3 | 4;
  /** Optional label (e.g. "Weak", "Fair", "Strong") */
  label?: string;
}
