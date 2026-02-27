import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PaginationButton } from "./PaginationButton";

const meta: Meta<typeof PaginationButton> = {
  title: "Atoms/PaginationButton",
  component: PaginationButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["page", "prev", "next", "ellipsis"],
    },
    active: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof PaginationButton>;

export const Page: Story = {
  args: {
    variant: "page",
    page: 1,
  },
};

export const PageActive: Story = {
  args: {
    variant: "page",
    page: 2,
    active: true,
  },
};

export const Prev: Story = {
  args: { variant: "prev" },
};

export const Next: Story = {
  args: { variant: "next" },
};

export const Ellipsis: Story = {
  args: { variant: "ellipsis" },
};

export const PaginationRow: Story = {
  render: () => (
    <nav
      className="flex items-center gap-1"
      aria-label="Pagination"
    >
      <PaginationButton variant="prev" disabled />
      <PaginationButton variant="page" page={1} />
      <PaginationButton variant="page" page={2} active />
      <PaginationButton variant="page" page={3} />
      <PaginationButton variant="ellipsis" />
      <PaginationButton variant="page" page={10} />
      <PaginationButton variant="next" />
    </nav>
  ),
};
