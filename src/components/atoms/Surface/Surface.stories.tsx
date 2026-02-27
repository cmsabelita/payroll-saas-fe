import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Surface } from "./Surface";

const meta: Meta<typeof Surface> = {
  title: "Atoms/Surface",
  component: Surface,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    elevation: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Surface>;

export const Default: Story = {
  args: {
    children: "Surface content",
    className: "p-4 min-w-[200px]",
  },
};

export const Elevations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Surface elevation="none" className="p-4 w-32">
        None
      </Surface>
      <Surface elevation="sm" className="p-4 w-32">
        Small
      </Surface>
      <Surface elevation="md" className="p-4 w-32">
        Medium
      </Surface>
      <Surface elevation="lg" className="p-4 w-32">
        Large
      </Surface>
    </div>
  ),
};
