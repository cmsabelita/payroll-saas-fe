"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";
import { FormCheckbox } from "./FormCheckbox";

type FormValues = { agree: boolean };

function FormWrapper({
  children,
}: {
  children: (control: ReturnType<typeof useForm<FormValues>>["control"]) => React.ReactNode;
}) {
  const { control } = useForm<FormValues>({ defaultValues: { agree: false } });
  return <>{children(control)}</>;
}

const meta: Meta<typeof FormCheckbox> = {
  title: "Molecules/FormCheckbox",
  component: FormCheckbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    control: { table: { disable: true } },
    name: { table: { disable: true } },
    label: { control: "text" },
    hint: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "I agree to the terms and conditions",
  },
};

export default meta;

type Story = StoryObj<typeof FormCheckbox>;

export const Default: Story = {
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormCheckbox control={control} name="agree" {...args} />
      )}
    </FormWrapper>
  ),
};

export const WithHint: Story = {
  args: {
    label: "Subscribe to newsletter",
    hint: "We'll send you product updates.",
  },
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormCheckbox control={control} name="agree" {...args} />
      )}
    </FormWrapper>
  ),
};
