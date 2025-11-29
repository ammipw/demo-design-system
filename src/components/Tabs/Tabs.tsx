import React from "react";
import Tab from "../Tab/Tab";
import classes from "./Tabs.module.scss";
import { TabsProvider } from "../../contexts/TabsContext";
import TabContent from "../TabContent/TabContent";

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "pill" | "underline";
  selected?: string|number;
};

const Tabs = ({children, variant = "pill", selected = 0, ...props}: TabsProps) => {
  const className = `
    ${classes.tabs}
    ${classes[variant]}
  `;

  const tabs:any[] = React.Children.toArray(children);
  const tabButtons = tabs.filter(tab => tab.type.name === "Tab");
  const tabContents = tabs.filter(tab => tab.type.name === "TabContent");

  return (
    <TabsProvider defaultValue={typeof selected === "number" ? tabButtons[selected].props.value || selected : selected}>
      <div style={props.style}>
        <nav role="tablist" className={className}>
          {tabButtons.map((tab:any, index:number) => (
            <Tab key={index} variant={variant} value={tab.props.value || index}>
              {tab.props.children}
            </Tab>
          ))}
        </nav>
        <div>
          {tabContents.map((content:any, index:number) => (
            <TabContent key={index} value={content.props.value || index}>
              {content.props.children}
            </TabContent>
          ))}
        </div>
      </div>
    </TabsProvider>
  );
}

export default Tabs;