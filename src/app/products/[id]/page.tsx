import { getProductById, getProducts } from "@/services/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductDetails } from "@/components/product/ProductDetails";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
    source?: "api" | "generator";
  }>;
}

export async function generateStaticParams() {
  const { items: products } = await getProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id, source } = await params;

  const product = await getProductById({ id: Number(id), source });

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="grid gap-6 md:grid-cols-2">
        <ProductGallery images={product.images} title={product.title} />

        <ProductDetails product={product} />
      </div>
    </main>
  );
}
