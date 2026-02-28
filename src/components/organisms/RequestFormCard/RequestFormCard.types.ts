import type { ReactNode } from "react";

export interface RequestFormCardProps {
  /** Card title (e.g. "Leave Request") */
  title: string;
  /** Form content */
  children: ReactNode;
  /** Primary submit button label (e.g. "Submit Leave Request") */
  submitLabel: string;
  /** Called when form is submitted */
  onSubmit: (e: React.FormEvent) => void;
  /** Cancel button click handler (if not set and cancelHref is set, renders a link) */
  onCancel?: () => void;
  /** Cancel link href (used when onCancel is not provided) */
  cancelHref?: string;
  /** Cancel button/link label */
  cancelLabel?: string;
  /** Optional hint text below actions (e.g. "Your request will be reviewed...") */
  hint?: ReactNode;
  /** Optional loading state */
  isLoading?: boolean;
  className?: string;
}
