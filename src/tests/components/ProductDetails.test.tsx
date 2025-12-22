import { render, screen } from "@testing-library/react";
import { ProductDetails } from "@/components/product/ProductDetails";
import { Product } from "@/types/product";

const mockProduct: Product = {
  id: 1,
  title: "Product Title",
  price: 250,
  description: "Product description",
  images: [],
  category: {
    id: 1,
    name: "Electronics",
    image: "",
  },
};

describe("ProductDetails", () => {
  it("renders product information correctly", () => {
    render(<ProductDetails product={mockProduct} />);

    expect(screen.getByText("Electronics")).toBeInTheDocument();

    expect(screen.getByText("Product Title")).toBeInTheDocument();

    expect(screen.getByText("$250.00")).toBeInTheDocument();

    expect(screen.getByText("Product description")).toBeInTheDocument();
  });
});
