import { createContext, useContext, useState } from "react";

const TabsContext = createContext<any>(null);

interface TabsProviderProps {
  children: React.ReactNode;
  defaultValue: string;
}

export const TabsProvider = ({children, defaultValue}: TabsProviderProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultValue);

  return (
    <TabsContext.Provider value={{selectedTab, setSelectedTab}}>
      {children}
    </TabsContext.Provider>
  );
}

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }

  return context;
}