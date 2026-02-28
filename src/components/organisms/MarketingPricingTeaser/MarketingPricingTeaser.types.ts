export interface MarketingPricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  ctaVariant?: "primary" | "outline" | "ghost";
}

export interface MarketingPricingTeaserProps {
  heading?: string;
  subtext?: string;
  tiers: MarketingPricingTier[];
  className?: string;
}
