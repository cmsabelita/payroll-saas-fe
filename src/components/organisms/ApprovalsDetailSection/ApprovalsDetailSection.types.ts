export interface ApprovalsDetailSectionProps {
  requestType: string;
  requesterName: string;
  requesterEmail?: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  period?: string;
  details?: string;
  className?: string;
}
