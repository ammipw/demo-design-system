import React from 'react';
import Tab, { TabProps } from '../Tab/Tab';
import classes from './Tabs.module.scss';
import { TabsProvider } from '../../contexts/TabsContext';
import TabContent from '../TabsContent/TabsContent';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  variant?: 'pill' | 'underline';
  selected?: string|number;
  defaultValue?: string;
};

const Tabs = ({children, variant = 'pill', selected, defaultValue, ...props}: TabsProps) => {
  const className = `
    ${classes.tabs}
    ${classes[variant]}
  `;

  const tabs:any[] = React.Children.toArray(children);
  const tabButtons = tabs.filter(tab => tab.type.name === "Tab");
  const tabContents = tabs.filter(tab => tab.type.name === "TabContent");

  return (
    <TabsProvider defaultValue={defaultValue ?? tabs[0]?.props.value}>
      <div style={props.style}>
        <nav role="tablist" className={className}>
          {tabButtons.map((tab:any, index:number) => (
            <Tab key={index} variant={variant} value={tab.props.value}>
              {tab.props.children}
            </Tab>
          ))}
        </nav>
        <div>
          {tabContents.map((content:any, index:number) => (
            <TabContent key={index} value={content.props.value}>
              {content.props.children}
            </TabContent>
          ))}
        </div>
      </div>
    </TabsProvider>
  );
}

export default Tabs;