import { formatPrice } from "@/utils/formatPrice";

describe("formatPrice", () => {
  it("formats value as USD currency", () => {
    expect(formatPrice(99)).toBe("$99.00");
  });
});
