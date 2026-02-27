import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    required: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Field name",
  },
};

export const Required: Story = {
  args: {
    children: "Email",
    required: true,
  },
};

export const WithHtmlFor: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="demo-input">Username</Label>
      <input
        id="demo-input"
        type="text"
        placeholder="Enter username"
        className="rounded-md border border-border bg-input px-3 py-2 text-input-foreground text-sm"
      />
    </div>
  ),
};

export const RequiredWithHtmlFor: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="required-field" required>
        Email
      </Label>
      <input
        id="required-field"
        type="email"
        placeholder="you@example.com"
        required
        aria-required="true"
        className="rounded-md border border-border bg-input px-3 py-2 text-input-foreground text-sm"
      />
    </div>
  ),
};
