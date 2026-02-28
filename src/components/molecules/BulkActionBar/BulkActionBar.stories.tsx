import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/atoms";
import { BulkActionBar } from "./BulkActionBar";

const meta: Meta<typeof BulkActionBar> = {
  title: "Molecules/BulkActionBar",
  component: BulkActionBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    selectedCount: { control: { type: "number", min: 0 }, description: "Number of selected items" },
    primaryAction: { control: false, table: { type: { summary: "ReactNode" } } },
    secondaryAction: { control: false, table: { type: { summary: "ReactNode" } } },
    onClear: { action: "cleared", table: { type: { summary: "() => void" } } },
    clearLabel: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof BulkActionBar>;

export const Default: Story = {
  args: {
    selectedCount: 3,
    primaryAction: <Button size="sm">Approve</Button>,
    secondaryAction: <Button variant="outline" size="sm">Reject</Button>,
    onClear: () => {},
    clearLabel: "Clear selection",
  },
};

export const SingleAction: Story = {
  args: {
    selectedCount: 1,
    primaryAction: <Button size="sm">Approve</Button>,
    onClear: () => {},
  },
};
