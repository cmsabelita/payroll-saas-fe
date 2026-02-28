import { cn } from "@/utils";
import type { FloatingPayslipCardsProps } from "./FloatingPayslipCards.types";

const PAYSLIP_CARD = {
  periodLabel: "My Payslip · Feb 1–15, 2026",
  netPay: "₱ 28,450.00",
  subtitle: "Net Pay · Software Engineer",
  basicPay: "₱ 32,000.00",
  sssPhilhealth: "−₱ 1,485.00",
  withholdingTax: "−₱ 2,065.00",
} as const;

const PAYROLL_CARD = {
  periodLabel: "Payroll Period · Feb 2026",
  statusLabel: "Approved",
  total: "₱ 4,284,500",
  subtitle: "128 employees · Gross Payroll",
  gross: "₱ 4,284,500",
  deductions: "−₱ 631,240",
  netPay: "₱ 3,653,260",
} as const;

export function FloatingPayslipCards({ className }: FloatingPayslipCardsProps) {
  return (
    <div className={cn("relative h-[250px] w-[320px]", className)}>
      <div
        className={cn(
          "absolute left-10 top-8 w-[260px] rounded-[14px] bg-background p-4 shadow-2xl",
          "rotate-[4deg] opacity-65"
        )}
      >
        <div className="mb-2 text-xs font-semibold text-muted-foreground">
          {PAYSLIP_CARD.periodLabel}
        </div>
        <div className="text-xl font-bold text-foreground">
          {PAYSLIP_CARD.netPay}
        </div>
        <div className="mb-3 text-xs text-muted-foreground">
          {PAYSLIP_CARD.subtitle}
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Basic Pay</span>
            <span className="font-medium text-foreground">
              {PAYSLIP_CARD.basicPay}
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">SSS + PhilHealth</span>
            <span className="font-medium text-destructive">
              {PAYSLIP_CARD.sssPhilhealth}
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Withholding Tax</span>
            <span className="font-medium text-destructive">
              {PAYSLIP_CARD.withholdingTax}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-[280px] rounded-[14px] bg-background p-4 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground">
            {PAYROLL_CARD.periodLabel}
          </span>
          <span className="rounded-full bg-success/20 px-2 py-0.5 text-xs font-medium text-success">
            {PAYROLL_CARD.statusLabel}
          </span>
        </div>
        <div className="mb-0.5 text-2xl font-bold text-foreground">
          {PAYROLL_CARD.total}
        </div>
        <div className="mb-4 text-xs text-muted-foreground">
          {PAYROLL_CARD.subtitle}
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Gross</span>
            <span className="font-semibold text-foreground">
              {PAYROLL_CARD.gross}
            </span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Deductions</span>
            <span className="font-semibold text-destructive">
              {PAYROLL_CARD.deductions}
            </span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Net Pay</span>
            <span className="font-semibold text-primary">
              {PAYROLL_CARD.netPay}
            </span>
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-1.5 w-[85%] rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
