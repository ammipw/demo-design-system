import { createContext, useContext, useState } from "react";

const TabsContext = createContext<any>(null);

interface TabsProviderProps {
  children: React.ReactNode;
  defaultValue: string | number;
}

export const TabsProvider = ({ children, defaultValue }: TabsProviderProps) => {
  const [selectedTab, setSelectedTab] = useState<string | number>(defaultValue);

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) {
    console.error("Tab must be used within Tabs component");
  }

  return context;
};
