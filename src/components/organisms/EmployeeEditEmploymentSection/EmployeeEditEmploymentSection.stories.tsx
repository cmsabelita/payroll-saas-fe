import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmployeeEditEmploymentSection } from "./EmployeeEditEmploymentSection";

const meta: Meta<typeof EmployeeEditEmploymentSection> = {
  title: "Organisms/EmployeeEditEmploymentSection",
  component: EmployeeEditEmploymentSection,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeEditEmploymentSection>;

export const Default: Story = {
  args: {
    defaultValues: {
      employeeId: "EMP-00042",
      dateHired: "2021-06-01",
      department: "hr",
      jobTitle: "HR Manager",
      employmentType: "regular",
      employmentStatus: "active",
      directSupervisor: "Mark Santos",
      workLocation: "remote",
      shiftSchedule: "standard",
      costCenter: "Head Office",
      separationType: "",
      lastDayOfWork: "",
    },
    onSubmit: () => {},
  },
  render: (args) => (
    <div className="w-full max-w-xl">
      <EmployeeEditEmploymentSection {...args} />
    </div>
  ),
};
