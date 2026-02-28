import { Text } from "@/components/atoms";
import { cn } from "@/utils";
import type { PortalPayslipCardProps } from "./PortalPayslipCard.types";

export function PortalPayslipCard({
  period,
  amount,
  href,
  linkLabel,
  className,
}: PortalPayslipCardProps) {
  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-card p-5",
        className
      )}
      aria-label="Latest payslip"
    >
      <Text variant="caption" className="text-muted-foreground">
        Latest payslip
      </Text>
      <p className="mt-1 text-sm font-medium text-foreground">{period}</p>
      <p className="mt-2 text-2xl font-bold text-foreground">{amount}</p>
      <a
        href={href}
        className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
      >
        {linkLabel}
      </a>
    </section>
  );
}
