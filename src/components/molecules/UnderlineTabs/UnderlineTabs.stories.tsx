import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { UnderlineTabs } from "./UnderlineTabs";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "details", label: "Details" },
  { key: "history", label: "History" },
];

function UnderlineTabsDemo() {
  const [value, setValue] = useState("overview");
  return (
    <UnderlineTabs
      tabs={tabs}
      value={value}
      onChange={(key) => setValue(key)}
    />
  );
}

const meta: Meta<typeof UnderlineTabs> = {
  title: "Molecules/UnderlineTabs",
  component: UnderlineTabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UnderlineTabs>;

export const Default: Story = {
  render: () => <UnderlineTabsDemo />,
};

export const Static: Story = {
  args: {
    tabs,
    value: "details",
    onChange: () => {},
  },
};
