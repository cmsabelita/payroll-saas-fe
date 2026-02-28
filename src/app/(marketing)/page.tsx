import {
  MarketingCtaBanner,
  MarketingFeatureGrid,
  MarketingHero,
  MarketingHowItWorks,
  MarketingPricingTeaser,
  MarketingTestimonials,
} from "@/components/organisms";
import { MarketingTemplate } from "@/components/templates";
import type {
  MarketingCtaBannerProps,
  MarketingFeatureGridProps,
  MarketingHowItWorksProps,
  MarketingPricingTeaserProps,
  MarketingTestimonialsProps,
} from "@/components/organisms";

export default function LandingPage() {
  return (
    <MarketingTemplate>
      <MarketingHero />
      <LogoStrip />
      <MarketingFeatureGrid {...FEATURES} />
      <MarketingHowItWorks {...HOW_IT_WORKS} />
      <MarketingPricingTeaser {...PRICING} />
      <MarketingTestimonials {...TESTIMONIALS} />
      <MarketingCtaBanner {...CTA} />
    </MarketingTemplate>
  );
}

const LOGO_NAMES = ["ACME CORP", "NEXGEN", "RETAIL CO", "TECH PH", "BUILD INC"];

function LogoStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Trusted by leading Philippine companies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {LOGO_NAMES.map((name) => (
          <div
            key={name}
            className="flex h-8 w-24 items-center justify-center rounded-lg bg-muted"
          >
            <span className="text-xs font-bold text-muted-foreground">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const FEATURES: MarketingFeatureGridProps = {
  heading: "Everything for Philippine payroll compliance",
  subtext:
    "From SSS computations to BIR filing, Payro handles the complexity so you can focus on your business.",
  items: [
    {
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Automated Computations",
      description:
        "Auto-compute SSS, PhilHealth, Pag-IBIG & BIR withholding tax based on the latest government tables and TRAIN Law rates.",
    },
    {
      iconBg: "bg-muted",
      iconColor: "text-foreground",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "BIR Filing Ready",
      description:
        "Generate 1601-C, 2316, and Alphalist DAT files with one click. File via eBIRForms directly from Payro.",
    },
    {
      iconBg: "bg-muted",
      iconColor: "text-foreground",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Attendance & Leave",
      description:
        "Track tardiness, absences, and leave requests with an integrated approval workflow. VL, SL, Emergency, Maternity, Paternity.",
    },
    {
      iconBg: "bg-muted",
      iconColor: "text-foreground",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Employee Self-Service",
      description:
        "Employees view their own payslips, check attendance records, and file leave & OT requests via the built-in portal.",
    },
    {
      iconBg: "bg-muted",
      iconColor: "text-foreground",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Reports & Analytics",
      description:
        "Payroll trends, headcount, leave utilization, attendance, and government contribution reports — all exportable to Excel and PDF.",
    },
    {
      iconBg: "bg-muted",
      iconColor: "text-foreground",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Secure & Compliant",
      description:
        "End-to-end encryption, role-based access control, and audit logs. DICT cloud-ready infrastructure hosted in the Philippines.",
    },
  ],
};

const HOW_IT_WORKS: MarketingHowItWorksProps = {
  heading: "From timesheet to payslip in minutes",
  subtext:
    "No more manual Excel computations. No more last-minute BIR scrambles.",
  steps: [
    {
      step: 1,
      title: "Set up your company",
      description:
        "Add company details, departments, positions, and employees. Import from Excel or add one by one.",
    },
    {
      step: 2,
      title: "Run payroll",
      description:
        "Payro auto-computes every deduction and contribution. Review, adjust, and approve in minutes — not days.",
    },
    {
      step: 3,
      title: "Distribute & file",
      description:
        "Send payslips to employee portals. Generate BIR 1601-C, SSS R-3, PhilHealth RF-1 for filing in one click.",
    },
  ],
};

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
      ctaLabel: "See full pricing →",
      ctaHref: "/pricing",
      ctaVariant: "ghost",
    },
  ],
};

const TESTIMONIALS: MarketingTestimonialsProps = {
  items: [
    {
      quote:
        "We reduced our payroll processing time from 3 days to 3 hours. The BIR form generation alone is worth it.",
      name: "Maria Santos",
      role: "CEO, TechCorp PH",
      avatarInitials: "MS",
      avatarBg: "bg-primary",
    },
    {
      quote:
        "Our accountant loves the automatic BIR 1601-C generation. No more manual computations or last-minute scrambles.",
      name: "Roberto Lim",
      role: "CFO, NexGen Solutions",
      avatarInitials: "RL",
      avatarBg: "bg-primary",
    },
    {
      quote:
        "The employee portal is a game-changer. Our team can check their payslips anytime without emailing HR.",
      name: "Ana Cruz",
      role: "HR Manager, Retail Group PH",
      avatarInitials: "AC",
      avatarBg: "bg-primary",
    },
  ],
};

const CTA: MarketingCtaBannerProps = {
  heading: "Ready to simplify your payroll?",
  subtext:
    "Join 500+ Philippine businesses using Payro. No credit card required.",
  ctaLabel: "Start Free — No credit card →",
  ctaHref: "/signup",
};
