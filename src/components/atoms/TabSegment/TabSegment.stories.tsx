import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TabSegment } from "./TabSegment";

const meta: Meta<typeof TabSegment> = {
  title: "Atoms/TabSegment",
  component: TabSegment,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    active: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof TabSegment>;

export const Default: Story = {
  args: {
    children: "Tab",
  },
};

export const Active: Story = {
  args: {
    children: "Active tab",
    active: true,
  },
};

export const WithCount: Story = {
  args: {
    children: "Employees",
    count: 24,
  },
};

export const SegmentedRow: Story = {
  render: () => (
    <div
      className="inline-flex rounded-lg border border-border bg-muted/30 p-1"
      role="tablist"
    >
      <TabSegment active>Sign In</TabSegment>
      <TabSegment>Sign Up</TabSegment>
    </div>
  ),
};

export const SegmentedRowWithCounts: Story = {
  render: () => (
    <div
      className="inline-flex rounded-lg border border-border bg-muted/30 p-1"
      role="tablist"
    >
      <TabSegment active count={12}>
        All
      </TabSegment>
      <TabSegment count={8}>Active</TabSegment>
      <TabSegment count={4}>Inactive</TabSegment>
    </div>
  ),
};
