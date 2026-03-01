"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Control } from "react-hook-form";
import { Button, FaIcon, Surface, Text } from "@/components/atoms";
import {
  FormCheckbox,
  FormDateInput,
  FormInput,
  FormSelect,
} from "@/components/molecules";
import { StatusStepper } from "@/components/molecules/StatusStepper";
import { cn } from "@/utils";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import type {
  EmployeeNewWizardFormValues,
  EmployeeNewWizardStepIndex,
} from "./EmployeeNewWizard.types";
import {
  EMPLOYEE_NEW_WIZARD_DEFAULT_VALUES,
} from "./defaultValues";
import {
  EMPLOYEE_NEW_WIZARD_STEP_LABELS,
} from "./EmployeeNewWizard.types";

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "prefer-not", label: "Prefer not to say" },
];

const CIVIL_STATUS_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "widowed", label: "Widowed" },
  { value: "separated", label: "Legally Separated" },
];

const RELATIONSHIP_OPTIONS = [
  { value: "mother", label: "Mother" },
  { value: "father", label: "Father" },
  { value: "spouse", label: "Spouse" },
  { value: "sibling", label: "Sibling" },
  { value: "other", label: "Other" },
];

const DEPARTMENT_OPTIONS = [
  { value: "engineering", label: "Engineering" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance & Accounting" },
  { value: "operations", label: "Operations" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

const EMPLOYMENT_TYPE_OPTIONS = [
  { value: "regular", label: "Regular" },
  { value: "probationary", label: "Probationary" },
  { value: "contractual", label: "Project-Based / Contractual" },
  { value: "part-time", label: "Part-time" },
  { value: "seasonal", label: "Seasonal" },
];

const WORK_LOCATION_OPTIONS = [
  { value: "onsite", label: "On-site / Office" },
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
];

const SHIFT_OPTIONS = [
  { value: "standard", label: "Standard (8AM–5PM, Mon–Fri)" },
  { value: "morning", label: "Morning (6AM–3PM)" },
  { value: "afternoon", label: "Afternoon (2PM–11PM)" },
  { value: "night", label: "Night Shift (10PM–7AM)" },
  { value: "flexible", label: "Flexible / Flexi" },
];

const PAY_FREQUENCY_OPTIONS = [
  { value: "monthly", label: "Monthly" },
  { value: "semi-monthly", label: "Semi-monthly (1st & 15th)" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" },
];

const ROLE_OPTIONS = [
  { value: "employee", label: "Employee" },
  { value: "manager", label: "Manager" },
  { value: "hr", label: "HR" },
  { value: "accountant", label: "Accountant" },
];

function StepContentPersonal({
  control,
}: {
  control: Control<EmployeeNewWizardFormValues>;
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormInput control={control} name="firstName" label="First Name" required placeholder="e.g. Juan" />
        <FormInput control={control} name="lastName" label="Last Name" required placeholder="e.g. dela Cruz" />
        <FormInput control={control} name="middleName" label="Middle Name" placeholder="e.g. Reyes" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormDateInput control={control} name="dateOfBirth" label="Date of Birth" required />
        <FormSelect control={control} name="gender" label="Gender" required options={GENDER_OPTIONS} placeholder="Select gender" />
        <FormSelect control={control} name="civilStatus" label="Civil Status" required options={CIVIL_STATUS_OPTIONS} placeholder="Select status" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput control={control} name="nationality" label="Nationality" />
        <FormInput control={control} name="placeOfBirth" label="Place of Birth" placeholder="e.g. Pasig City" />
      </div>
      <FormInput control={control} name="addressLine1" label="Address Line 1" required placeholder="House/Unit No., Street, Barangay" />
      <FormInput control={control} name="addressLine2" label="Address Line 2" placeholder="Subdivision, Building (optional)" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormInput control={control} name="city" label="City / Municipality" required placeholder="e.g. Pasig City" />
        <FormInput control={control} name="province" label="Province" required placeholder="e.g. Metro Manila" />
        <FormInput control={control} name="zipCode" label="ZIP Code" required placeholder="1600" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput control={control} name="personalEmail" label="Personal Email" type="email" placeholder="juan@email.com" />
        <FormInput control={control} name="mobileNumber" label="Mobile Number" required placeholder="+63 9XX XXX XXXX" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormInput control={control} name="emergencyContactName" label="Contact Name" required placeholder="Full name" />
        <FormSelect control={control} name="emergencyRelationship" label="Relationship" required options={RELATIONSHIP_OPTIONS} placeholder="Select" />
        <FormInput control={control} name="emergencyContactNumber" label="Contact Number" required placeholder="+63 9XX XXX XXXX" />
      </div>
    </div>
  );
}

function StepContentEmployment({
  control,
}: {
  control: Control<EmployeeNewWizardFormValues>;
}) {
  return (
    <div className="space-y-4">
      <FormInput control={control} name="employeeId" label="Employee ID" disabled className="bg-muted" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormSelect control={control} name="department" label="Department" required options={DEPARTMENT_OPTIONS} placeholder="Select department…" />
        <FormInput control={control} name="position" label="Job Title / Position" required placeholder="e.g. Software Engineer" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormSelect control={control} name="employmentType" label="Employment Type" required options={EMPLOYMENT_TYPE_OPTIONS} placeholder="Select type…" />
        <FormDateInput control={control} name="dateHired" label="Date Hired" required />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormSelect control={control} name="workLocation" label="Work Location" options={WORK_LOCATION_OPTIONS} placeholder="Select" />
        <FormSelect control={control} name="shiftSchedule" label="Shift Schedule" required options={SHIFT_OPTIONS} placeholder="Select shift…" />
      </div>
    </div>
  );
}

function StepContentGovIds({
  control,
}: {
  control: Control<EmployeeNewWizardFormValues>;
}) {
  return (
    <div className="space-y-4">
      <FormInput control={control} name="sssNumber" label="SSS Number" placeholder="XX-XXXXXXX-X" />
      <FormInput control={control} name="philHealthNumber" label="PhilHealth Number" placeholder="XXXX-XXXX-XXXX" />
      <FormInput control={control} name="pagIbigNumber" label="Pag-IBIG (HDMF) Number" placeholder="XXXX-XXXX-XXXX" />
      <FormInput control={control} name="tin" label="TIN" placeholder="XXX-XXX-XXX-XXX" />
    </div>
  );
}

function StepContentSalary({
  control,
}: {
  control: Control<EmployeeNewWizardFormValues>;
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput control={control} name="basicSalary" label="Basic Salary Rate" required placeholder="0.00" />
        <FormSelect control={control} name="payFrequency" label="Pay Frequency" required options={PAY_FREQUENCY_OPTIONS} placeholder="Select" />
      </div>
    </div>
  );
}

function StepContentTax({
  control,
}: {
  control: Control<EmployeeNewWizardFormValues>;
}) {
  return (
    <div className="space-y-4">
      <FormInput control={control} name="taxExemption" label="Tax Exemption (optional)" placeholder="e.g. 0" />
    </div>
  );
}

function StepContentAccess({
  control,
}: {
  control: Control<EmployeeNewWizardFormValues>;
}) {
  return (
    <div className="space-y-4">
      <FormCheckbox control={control} name="sendInvite" label="Send invite email to set password" />
      <FormSelect control={control} name="role" label="App Role" options={ROLE_OPTIONS} placeholder="Select role" />
    </div>
  );
}

function StepContentReview({ data }: { data: EmployeeNewWizardFormValues }) {
  return (
    <div className="space-y-4">
      <Surface elevation="none" className="rounded-xl border border-border p-4">
        <Text variant="label" as="p" className="font-semibold">
          Personal
        </Text>
        <Text variant="caption" as="p" className="mt-1 text-muted-foreground">
          {data.firstName} {data.lastName} · DOB: {data.dateOfBirth || "—"} · {data.gender || "—"} · {data.civilStatus || "—"}
        </Text>
        <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
          {data.mobileNumber || "—"} · {data.personalEmail || "—"}
        </Text>
      </Surface>
      <Surface elevation="none" className="rounded-xl border border-border p-4">
        <Text variant="label" as="p" className="font-semibold">
          Employment
        </Text>
        <Text variant="caption" as="p" className="mt-1 text-muted-foreground">
          {data.employeeId} · {data.department || "—"} · {data.position || "—"} · {data.employmentType || "—"} · Hired: {data.dateHired || "—"}
        </Text>
      </Surface>
      <Surface elevation="none" className="rounded-xl border border-border p-4">
        <Text variant="label" as="p" className="font-semibold">
          Salary & Tax
        </Text>
        <Text variant="caption" as="p" className="mt-1 text-muted-foreground">
          Basic: {data.basicSalary ? `₱${data.basicSalary}` : "—"} · {data.payFrequency || "—"} · TIN: {data.tin || "—"}
        </Text>
      </Surface>
    </div>
  );
}

export function EmployeeNewWizard({
  onSubmit,
  onCancel,
  initialStep = 0,
  className,
}: import("./EmployeeNewWizard.types").EmployeeNewWizardProps) {
  const [currentStep, setCurrentStep] = useState<EmployeeNewWizardStepIndex>(initialStep);
  const form = useForm<EmployeeNewWizardFormValues>({
    defaultValues: EMPLOYEE_NEW_WIZARD_DEFAULT_VALUES,
  });
  const { control, getValues } = form;

  const steps = EMPLOYEE_NEW_WIZARD_STEP_LABELS.map((label, i) => ({
    key: `step-${i}`,
    label,
    state: i < currentStep ? "done" as const : i === currentStep ? "active" as const : "pending" as const,
  }));

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === 6;

  const goBack = () => {
    if (!isFirstStep) setCurrentStep((currentStep - 1) as EmployeeNewWizardStepIndex);
  };

  const goNext = () => {
    if (!isLastStep) setCurrentStep((currentStep + 1) as EmployeeNewWizardStepIndex);
  };

  const handleFormSubmit = (data: EmployeeNewWizardFormValues) => {
    if (isLastStep) {
      onSubmit(data);
    } else {
      goNext();
    }
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="border-b border-border bg-background px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <StatusStepper steps={steps} className="flex items-center gap-0" />
        </div>
      </div>
      <main className="flex-1 overflow-y-auto py-8 px-6">
        <div className="mx-auto max-w-2xl">
          <Surface elevation="none" className="mb-6 rounded-xl border border-border p-8">
            <div className="mb-6">
              <Text variant="heading" as="h2" className="text-base font-semibold">
                {EMPLOYEE_NEW_WIZARD_STEP_LABELS[currentStep]}
              </Text>
              <Text variant="caption" as="p" className="mt-0.5 text-muted-foreground">
                Step {currentStep + 1} of 7
              </Text>
            </div>
            {currentStep === 0 && <StepContentPersonal control={control} />}
            {currentStep === 1 && <StepContentEmployment control={control} />}
            {currentStep === 2 && <StepContentGovIds control={control} />}
            {currentStep === 3 && <StepContentSalary control={control} />}
            {currentStep === 4 && <StepContentTax control={control} />}
            {currentStep === 5 && <StepContentAccess control={control} />}
            {currentStep === 6 && <StepContentReview data={getValues()} />}
          </Surface>
          <div className="flex items-center justify-between py-2">
            {onCancel != null ? (
              <Button type="button" variant="ghost" size="md" onClick={onCancel}>
                Cancel
              </Button>
            ) : (
              <span />
            )}
            <div className="flex items-center gap-2">
              {!isFirstStep && (
                <Button type="button" variant="outline" size="md" onClick={goBack} className="gap-1.5">
                  <FaIcon icon={faChevronLeft} size="sm" />
                  Back
                </Button>
              )}
              <Button
                type="button"
                variant="primary"
                size="md"
                onClick={form.handleSubmit(handleFormSubmit)}
                className="gap-1.5"
              >
                {isLastStep ? "Submit" : `Next: ${currentStep < 6 ? EMPLOYEE_NEW_WIZARD_STEP_LABELS[currentStep + 1] : ""}`}
                {!isLastStep && <FaIcon icon={faChevronRight} size="sm" />}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
