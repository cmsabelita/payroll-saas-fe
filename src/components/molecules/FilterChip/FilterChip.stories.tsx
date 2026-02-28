import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FilterChip } from "./FilterChip";

const meta: Meta<typeof FilterChip> = {
  title: "Molecules/FilterChip",
  component: FilterChip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FilterChip>;

export const Default: Story = {
  args: {
    label: "Department",
    onClick: () => {},
  },
};

export const NoChevron: Story = {
  args: {
    label: "Status",
    showChevron: false,
    onClick: () => {},
  },
};
