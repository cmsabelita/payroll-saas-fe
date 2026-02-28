export interface MarketingHowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface MarketingHowItWorksProps {
  heading?: string;
  subtext?: string;
  steps: MarketingHowItWorksStep[];
  className?: string;
}
