export interface AttendanceTableRow {
  id: string;
  employeeName: string;
  department: string;
  date: string;
  timeIn: string;
  timeOut: string;
  hours: string;
  status: "present" | "late" | "absent" | "leave" | "half-day";
}

export interface AttendanceTableProps {
  rows: AttendanceTableRow[];
  onView?: (id: string) => void;
  className?: string;
}
