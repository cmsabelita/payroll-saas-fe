"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

function SearchBarDemo() {
  const [value, setValue] = useState("");
  return (
    <div className="w-80">
      <SearchBar
        placeholder="Search employees..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue("")}
      />
    </div>
  );
}

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: () => <SearchBarDemo />,
};

export const Empty: Story = {
  args: {
    placeholder: "Search...",
    value: "",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Search...",
    value: "payroll",
    onChange: () => {},
    onClear: () => {},
  },
};
