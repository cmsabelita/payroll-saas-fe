import type { ReactNode } from "react";

export interface PasswordRequirement {
  label: string;
  met: boolean;
}

export interface ResetPasswordFormProps {
  /** Logo */
  logo: ReactNode;
  /** Called with new password when form is submitted */
  onSubmit: (password: string) => void;
  /** Sign in link (e.g. href) */
  signInHref?: string;
  /** Optional password requirements to show (e.g. 8+ chars, uppercase, number) */
  requirements?: PasswordRequirement[];
  /** Optional loading state */
  isLoading?: boolean;
  /** Optional error message */
  error?: string;
  className?: string;
}
