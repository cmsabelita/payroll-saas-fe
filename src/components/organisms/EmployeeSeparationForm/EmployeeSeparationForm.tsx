"use client";

import { useForm } from "react-hook-form";
import { AlertBanner } from "@/components/molecules/AlertBanner";
import { FormCheckbox, FormDateInput, FormSelect, FormTextarea } from "@/components/molecules";
import { Avatar, Button, Text } from "@/components/atoms";
import { cn } from "@/utils";
import type {
  EmployeeSeparationFormValues,
  EmployeeSeparationFormProps,
} from "./EmployeeSeparationForm.types";

const SEPARATION_TYPE_OPTIONS = [
  { value: "resignation", label: "Resignation" },
  { value: "termination_just", label: "Termination – Just Cause" },
  { value: "termination_authorized", label: "Termination – Authorized Cause" },
  { value: "redundancy", label: "Redundancy" },
  { value: "retrenchment", label: "Retrenchment" },
  { value: "end_of_contract", label: "End of Contract" },
  { value: "retirement", label: "Retirement" },
  { value: "death", label: "Death" },
  { value: "others", label: "Others" },
];

const CLEARANCE_STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "cleared", label: "Cleared" },
  { value: "with_accountabilities", label: "With Accountabilities" },
];

export function EmployeeSeparationForm({
  displayName,
  employeeId,
  defaultValues,
  onSubmit,
  onCancel,
  className,
}: EmployeeSeparationFormProps) {
  const { control, handleSubmit } = useForm<EmployeeSeparationFormValues>({
    defaultValues: {
      separationType: "resignation",
      lastDay: "",
      dateNoticeReceived: "",
      clearanceStatus: "pending",
      notes: "",
      noticeReceived: true,
      exitInterviewCompleted: false,
      clearanceFormSigned: false,
      ...defaultValues,
    },
  });

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <AlertBanner
        variant="warning"
        title="This action is permanent"
        description={`This action will mark ${displayName} as separated. A Final Pay computation will be generated. This cannot be undone without contacting support.`}
      />

      <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 p-3">
        <Avatar size="md" fallback={initials} className="bg-primary/15 text-primary" />
        <div>
          <Text variant="body" as="p" className="font-semibold text-foreground">
            {displayName}
          </Text>
          <Text variant="caption" as="p" className="text-muted-foreground">
            {employeeId}
          </Text>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
        <FormSelect
          control={control}
          name="separationType"
          label="Separation Type"
          required
          options={SEPARATION_TYPE_OPTIONS}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormDateInput control={control} name="lastDay" label="Date of Separation / Last Day" required />
          <FormDateInput control={control} name="dateNoticeReceived" label="Date Notice Received" />
        </div>
        <FormSelect
          control={control}
          name="clearanceStatus"
          label="Clearance Status"
          options={CLEARANCE_STATUS_OPTIONS}
        />
        <FormTextarea
          control={control}
          name="notes"
          label="Separation Reason / Notes"
          placeholder="Optional notes about this separation..."
          rows={3}
        />
        <div className="space-y-3">
          <FormCheckbox control={control} name="noticeReceived" label="Separation notice / resignation letter received" />
          <FormCheckbox control={control} name="exitInterviewCompleted" label="Exit interview completed" />
          <FormCheckbox control={control} name="clearanceFormSigned" label="Clearance form signed" />
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          {onCancel != null && (
            <Button type="button" variant="ghost" size="md" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" size="md">
            Next: Preview Final Pay
          </Button>
        </div>
      </form>
    </div>
  );
}
