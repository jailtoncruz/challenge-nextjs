import { Product } from "@/types/product";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function getProductById(id: string): Promise<Product | null> {
  const response = await fetch(`${API_URL}/${id}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}
