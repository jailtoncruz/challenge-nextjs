import { Product } from "@/types/product";

export interface PaginatedProductsResponse {
  items: Product[];
  page: number;
  limit: number;
  category?: string;
  source: string;
  hasMore: boolean;
}
