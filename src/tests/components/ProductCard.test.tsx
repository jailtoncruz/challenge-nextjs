import { render, screen } from "@testing-library/react";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types/product";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 100,
  description: "Test description",
  images: ["https://via.placeholder.com/300"],
  category: {
    id: 1,
    name: "Category",
    image: "",
  },
};

describe("ProductCard", () => {
  it("renders product title and price", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();

    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });
});
