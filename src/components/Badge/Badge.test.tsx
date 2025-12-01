import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies neutral variant by default", () => {
    render(<Badge>Neutral</Badge>);
    const badge = screen.getByText("Neutral");
    expect(badge.className).toContain("neutral");
  });

  it("applies positive variant", () => {
    render(<Badge variant="positive">Positive</Badge>);
    const badge = screen.getByText("Positive");
    expect(badge.className).toContain("positive");
  });

  it("applies negative variant", () => {
    render(<Badge variant="negative">Negative</Badge>);
    const badge = screen.getByText("Negative");
    expect(badge.className).toContain("negative");
  });

  it("renders as a span element", () => {
    render(<Badge>Element</Badge>);
    const badge = screen.getByText("Element");
    expect(badge.tagName).toBe("SPAN");
  });
});
