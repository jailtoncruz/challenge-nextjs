import { getProducts } from "@/services/products";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { InfiniteProductsList } from "@/components/product/InfiniteProductList";
import { SourceSelector } from "@/components/product/SourceSelector";

interface PageProps {
  searchParams?: Promise<{
    category?: string;
    source?: "api" | "generator";
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category;
  const source = resolvedSearchParams?.source;

  const { items } = await getProducts({
    page: 1,
    limit: 4,
    category,
    source: source ?? "api",
  });

  return (
    <main className="container mx-auto px-4 py-6">
      <header className="flex flex-wrap items-center mb-4 max-[500px]:justify-center justify-between">
        <h1 className="text-2xl font-semibold mb-4">Product Listing</h1>
        <SourceSelector />
      </header>

      <CategoryFilter />

      {items.length > 0 ? (
        <InfiniteProductsList
          initialProducts={items}
          category={category}
          source={source ?? "api"}
        />
      ) : (
        <div role="status">No products found.</div>
      )}
    </main>
  );
}
