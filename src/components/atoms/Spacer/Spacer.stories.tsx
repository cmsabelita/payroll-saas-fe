import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spacer } from "./Spacer";

const meta: Meta<typeof Spacer> = {
  title: "Atoms/Spacer",
  component: Spacer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["horizontal", "vertical"] },
    size: { control: "select", options: [1, 2, 3, 4, 5, 6, 8] },
  },
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const Vertical: Story = {
  render: () => (
    <div className="flex flex-col">
      <span className="text-sm">Top</span>
      <Spacer direction="vertical" size={4} />
      <span className="text-sm">Bottom</span>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="flex items-center">
      <span className="text-sm">Left</span>
      <Spacer direction="horizontal" size={4} />
      <span className="text-sm">Right</span>
    </div>
  ),
};
