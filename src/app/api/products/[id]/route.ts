import { NextResponse } from "next/server";
import { Product } from "@/types/product";
import { mockCategories } from "@/mocks/categories";

const ESCUELA_API_URL = "https://api.escuelajs.co/api/v1/products";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: Params) {
  const { searchParams } = new URL(request.url);
  const source = searchParams.get("source") ?? "api";

  const productId = Number((await params).id);

  if (Number.isNaN(productId)) {
    return NextResponse.json(
      { message: "Invalid product id" },
      { status: 400 }
    );
  }

  // 🔹 Fonte: API real
  if (source === "api") {
    try {
      const response = await fetch(`${ESCUELA_API_URL}/${productId}`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const product: Product = await response.json();
      return NextResponse.json(product);
    } catch {
      // fallback para generator se API falhar
    }
  }

  // 🔹 Fonte: generator (ou fallback)
  const category = mockCategories[productId % mockCategories.length];
  return NextResponse.json({
    id: productId,
    title: `${category.name} Product #${productId}`,
    price: 20 + (productId % 10) * 10,
    description: `Mock product generated on the server (id ${productId}).`,
    images: [`https://picsum.photos/seed/product-${productId}/600/600`],
    category,
  });
}
