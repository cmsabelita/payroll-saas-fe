import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, Text } from "@/components/atoms";
import { SidebarUser } from "@/components/molecules";
import { DashboardTemplate } from "./DashboardTemplate";

const meta: Meta<typeof DashboardTemplate> = {
  title: "Templates/DashboardTemplate",
  component: DashboardTemplate,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DashboardTemplate>;

const placeholderNav = [
  { items: [{ label: "Dashboard", href: "#", active: true }, { label: "Employees", href: "#" }] },
];

export const Default: Story = {
  args: {
    logo: <Text variant="label" as="span" className="font-semibold">Payro</Text>,
    navSections: placeholderNav,
    user: <SidebarUser avatar={<Avatar size="sm" fallback="U" />} name="User" role="Admin" />,
    topbarTitle: "Dashboard",
    topbarTrailing: <Avatar size="sm" fallback="U" />,
    children: (
      <div>
        <Text variant="body" as="p">Main content area.</Text>
      </div>
    ),
  },
};
