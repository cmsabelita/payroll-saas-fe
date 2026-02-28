import type { ReactNode } from "react";

export interface ForgotPasswordFormProps {
  /** Logo (e.g. Payro logo) */
  logo: ReactNode;
  /** Called when form is submitted with email */
  onSubmit: (email: string) => void;
  /** Back to sign in link (e.g. href or onClick) */
  backToSignInHref?: string;
  /** Optional back link content */
  backToSignInLabel?: string;
  /** Optional loading state */
  isLoading?: boolean;
  /** Optional error message */
  error?: string;
  className?: string;
}
