import { getProducts } from "@/services/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Product Listing</h1>

      <ProductGrid products={products} />
    </main>
  );
}
