import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Rating } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Atoms/Rating",
  component: Rating,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "number", min: 0, max: 5, step: 0.5 } },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3.5,
    max: 5,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Rating value={4} size="sm" />
      <Rating value={4} size="md" />
      <Rating value={4} size="lg" />
    </div>
  ),
};

export const HalfStar: Story = {
  args: {
    value: 2.5,
    max: 5,
  },
};
