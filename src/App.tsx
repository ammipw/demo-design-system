import { Badge, Tab, Tabs, TabContent } from "./components";

const App = () => {
  return (
    <>
      {/* Example: Using only default props */}
      <Tabs>
        <Tab>Emails</Tab>
        <Tab>
          Files<Badge>Offline</Badge>
        </Tab>
        <Tab>Edits</Tab>
        <Tab>Downloads</Tab>
        <Tab>Messages</Tab>
        <TabContent />
        <TabContent />
        <TabContent />
      </Tabs>

      {/* Example: Using props */}
      <Tabs variant="underline" selected="downloads">
        <Tab value="emails">
          Emails<Badge>3</Badge>
        </Tab>
        <Tab value="files">Files</Tab>
        <Tab value="edits">Edits</Tab>
        <Tab value="downloads">
          Downloads<Badge variant="positive">Ready</Badge>
          <Badge variant="negative">2GB Free</Badge>
        </Tab>
        <Tab value="messages">Messages</Tab>
        <TabContent value="emails" rows={3} cols={1} />
        <TabContent value="edits" rows={2} cols={2} />
        <TabContent value="downloads" />
        <TabContent value="messages" rows={4} cols={1} />
      </Tabs>
    </>
  );
};

export default App;
