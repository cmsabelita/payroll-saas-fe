import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    delay: { control: "number" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Short hint",
    children: (
      <button
        type="button"
        className="rounded-md border border-border px-3 py-1.5 text-sm"
      >
        Hover me
      </button>
    ),
  },
};

export const Placements: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-8 p-16">
      <Tooltip content="Top" placement="top">
        <button
          type="button"
          className="rounded-md border border-border px-3 py-1.5 text-sm"
        >
          Top
        </button>
      </Tooltip>
      <Tooltip content="Bottom" placement="bottom">
        <button
          type="button"
          className="rounded-md border border-border px-3 py-1.5 text-sm"
        >
          Bottom
        </button>
      </Tooltip>
      <Tooltip content="Left" placement="left">
        <button
          type="button"
          className="rounded-md border border-border px-3 py-1.5 text-sm"
        >
          Left
        </button>
      </Tooltip>
      <Tooltip content="Right" placement="right">
        <button
          type="button"
          className="rounded-md border border-border px-3 py-1.5 text-sm"
        >
          Right
        </button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  args: {
    content: "Appears after 400ms",
    delay: 400,
    children: (
      <button
        type="button"
        className="rounded-md border border-border px-3 py-1.5 text-sm"
      >
        Delayed
      </button>
    ),
  },
};

export const LongContent: Story = {
  args: {
    content:
      "This is a longer tooltip message that might wrap onto multiple lines when the max width is reached.",
    children: (
      <span className="cursor-help text-muted-foreground underline decoration-dotted">
        Hover for details
      </span>
    ),
  },
};
