"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";
import { FormTextarea } from "./FormTextarea";

type FormValues = { bio: string };

function FormWrapper({
  children,
}: {
  children: (control: ReturnType<typeof useForm<FormValues>>["control"]) => React.ReactNode;
}) {
  const { control } = useForm<FormValues>({ defaultValues: { bio: "" } });
  return <>{children(control)}</>;
}

const meta: Meta<typeof FormTextarea> = {
  title: "Molecules/FormTextarea",
  component: FormTextarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    control: { table: { disable: true } },
    name: { table: { disable: true } },
    label: { control: "text" },
    placeholder: { control: "text" },
    hint: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
  },
};

export default meta;

type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormTextarea control={control} name="bio" {...args} />
      )}
    </FormWrapper>
  ),
};

export const WithHint: Story = {
  args: {
    label: "Notes",
    placeholder: "Add notes...",
    hint: "Optional. Max 500 characters.",
  },
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormTextarea control={control} name="bio" {...args} />
      )}
    </FormWrapper>
  ),
};
