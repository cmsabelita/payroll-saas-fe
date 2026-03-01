"use client";

import { Controller, useForm } from "react-hook-form";
import { Input, Label, Text } from "@/components/atoms";
import {
  AlertBanner,
  FormCheckbox,
  FormInput,
  FormSelect,
} from "@/components/molecules";
import { cn } from "@/utils";
import type {
  EmployeeEditSalaryFormValues,
  EmployeeEditSalarySectionProps,
} from "./EmployeeEditSalarySection.types";

const PAY_FREQUENCY_OPTIONS = [
  { value: "monthly", label: "Monthly" },
  { value: "semi_monthly", label: "Semi-monthly (1st & 15th)" },
  { value: "weekly", label: "Weekly" },
];

const PAY_MODE_OPTIONS = [
  { value: "bank", label: "Bank Transfer" },
  { value: "cash", label: "Cash" },
  { value: "ewallet", label: "E-wallet (GCash / Maya)" },
];

const BANK_OPTIONS = [
  { value: "bpi", label: "BPI" },
  { value: "bdo", label: "BDO Unibank" },
  { value: "metrobank", label: "Metrobank" },
  { value: "unionbank", label: "UnionBank" },
];

export function EmployeeEditSalarySection({
  defaultValues,
  currentSalaryDisplay,
  onSubmit,
  className,
}: EmployeeEditSalarySectionProps) {
  const { control, handleSubmit } = useForm<EmployeeEditSalaryFormValues>({
    defaultValues: {
      basicSalaryRate: "45000.00",
      payFrequency: "semi_monthly",
      dailyRate: "1,730.77",
      mealAllowanceEnabled: true,
      mealAllowanceAmount: "2000.00",
      riceSubsidyEnabled: true,
      riceSubsidyAmount: "2000.00",
      transportationEnabled: false,
      transportationAmount: "",
      payMode: "bank",
      bankName: "bpi",
      accountNumber: "9876-5432-10",
      accountName: "Ana Lim Reyes",
      ...defaultValues,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-5", className)}
      noValidate
    >
      {currentSalaryDisplay != null && (
        <div className="text-right">
          <Text variant="caption" as="p" className="text-muted-foreground">
            Current basic salary
          </Text>
          <Text variant="body" as="p" className="text-lg font-bold text-foreground">
            {currentSalaryDisplay}
            <Text as="span" variant="caption" className="ml-1 font-normal text-muted-foreground">
              /mo
            </Text>
          </Text>
        </div>
      )}

      <AlertBanner
        variant="warning"
        title="Salary changes take effect on the next payroll period."
        description="This action will be logged and visible in the audit trail."
      />

      <Text
        as="p"
        variant="caption"
        className="font-semibold uppercase tracking-wider text-muted-foreground"
      >
        Basic Salary
      </Text>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          control={control}
          name="basicSalaryRate"
          label="Basic Salary Rate"
          required
          leftAdornment="₱"
          className="[&_input]:pl-7"
        />
        <FormSelect
          control={control}
          name="payFrequency"
          label="Pay Frequency"
          required
          options={PAY_FREQUENCY_OPTIONS}
        />
      </div>

      <FormInput
        control={control}
        name="dailyRate"
        label="Daily Rate (auto-computed)"
        readOnly
        leftAdornment="₱"
        hint="Based on basic salary and pay frequency."
        className="[&_input]:bg-muted [&_input]:pl-7"
      />

      <div className="border-t border-border py-5">
        <Text
          as="p"
          variant="caption"
          className="mb-4 font-semibold uppercase tracking-wider text-muted-foreground"
        >
          De Minimis Allowances
        </Text>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <FormCheckbox
              control={control}
              name="mealAllowanceEnabled"
              label="Meal Allowance"
              className="w-44 shrink-0"
            />
            <div className="min-w-0 flex-1">
              <Controller
                control={control}
                name="mealAllowanceAmount"
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="meal-allowance-amount" className="sr-only">
                      Meal allowance amount
                    </Label>
                    <Input
                      id="meal-allowance-amount"
                      size="md"
                      leftAdornment="₱"
                      placeholder="0.00"
                      error={Boolean(fieldState.error)}
                      aria-invalid={fieldState.error ? true : undefined}
                      {...field}
                    />
                  </div>
                )}
              />
            </div>
            <Text variant="caption" className="w-28 shrink-0 text-muted-foreground">
              max ₱2,000/mo
            </Text>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <FormCheckbox
              control={control}
              name="riceSubsidyEnabled"
              label="Rice Subsidy"
              className="w-44 shrink-0"
            />
            <div className="min-w-0 flex-1">
              <Controller
                control={control}
                name="riceSubsidyAmount"
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="rice-subsidy-amount" className="sr-only">
                      Rice subsidy amount
                    </Label>
                    <Input
                      id="rice-subsidy-amount"
                      size="md"
                      leftAdornment="₱"
                      placeholder="0.00"
                      error={Boolean(fieldState.error)}
                      aria-invalid={fieldState.error ? true : undefined}
                      {...field}
                    />
                  </div>
                )}
              />
            </div>
            <Text variant="caption" className="w-28 shrink-0 text-muted-foreground">
              max ₱2,000/mo
            </Text>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <FormCheckbox
              control={control}
              name="transportationEnabled"
              label="Transportation"
              className="w-44 shrink-0"
            />
            <div className="min-w-0 flex-1">
              <Controller
                control={control}
                name="transportationAmount"
                render={({ field, fieldState }) => (
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="transportation-amount" className="sr-only">
                      Transportation amount
                    </Label>
                    <Input
                      id="transportation-amount"
                      size="md"
                      leftAdornment="₱"
                      placeholder="0.00"
                      error={Boolean(fieldState.error)}
                      aria-invalid={fieldState.error ? true : undefined}
                      {...field}
                    />
                  </div>
                )}
              />
            </div>
            <Text variant="caption" className="w-28 shrink-0 text-muted-foreground">
              no cap
            </Text>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <Text
          as="p"
          variant="caption"
          className="mb-4 font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Bank Disbursement
        </Text>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormSelect
            control={control}
            name="payMode"
            label="Pay Mode"
            required
            options={PAY_MODE_OPTIONS}
          />
          <FormSelect
            control={control}
            name="bankName"
            label="Bank Name"
            options={BANK_OPTIONS}
          />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            control={control}
            name="accountNumber"
            label="Account Number"
          />
          <FormInput
            control={control}
            name="accountName"
            label="Account Name"
          />
        </div>
      </div>
    </form>
  );
}
