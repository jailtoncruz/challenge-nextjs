import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "@/app/api/products/[id]/route";
import { Product } from "@/types/product";

// =====================
// mocks
// =====================

vi.mock("@/mocks/categories", () => ({
  mockCategories: [
    { id: 1, name: "Clothes", image: "" },
    { id: 2, name: "Electronics", image: "" },
  ],
}));

// =====================
// fixtures
// =====================

const apiProduct: Product = {
  id: 1,
  title: "API Product",
  price: 100,
  description: "From API",
  images: [],
  category: { id: 1, name: "Clothes", image: "" },
};

// =====================
// tests
// =====================

describe("GET /api/products/[id]", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 when product id is invalid", async () => {
    const request = new Request("http://localhost/api/products/abc");

    const response = await GET(request, {
      params: Promise.resolve({ id: "abc" }),
    });

    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.message).toBe("Invalid product id");
  });

  it("returns product from API when source=api", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => apiProduct,
    } as Response);

    const request = new Request("http://localhost/api/products/1?source=api");

    const response = await GET(request, {
      params: Promise.resolve({ id: "1" }),
    });

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBe("API Product");
  });

  it("falls back to generator when API fetch fails", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("API down"));

    const request = new Request("http://localhost/api/products/2?source=api");

    const response = await GET(request, {
      params: Promise.resolve({ id: "2" }),
    });

    const body = await response.json();

    expect(body.id).toBe(2);
    expect(body.title).toContain("Product #2");
    expect(body.category).toBeDefined();
  });

  it("returns generator product when source=generator", async () => {
    const request = new Request(
      "http://localhost/api/products/3?source=generator"
    );

    const response = await GET(request, {
      params: Promise.resolve({ id: "3" }),
    });

    const body = await response.json();

    expect(body.id).toBe(3);
    expect(body.title).toContain("Product #3");
    expect(body.category.name).toBeDefined();
  });
});
