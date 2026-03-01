import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { PayrollToolbar } from "./PayrollToolbar";

const TABS = [
  { key: "all", label: "All", count: 4 },
  { key: "draft", label: "Draft", count: 1 },
  { key: "processing", label: "Processing", count: 0 },
  { key: "computed", label: "Computed", count: 0 },
  { key: "approved", label: "Approved", count: 1 },
  { key: "paid", label: "Paid", count: 2 },
];

const meta: Meta<typeof PayrollToolbar> = {
  title: "Organisms/PayrollToolbar",
  component: PayrollToolbar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PayrollToolbar>;

export const Default: Story = {
  render: function PayrollToolbarStory() {
    const [statusTab, setStatusTab] = useState("all");
    return (
      <div className="w-full min-w-[640px] rounded-xl border border-border bg-card">
        <PayrollToolbar
          statusTab={statusTab}
          onStatusTabChange={setStatusTab}
          tabs={TABS}
          yearLabel="2026"
          onYearFilterClick={() => {}}
          onNewPeriodClick={() => {}}
        />
      </div>
    );
  },
};
