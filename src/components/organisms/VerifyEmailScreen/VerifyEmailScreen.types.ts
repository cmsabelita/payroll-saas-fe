import type { ReactNode } from "react";

export interface VerifyEmailScreenProps {
  /** Logo */
  logo: ReactNode;
  /** Email address to display (e.g. "mark@acme.com") */
  email: string;
  /** Called when "Resend verification email" is clicked */
  onResend?: () => void;
  /** Optional countdown text (e.g. "Link expires in 23:47") */
  expiresIn?: string;
  /** Optional secondary actions (e.g. Open Gmail, Open Outlook buttons) */
  secondaryActions?: ReactNode;
  /** Back to sign in link */
  backToSignInHref?: string;
  /** Optional loading state for resend */
  isResending?: boolean;
  className?: string;
}
