import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Tab from "./Tab";
import { TabsProvider } from "../../contexts/TabsContext";

function renderWithContext(ui: React.ReactElement, contextValue: any) {
  return render(<TabsProvider defaultValue={contextValue}>{ui}</TabsProvider>);
}

describe("Tab", () => {
  const defaultContext = {
    selectedTab: "tab1",
    setSelectedTab: vi.fn(),
  };

  it("renders children", () => {
    const { getByText } = renderWithContext(
      <Tab value="tab1">Tab Label</Tab>,
      defaultContext,
    );
    expect(getByText("Tab Label")).toBeInTheDocument();
  });

  it("applies selected class when selected", () => {
    const { getByRole } = renderWithContext(
      <Tab value="tab1">Tab Label</Tab>,
      defaultContext,
    );
    expect(getByRole("tab")).toHaveClass("selected");
  });

  it("does not apply selected class when not selected", () => {
    const { getByRole } = renderWithContext(
      <Tab value="tab2">Tab Label</Tab>,
      defaultContext,
    );
    expect(getByRole("tab")).not.toHaveClass("selected");
  });

  it("calls setSelectedTab on click if value is defined", () => {
    const setSelectedTab = vi.fn();
    const { getByRole } = renderWithContext(<Tab value="tab2">Tab Label</Tab>, {
      ...defaultContext,
      setSelectedTab,
    });
    fireEvent.click(getByRole("tab"));
    expect(setSelectedTab).toHaveBeenCalledWith("tab2");
  });

  it("does not call setSelectedTab on click if value is undefined", () => {
    const setSelectedTab = vi.fn();
    const { getByRole } = renderWithContext(<Tab>Tab Label</Tab>, {
      ...defaultContext,
      setSelectedTab,
    });
    fireEvent.click(getByRole("tab"));
    expect(setSelectedTab).not.toHaveBeenCalled();
  });

  it("sets aria-selected correctly", () => {
    const { getByRole, rerender } = renderWithContext(
      <Tab value="tab1">Tab Label</Tab>,
      defaultContext,
    );
    expect(getByRole("tab")).toHaveAttribute("aria-selected", "true");

    rerender(
      <TabsProvider defaultValue={0}>
        <Tab value="tab1">Tab Label</Tab>
      </TabsProvider>,
    );
    expect(getByRole("tab")).toHaveAttribute("aria-selected", "false");
  });

  it("applies correct variant class", () => {
    const { getByRole } = renderWithContext(
      <Tab value="tab1" variant="underline">
        Tab Label
      </Tab>,
      defaultContext,
    );
    expect(getByRole("tab")).toHaveClass("underline");
  });
});
