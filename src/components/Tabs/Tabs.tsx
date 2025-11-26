import React from 'react';
import { TabProps } from '../Tab/Tab';
import classes from './Tabs.module.css';

export interface TabsProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  variant?: 'pill' | 'underline';
  selected?: string|number;
  onSelect?: (name: string|number) => void;
  defaultSelected?: string|number;
};

const Tabs = ({children, variant = 'pill', selected = "emails", onSelect}: TabsProps) => {
  const className = `
    ${classes.tabs}
    ${classes[variant]}
  `;

  return (
    <nav role="tablist" className={className}>
      {
        React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            key: index,
            variant,
            selected: child.props.name === selected || index === selected,
            onSelect: () => onSelect?.(child.props.name as string || index),
            children: child.props.children
          });
        })
      }
    </nav>
  );
}

export default Tabs;