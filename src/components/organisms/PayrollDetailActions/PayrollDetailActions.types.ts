export interface PayrollDetailActionsProps {
  title: string;
  description?: string;
  onApprove?: () => void;
  viewEmployeesHref?: string;
  adjustmentsHref?: string;
  onRejectToDraft?: () => void;
  showApprove?: boolean;
  showReject?: boolean;
  className?: string;
}
