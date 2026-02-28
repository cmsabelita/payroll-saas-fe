import type { ReactNode } from "react";

export interface MarketingHeroProps {
  badgeLabel?: string;
  headline?: ReactNode;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLine?: string;
  /** Node rendered inside the browser chrome preview area */
  preview?: ReactNode;
  className?: string;
}
