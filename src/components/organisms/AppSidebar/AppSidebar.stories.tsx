import { faChevronLeft, faGaugeHigh, faUsers } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, Box, FaIcon, IconButton, Text } from "@/components/atoms";
import { SidebarUser } from "@/components/molecules";
import { AppSidebar } from "./AppSidebar";

const meta: Meta<typeof AppSidebar> = {
  title: "Organisms/AppSidebar",
  component: AppSidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: false,
      description: "Logo area (e.g. Box + Icon + Text)",
      table: { type: { summary: "ReactNode" } },
    },
    navSections: {
      control: false,
      description: "Nav sections with optional label and NavItem props",
      table: { type: { summary: "AppSidebarNavSection[]" } },
    },
    user: {
      control: false,
      description: "User block at bottom (SidebarUser)",
      table: { type: { summary: "ReactElement<SidebarUserProps>" } },
    },
    collapseButton: {
      control: false,
      description: "Optional collapse toggle (e.g. IconButton)",
      table: { type: { summary: "ReactNode" } },
    },
    className: {
      control: "text",
      description: "Optional root class name",
      table: { type: { summary: "string" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppSidebar>;

const defaultNavSections = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", href: "#", icon: <FaIcon icon={faGaugeHigh} size="sm" />, active: true },
      { label: "Employees", href: "#", icon: <FaIcon icon={faUsers} size="sm" /> },
    ],
  },
  {
    label: "Payroll",
    items: [
      { label: "Pay runs", href: "#", icon: <FaIcon icon={faUsers} size="sm" /> },
      { label: "Approvals", href: "#", icon: <FaIcon icon={faUsers} size="sm" />, badge: "3" },
    ],
  },
];

const defaultUser = (
  <SidebarUser
    avatar={<Avatar size="sm" fallback="JD" />}
    name="Jane Doe"
    role="Admin"
  />
);

const defaultLogo = (
  <Box className="flex items-center gap-2">
    <FaIcon icon={faGaugeHigh} size="md" />
    <Text variant="label" as="span" className="font-semibold">
      Payroll
    </Text>
  </Box>
);

export const Default: Story = {
  args: {
    logo: defaultLogo,
    navSections: defaultNavSections,
    user: defaultUser,
  },
  decorators: [
    (Story) => (
      <div className="h-[480px]">
        <Story />
      </div>
    ),
  ],
};

export const WithCollapseButton: Story = {
  args: {
    logo: defaultLogo,
    navSections: defaultNavSections,
    user: defaultUser,
    collapseButton: (
      <IconButton variant="ghost" size="sm" aria-label="Collapse sidebar">
        <FaIcon icon={faChevronLeft} size="sm" />
      </IconButton>
    ),
  },
  decorators: [
    (Story) => (
      <div className="h-[520px]">
        <Story />
      </div>
    ),
  ],
};

export const SingleSection: Story = {
  args: {
    logo: defaultLogo,
    navSections: [
      {
        items: [
          { label: "Dashboard", href: "#", icon: <FaIcon icon={faGaugeHigh} size="sm" />, active: true },
          { label: "Settings", href: "#", icon: <FaIcon icon={faUsers} size="sm" /> },
        ],
      },
    ],
    user: defaultUser,
  },
  decorators: [
    (Story) => (
      <div className="h-[320px]">
        <Story />
      </div>
    ),
  ],
};
