export interface AttendanceDetailSectionProps {
  employeeName: string;
  employeeId?: string;
  date: string;
  timeIn: string;
  timeOut: string;
  hours: string;
  status: string;
  breakMinutes?: number;
  overtimeMinutes?: number;
  className?: string;
}
