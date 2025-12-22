"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getProducts } from "@/services/products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
