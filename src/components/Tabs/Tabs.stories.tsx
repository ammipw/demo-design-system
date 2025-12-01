import type { Meta, StoryObj } from "@storybook/react-vite";

import Tabs from "./Tabs";
import Tab from "../Tab/Tab";
import { useEffect } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs/Tabs",
  component: Tabs,
  argTypes: {
    selected: { control: "select" },
    children: { table: { disable: true } },
  },
  decorators: [
    (Story, context) => {
      useEffect(() => {
        console.log("Selected tab changed to:", context.args.selected);
      }, [context.args.selected]);

      return (
        <Story selected={context.args.selected} variant={context.args.variant}>
          {context.args.children}
        </Story>
      );
    },
  ],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [<Tab>Tab 1</Tab>, <Tab>Tab 2</Tab>, <Tab>Tab 3</Tab>],
    selected: 0,
    variant: "pill",
  },
  argTypes: {
    selected: { options: [0, 1, 2] },
  },
};

export const WithValues: Story = {
  args: {
    children: [
      <Tab value="tab1">Tab 1</Tab>,
      <Tab value="tab2">Tab 2</Tab>,
      <Tab value="tab3">Tab 3</Tab>,
    ],
    selected: "tab2",
    variant: "underline",
  },
  argTypes: {
    selected: { options: ["tab1", "tab2", "tab3"] },
  },
};
