import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "@/app/api/products/route";
import { Product } from "@/types/product";

// =====================
// mocks
// =====================

// mock do generator (singleton controlado)
vi.mock("@/mocks/productGenerator", () => ({
  productGenerator: () => {
    let count = 1;

    return {
      next: () => ({
        value: {
          id: count++,
          title: `Generated Product ${count}`,
          price: 10,
          description: "",
          images: [],
          category: {
            id: 1,
            name: "Clothes",
            image: "",
          },
        },
      }),
    };
  },
}));

// =====================
// fixtures
// =====================

const apiProducts: Product[] = [
  {
    id: 1,
    title: "API Product 1",
    price: 10,
    description: "",
    images: [],
    category: { id: 1, name: "Clothes", image: "" },
  },
  {
    id: 2,
    title: "API Product 2",
    price: 20,
    description: "",
    images: [],
    category: { id: 2, name: "Electronics", image: "" },
  },
  {
    id: 3,
    title: "API Product 3",
    price: 30,
    description: "",
    images: [],
    category: { id: 1, name: "Clothes", image: "" },
  },
];

// =====================
// tests
// =====================

describe("GET /api/products", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns products from generator when source=generator", async () => {
    const request = new Request(
      "http://localhost/api/products?source=generator&limit=2"
    );

    const response = await GET(request);
    const body = await response.json();

    expect(body.source).toBe("generator");
    expect(body.items).toHaveLength(2);
    expect(body.hasMore).toBe(true);
  });

  it("filters generator products by category", async () => {
    const request = new Request(
      "http://localhost/api/products?source=generator&limit=3&category=clothes"
    );

    const response = await GET(request);
    const body = await response.json();

    expect(body.items).toHaveLength(3);

    body.items.forEach((product: Product) => {
      expect(product.category.name.toLowerCase()).toBe("clothes");
    });
  });

  it("returns paginated products from API source", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => apiProducts,
    } as Response);

    const request = new Request("http://localhost/api/products?page=1&limit=2");

    const response = await GET(request);
    const body = await response.json();

    expect(body.source).toBe("api");
    expect(body.items).toHaveLength(2);
    expect(body.hasMore).toBe(true);
  });

  it("applies category filter when using API source", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => apiProducts,
    } as Response);

    const request = new Request(
      "http://localhost/api/products?category=electronics"
    );

    const response = await GET(request);
    const body = await response.json();

    expect(body.items).toHaveLength(1);
    expect(body.items[0].category.name).toBe("Electronics");
  });

  it("returns hasMore=false when API returns no more items", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => apiProducts,
    } as Response);

    const request = new Request("http://localhost/api/products?page=2&limit=3");

    const response = await GET(request);
    const body = await response.json();

    expect(body.items).toHaveLength(0);
    expect(body.hasMore).toBe(false);
  });

  it("falls back gracefully when API fetch fails", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("API down"));

    const request = new Request("http://localhost/api/products?page=1&limit=2");

    const response = await GET(request);
    const body = await response.json();

    expect(body.items).toEqual([]);
    expect(body.hasMore).toBe(false);
  });
});
