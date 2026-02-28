import type { ReactNode } from "react";

export interface LoginTemplateProps {
  logo?: ReactNode;
  backLink?: ReactNode;
  headingBlock?: ReactNode;
  tabBlock?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  brandingPanel?: ReactNode;
  className?: string;
}
