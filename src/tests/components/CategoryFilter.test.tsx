import { CategoryFilter } from "@/components/product/CategoryFilter";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

// mock do next/navigation
const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
  useSearchParams: () => new URLSearchParams(),
}));

describe("CategoryFilter", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("renders All button and all categories", () => {
    render(<CategoryFilter />);

    expect(screen.getByText("All Categories")).toBeInTheDocument();

    expect(screen.getByText("Clothes")).toBeInTheDocument();
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Furniture")).toBeInTheDocument();
    expect(screen.getByText("Shoes")).toBeInTheDocument();
    expect(screen.getByText("Miscellaneous")).toBeInTheDocument();
  });

  it("navigates to category when a category button is clicked", () => {
    render(<CategoryFilter />);

    fireEvent.click(screen.getByText("Electronics"));

    expect(pushMock).toHaveBeenCalledWith("/?category=Electronics");
  });

  it("removes category filter when clicking All", () => {
    render(<CategoryFilter />);

    fireEvent.click(screen.getByText("All Categories"));

    expect(pushMock).toHaveBeenCalledWith("/?");
  });
});
