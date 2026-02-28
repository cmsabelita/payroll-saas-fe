import type { ReactNode } from "react";

export interface MarketingTemplateProps {
  /** Override primary nav CTA href. Default: "/signup" */
  ctaHref?: string;
  /** Override primary nav CTA label. Default: "Start Free Trial →" */
  ctaLabel?: string;
  children: ReactNode;
  className?: string;
}
