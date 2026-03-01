"use client";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Button, FaIcon, Text } from "@/components/atoms";
import {
  FormInput,
  FormRadioGroup,
  FormSwitch,
} from "@/components/molecules";
import { cn } from "@/utils";
import type {
  EmployeeEditAccessFormValues,
  EmployeeEditAccessSectionProps,
} from "./EmployeeEditAccessSection.types";

const ADMIN_ROLE_OPTIONS = [
  {
    value: "none",
    label:
      "No admin role — portal only. View own payslips and file requests.",
  },
  {
    value: "manager",
    label: "Manager. Approve leave and OT for direct reports.",
  },
  {
    value: "hr_admin",
    label:
      "HR Admin. Full access to employees, attendance, leave, and compliance.",
  },
  {
    value: "accountant",
    label:
      "Accountant. Access to payroll, BIR filings, and government remittances.",
  },
];

export function EmployeeEditAccessSection({
  defaultValues,
  lastLogin,
  onSubmit,
  onResetPassword,
  onResendWelcomeEmail,
  onRevokeAccess,
  className,
}: EmployeeEditAccessSectionProps) {
  const { control, handleSubmit } = useForm<EmployeeEditAccessFormValues>({
    defaultValues: {
      portalEnabled: true,
      loginEmail: "",
      adminRole: "hr_admin",
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
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <FaIcon icon={faUser} size="md" className="text-primary" />
            </div>
            <FormSwitch
              control={control}
              name="portalEnabled"
              label="Employee Portal Access"
              hint="Disable to prevent the employee from logging in."
              aria-label="Toggle employee portal access"
            />
          </div>
        </div>
      </div>

      <FormInput
        control={control}
        name="loginEmail"
        label="Work / Login Email"
        type="email"
        hint={lastLogin ? `Last login: ${lastLogin}` : undefined}
      />

      <div className="border-t border-border py-5">
        <FormRadioGroup
          control={control}
          name="adminRole"
          label="Admin Role"
          options={ADMIN_ROLE_OPTIONS}
          orientation="column"
          className="space-y-2"
        />
      </div>

      <div className="border-t border-border py-5">
        <Text
          as="p"
          variant="caption"
          className="mb-4 font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Account Actions
        </Text>
        <div className="flex flex-wrap items-center gap-3">
          {onResetPassword != null && (
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={onResetPassword}
            >
              Reset Password
            </Button>
          )}
          {onResendWelcomeEmail != null && (
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={onResendWelcomeEmail}
            >
              Resend Welcome Email
            </Button>
          )}
          {onRevokeAccess != null && (
            <Button
              type="button"
              variant="outline"
              size="md"
              className="border-destructive/50 text-destructive hover:bg-destructive/10"
              onClick={onRevokeAccess}
            >
              Revoke Access
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
