"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";

type FormValues = { email: string; username: string };

function FormWrapper({
  children,
}: {
  children: (control: ReturnType<typeof useForm<FormValues>>["control"]) => React.ReactNode;
}) {
  const { control } = useForm<FormValues>({
    defaultValues: { email: "", username: "" },
  });
  return <>{children(control)}</>;
}

const meta: Meta<typeof FormInput> = {
  title: "Molecules/FormInput",
  component: FormInput,
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
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormInput
          control={control}
          name="email"
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

export const WithHint: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    hint: "Choose a unique username.",
  },
  render: (args) => (
    <FormWrapper>
      {(control) => (
        <FormInput
          control={control}
          name="username"
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
