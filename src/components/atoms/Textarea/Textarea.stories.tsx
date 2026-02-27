import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "./Textarea";
import { Label } from "../Label";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    resize: { control: "select", options: ["none", "vertical", "horizontal", "both"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter address or notes...",
    rows: 3,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-96">
      <Label htmlFor="textarea-address">Address</Label>
      <Textarea
        id="textarea-address"
        placeholder="Street, city, postal code"
        rows={3}
      />
    </div>
  ),
};

export const ResizeOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-1">
        <Label>resize: none</Label>
        <Textarea resize="none" placeholder="Cannot resize" rows={2} />
      </div>
      <div className="flex flex-col gap-1">
        <Label>resize: vertical</Label>
        <Textarea resize="vertical" placeholder="Vertical only" rows={2} />
      </div>
      <div className="flex flex-col gap-1">
        <Label>resize: both</Label>
        <Textarea resize="both" placeholder="Both directions" rows={2} />
      </div>
    </div>
  ),
};

export const Error: Story = {
  args: {
    placeholder: "Invalid input",
    error: true,
    defaultValue: "Too short",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};

export const MinMaxRows: Story = {
  args: {
    placeholder: "Min 2, max 6 rows",
    minRows: 2,
    maxRows: 6,
    rows: 3,
  },
};
