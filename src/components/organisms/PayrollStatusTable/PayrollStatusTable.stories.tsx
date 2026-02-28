import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { PayrollStatusRow } from "@/components/molecules/PayrollStatusRow";
import { StatusStepper } from "@/components/molecules/StatusStepper";
import { Pagination } from "@/components/molecules/Pagination";
import { TabFilter } from "@/components/molecules/TabFilter";
import { PayrollStatusTable } from "./PayrollStatusTable";

const meta: Meta<typeof PayrollStatusTable> = {
  title: "Organisms/PayrollStatusTable",
  component: PayrollStatusTable,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    tabFilter: { control: false },
    children: { control: false },
    pagination: { control: false },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof PayrollStatusTable>;

const tabItems = [
  { key: "upcoming", label: "Upcoming" },
  { key: "completed", label: "Completed" },
];

const steps = [
  { key: "prep", label: "Prep", state: "done" as const },
  { key: "run", label: "Run", state: "active" as const },
  { key: "review", label: "Review", state: "pending" as const },
];

export const Default: Story = {
  render: function PayrollStatusTableStory() {
    const [tab, setTab] = useState("upcoming");
    return (
      <div className="w-full max-w-xl">
        <PayrollStatusTable
          tabFilter={<TabFilter tabs={tabItems} value={tab} onChange={setTab} />}
          pagination={
            <Pagination
              start={1}
              end={5}
              total={12}
              page={1}
              totalPages={3}
              onPrev={() => {}}
              onNext={() => {}}
              hasPrev={false}
              hasNext={true}
            />
          }
        >
          <div className="divide-y divide-border px-4 py-2">
            <PayrollStatusRow
              title="February 2025"
              subtitle="Due 28 Feb"
              status="Pending"
              showDivider
            />
            <PayrollStatusRow
              title="January 2025"
              subtitle="Completed 31 Jan"
              status={<StatusStepper steps={steps} />}
            />
          </div>
        </PayrollStatusTable>
      </div>
    );
  },
};
