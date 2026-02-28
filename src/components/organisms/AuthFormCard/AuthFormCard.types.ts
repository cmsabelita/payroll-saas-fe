import type { ReactNode } from "react";

export interface AuthFormCardProps {
  /** Logo (e.g. Payro logo + text) */
  logo: ReactNode;
  /** Optional top accent bar (gradient strip) */
  showAccentBar?: boolean;
  /** Optional icon + heading block (centered, for forgot/verify) */
  headingBlock?: ReactNode;
  /** Main content (form or message) */
  children: ReactNode;
  /** Optional footer (e.g. "Back to Sign In" link) */
  footer?: ReactNode;
  /** Center content (for verify-email style) */
  centered?: boolean;
  /** Max width: "md" (28rem) or "full" */
  maxWidth?: "md" | "full";
  className?: string;
}
