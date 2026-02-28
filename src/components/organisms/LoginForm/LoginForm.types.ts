import type { ReactNode } from "react";

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormProps {
  /** Called on submit with form values */
  onSubmit: (values: LoginFormValues) => void;
  /** Optional slot for social sign-in buttons (e.g. Google, Apple) */
  socialButtons?: ReactNode;
  /** Loading state */
  isLoading?: boolean;
  /** Optional server error message */
  error?: string;
  className?: string;
}
