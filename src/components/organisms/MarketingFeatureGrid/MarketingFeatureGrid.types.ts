import type { ReactNode } from "react";

export interface MarketingFeatureItem {
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

export interface MarketingFeatureGridProps {
  heading?: string;
  subtext?: string;
  items: MarketingFeatureItem[];
  className?: string;
}
