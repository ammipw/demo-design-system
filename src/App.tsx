import { Badge, Tab, Tabs } from "./components";

const App = () => {
  return (
    <div>
      <Tabs variant="underline">
        <Tab>Emails</Tab>
        <Tab>Files<Badge>Warning</Badge></Tab>
        <Tab>Edits</Tab>
        <Tab>Downloads</Tab>
        <Tab>Docs</Tab>
      </Tabs>
    </div>
  );
}

export default App;