"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";
import { FormSelect } from "./FormSelect";

type FormValues = { department: string };

const options = [
  { value: "eng", label: "Engineering" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance" },
];

function FormWrapper({
  children,
}: {
  children: (control: ReturnType<typeof useForm<FormValues>>["control"]) => React.ReactNode;
}) {
  const { control } = useForm<FormValues>({ defaultValues: { department: "" } });
  return <>{children(control)}</>;
}

const meta: Meta<typeof FormSelect> = {
  title: "Molecules/FormSelect",
  component: FormSelect,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    control: { table: { disable: true } },
    name: { table: { disable: true } },
    options: { table: { disable: true } },
    label: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
  args: {
    label: "Department",
    placeholder: "Select department",
  },
};

export default meta;

type Story = StoryObj<typeof FormSelect>;

export const Default: Story = {
  args: { options },
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormSelect
          control={control}
          name="department"
          options={args.options}
          label={args.label}
          placeholder={args.placeholder}
          hint={args.hint}
          required={args.required}
          disabled={args.disabled}
          size={args.size}
        />
      )}
    </FormWrapper>
  ),
};
