import { Badge, Tab, Tabs, TabsContent } from "./components";

const App = () => {
  return (
    <>
      {/* Example error - requires Tabs parent */}
      {/* <Tab name="test">Test</Tab> */}

      {/* Example usage 1 */}
      <Tabs variant="underline" defaultValue="emails">
        <Tab value="emails">Emails</Tab>
        <Tab value="files">Files<Badge variant="negative">Warning</Badge></Tab>
        <Tab value="edits">Edits</Tab>
        <Tab value="downloads">Downloads</Tab>
        <Tab value="docs">Docs</Tab>
        <TabsContent value="emails">Emails Content</TabsContent>
        <TabsContent value="files">Files Content</TabsContent>
        <TabsContent value="edits">Edits Content</TabsContent>
        <TabsContent value="downloads">Downloads Content</TabsContent>
        <TabsContent value="docs">Docs Content</TabsContent>
      </Tabs>

      {/* Example usage 2 */}
      <Tabs variant="pill" defaultValue="store">
        <Tab value="store">Store<Badge variant="positive">Sale</Badge></Tab>
        <Tab value="basket">Basket</Tab>
        <TabsContent value="store">Store Content</TabsContent>
        <TabsContent value="basket">Basket Content</TabsContent>
      </Tabs>
    </>
  );
}

export default App;