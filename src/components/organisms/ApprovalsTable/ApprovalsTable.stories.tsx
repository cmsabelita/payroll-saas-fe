import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Avatar, Button } from "@/components/atoms";
import { BulkActionBar, KpiCard, PendingApprovalRow, Pagination, SearchBar, TabFilter } from "@/components/molecules";
import { ApprovalsTable } from "./ApprovalsTable";

const meta: Meta<typeof ApprovalsTable> = {
  title: "Organisms/ApprovalsTable",
  component: ApprovalsTable,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    kpiStrip: { control: false },
    tabFilter: { control: false },
    toolbar: { control: false },
    children: { control: false },
    bulkActionBar: { control: false },
    pagination: { control: false },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ApprovalsTable>;

const tabItems = [
  { key: "pending", label: "Pending", count: 12 },
  { key: "approved", label: "Approved" },
];

const kpiItems = [
  { value: "12", label: "Pending approvals", badge: "+3" },
  { value: "8", label: "Approved this week" },
  { value: "4", label: "Rejected" },
];

export const Default: Story = {
  render: function ApprovalsTableStory() {
    const [tab, setTab] = useState("pending");
    const [selectedCount, setSelectedCount] = useState(0);
    return (
      <div className="w-full max-w-2xl">
        <ApprovalsTable
          kpiStrip={
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="region" aria-label="Key metrics">
              {kpiItems.map((item, i) => (
                <KpiCard key={i} value={item.value} label={item.label} badge={item.badge} />
              ))}
            </div>
          }
          tabFilter={<TabFilter tabs={tabItems} value={tab} onChange={setTab} />}
          toolbar={<SearchBar placeholder="Search requests" className="max-w-xs" />}
          bulkActionBar={
            selectedCount > 0 ? (
              <BulkActionBar
                selectedCount={selectedCount}
                primaryAction={<Button size="sm">Approve</Button>}
                secondaryAction={<Button variant="outline" size="sm">Reject</Button>}
                onClear={() => setSelectedCount(0)}
              />
            ) : null
          }
          pagination={
            <Pagination
              start={1}
              end={10}
              total={12}
              page={1}
              totalPages={2}
              onPrev={() => {}}
              onNext={() => {}}
              hasPrev={false}
              hasNext={true}
            />
          }
        >
          <div className="divide-y divide-border px-4 py-2">
            <PendingApprovalRow
              avatar={<Avatar size="sm" fallback="JD" />}
              primaryText="Jane Doe"
              secondaryText="Leave request · 15–20 Feb"
              badge="Pending"
              onClick={() => setSelectedCount((c) => c + 1)}
            />
            <PendingApprovalRow
              avatar={<Avatar size="sm" fallback="BS" />}
              primaryText="Bob Smith"
              secondaryText="Expense claim · £120"
              badge="Pending"
            />
          </div>
        </ApprovalsTable>
      </div>
    );
  },
};
