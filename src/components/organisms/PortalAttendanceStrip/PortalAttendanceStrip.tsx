import { cn } from "@/utils";
import type {
  PortalAttendanceStripProps,
  PortalAttendanceDayStatus,
} from "./PortalAttendanceStrip.types";

const statusDotClass: Record<NonNullable<PortalAttendanceDayStatus>, string> = {
  present: "bg-primary",
  absent: "bg-destructive",
  leave: "bg-muted-foreground",
  rest: "bg-muted",
};

export function PortalAttendanceStrip({
  heading = "This week",
  days,
  className,
}: PortalAttendanceStripProps) {
  return (
    <section
      className={cn("rounded-xl border border-border bg-card p-5", className)}
      aria-label="Attendance"
    >
      <h2 className="mb-4 text-sm font-semibold text-foreground">{heading}</h2>
      <div className="flex flex-wrap gap-4">
        {days.map((day) => (
          <div
            key={day.date}
            className="flex flex-col items-center gap-2"
          >
            <span
              className={cn(
                "h-3 w-3 rounded-full",
                day.status != null ? statusDotClass[day.status] : "bg-muted"
              )}
              aria-hidden
            />
            <span className="text-xs text-muted-foreground">{day.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
