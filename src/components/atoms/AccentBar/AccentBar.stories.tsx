import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AccentBar } from "./AccentBar";

const meta: Meta<typeof AccentBar> = {
  title: "Atoms/AccentBar",
  component: AccentBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    gradient: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof AccentBar>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <AccentBar />
    </div>
  ),
};

export const Gradient: Story = {
  args: { gradient: true },
  render: (args) => (
    <div className="w-64">
      <AccentBar {...args} />
    </div>
  ),
};

export const Solid: Story = {
  args: { gradient: false },
  render: (args) => (
    <div className="w-64">
      <AccentBar {...args} />
    </div>
  ),
};
