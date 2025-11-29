import { useTabs } from "../../contexts/TabsContext";

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
}

const TabContent = ({children, value}: TabsContentProps) => {
  const { selectedTab } = useTabs();

  if (selectedTab !== value) {
    return null;
  }

  return (
    <div role="tabpanel">
      {children}
    </div>
  );
}

export default TabContent;