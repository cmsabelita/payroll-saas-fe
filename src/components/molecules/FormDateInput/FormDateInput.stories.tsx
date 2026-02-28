"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";
import { FormDateInput } from "./FormDateInput";

type FormValues = { startDate: string };

function FormWrapper({
  children,
}: {
  children: (control: ReturnType<typeof useForm<FormValues>>["control"]) => React.ReactNode;
}) {
  const { control } = useForm<FormValues>({ defaultValues: { startDate: "" } });
  return <>{children(control)}</>;
}

const meta: Meta<typeof FormDateInput> = {
  title: "Molecules/FormDateInput",
  component: FormDateInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    control: { table: { disable: true } },
    name: { table: { disable: true } },
    label: { control: "text" },
    hint: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Start date",
  },
};

export default meta;

type Story = StoryObj<typeof FormDateInput>;

export const Default: Story = {
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormDateInput control={control} name="startDate" {...args} />
      )}
    </FormWrapper>
  ),
};

export const Required: Story = {
  args: {
    label: "Birth date",
    required: true,
  },
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormDateInput control={control} name="startDate" {...args} />
      )}
    </FormWrapper>
  ),
};
