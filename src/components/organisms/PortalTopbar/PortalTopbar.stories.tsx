import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Avatar, Box, IconButton, Text } from "@/components/atoms";
import { UnderlineTabs } from "@/components/molecules/UnderlineTabs";
import { PortalTopbar } from "./PortalTopbar";

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const meta: Meta<typeof PortalTopbar> = {
  title: "Organisms/PortalTopbar",
  component: PortalTopbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: false,
      description: "Logo and/or company name (left side)",
      table: { type: { summary: "ReactNode" } },
    },
    tabs: {
      control: false,
      description: "Portal nav tabs (e.g. UnderlineTabs)",
      table: { type: { summary: "ReactNode" } },
    },
    trailing: {
      control: false,
      description: "Optional trailing area (e.g. notifications + user dropdown)",
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

type Story = StoryObj<typeof PortalTopbar>;

const portalTabs = [
  { key: "home", label: "Home" },
  { key: "payslips", label: "Payslips" },
  { key: "leave", label: "Leave" },
];

export const Default: Story = {
  args: {
    logo: (
      <Box className="flex items-center gap-2">
        <Text variant="label" as="span" className="font-semibold">
          Acme Corp
        </Text>
      </Box>
    ),
  },
};

export const WithTabs: Story = {
  render: function WithTabsStory() {
    const [value, setValue] = useState("home");
    return (
      <PortalTopbar
        logo={
          <Box className="flex items-center gap-2">
            <Text variant="label" as="span" className="font-semibold">
              Acme Corp
            </Text>
          </Box>
        }
        tabs={
          <UnderlineTabs
            tabs={portalTabs}
            value={value}
            onChange={(key) => setValue(key)}
          />
        }
      />
    );
  },
};

export const WithTrailing: Story = {
  render: function WithTrailingStory() {
    const [value, setValue] = useState("home");
    return (
      <PortalTopbar
        logo={
          <Box className="flex items-center gap-2">
            <Text variant="label" as="span" className="font-semibold">
              Acme Corp
            </Text>
          </Box>
        }
        tabs={
          <UnderlineTabs
            tabs={portalTabs}
            value={value}
            onChange={(key) => setValue(key)}
          />
        }
        trailing={
          <>
            <IconButton variant="ghost" size="sm" aria-label="Notifications">
              <BellIcon />
            </IconButton>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted"
              aria-label="User menu"
            >
              <Avatar size="sm" fallback="JD" />
              <Text variant="label" as="span" className="hidden sm:inline">
                Jane Doe
              </Text>
              <ChevronDownIcon />
            </button>
          </>
        }
      />
    );
  },
};
