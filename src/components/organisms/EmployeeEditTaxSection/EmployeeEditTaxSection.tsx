"use client";

import { useForm } from "react-hook-form";
import { Text } from "@/components/atoms";
import {
  FormRadioGroup,
  FormSelect,
  FormSwitch,
} from "@/components/molecules";
import { cn } from "@/utils";
import type {
  EmployeeEditTaxFormValues,
  EmployeeEditTaxSectionProps,
} from "./EmployeeEditTaxSection.types";

const TAX_STATUS_OPTIONS = [
  {
    value: "s_me",
    label:
      "S / ME — Single / no qualified dependents",
  },
  {
    value: "me1_me4",
    label: "ME1 – ME4 — Married with 1–4 qualified dependents",
  },
  {
    value: "hf",
    label: "HF / HF1 – HF4 — Head of Family (solo parent)",
  },
  {
    value: "s1_s4",
    label: "S1 – S4 — Single with 1–4 qualified dependents",
  },
];

const DEPENDENTS_OPTIONS = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

const WITHHOLDING_AGENT_OPTIONS = [
  { value: "primary", label: "This company (primary employer)" },
  { value: "multiple", label: "Employee has multiple employers" },
];

const THIRTEENTH_MONTH_OPTIONS = [
  { value: "yes", label: "Yes — Regular Employee" },
  { value: "no", label: "No — Contractual / Project-Based" },
];

export function EmployeeEditTaxSection({
  defaultValues,
  ytdSummary,
  onSubmit,
  className,
}: EmployeeEditTaxSectionProps) {
  const { control, handleSubmit } = useForm<EmployeeEditTaxFormValues>({
    defaultValues: {
      mweExempt: false,
      taxStatus: "s_me",
      qualifiedDependents: "0",
      withholdingAgent: "primary",
      thirteenthMonthEligible: "yes",
      ...defaultValues,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-5", className)}
      noValidate
    >
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-muted/50 p-4">
        <div className="flex items-center justify-between gap-4">
          <FormSwitch
            control={control}
            name="mweExempt"
            label="Minimum Wage Earner (MWE)"
            hint="MWEs are exempt from income tax withholding under TRAIN Law."
            aria-label="Toggle minimum wage earner exemption"
          />
        </div>
      </div>

      <FormRadioGroup
        control={control}
        name="taxStatus"
        label="BIR Withholding Tax Status"
        required
        options={TAX_STATUS_OPTIONS}
        orientation="column"
        hint="From employee's BIR Form 2316 or updated BIR Form 1902/1905."
        className="space-y-2"
      />

      <div className="flex flex-wrap items-center gap-3">
        <FormSelect
          control={control}
          name="qualifiedDependents"
          label="Number of Qualified Dependents"
          options={DEPENDENTS_OPTIONS}
          className="max-w-[180px]"
        />
        <Text variant="caption" as="p" className="self-end pb-2 text-muted-foreground">
          Max 4 per BIR
        </Text>
      </div>

      <div className="border-t border-border py-5">
        <Text
          as="p"
          variant="caption"
          className="mb-4 font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Additional Settings
        </Text>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormSelect
            control={control}
            name="withholdingAgent"
            label="Withholding Agent"
            options={WITHHOLDING_AGENT_OPTIONS}
          />
          <FormSelect
            control={control}
            name="thirteenthMonthEligible"
            label="13th Month Pay Eligible"
            options={THIRTEENTH_MONTH_OPTIONS}
          />
        </div>
      </div>

      {ytdSummary != null && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <Text
            as="p"
            variant="caption"
            className="mb-3 font-semibold text-primary"
          >
            Year-to-Date Tax Summary ({ytdSummary.year})
          </Text>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <Text as="p" variant="caption" className="text-primary/80">
                Gross Income
              </Text>
              <Text as="p" variant="body" className="mt-0.5 font-semibold text-foreground">
                {ytdSummary.grossIncome}
              </Text>
            </div>
            <div>
              <Text as="p" variant="caption" className="text-primary/80">
                Tax Withheld
              </Text>
              <Text as="p" variant="body" className="mt-0.5 font-semibold text-foreground">
                {ytdSummary.taxWithheld}
              </Text>
            </div>
            <div>
              <Text as="p" variant="caption" className="text-primary/80">
                Taxable Income
              </Text>
              <Text as="p" variant="body" className="mt-0.5 font-semibold text-foreground">
                {ytdSummary.taxableIncome}
              </Text>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
