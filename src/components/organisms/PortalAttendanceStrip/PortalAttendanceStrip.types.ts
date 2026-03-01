export type PortalAttendanceDayStatus = "on-time" | "late" | "pending" | "absent";

export interface PortalAttendanceStripDay {
  dayLabel: string;
  timeIn?: string;
  status: PortalAttendanceDayStatus;
}

export interface PortalAttendanceStripProps {
  weekLabel: string;
  days: PortalAttendanceStripDay[];
  /** e.g. "Today — February 27 (Thursday)" */
  todayLabel?: string;
  /** e.g. "Time-in: 7:58 AM · Working" */
  todayDetail?: string;
  onTimeOut?: () => void;
  viewAllHref?: string;
  className?: string;
}
