import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Avatar, Box, FaIcon, IconButton, Text } from "@/components/atoms";
import { UnderlineTabs } from "@/components/molecules/UnderlineTabs";
import { PortalTopbar } from "./PortalTopbar";

const meta: Meta<typeof PortalTopbar> = {
  title: "Organisms/PortalTopbar",
  component: PortalTopbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    logo: { control: false, table: { type: { summary: "ReactNode" } } },
    companyName: { control: "text", table: { type: { summary: "string" } } },
    tabs: { control: false, table: { type: { summary: "ReactNode" } } },
    requestsBadgeCount: { control: "number", table: { type: { summary: "number" } } },
    trailing: { control: false, table: { type: { summary: "ReactNode" } } },
    className: { control: "text", table: { type: { summary: "string" } } },
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
      <Text variant="label" as="span" className="font-semibold text-foreground">
        Payro
      </Text>
    ),
    companyName: "Acme Corporation",
    requestsBadgeCount: 2,
    trailing: (
      <>
        <IconButton variant="ghost" size="sm" aria-label="Notifications">
          <FaIcon icon={faBell} size="sm" />
        </IconButton>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-muted"
          aria-label="User menu"
        >
          <Avatar size="sm" fallback="JD" />
          <Text variant="label" as="span" className="hidden sm:inline">
            Juan dela Cruz
          </Text>
          <FaIcon icon={faChevronDown} size="sm" />
        </button>
      </>
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
              <FaIcon icon={faBell} size="sm" />
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
              <FaIcon icon={faChevronDown} size="sm" />
            </button>
          </>
        }
      />
    );
  },
};
