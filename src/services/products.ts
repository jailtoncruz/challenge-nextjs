import { PaginatedProductsResponse } from "@/types/paginatedProducts";
import { Product } from "@/types/product";
import { normalizeImages } from "@/utils/normalizeImages";

interface GetProductsParams {
  page?: number;
  limit?: number;
  category?: string;
  source?: "api" | "generator";
}

export async function getProducts({
  page = 1,
  limit = 8,
  category,
  source = "api",
}: GetProductsParams = {}): Promise<PaginatedProductsResponse> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    source,
  });

  if (category) {
    params.set("category", category);
  }

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL ?? ""
    }/api/products?${params.toString()}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const paginatedProducts: PaginatedProductsResponse = await response.json();

  return {
    ...paginatedProducts,
    items: paginatedProducts.items.map(
      (product) =>
        ({
          ...product,
          images: normalizeImages(product.images),
        } as Product)
    ),
  };
}

interface GetProductByIdParams {
  id: number;
  source?: "api" | "generator";
}

export async function getProductById({
  id,
  source = "api",
}: GetProductByIdParams): Promise<Product> {
  const params = new URLSearchParams({
    source,
  });

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL ?? ""
    }/api/products/${id}?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await response.json();

  return {
    ...product,
    images: normalizeImages(product.images),
  };
}
