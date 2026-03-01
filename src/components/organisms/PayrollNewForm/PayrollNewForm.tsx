"use client";

import { FaIcon, Input, Text } from "@/components/atoms";
import {
  FormDateInput,
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/components/molecules";
import { cn } from "@/utils";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import type { PayrollNewFormProps, PayrollNewFormValues } from "./PayrollNewForm.types";

const DEFAULT_INCLUDE_OPTIONS = [
  { value: "all", label: "All active employees (128)" },
  { value: "department", label: "By department" },
  { value: "custom", label: "Custom selection" },
];

export function PayrollNewForm({
  lastPeriodLabel,
  lastPeriodDetail,
  payrollFrequencyLabel = "Semi-monthly (1st–15th / 16th–end of month)",
  includeEmployeesOptions = DEFAULT_INCLUDE_OPTIONS,
  onSubmit,
  onCancel,
  defaultValues,
  className,
}: PayrollNewFormProps) {
  const { control, handleSubmit } = useForm<PayrollNewFormValues>({
    defaultValues: {
      periodName: "Feb 2026 · 2nd Half",
      periodStart: "2026-02-16",
      periodEnd: "2026-02-28",
      payDate: "2026-03-05",
      includeEmployees: "all",
      notes: "",
      ...defaultValues,
    },
  });

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-8",
        className
      )}
    >
      <h1 className="text-base font-semibold text-foreground mb-1">
        Create Payroll Period
      </h1>
      <Text variant="caption" as="p" className="text-muted-foreground mb-6">
        Define the date range and pay date for this payroll run.
      </Text>

      {lastPeriodLabel != null && lastPeriodDetail != null && (
        <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3 mb-6">
          <FaIcon
            icon={faCircleInfo}
            size="sm"
            aria-hidden
            className="shrink-0 text-muted-foreground"
          />
          <div>
            <Text variant="caption" as="p" className="font-semibold text-foreground">
              Last period: {lastPeriodLabel}
            </Text>
            <Text variant="caption" as="p" className="text-muted-foreground">
              {lastPeriodDetail}
            </Text>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <FormInput
          control={control}
          name="periodName"
          label="Period Name"
          required
          hint="Auto-generated based on frequency and date range. You may edit this."
        />

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Payroll Frequency
          </label>
          <Input
            value={payrollFrequencyLabel}
            disabled
            className="bg-muted/50 text-muted-foreground"
          />
          <Text variant="caption" as="p" className="mt-1.5 text-muted-foreground">
            Configured in{" "}
            <NextLink
              href="/settings/payroll-config"
              className="text-primary hover:underline"
            >
              Payroll Settings
            </NextLink>
            .
          </Text>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormDateInput
            control={control}
            name="periodStart"
            label="Period Start"
            required
          />
          <FormDateInput
            control={control}
            name="periodEnd"
            label="Period End"
            required
          />
        </div>

        <FormDateInput
          control={control}
          name="payDate"
          label="Pay Date"
          required
          hint="The date salaries will be credited to employee accounts."
        />

        <FormSelect
          control={control}
          name="includeEmployees"
          label="Include Employees"
          options={includeEmployeesOptions}
        />

        <FormTextarea
          control={control}
          name="notes"
          label="Notes (optional)"
          placeholder="e.g. Includes 13th month installment, special bonus…"
          rows={2}
        />

        <div className="flex gap-3 pt-5 mt-6 border-t border-border">
          <button
            type="button"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Create Period & Start Draft →
          </button>
        </div>
      </form>
    </div>
  );
}
