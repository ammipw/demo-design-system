import { Badge, Tab, Tabs, TabContent } from "./components";

const App = () => {
  return (
    <>
      {/* Example error - requires Tabs parent */}
      {/* <Tab name="test">Test</Tab> */}

      {/* Example using only Tabs and Tab components */}
      <Tabs>
        <Tab value="emails">Emails</Tab>
        <Tab value="files">Files<Badge variant="negative">Warning</Badge></Tab>
        <Tab value="edits">Edits</Tab>
        <Tab value="downloads">Downloads</Tab>
        <Tab value="messages">Messages</Tab>
      </Tabs>

      {/* Example using TabContent component */}
      <Tabs variant="underline" defaultValue="downloads">
        <Tab value="emails">Emails<Badge>10 unread</Badge></Tab>
        <Tab value="files">Files</Tab>
        <Tab value="edits">Edits</Tab>
        <Tab value="downloads">Downloads<Badge variant="positive">Done</Badge><Badge>Offline</Badge></Tab>
        <Tab value="messages">Messages</Tab>
        <TabContent value="emails">Emails Content</TabContent>
        <TabContent value="files">Files Content</TabContent>
        <TabContent value="edits">Edits Content</TabContent>
        <TabContent value="downloads">Downloads Content</TabContent>
        <TabContent value="messages">Messages Content</TabContent>
      </Tabs>
    </>
  );
}

export default App;