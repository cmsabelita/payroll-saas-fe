export type TeamMemberStatus = "active" | "invited" | "suspended";

export interface TeamTableRow {
  id: string;
  name: string;
  email: string;
  avatarFallback: string;
  role: string;
  status: TeamMemberStatus;
  lastActive: string;
  joined: string;
}

export interface TeamTableProps {
  rows: TeamTableRow[];
  onManage?: (id: string) => void;
  onResend?: (id: string) => void;
  onRevoke?: (id: string) => void;
  onReactivate?: (id: string) => void;
  className?: string;
}
