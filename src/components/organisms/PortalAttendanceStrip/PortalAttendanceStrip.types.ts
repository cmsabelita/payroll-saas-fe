export type PortalAttendanceDayStatus = "present" | "absent" | "leave" | "rest" | null;

export interface PortalAttendanceStripDay {
  date: string;
  label: string;
  status: PortalAttendanceDayStatus;
}

export interface PortalAttendanceStripProps {
  /** Week or period label (e.g. "This week") */
  heading?: string;
  days: PortalAttendanceStripDay[];
  className?: string;
}
