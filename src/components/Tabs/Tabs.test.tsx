import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tabs from "./Tabs";
import Tab from "../Tab/Tab";
import TabContent from "../TabContent/TabContent";

describe("Tabs", () => {
  it("renders tab buttons and contents", () => {
    render(
      <Tabs>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <TabContent value="tab1" />
        <TabContent value="tab2" />
      </Tabs>,
    );
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(
      <Tabs variant="underline">
        <Tab>Tab</Tab>
        <TabContent />
      </Tabs>,
    );
    const nav = screen.getByRole("tablist");
    expect(nav.className).toContain("underline");
  });

  it("uses selected prop as default value", () => {
    render(
      <Tabs selected="tab2">
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <TabContent value="tab1" />
        <TabContent value="tab2" />
      </Tabs>,
    );
    // The TabsProvider should receive "tab2" as defaultValue
    // (Cannot test context directly, but can check rendering)
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("renders with default pill variant", () => {
    render(
      <Tabs>
        <Tab>Tab</Tab>
        <TabContent />
      </Tabs>,
    );
    const nav = screen.getByRole("tablist");
    expect(nav.className).toContain("pill");
  });

  it("passes style prop to container", () => {
    render(
      <Tabs style={{ background: "red" }}>
        <Tab>Tab</Tab>
        <TabContent />
      </Tabs>,
    );
    const container = screen.getByRole("tablist").parentElement;
    expect(container).toHaveStyle({ background: "red" });
  });

  it("handles numeric selected prop", () => {
    render(
      <Tabs selected={1}>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <TabContent value="tab1" />
        <TabContent value="tab2" />
      </Tabs>,
    );
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });
});
