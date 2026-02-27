import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "./Select";

const options = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C", disabled: true },
];

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
    placeholder: "Choose…",
    className: "w-48",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-48">
      <Select options={options} size="sm" placeholder="Small" />
      <Select options={options} size="md" placeholder="Medium" />
      <Select options={options} size="lg" placeholder="Large" />
    </div>
  ),
};
