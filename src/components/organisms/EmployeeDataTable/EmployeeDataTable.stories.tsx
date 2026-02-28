import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Avatar, Checkbox } from "@/components/atoms";
import { EmployeeRowCell } from "@/components/molecules/EmployeeRowCell";
import { Pagination } from "@/components/molecules/Pagination";
import { SearchBar } from "@/components/molecules/SearchBar";
import { TabFilter } from "@/components/molecules/TabFilter";
import { EmployeeDataTable } from "./EmployeeDataTable";

const meta: Meta<typeof EmployeeDataTable> = {
  title: "Organisms/EmployeeDataTable",
  component: EmployeeDataTable,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    tabFilter: { control: false },
    toolbar: { control: false },
    children: { control: false },
    pagination: { control: false },
    emptyState: { control: false },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof EmployeeDataTable>;

const tabItems = [
  { key: "all", label: "All", count: 156 },
  { key: "active", label: "Active", count: 148 },
  { key: "offboarded", label: "Offboarded", count: 8 },
];

const sampleRows = [
  { id: "1", avatar: <Avatar size="sm" fallback="JD" />, primaryLine: "Jane Doe", secondaryLine: "EMP-001" },
  { id: "2", avatar: <Avatar size="sm" fallback="BS" />, primaryLine: "Bob Smith", secondaryLine: "EMP-002" },
  { id: "3", avatar: <Avatar size="sm" fallback="AL" />, primaryLine: "Alice Lee", secondaryLine: "EMP-003" },
];

export const Default: Story = {
  render: function EmployeeDataTableStory() {
    const [tab, setTab] = useState("all");
    return (
      <div className="w-full max-w-2xl">
        <EmployeeDataTable
          tabFilter={
            <TabFilter tabs={tabItems} value={tab} onChange={setTab} />
          }
          toolbar={<SearchBar placeholder="Search employees" className="max-w-xs" />}
          pagination={
            <Pagination
              start={1}
              end={10}
              total={156}
              page={1}
              totalPages={16}
              onPrev={() => {}}
              onNext={() => {}}
              hasPrev={false}
              hasNext={true}
            />
          }
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="w-10 px-4 py-3 font-medium">
                  <Checkbox aria-label="Select all" />
                </th>
                <th className="px-4 py-3 font-medium">Employee</th>
                <th className="px-4 py-3 font-medium">Department</th>
              </tr>
            </thead>
            <tbody>
              {sampleRows.map((row) => (
                <tr key={row.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-4 py-3">
                    <Checkbox aria-label={`Select ${row.primaryLine}`} />
                  </td>
                  <td className="px-4 py-3">
                    <EmployeeRowCell
                      avatar={row.avatar}
                      primaryLine={row.primaryLine}
                      secondaryLine={row.secondaryLine}
                    />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Engineering</td>
                </tr>
              ))}
            </tbody>
          </table>
        </EmployeeDataTable>
      </div>
    );
  },
};
