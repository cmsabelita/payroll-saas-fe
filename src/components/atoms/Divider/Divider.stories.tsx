import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export const WithLabel: Story = {
  args: {
    orientation: "horizontal",
    label: "or",
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center gap-2">
      <span className="text-sm">Item 1</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Item 2</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Item 3</span>
    </div>
  ),
};
