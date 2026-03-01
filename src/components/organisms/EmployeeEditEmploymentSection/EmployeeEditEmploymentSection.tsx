"use client";

import { useForm } from "react-hook-form";
import { Text } from "@/components/atoms";
import {
  FormDateInput,
  FormInput,
  FormSelect,
} from "@/components/molecules";
import { cn } from "@/utils";
import type {
  EmployeeEditEmploymentFormValues,
  EmployeeEditEmploymentSectionProps,
} from "./EmployeeEditEmploymentSection.types";

const DEPARTMENT_OPTIONS = [
  { value: "engineering", label: "Engineering" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance & Accounting" },
  { value: "operations", label: "Operations" },
  { value: "sales", label: "Sales" },
];

const EMPLOYMENT_TYPE_OPTIONS = [
  { value: "regular", label: "Regular" },
  { value: "probationary", label: "Probationary" },
  { value: "contractual", label: "Project-Based / Contractual" },
  { value: "part_time", label: "Part-time" },
];

const EMPLOYMENT_STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "on_leave", label: "On Leave" },
  { value: "suspended", label: "Suspended" },
  { value: "resigned", label: "Resigned" },
  { value: "terminated", label: "Terminated" },
  { value: "separated", label: "Separated" },
];

const WORK_LOCATION_OPTIONS = [
  { value: "onsite", label: "On-site / Office" },
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
];

const SHIFT_SCHEDULE_OPTIONS = [
  { value: "standard", label: "Standard (8AM–5PM, Mon–Fri)" },
  { value: "morning", label: "Morning (6AM–3PM)" },
  { value: "flexible", label: "Flexible / Flexi" },
];

const SEPARATION_TYPE_OPTIONS = [
  { value: "", label: "— Not applicable —" },
  { value: "resignation", label: "Resignation" },
  { value: "termination_just_cause", label: "Termination (just cause)" },
  { value: "termination_authorized", label: "Termination (authorized cause)" },
  { value: "retirement", label: "Retirement" },
  { value: "end_of_contract", label: "End of Contract" },
];

export function EmployeeEditEmploymentSection({
  defaultValues,
  onSubmit,
  className,
}: EmployeeEditEmploymentSectionProps) {
  const { control, handleSubmit } = useForm<EmployeeEditEmploymentFormValues>({
    defaultValues: {
      employeeId: "",
      dateHired: "",
      department: "hr",
      jobTitle: "",
      employmentType: "regular",
      employmentStatus: "active",
      directSupervisor: "",
      workLocation: "remote",
      shiftSchedule: "standard",
      costCenter: "",
      separationType: "",
      lastDayOfWork: "",
      ...defaultValues,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-5", className)}
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          control={control}
          name="employeeId"
          label="Employee ID"
          readOnly
          className="[&_input]:bg-muted"
        />
        <FormDateInput
          control={control}
          name="dateHired"
          label="Date Hired"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormSelect
          control={control}
          name="department"
          label="Department"
          required
          options={DEPARTMENT_OPTIONS}
        />
        <FormInput
          control={control}
          name="jobTitle"
          label="Job Title"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormSelect
          control={control}
          name="employmentType"
          label="Employment Type"
          required
          options={EMPLOYMENT_TYPE_OPTIONS}
        />
        <FormSelect
          control={control}
          name="employmentStatus"
          label="Employment Status"
          options={EMPLOYMENT_STATUS_OPTIONS}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          control={control}
          name="directSupervisor"
          label="Direct Supervisor"
        />
        <FormSelect
          control={control}
          name="workLocation"
          label="Work Location"
          options={WORK_LOCATION_OPTIONS}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormSelect
          control={control}
          name="shiftSchedule"
          label="Shift Schedule"
          required
          options={SHIFT_SCHEDULE_OPTIONS}
        />
        <FormInput
          control={control}
          name="costCenter"
          label="Cost Center / Branch"
        />
      </div>

      <div className="border-t border-border py-5">
        <Text
          as="p"
          variant="caption"
          className="mb-4 font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Separation Details{" "}
          <span className="font-normal normal-case">(fill only if employee is leaving)</span>
        </Text>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormSelect
            control={control}
            name="separationType"
            label="Separation Type"
            options={SEPARATION_TYPE_OPTIONS}
          />
          <FormDateInput
            control={control}
            name="lastDayOfWork"
            label="Last Day of Work"
          />
        </div>
      </div>
    </form>
  );
}
