// Heading.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "@/components/heading"; // adjust the path according to your file structure

describe("Heading component", () => {
  test("renders the title correctly", () => {
    render(<Heading title="Test Title" />);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(
      "lg:text-4xl md:text-3xl text-2xl font-bold tracking-tight",
    );
  });

  test("renders the description when provided", () => {
    render(<Heading title="Test Title" description="Test Description" />);
    const descriptionElement = screen.getByText("Test Description");
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass("text-sm text-muted-foreground");
  });

  test("does not render the description when not provided", () => {
    render(<Heading title="Test Title" />);
    const descriptionElement = screen.queryByText("Test Description");
    expect(descriptionElement).not.toBeInTheDocument();
  });

  test("applies additional class names", () => {
    render(
      <Heading
        title="Test Title"
        description="Test Description"
        className="extra-class"
      />,
    );
    const titleElement = screen.getByText("Test Title");
    const descriptionElement = screen.getByText("Test Description");

    expect(titleElement).toHaveClass("extra-class");
    expect(descriptionElement).toHaveClass("extra-class");
  });
});
