import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./Header";
import { Button } from "@/components/atoms";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Page or app title",
    },
    actions: {
      control: false,
      description: "Slot for action buttons (e.g. primary CTA, links)",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "App title",
  },
};

export const WithActions: Story = {
  args: {
    title: "Payroll SaaS",
    actions: (
      <>
        <Button variant="ghost" size="sm">
          Docs
        </Button>
        <Button variant="outline" size="sm">
          Sign in
        </Button>
      </>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: "Minimal header",
  },
};
