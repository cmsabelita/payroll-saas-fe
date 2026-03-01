"use client";

import { Button, Input, Select, Text } from "@/components/atoms";
import { cn } from "@/utils";
import { useState } from "react";
import type {
  SettingsCompanyFormProps,
  SettingsCompanyFormValues,
} from "./SettingsCompanyForm.types";

const INDUSTRY_OPTIONS = [
  { value: "it", label: "Information Technology" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance" },
];
const SIZE_OPTIONS = [
  { value: "1-10", label: "1–10" },
  { value: "11-50", label: "11–50" },
  { value: "51-200", label: "51–200" },
  { value: "201-500", label: "201–500" },
  { value: "500+", label: "500+" },
];
const EMPLOYMENT_TYPE_OPTIONS = [
  { value: "corporation", label: "Corporation" },
  { value: "single", label: "Single Proprietorship" },
  { value: "partnership", label: "Partnership" },
];

const defaultValues: SettingsCompanyFormValues = {
  companyName: "",
  legalName: "",
  industry: "it",
  companySize: "51-200",
  tin: "",
  secDtiRegistration: "",
  yearFounded: "",
  employmentType: "corporation",
  primaryEmail: "",
  phone: "",
  website: "",
  businessAddress: "",
  sssEmployer: "",
  philhealthEmployer: "",
  pagibigEmployer: "",
  birRdoCode: "",
};

export function SettingsCompanyForm({
  initialValues,
  onSubmit,
  isSubmitting = false,
  className,
}: SettingsCompanyFormProps) {
  const [values, setValues] = useState<SettingsCompanyFormValues>({
    ...defaultValues,
    ...initialValues,
  });

  const update = (key: keyof SettingsCompanyFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <section className="rounded-xl border border-border bg-card p-6">
        <Text variant="body" as="h2" className="mb-5 font-semibold text-foreground">
          Company Information
        </Text>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Company Name</label>
            <Input
              value={values.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Legal Name</label>
            <Input
              value={values.legalName}
              onChange={(e) => update("legalName", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Industry</label>
            <Select
              options={INDUSTRY_OPTIONS}
              value={values.industry}
              onChange={(e) => update("industry", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Company Size</label>
            <Select
              options={SIZE_OPTIONS}
              value={values.companySize}
              onChange={(e) => update("companySize", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Tax Identification Number (TIN)</label>
            <Input
              value={values.tin}
              onChange={(e) => update("tin", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">SEC / DTI Registration #</label>
            <Input
              value={values.secDtiRegistration}
              onChange={(e) => update("secDtiRegistration", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Year Founded</label>
            <Input
              type="number"
              value={values.yearFounded}
              onChange={(e) => update("yearFounded", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Employment Type</label>
            <Select
              options={EMPLOYMENT_TYPE_OPTIONS}
              value={values.employmentType}
              onChange={(e) => update("employmentType", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <Text variant="body" as="h2" className="mb-5 font-semibold text-foreground">
          Contact & Location
        </Text>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Primary Email</label>
            <Input
              type="email"
              value={values.primaryEmail}
              onChange={(e) => update("primaryEmail", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Phone</label>
            <Input
              type="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-sm font-medium text-foreground">Website</label>
            <Input
              type="url"
              value={values.website}
              onChange={(e) => update("website", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-sm font-medium text-foreground">Business Address</label>
            <Input
              value={values.businessAddress}
              onChange={(e) => update("businessAddress", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <Text variant="body" as="h2" className="mb-4 font-semibold text-foreground">
          Government Employer Numbers
        </Text>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">SSS Employer #</label>
            <Input
              value={values.sssEmployer}
              onChange={(e) => update("sssEmployer", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">PhilHealth Employer #</label>
            <Input
              value={values.philhealthEmployer}
              onChange={(e) => update("philhealthEmployer", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Pag-IBIG Employer #</label>
            <Input
              value={values.pagibigEmployer}
              onChange={(e) => update("pagibigEmployer", e.target.value)}
              size="md"
              className="w-full"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">BIR RDO Code</label>
            <Input
              value={values.birRdoCode}
              onChange={(e) => update("birRdoCode", e.target.value)}
              placeholder="e.g., 050 — Makati South"
              size="md"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving…" : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
