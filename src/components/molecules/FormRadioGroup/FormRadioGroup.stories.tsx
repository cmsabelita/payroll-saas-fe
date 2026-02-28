"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";
import { FormRadioGroup } from "./FormRadioGroup";

type FormValues = { plan: string };

const options = [
  { value: "starter", label: "Starter" },
  { value: "pro", label: "Pro" },
  { value: "enterprise", label: "Enterprise" },
];

function FormWrapper({
  children,
}: {
  children: (control: ReturnType<typeof useForm<FormValues>>["control"]) => React.ReactNode;
}) {
  const { control } = useForm<FormValues>({ defaultValues: { plan: "pro" } });
  return <>{children(control)}</>;
}

const meta: Meta<typeof FormRadioGroup> = {
  title: "Molecules/FormRadioGroup",
  component: FormRadioGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    control: { table: { disable: true } },
    name: { table: { disable: true } },
    options: { table: { disable: true } },
    label: { control: "text" },
    hint: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    orientation: { control: "select", options: ["row", "column"] },
  },
  args: {
    label: "Select plan",
  },
};

export default meta;

type Story = StoryObj<typeof FormRadioGroup>;

export const Default: Story = {
  args: { options },
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormRadioGroup
          control={control}
          name="plan"
          options={args.options}
          label={args.label}
          hint={args.hint}
          required={args.required}
          disabled={args.disabled}
          orientation={args.orientation}
        />
      )}
    </FormWrapper>
  ),
};

export const Row: Story = {
  args: { options, orientation: "row" as const },
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormRadioGroup
          control={control}
          name="plan"
          options={args.options}
          label={args.label}
          hint={args.hint}
          required={args.required}
          disabled={args.disabled}
          orientation={args.orientation}
        />
      )}
    </FormWrapper>
  ),
};
