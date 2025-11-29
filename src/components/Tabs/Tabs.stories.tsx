import type { Meta, StoryObj } from "@storybook/react-vite";

import Tabs from "./Tabs";
import Tab from "../Tab/Tab";

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Pill: Story = {
  args: {
    children: [
      <Tab>Tab 1</Tab>,
      <Tab>Tab 2</Tab>,
      <Tab>Tab 3</Tab>
    ],
    selected: 1
  },
  argTypes: {
    selected: { control: "number" }
  }
};

export const Underline: Story = {
  args: {
    children: [
      <Tab value="tab1">Tab 1</Tab>,
      <Tab value="tab2">Tab 2</Tab>,
      <Tab value="tab3">Tab 3</Tab>
    ],
    variant: "underline",
    selected: "tab3"
  }
};