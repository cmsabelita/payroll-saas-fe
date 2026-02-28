import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { TabFilter } from "./TabFilter";

const tabs = [
  { key: "all", label: "All", count: 24 },
  { key: "pending", label: "Pending", count: 5 },
  { key: "approved", label: "Approved", count: 18 },
  { key: "rejected", label: "Rejected", count: 1 },
];

function TabFilterDemo() {
  const [value, setValue] = useState("all");
  return (
    <TabFilter
      tabs={tabs}
      value={value}
      onChange={(key) => setValue(key)}
    />
  );
}

const meta: Meta<typeof TabFilter> = {
  title: "Molecules/TabFilter",
  component: TabFilter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TabFilter>;

export const Default: Story = {
  render: () => <TabFilterDemo />,
};

export const WithoutCounts: Story = {
  args: {
    tabs: [
      { key: "all", label: "All" },
      { key: "active", label: "Active" },
      { key: "inactive", label: "Inactive" },
    ],
    value: "all",
    onChange: () => {},
  },
};
