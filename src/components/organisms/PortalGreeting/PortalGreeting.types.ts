export interface PortalGreetingQuickAction {
  label: string;
  href?: string;
  onClick?: () => void;
  /** Primary (filled) vs secondary (outline) */
  variant?: "primary" | "secondary";
}

export interface PortalGreetingProps {
  /** e.g. "Thursday, February 27, 2026" */
  dateLabel: string;
  /** e.g. "Good morning, Juan 👋" */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Quick action buttons (Log Attendance, Apply Leave, File OT) */
  quickActions?: PortalGreetingQuickAction[];
  className?: string;
}
