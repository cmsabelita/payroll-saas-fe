import { MarketingPricingTeaser } from "@/components/organisms";
import { MarketingTemplate } from "@/components/templates";
import type { MarketingPricingTeaserProps } from "@/components/organisms";

const PRICING: MarketingPricingTeaserProps = {
  heading: "Simple, transparent pricing",
  subtext: "Start for free. Upgrade when you're ready.",
  tiers: [
    {
      name: "Free",
      price: "₱0",
      period: "/mo",
      description: "Up to 10 employees",
      features: [
        "Core payroll computation",
        "SSS/PhilHealth/Pag-IBIG",
        "Basic BIR withholding tax",
        "Employee portal",
      ],
      ctaLabel: "Get Started Free",
      ctaHref: "/signup",
      ctaVariant: "outline",
    },
    {
      name: "Starter",
      price: "₱499",
      period: "/mo",
      description: "Up to 50 employees",
      features: [
        "Everything in Free",
        "BIR 1601-C & 2316",
        "Attendance tracking",
        "Leave management",
      ],
      ctaLabel: "Start 14-Day Trial →",
      ctaHref: "/signup",
      highlighted: true,
      badge: "Most Popular",
      ctaVariant: "primary",
    },
    {
      name: "Growth",
      price: "₱1,499",
      period: "/mo",
      description: "Unlimited employees",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "API access",
        "Dedicated onboarding",
      ],
      ctaLabel: "Contact Sales →",
      ctaHref: "/signup",
      ctaVariant: "ghost",
    },
  ],
};

export default function PricingPage() {
  return (
    <MarketingTemplate
      ctaHref="/signup"
      ctaLabel="Start Free Trial →"
    >
      <MarketingPricingTeaser {...PRICING} />
    </MarketingTemplate>
  );
}
