"use client";

import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { AuthBrandingProps } from "./AuthBranding.types";

const PayroIcon = () => (
  <svg
    className="size-8 text-primary-foreground"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
      clipRule="evenodd"
    />
  </svg>
);

const defaultTagline = (
  <>
    Philippine Payroll,
    <br />
    <span className="text-primary">Simplified.</span>
  </>
);

const defaultDescription =
  "Automate payroll, BIR compliance, and team management — built for Filipino businesses.";

/** Default floating cards for login mockup (payslip preview) */
function DefaultFloatingCards() {
  return (
    <div className="absolute left-0 right-0 top-8 flex justify-center pointer-events-none">
      <div className="relative h-[250px] w-[320px]">
        {/* Back card */}
        <div
          className="absolute left-10 top-[30px] w-[260px] rounded-[14px] border border-border bg-card p-4 shadow-xl"
          style={{ transform: "rotate(4deg)", opacity: 0.65 }}
        >
          <div className="mb-2 text-xs font-semibold text-muted-foreground">
            My Payslip · Feb 1–15, 2026
          </div>
          <div className="text-xl font-bold text-foreground">₱ 28,450.00</div>
          <div className="mb-3 text-xs text-muted-foreground">
            Net Pay · Software Engineer
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Basic Pay</span>
              <span className="font-medium text-foreground">₱ 32,000.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">SSS + PhilHealth</span>
              <span className="font-medium text-destructive">−₱ 1,485.00</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Withholding Tax</span>
              <span className="font-medium text-destructive">−₱ 2,065.00</span>
            </div>
          </div>
        </div>
        {/* Front card */}
        <div className="absolute left-0 top-0 w-[280px] rounded-[14px] border border-border bg-card p-4 shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">
              Payroll Period · Feb 2026
            </span>
            <span className="rounded-full bg-success/20 px-2 py-0.5 text-xs font-medium text-success">
              Approved
            </span>
          </div>
          <div className="mb-0.5 text-2xl font-bold text-foreground">
            ₱ 4,284,500
          </div>
          <div className="mb-4 text-xs text-muted-foreground">
            128 employees · Gross Payroll
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Gross</span>
              <span className="font-semibold text-foreground">₱ 4,284,500</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Deductions</span>
              <span className="font-semibold text-destructive">−₱ 631,240</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Net Pay</span>
              <span className="font-semibold text-primary">₱ 3,653,260</span>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-1.5 rounded-full bg-primary"
              style={{ width: "85%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuthBranding({
  icon,
  tagline = defaultTagline,
  description = defaultDescription,
  activeDotIndex = 0,
  dotCount = 4,
  floatingCards,
  className,
}: AuthBrandingProps) {
  const showFloatingCards = floatingCards !== undefined ? floatingCards : <DefaultFloatingCards />;

  return (
    <div
      className={cn(
        "auth-branding-panel relative flex min-h-[580px] flex-1 flex-col items-center justify-end overflow-hidden pb-10",
        className
      )}
    >
      <div className="auth-branding-grid absolute inset-0" aria-hidden />
      <div
        className="auth-branding-glow absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden
      />
      {showFloatingCards}
      <div className="relative z-10 mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary shadow-xl">
        {icon != null ? icon : <PayroIcon />}
      </div>
      <div className="relative z-10 max-w-[260px] px-10 text-center">
        <Text
          as="h2"
          className="mb-2 text-2xl font-bold leading-snug text-white"
        >
          {tagline}
        </Text>
        <p className="text-sm leading-relaxed text-white/55">{description}</p>
      </div>
      {dotCount > 0 && (
        <div className="relative z-10 mt-7 flex items-center gap-2">
          {Array.from({ length: dotCount }, (_, i) => (
            <div
              key={i}
              className={cn(
                "rounded-full",
                i === activeDotIndex
                  ? "h-1.5 w-6 bg-white"
                  : "h-1.5 w-1.5 bg-white/25"
              )}
              aria-hidden
            />
          ))}
        </div>
      )}
    </div>
  );
}
