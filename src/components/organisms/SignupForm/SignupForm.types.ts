import type { ReactNode } from "react";

export interface SignupFormProps {
  /** Heading (e.g. "Create your account") */
  heading?: string;
  /** Subheading below title */
  subheading?: string;
  /** Called on submit with form values */
  onSubmit: (values: {
    fullName: string;
    email: string;
    password: string;
    agreeToTerms: boolean;
  }) => void;
  /** Link for "Already have an account? Sign in" */
  signInHref?: string;
  /** Optional slot for social sign-up buttons (e.g. Google, Apple) */
  socialButtons?: ReactNode;
  /** Terms of Service link */
  termsHref?: string;
  /** Privacy Policy link */
  privacyHref?: string;
  /** Loading state */
  isLoading?: boolean;
  /** Optional error message */
  error?: string;
  className?: string;
}
