import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, Box, Icon, IconButton, Text } from "@/components/atoms";
import { SidebarUser } from "@/components/molecules";
import { AppSidebar } from "./AppSidebar";

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

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
      { label: "Dashboard", href: "#", icon: <DashboardIcon />, active: true },
      { label: "Employees", href: "#", icon: <UsersIcon /> },
    ],
  },
  {
    label: "Payroll",
    items: [
      { label: "Pay runs", href: "#", icon: <UsersIcon /> },
      { label: "Approvals", href: "#", icon: <UsersIcon />, badge: "3" },
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
    <Icon size="md">
      <DashboardIcon />
    </Icon>
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
        <ChevronLeftIcon />
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
          { label: "Dashboard", href: "#", icon: <DashboardIcon />, active: true },
          { label: "Settings", href: "#", icon: <UsersIcon /> },
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
