import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";

describe("Card components", () => {
  it("renders Card with children and custom class", () => {
    render(
      <Card className="custom-card">
        <div>Card Content</div>
      </Card>
    );

    const card = screen.getByText("Card Content").parentElement;

    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute("data-slot", "card");
    expect(card).toHaveClass("custom-card");
  });

  it("renders CardHeader, Title and Description", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
      </Card>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();

    expect(screen.getByText("Title")).toHaveAttribute(
      "data-slot",
      "card-title"
    );
    expect(screen.getByText("Description")).toHaveAttribute(
      "data-slot",
      "card-description"
    );
  });

  it("renders CardContent and CardFooter", () => {
    render(
      <Card>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();

    expect(screen.getByText("Content")).toHaveAttribute(
      "data-slot",
      "card-content"
    );
    expect(screen.getByText("Footer")).toHaveAttribute(
      "data-slot",
      "card-footer"
    );
  });

  it("renders CardAction", () => {
    render(
      <Card>
        <CardHeader>
          <CardAction>Action</CardAction>
        </CardHeader>
      </Card>
    );

    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Action")).toHaveAttribute(
      "data-slot",
      "card-action"
    );
  });
});
