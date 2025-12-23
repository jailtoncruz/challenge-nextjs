import { NextResponse } from "next/server";
import { productGenerator } from "@/mocks/productGenerator";
import { Product } from "@/types/product";

const ESCUELA_API_URL = "https://api.escuelajs.co/api/v1/products";

// generator singleton
const gen = productGenerator(1);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 8);
  const category = searchParams.get("category");
  const source = searchParams.get("source") ?? "api";

  let items: Product[] = [];

  if (source === "generator") {
    // 🔁 Fonte: generator (fake infinito)
    while (items.length < limit) {
      const { value: product } = gen.next();

      if (!category) {
        items.push(product);
        continue;
      }

      if (product.category.name.toLowerCase() === category.toLowerCase()) {
        items.push(product);
      }
    }

    return NextResponse.json({
      source,
      page,
      limit,
      category,
      items,
      hasMore: true,
    });
  }

  // 🌐 Fonte: API real (EscuelaJS)
  try {
    const response = await fetch(ESCUELA_API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch EscuelaJS API");
    }

    const allProducts: Product[] = await response.json();

    const filtered = category
      ? allProducts.filter(
          (p) => p.category?.name.toLowerCase() === category.toLowerCase()
        )
      : allProducts;

    const start = (page - 1) * limit;
    const end = start + limit;

    items = filtered.slice(start, end);

    return NextResponse.json({
      source,
      page,
      limit,
      category,
      items,
      hasMore: end < filtered.length,
    });
  } catch {
    // fallback automático para generator
    // while (items.length < limit) {
    //   const { value: product } = gen.next();
    //   items.push(product);
    // }

    return NextResponse.json({
      items,
      source,
      page,
      limit,
      category,
      hasMore: false,
    });
  }
}
