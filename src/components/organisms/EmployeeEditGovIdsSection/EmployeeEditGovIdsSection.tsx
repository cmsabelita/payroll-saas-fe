"use client";

import { useForm } from "react-hook-form";
import { Badge, Text } from "@/components/atoms";
import { FormInput, FormSelect } from "@/components/molecules";
import { cn } from "@/utils";
import type {
  EmployeeEditGovIdsFormValues,
  EmployeeEditGovIdsSectionProps,
  GovIdStatus,
} from "./EmployeeEditGovIdsSection.types";

const SSS_CONTRIBUTION_OPTIONS = [
  { value: "regular", label: "Regular Employee" },
  { value: "kasambahay", label: "Kasambahay" },
];

const PHILHEALTH_MEMBERSHIP_OPTIONS = [
  { value: "employed", label: "Employed" },
  { value: "indirect", label: "Indirect Contributor" },
];

const PAGIBIG_CONTRIBUTION_OPTIONS = [
  { value: "100", label: "Minimum (₱100)" },
  { value: "200", label: "₱200" },
  { value: "500", label: "₱500" },
];

function StatusBadge({ status }: { status: GovIdStatus }) {
  return (
    <Badge
      variant={status === "verified" ? "success" : "warning"}
      className="shrink-0 text-xs font-semibold"
    >
      {status === "verified" ? "Verified" : "Pending"}
    </Badge>
  );
}

function IdCard({
  iconBg,
  iconLabel,
  title,
  status,
  children,
}: {
  iconBg: string;
  iconLabel: string;
  title: string;
  status?: GovIdStatus;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
            iconBg
          )}
        >
          {iconLabel}
        </div>
        <Text as="p" variant="body" className="font-semibold text-foreground">
          {title}
        </Text>
        {status != null && (
          <span className="ml-auto">
            <StatusBadge status={status} />
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export function EmployeeEditGovIdsSection({
  defaultValues,
  sssStatus = "verified",
  philHealthStatus = "verified",
  pagIbigStatus = "pending",
  birStatus = "verified",
  onSubmit,
  className,
}: EmployeeEditGovIdsSectionProps) {
  const { control, handleSubmit } = useForm<EmployeeEditGovIdsFormValues>({
    defaultValues: {
      sssNumber: "",
      sssContributionType: "regular",
      philHealthNumber: "",
      philHealthMembershipType: "employed",
      pagIbigMidNumber: "",
      pagIbigMonthlyContribution: "100",
      tin: "",
      rdoCode: "",
      rdoName: "",
      ...defaultValues,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-4", className)}
      noValidate
    >
      <IdCard
        iconBg="bg-warning/20 text-warning"
        iconLabel="SSS"
        title="Social Security System"
        status={sssStatus}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            control={control}
            name="sssNumber"
            label="SSS Number"
          />
          <FormSelect
            control={control}
            name="sssContributionType"
            label="Contribution Type"
            options={SSS_CONTRIBUTION_OPTIONS}
          />
        </div>
      </IdCard>

      <IdCard
        iconBg="bg-primary/15 text-primary"
        iconLabel="PH"
        title="PhilHealth (PHIC)"
        status={philHealthStatus}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            control={control}
            name="philHealthNumber"
            label="PhilHealth Number (PIN)"
          />
          <FormSelect
            control={control}
            name="philHealthMembershipType"
            label="Membership Type"
            options={PHILHEALTH_MEMBERSHIP_OPTIONS}
          />
        </div>
      </IdCard>

      <IdCard
        iconBg="bg-success/15 text-success"
        iconLabel="PG"
        title="Pag-IBIG / HDMF"
        status={pagIbigStatus}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            control={control}
            name="pagIbigMidNumber"
            label="Pag-IBIG MID Number"
            placeholder="XXXX-XXXX-XXXX"
          />
          <FormSelect
            control={control}
            name="pagIbigMonthlyContribution"
            label="Monthly Contribution"
            options={PAGIBIG_CONTRIBUTION_OPTIONS}
          />
        </div>
      </IdCard>

      <IdCard
        iconBg="bg-muted text-muted-foreground"
        iconLabel="BIR"
        title="Bureau of Internal Revenue"
        status={birStatus}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            control={control}
            name="tin"
            label="TIN"
            required
          />
          <FormInput
            control={control}
            name="rdoCode"
            label="RDO Code"
          />
        </div>
        <FormInput
          control={control}
          name="rdoName"
          label="RDO Name"
          className="mt-4"
        />
      </IdCard>
    </form>
  );
}
