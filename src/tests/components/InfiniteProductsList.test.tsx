import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { getProducts } from "@/services/products";
import { Product } from "@/types/product";
import { InfiniteProductsList } from "@/components/product/InfiniteProductList";

// =====================
// mocks
// =====================

vi.mock("@/services/products", () => ({
  getProducts: vi.fn(),
}));

vi.mock("@/components/product/ProductGrid", () => ({
  ProductGrid: ({ products }: { products: Product[] }) => (
    <div data-testid="product-grid">
      {products.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  ),
}));

vi.mocked(getProducts).mockResolvedValue({
  items: [],
  hasMore: false,
  page: 1,
  limit: 10,
  source: "api",
});

// =====================
// fixtures
// =====================

const initialProducts: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "",
    images: [],
    category: { id: 1, name: "Cat", image: "" },
  },
];

const nextProducts: Product[] = [
  {
    id: 2,
    title: "Product 2",
    price: 20,
    description: "",
    images: [],
    category: { id: 1, name: "Cat", image: "" },
  },
];

// =====================
// tests
// =====================

describe("InfiniteProductsList", () => {
  it("renders initial products", () => {
    render(<InfiniteProductsList initialProducts={initialProducts} />);

    expect(screen.getByText("Product 1")).toBeInTheDocument();
  });

  it("loads more products when sentinel intersects", async () => {
    vi.mocked(getProducts).mockResolvedValueOnce({
      items: nextProducts,
      hasMore: true,
      limit: 10,
      page: 1,
      source: "api",
    });

    render(<InfiniteProductsList initialProducts={initialProducts} />);

    await waitFor(() => {
      expect(getProducts).toHaveBeenCalledWith({
        page: 2,
        limit: 4,
        category: undefined,
        source: "api",
      });
    });

    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("shows loading text while fetching", async () => {
    vi.mocked(getProducts).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                items: nextProducts,
                hasMore: false,
                limit: 10,
                page: 1,
                source: "api",
              }),
            50
          )
        )
    );

    render(<InfiniteProductsList initialProducts={initialProducts} />);

    expect(
      await screen.findByText("Loading more products…")
    ).toBeInTheDocument();
  });

  it("stops rendering sentinel when hasMore is false", async () => {
    vi.mocked(getProducts).mockResolvedValueOnce({
      items: nextProducts,
      hasMore: false,
      limit: 10,
      page: 1,
      source: "api",
    });

    render(<InfiniteProductsList initialProducts={initialProducts} />);

    await waitFor(() => {
      expect(screen.queryByText("Scroll to load more")).not.toBeInTheDocument();
    });
  });
});
