import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "success", "destructive"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: "Chip",
    variant: "default",
  },
};

export const WithRemove: Story = {
  args: {
    children: "Filter",
    variant: "secondary",
    onRemove: () => {},
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="default">Default</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="outline">Outline</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="destructive">Destructive</Chip>
    </div>
  ),
};
