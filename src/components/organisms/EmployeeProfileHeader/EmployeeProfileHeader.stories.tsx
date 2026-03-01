import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, Badge } from "@/components/atoms";
import { EmployeeProfileHeader } from "./EmployeeProfileHeader";

const meta: Meta<typeof EmployeeProfileHeader> = {
  title: "Organisms/EmployeeProfileHeader",
  component: EmployeeProfileHeader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeProfileHeader>;

export const Default: Story = {
  args: {
    displayName: "Juan dela Cruz",
    avatar: <Avatar size="lg" fallback="JD" />,
    statusBadges: (
      <>
        <Badge variant="success">Active</Badge>
        <Badge variant="secondary">Regular</Badge>
      </>
    ),
    subtitle: "Software Engineer · Engineering Department",
    reportsTo: <>Reports to: <a href="#">Alonzo Cruz</a></>,
    stats: [
      { value: "Hired Jan 15, 2023", label: "3 yrs" },
      { value: "₱32,000", label: "/mo" },
      { value: "8", label: "VL days remaining" },
      { value: "0", label: "pending requests" },
    ],
    onProcessSeparation: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <EmployeeProfileHeader {...args} />
    </div>
  ),
};
