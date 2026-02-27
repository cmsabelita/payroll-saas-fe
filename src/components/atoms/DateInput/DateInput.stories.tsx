import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DateInput } from "./DateInput";
import { Label } from "../Label";

const meta: Meta<typeof DateInput> = {
  title: "Atoms/DateInput",
  component: DateInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-56">
      <Label htmlFor="dob">Date of birth</Label>
      <DateInput id="dob" aria-describedby="dob-hint" />
      <span id="dob-hint" className="text-xs text-muted-foreground">
        Format: MM/DD/YYYY
      </span>
    </div>
  ),
};

export const WithMinMax: Story = {
  args: {
    min: "1900-01-01",
    max: "2025-12-31",
  },
};

export const Error: Story = {
  args: {
    error: true,
    value: "2020-13-45",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "1990-05-15",
  },
};
