import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";

import Tab from "./Tab";
import { TabsProvider } from "../../contexts/TabsContext";
import { useEffect } from "react";

type TabProps = React.ComponentProps<typeof Tab> & { selected: boolean };

const meta: Meta<TabProps> = {
  title: "Components/Tabs/Tab",
  component: Tab,
  argTypes: {
    value: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();

      useEffect(() => {
        updateArgs({ value: args.selected ? 0 : 1 });
      }, [args.selected, updateArgs]);

      return (
        <TabsProvider defaultValue={0}>
          <Story />
        </TabsProvider>
      );
    },
  ],
} satisfies Meta<TabProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Tab",
    variant: "pill",
    selected: false,
    value: 1,
  },
  render: (args) => {
    const [, updateArgs] = useArgs();

    function handleClick(e: React.MouseEvent) {
      e.stopPropagation();
      // console.log('Tab clicked, selected is now:', true);
      updateArgs({ selected: true });
    }

    return (
      <>
        <div onClickCapture={handleClick} style={{ display: "inline-block" }}>
          <Tab value={args.value} variant={args.variant}>
            {args.children}
          </Tab>
        </div>
      </>
    );
  },
};
