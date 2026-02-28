import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Molecules/Pagination",
  component: Pagination,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    start: 1,
    end: 10,
    total: 95,
    page: 1,
    totalPages: 10,
    onPrev: () => {},
    onNext: () => {},
    onPage: () => {},
    hasPrev: false,
    hasNext: true,
  },
};

export const MiddlePage: Story = {
  args: {
    start: 21,
    end: 30,
    total: 95,
    page: 3,
    totalPages: 10,
    onPrev: () => {},
    onNext: () => {},
    onPage: () => {},
    hasPrev: true,
    hasNext: true,
  },
};

export const LastPage: Story = {
  args: {
    start: 91,
    end: 95,
    total: 95,
    page: 10,
    totalPages: 10,
    onPrev: () => {},
    onNext: () => {},
    onPage: () => {},
    hasPrev: true,
    hasNext: false,
  },
};
