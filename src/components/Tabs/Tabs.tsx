import React from 'react';
import { TabProps } from '../Tab/Tab';
import classes from './Tabs.module.css';

type TabsProps = {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  variant?: 'pill' | 'underline';
  selected?: number;
};

const Tabs = ({children, variant = 'pill', selected = 0}: TabsProps) => {
  const className = `
    ${classes.tabs}
    ${classes[variant]}
  `;

  return (
    <nav role="tablist" className={className}>
      {
        React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            variant,
            selected: index === selected,
          });
        })
      }
    </nav>
  );
}

export default Tabs;