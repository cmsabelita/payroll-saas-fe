"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";
import { FormSwitch } from "./FormSwitch";

type FormValues = { enabled: boolean };

function FormWrapper({
  children,
}: {
  children: (control: ReturnType<typeof useForm<FormValues>>["control"]) => React.ReactNode;
}) {
  const { control } = useForm<FormValues>({ defaultValues: { enabled: true } });
  return <>{children(control)}</>;
}

const meta: Meta<typeof FormSwitch> = {
  title: "Molecules/FormSwitch",
  component: FormSwitch,
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
    label: "Enable notifications",
  },
};

export default meta;

type Story = StoryObj<typeof FormSwitch>;

export const Default: Story = {
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormSwitch control={control} name="enabled" {...args} />
      )}
    </FormWrapper>
  ),
};

export const WithHint: Story = {
  args: {
    label: "Dark mode",
    hint: "Use dark theme across the app.",
  },
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormSwitch control={control} name="enabled" {...args} />
      )}
    </FormWrapper>
  ),
};
