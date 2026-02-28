import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SortIndicator } from "./SortIndicator";

const meta: Meta<typeof SortIndicator> = {
  title: "Atoms/SortIndicator",
  component: SortIndicator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["asc", "desc", "none"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SortIndicator>;

export const None: Story = {
  args: { state: "none" },
};

export const Asc: Story = {
  args: { state: "asc" },
};

export const Desc: Story = {
  args: { state: "desc" },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <span className="flex items-center gap-2 text-sm">
        <SortIndicator state="none" />
        Unsorted
      </span>
      <span className="flex items-center gap-2 text-sm">
        <SortIndicator state="asc" />
        Ascending
      </span>
      <span className="flex items-center gap-2 text-sm">
        <SortIndicator state="desc" />
        Descending
      </span>
    </div>
  ),
};

export const InTableHeader: Story = {
  render: () => (
    <table className="w-64 border border-border text-left text-sm">
      <thead>
        <tr className="border-b border-border bg-muted/50">
          <th className="flex items-center gap-1 px-3 py-2 font-medium">
            Name
            <SortIndicator state="asc" />
          </th>
          <th className="flex items-center gap-1 px-3 py-2 font-medium">
            Status
            <SortIndicator state="none" />
          </th>
          <th className="flex items-center gap-1 px-3 py-2 font-medium">
            Date
            <SortIndicator state="desc" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-border">
          <td className="px-3 py-2">Alice</td>
          <td className="px-3 py-2">Active</td>
          <td className="px-3 py-2">Jan 15</td>
        </tr>
        <tr className="border-b border-border">
          <td className="px-3 py-2">Bob</td>
          <td className="px-3 py-2">Pending</td>
          <td className="px-3 py-2">Jan 14</td>
        </tr>
      </tbody>
    </table>
  ),
};
