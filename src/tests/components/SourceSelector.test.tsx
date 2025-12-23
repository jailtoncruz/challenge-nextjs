import { SourceSelector } from "@/components/product/SourceSelector";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

// =====================
// mocks
// =====================

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
  useSearchParams: () => new URLSearchParams(),
}));

// mock simples do Select (shadcn / radix)
vi.mock("@/components/ui/select", () => ({
  Select: ({
    value,
    onValueChange,
    children,
  }: {
    value: string;
    onValueChange: (value: string) => void;
    children: React.ReactNode;
  }) => (
    <select
      data-testid="source-select"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
    >
      {children}
    </select>
  ),
  SelectTrigger: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  SelectValue: () => null,
  SelectContent: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  SelectItem: ({
    value,
    children,
  }: {
    value: string;
    children: React.ReactNode;
  }) => <option value={value}>{children}</option>,
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
  useSearchParams: () => new URLSearchParams("page=3"),
}));

// =====================
// tests
// =====================

describe("SourceSelector", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("renders label and select with default value", () => {
    render(<SourceSelector />);

    expect(screen.getByText("Data source:")).toBeInTheDocument();

    const select = screen.getByTestId("source-select") as HTMLSelectElement;
    expect(select.value).toBe("api");
  });

  it("changes source and updates URL params", () => {
    render(<SourceSelector />);

    const select = screen.getByTestId("source-select") as HTMLSelectElement;

    fireEvent.change(select, { target: { value: "generator" } });

    expect(pushMock).toHaveBeenCalledWith("/?source=generator");
  });
});

it("removes page param when changing source", () => {
  render(<SourceSelector />);

  const select = screen.getByTestId("source-select") as HTMLSelectElement;

  fireEvent.change(select, { target: { value: "generator" } });

  expect(pushMock).toHaveBeenCalledWith("/?source=generator");
});
