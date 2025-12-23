"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  "Clothes",
  "Electronics",
  "Furniture",
  "Shoes",
  "Miscellaneous",
];

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  function handleFilter(category?: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={!activeCategory ? "default" : "outline"}
        onClick={() => handleFilter()}
        aria-current={!activeCategory ? "true" : undefined}
      >
        All Categories
      </Button>

      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          aria-current={activeCategory === category ? "true" : undefined}
          onClick={() => handleFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
