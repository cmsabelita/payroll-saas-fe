import type { ReactNode } from "react";

export interface SocialLoginButtonItem {
  /** Provider name for accessibility (e.g. "Google", "Apple") */
  label: string;
  /** Icon content (e.g. SVG) */
  icon: ReactNode;
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
}

export interface SocialLoginButtonsProps {
  buttons: SocialLoginButtonItem[];
  className?: string;
}
