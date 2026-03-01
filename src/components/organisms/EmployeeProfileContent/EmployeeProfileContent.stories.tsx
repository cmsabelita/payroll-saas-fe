import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NextLink from "next/link";
import { EmployeeProfileContent } from "./EmployeeProfileContent";

const meta: Meta<typeof EmployeeProfileContent> = {
  title: "Organisms/EmployeeProfileContent",
  component: EmployeeProfileContent,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmployeeProfileContent>;

export const Default: Story = {
  args: {
    employmentDetails: {
      employeeId: "EMP-00124",
      employmentType: "Regular (Permanent)",
      position: "Software Engineer",
      department: "Engineering",
      team: "Product Team",
      workSchedule: "8:00 AM – 5:00 PM, Mon–Fri",
      workLocation: "Makati HQ",
      reportingManager: <NextLink href="#">Alonzo Cruz</NextLink>,
    },
    personalInfo: {
      dateOfBirth: "March 12, 1992 (33 yrs old)",
      gender: "Male",
      civilStatus: "Single",
      nationality: "Filipino",
      address: "123 Rizal Street, Pasig City 1600",
      personalEmail: <NextLink href="mailto:juan@gmail.com">juan@gmail.com</NextLink>,
      mobile: "+63 912 345 6789",
    },
    emergencyContact: {
      contactName: "Rosario dela Cruz",
      relationship: "Mother",
      phone: "+63 917 654 3210",
    },
  },
  render: (args) => (
    <div className="w-full max-w-3xl">
      <EmployeeProfileContent {...args} />
    </div>
  ),
};
