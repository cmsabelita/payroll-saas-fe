export interface PortalPayslipListCardProps {
  periodLabel: string;
  payDate: string;
  status: string;
  statusVariant?: "success" | "warning" | "secondary";
  grossPay: string;
  netPay: string;
  viewHref: string;
  onDownloadPdf?: () => void;
  className?: string;
}
