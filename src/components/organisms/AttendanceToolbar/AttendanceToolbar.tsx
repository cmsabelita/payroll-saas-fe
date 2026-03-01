"use client";

import { Input, Select } from "@/components/atoms";
import { cn } from "@/utils";
import type { AttendanceToolbarProps } from "./AttendanceToolbar.types";

export function AttendanceToolbar({
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  departmentFilter,
  onDepartmentFilterChange,
  departmentOptions,
  className,
}: AttendanceToolbarProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Input
        type="date"
        value={dateFrom}
        onChange={(e) => onDateFromChange(e.target.value)}
        size="md"
        className="w-40"
      />
      <Input
        type="date"
        value={dateTo}
        onChange={(e) => onDateToChange(e.target.value)}
        size="md"
        className="w-40"
      />
      <div className="w-44 min-w-0">
        <Select
          options={departmentOptions}
          value={departmentFilter}
          onChange={(e) => onDepartmentFilterChange(e.target.value)}
          size="md"
        />
      </div>
    </div>
  );
}
