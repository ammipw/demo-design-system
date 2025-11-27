import React from 'react';
import { TabProps } from '../Tab/Tab';
import classes from './Tabs.module.css';
import { TabsProvider } from '../../contexts/TabsContext';

export interface TabsProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  variant?: 'pill' | 'underline';
  selected?: string|number;
  onSelect?: (name: string|number) => void;
  defaultValue: string;
};

const Tabs = ({children, variant = 'pill', selected = "emails", onSelect, defaultValue}: TabsProps) => {
  const className = `
    ${classes.tabs}
    ${classes[variant]}
  `;

  const tabs:any = [];
  React.Children.forEach(children, (child) => {
    // if (child.type === Tab)
      tabs.push(React.cloneElement(child, {
        variant,
        selected: child.props.value === selected,
        onSelect: () => onSelect && onSelect(child.props.value),
      }));
    // if (child.type === 'TabsContent') {
    //   tabContents.push(child);
    // }
  });

  return (
    <TabsProvider defaultValue={defaultValue}>
      <nav role="tablist" className={className}>
        {tabs.map((tab:any, index:number) => (
          <React.Fragment key={index}>
            {tab}
          </React.Fragment>
        ))}
      </nav>
      {/* <div>
        {tabContents.map((content:any, index:number) => (
          <React.Fragment key={index}>
            {content}
          </React.Fragment>
        ))}
      </div> */}
    </TabsProvider>
  );
}

export default Tabs;