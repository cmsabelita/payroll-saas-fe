export interface TeamMemberDetailProps {
  name: string;
  email: string;
  role: string;
  status: "active" | "invited" | "suspended";
  avatarFallback: string;
  lastActive?: string;
  joined?: string;
  permissions?: string[];
  className?: string;
}
