import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PortalTemplate } from "./PortalTemplate";
import { PortalTopbar } from "@/components/organisms";
import { Box, Text } from "@/components/atoms";

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

const placeholderTopbar = (
  <PortalTopbar
    logo={
      <Box className="flex items-center gap-2">
        <Text variant="label" as="span" className="font-semibold">
          Acme Corp
        </Text>
      </Box>
    }
  />
);

export const Default: Story = {
  args: {
    children: (
      <p className="text-foreground">
        Main content area. max-w-5xl, px-6 py-6.
      </p>
    ),
  },
};

export const WithTopbar: Story = {
  args: {
    topbar: placeholderTopbar,
    children: (
      <p className="text-foreground">
        Portal home content with topbar above.
      </p>
    ),
  },
};
