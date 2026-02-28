import type { ReactNode } from "react";

export interface FormSectionProps {
  /** Section title (e.g. "Company details") */
  title: string;
  /** Form fields / grid content */
  children: ReactNode;
  /** Optional class name for the card root */
  className?: string;
}
