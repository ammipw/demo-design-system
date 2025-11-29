import type { Meta, StoryObj } from "@storybook/react-vite";

import Tab from "./Tab";
import { TabsProvider, useTabs } from "../../contexts/TabsContext";

type TabProps = React.ComponentProps<typeof Tab> & { _selected: boolean };

const meta: Meta<TabProps> = {
  title: "Components/Tab",
  component: Tab,
  render: ({_selected, ...args}: TabProps, {updateArgs}) => {
    const {setSelectedTab} = useTabs();
    return (
      <Tab variant={args.variant} value={args.value} onClick={() => {
        console.log("Tab clicked");
        setSelectedTab(args.value);
        updateArgs({ ...args, _selected: args.value });
      }}>
        {args.children}
      </Tab>
    );
  },
  decorators: [
    (Story) => (
      <TabsProvider defaultValue={0}>
        <Story />
      </TabsProvider>
    )
  ]
} satisfies Meta<TabProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Tab",
    variant: "pill",
    _selected: false
  }
};