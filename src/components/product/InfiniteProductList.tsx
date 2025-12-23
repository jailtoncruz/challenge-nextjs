"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Product } from "@/types/product";
import { ProductGrid } from "./ProductGrid";
import { getProducts } from "@/services/products";

interface InfiniteProductsListProps {
  initialProducts: Product[];
  category?: string;
  source?: "api" | "generator";
  limit?: number;
}

export function InfiniteProductsList({
  initialProducts,
  category,
  source = "api",
  limit = 4,
}: InfiniteProductsListProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(2); // page 1 já veio do SSR
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setProducts(initialProducts);
    setPage(2);
    setHasMore(true);
  }, [initialProducts, category, source]);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await getProducts({
        page,
        limit,
        category,
        source,
      });

      setProducts((prev) => [...prev, ...response.items]);
      setHasMore(response.hasMore);
      setPage((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  }, [category, hasMore, limit, loading, page, source]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      <ProductGrid products={products} source={source} />

      {hasMore && (
        <div
          ref={sentinelRef}
          className="flex justify-center py-6 text-sm text-muted-foreground"
        >
          {loading ? "Loading more products…" : "Scroll to load more"}
        </div>
      )}
    </>
  );
}
