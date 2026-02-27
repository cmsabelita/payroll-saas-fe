import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Unchecked: Story = {
  args: {
    checked: false,
    "aria-label": "Toggle",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    "aria-label": "Toggle",
  },
};

export const WithLabel: Story = {
  render: () => (
    <label className="flex items-center gap-2 cursor-pointer">
      <Switch checked={false} aria-label="Enable notifications" />
      <span className="text-sm text-foreground">Enable notifications</span>
    </label>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    checked: false,
    "aria-label": "Toggle",
  },
};
