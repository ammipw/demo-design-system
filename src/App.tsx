import { useState } from "react";
import { Badge, Tab, Tabs } from "./components";

const App = () => {
  const [selectedTab, setSelectedTab] = useState<string|number>(0);

  return (
    <div>
      <Tabs variant="underline" selected={selectedTab} onSelect={setSelectedTab}>
        <Tab name="emails">Emails</Tab>
        <Tab name="files">Files<Badge variant="negative">Warning</Badge></Tab>
        <Tab name="edits">Edits</Tab>
        <Tab name="downloads">Downloads</Tab>
        <Tab name="docs">Docs</Tab>
      </Tabs>
      <div>Selected Tab: {selectedTab}</div>
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "16px", marginTop: "16px", maxWidth: "768px"}}>
        {Array(6).fill(null).map((_, index) => (
          <div key={index} style={{background: "lightgray", height: "100px", width: "100px", borderRadius: "8px"}}></div>
        ))}
      </div>
    </div>
  );
}

export default App;