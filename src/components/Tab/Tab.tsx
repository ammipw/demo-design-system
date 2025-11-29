import classes from "./Tab.module.scss";
import { useTabs } from "../../contexts/TabsContext";

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value?: string | number;
  variant?: "pill" | "underline";
};

const Tab = ({children, value, variant = "pill"}: TabProps) => {
  const { selectedTab, setSelectedTab } = useTabs();

  const className = `
    ${classes.tab}
    ${classes[variant]}
    ${selectedTab === value ? classes.selected : ""}
  `;

  return (
    <button role="tab" aria-selected={selectedTab === value} className={className} onClick={() => setSelectedTab(value)}>
      {children}
    </button>
  );
}

export default Tab;