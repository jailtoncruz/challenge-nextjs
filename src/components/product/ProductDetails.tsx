import { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-4">
      <span className="text-sm text-muted-foreground">
        {product.category.name}
      </span>

      <h1 className="text-2xl font-semibold">{product.title}</h1>

      <p className="text-xl font-bold">{formatPrice(product.price)}</p>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}
