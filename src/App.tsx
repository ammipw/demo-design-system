import { Badge, Tab, Tabs, TabContent } from "./components";

function Placeholder({rows = 2, cols = 3}: {rows?: number; cols?: number}) {
  return (
    <div style={{display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "1rem", padding: "1rem"}}>
      {Array.from({length: rows * cols}).map((_, index) => (
        <div key={index} style={{backgroundColor: "#e0e0e0", height: "100px", borderRadius: "4px"}}></div>
      ))}
    </div>
  )
}

const App = () => {
  return (
    <>
      {/* Example: Using only default props */}
      <Tabs>
        <Tab>Emails</Tab>
        <Tab>Files<Badge>Offline</Badge></Tab>
        <Tab>Edits</Tab>
        <Tab>Downloads</Tab>
        <Tab>Messages</Tab>
        <TabContent><Placeholder rows={5} cols={1} /></TabContent>
        <TabContent><Placeholder /></TabContent>
        <TabContent><Placeholder rows={4} cols={4} /></TabContent>
      </Tabs>

      {/* Example: Using TabContent component */}
      <Tabs variant="underline" selected="downloads">
        <Tab value="emails">Emails<Badge>5</Badge></Tab>
        <Tab value="files">Files</Tab>
        <Tab value="edits">Edits</Tab>
        <Tab value="downloads">Downloads<Badge variant="positive">Ready</Badge><Badge variant="negative">2GB Free</Badge></Tab>
        <Tab value="messages">Messages</Tab>
        <TabContent value="emails"><Placeholder rows={5} cols={1} /></TabContent>
        <TabContent value="files"><Placeholder /></TabContent>
        <TabContent value="edits"><Placeholder rows={4} cols={4} /></TabContent>
        <TabContent value="downloads"><Placeholder /></TabContent>
        <TabContent value="messages"><Placeholder rows={4} cols={1} /></TabContent>
      </Tabs>
    </>
  );
}

export default App;