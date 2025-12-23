import { Product } from "@/types/product";
import { mockCategories } from "./categories";

export function* productGenerator(startId = 1): Generator<Product> {
  let id = startId;

  while (true) {
    const category = mockCategories[id % mockCategories.length];

    yield {
      id,
      title: `${category.name} Product #${id}`,
      price: 20 + (id % 10) * 10,
      description: `Mock product generated on the server (id ${id}).`,
      images: [`https://picsum.photos/seed/product-${id}/600/600`],
      category,
    };

    id++;
  }
}
