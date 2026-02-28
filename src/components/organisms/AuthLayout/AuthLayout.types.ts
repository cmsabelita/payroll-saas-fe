import type { ReactNode } from "react";
import type { AuthTabsProps } from "@/components/molecules/AuthTabs/AuthTabs.types";

/** "full" = edge-to-edge columns (default). "card" = centered card on gray (login mockup). */
export type AuthLayoutVariant = "full" | "card";

export interface AuthLayoutProps {
  /** "full" (default) or "card" (centered max-w card on muted background) */
  variant?: AuthLayoutVariant;
  /** Logo (left column top) */
  logo: ReactNode;
  /** Heading text (e.g. "Welcome back") */
  heading: string;
  /** Optional subtitle below heading */
  headingSubtitle?: ReactNode;
  /** Auth tabs (e.g. Login / Sign up) */
  tabs: AuthTabsProps["tabs"];
  /** Current tab value */
  tabValue: string;
  /** Called when tab changes */
  onTabChange: (key: string) => void;
  /** Form content (form fields + submit button) */
  children: ReactNode;
  /** Social login buttons (e.g. Google, GitHub) */
  socialLogin?: ReactNode;
  /** Label for divider above social login (e.g. "Or continue with") */
  dividerLabel?: ReactNode;
  /** Optional footer (e.g. Copyright, Terms, Privacy) */
  footer?: ReactNode;
  /** Right column content (e.g. image or illustration) */
  rightContent?: ReactNode;
  className?: string;
}
