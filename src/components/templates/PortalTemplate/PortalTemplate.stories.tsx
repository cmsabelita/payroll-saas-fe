import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PortalTopbar } from "@/components/organisms";
import { Box, Text } from "@/components/atoms";
import { PortalTemplate } from "./PortalTemplate";

const meta: Meta<typeof PortalTemplate> = {
  title: "Templates/PortalTemplate",
  component: PortalTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PortalTemplate>;

export const Default: Story = {
  args: {
    children: (
      <p className="text-foreground">
        Portal main content. max-w-5xl, px-6.
      </p>
    ),
  },
};

export const WithTopbar: Story = {
  args: {
    topbar: (
      <PortalTopbar
        logo={
          <Box className="flex items-center gap-2">
            <Text variant="label" as="span" className="font-semibold">
              Payro · Acme Corp
            </Text>
          </Box>
        }
        trailing={
          <Box className="flex items-center gap-2">
            <Text variant="caption" as="span">Portal user</Text>
          </Box>
        }
      />
    ),
    children: (
      <div className="space-y-4">
        <Text variant="heading" as="h1">Portal Home</Text>
        <Text variant="body" as="p" className="text-muted-foreground">
          Content area with max-w-5xl and padding.
        </Text>
      </div>
    ),
  },
};
