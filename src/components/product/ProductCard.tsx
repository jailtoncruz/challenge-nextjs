import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  product: Product;
  source?: "api" | "generator";
}

export function ProductCard({ product, source }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}?source=${source}`} className="block">
      <Card className="p-4 hover:shadow-md transition">
        <div className="relative aspect-square mb-3">
          <Image
            src={product.images[0] ?? "https://placehold.co/600x400"}
            alt={product.title}
            fill
            className="object-cover rounded-md"
            unoptimized
            priority
            width={600}
            height={400}
          />
        </div>

        <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>

        <p className="mt-1 text-sm font-semibold">
          {formatPrice(product.price)}
        </p>
      </Card>
    </Link>
  );
}
