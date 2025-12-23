import { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Basic Cotton T-Shirt",
    price: 29,
    description: "Comfortable cotton t-shirt for everyday use.",
    images: [
      "https://picsum.photos/seed/shirt1/600/600",
      "https://picsum.photos/seed/shirt2/600/600",
    ],
    category: {
      id: 1,
      name: "Clothes",
      image: "https://picsum.photos/seed/clothes/300/300",
    },
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 199,
    description: "Noise-cancelling wireless headphones with long battery life.",
    images: ["https://picsum.photos/seed/headphone1/600/600"],
    category: {
      id: 2,
      name: "Electronics",
      image: "https://picsum.photos/seed/electronics/300/300",
    },
  },
  {
    id: 3,
    title: "Modern Wooden Chair",
    price: 149,
    description: "Minimalist wooden chair for living room or office.",
    images: ["https://picsum.photos/seed/chair1/600/600"],
    category: {
      id: 3,
      name: "Furniture",
      image: "https://picsum.photos/seed/furniture/300/300",
    },
  },
  {
    id: 4,
    title: "Running Sneakers",
    price: 120,
    description: "Lightweight sneakers designed for running and training.",
    images: ["https://picsum.photos/seed/shoes1/600/600"],
    category: {
      id: 4,
      name: "Shoes",
      image: "https://picsum.photos/seed/shoes/300/300",
    },
  },
  {
    id: 5,
    title: "Leather Backpack",
    price: 89,
    description: "Durable leather backpack for daily commuting.",
    images: ["https://picsum.photos/seed/bag1/600/600"],
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://picsum.photos/seed/misc/300/300",
    },
  },
  {
    id: 6,
    title: "Smart Watch",
    price: 249,
    description: "Smart watch with fitness tracking and notifications.",
    images: ["https://picsum.photos/seed/watch1/600/600"],
    category: {
      id: 2,
      name: "Electronics",
      image: "https://picsum.photos/seed/electronics/300/300",
    },
  },
  {
    id: 7,
    title: "Denim Jacket",
    price: 99,
    description: "Classic denim jacket with modern fit.",
    images: ["https://picsum.photos/seed/jacket1/600/600"],
    category: {
      id: 1,
      name: "Clothes",
      image: "https://picsum.photos/seed/clothes/300/300",
    },
  },
  {
    id: 8,
    title: "Office Desk Lamp",
    price: 45,
    description: "LED desk lamp with adjustable brightness.",
    images: ["https://picsum.photos/seed/lamp1/600/600"],
    category: {
      id: 3,
      name: "Furniture",
      image: "https://picsum.photos/seed/furniture/300/300",
    },
  },
  {
    id: 9,
    title: "Casual Sneakers",
    price: 75,
    description: "Comfortable sneakers for casual wear.",
    images: ["https://picsum.photos/seed/shoes2/600/600"],
    category: {
      id: 4,
      name: "Shoes",
      image: "https://picsum.photos/seed/shoes/300/300",
    },
  },
  {
    id: 10,
    title: "Reusable Water Bottle",
    price: 19,
    description: "Eco-friendly reusable water bottle.",
    images: ["https://picsum.photos/seed/bottle1/600/600"],
    category: {
      id: 5,
      name: "Miscellaneous",
      image: "https://picsum.photos/seed/misc/300/300",
    },
  },
];
