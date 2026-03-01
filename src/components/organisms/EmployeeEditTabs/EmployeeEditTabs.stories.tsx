import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { EmployeeEditTabs } from "./EmployeeEditTabs";

const TABS = [
  { key: "profile", label: "Personal Info" },
  { key: "employment", label: "Employment" },
  { key: "govids", label: "Gov't IDs" },
  { key: "salary", label: "Salary" },
  { key: "tax", label: "Tax Info" },
  { key: "access", label: "App Access" },
];

const meta: Meta<typeof EmployeeEditTabs> = {
  title: "Organisms/EmployeeEditTabs",
  component: EmployeeEditTabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeEditTabs>;

export const Default: Story = {
  render: function EmployeeEditTabsStory() {
    const [activeTab, setActiveTab] = useState("profile");
    return (
      <div className="w-full max-w-2xl">
        <EmployeeEditTabs
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    );
  },
};

export const EmploymentActive: Story = {
  args: {
    tabs: TABS,
    activeTab: "employment",
    onTabChange: () => {},
  },
};
