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

/** "default" = compact. "large" = 48px buttons, rounded-xl, gap-3 (login mockup). */
export type SocialLoginButtonsSize = "default" | "large";

export interface SocialLoginButtonsProps {
  buttons: SocialLoginButtonItem[];
  /** "large" for login mockup (w-12 h-12, rounded-xl, gap-3) */
  size?: SocialLoginButtonsSize;
  className?: string;
}
