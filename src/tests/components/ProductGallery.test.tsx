import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { ProductGallery } from "@/components/product/ProductGallery";

// =====================
// mock next/image
// =====================

vi.mock("next/image", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("ProductGallery", () => {
  const images = [
    "https://example.com/image-1.jpg",
    "https://example.com/image-2.jpg",
    "https://example.com/image-3.jpg",
  ];

  it("renders main image using the first image", () => {
    render(<ProductGallery images={images} title="Test Product" />);

    const mainImage = screen.getByAltText("Test Product") as HTMLImageElement;

    expect(mainImage).toBeInTheDocument();
    expect(mainImage.src).toContain(images[0]);
  });

  it("renders thumbnails when more than one image is provided", () => {
    render(<ProductGallery images={images} title="Test Product" />);

    expect(screen.getByAltText("Test Product image 2")).toBeInTheDocument();

    expect(screen.getByAltText("Test Product image 3")).toBeInTheDocument();
  });

  it("changes main image when clicking a thumbnail", () => {
    render(<ProductGallery images={images} title="Test Product" />);

    const thumbnail = screen.getByAltText(
      "Test Product image 2"
    ) as HTMLImageElement;

    fireEvent.click(thumbnail);

    const mainImage = screen.getByAltText("Test Product") as HTMLImageElement;

    expect(mainImage.src).toContain(images[1]);
  });

  it("does not render thumbnails when only one image is provided", () => {
    render(
      <ProductGallery
        images={["https://example.com/single.jpg"]}
        title="Single Image Product"
      />
    );

    expect(screen.queryByAltText(/image 2/i)).not.toBeInTheDocument();
  });
});
