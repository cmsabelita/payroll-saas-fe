export interface PortalPayslipCardProps {
  /** Pay period (e.g. "January 2026") */
  period: string;
  /** Net pay amount (e.g. "₱45,230.00") */
  amount: string;
  /** Link to full payslip */
  href: string;
  /** Link label (e.g. "View payslip") */
  linkLabel: string;
  className?: string;
}
