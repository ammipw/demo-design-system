import { useTabs } from "../../contexts/TabsContext";

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
}

const TabsContent = ({children, value}: TabsContentProps) => {
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

export default TabsContent;