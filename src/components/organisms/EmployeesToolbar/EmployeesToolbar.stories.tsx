import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { EmployeesToolbar } from "./EmployeesToolbar";

const meta: Meta<typeof EmployeesToolbar> = {
  title: "Organisms/EmployeesToolbar",
  component: EmployeesToolbar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeesToolbar>;

export const Default: Story = {
  render: function EmployeesToolbarStory() {
    const [search, setSearch] = useState("");
    return (
      <div className="w-full max-w-2xl">
        <EmployeesToolbar
          searchValue={search}
          onSearchChange={setSearch}
          onFiltersClick={() => {}}
          onDepartmentClick={() => {}}
          onExportClick={() => {}}
        />
      </div>
    );
  },
};

export const SearchOnly: Story = {
  render: function SearchOnlyStory() {
    const [search, setSearch] = useState("");
    return (
      <div className="w-full max-w-md">
        <EmployeesToolbar
          searchValue={search}
          onSearchChange={setSearch}
        />
      </div>
    );
  },
};
