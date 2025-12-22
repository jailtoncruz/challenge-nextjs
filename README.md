# 🛍️ Product Listing – Stefanini Next.js Challenge

This project is a product listing application built using **Next.js**, **React**, and **TypeScript**, consuming the public API from **Platzi Fake Store**.
The goal of this challenge is to demonstrate frontend architecture, performance awareness, accessibility, and code quality using modern React and Next.js practices.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Shadcn/UI** (Design System)
- **Tailwind CSS**
- **Jest / Testing Library** (unit tests)

---

## 📦 Features

### ✅ Product Listing

- Fetches products from:
  `https://api.escuelajs.co/api/v1/products`
- Displays product cards with:

  - Image
  - Title
  - Price

- Fully responsive layout

---

### ✅ Product Details

- Dynamic product detail page
- Displays:

  - Title
  - Description
  - Price
  - Category
  - Image gallery

- Reuses shared UI components

---

### ✅ Performance & Quality

- Server-Side Rendering (SSR) and Static Site Generation (SSG)
- Lazy loading images
- Optimized Core Web Vitals
- Unit tests for critical components
- Accessibility best practices

---

### ✨ Optional Enhancements

- Category filtering
- Pagination or infinite scroll
- Incremental Static Regeneration (ISR)

---

## 🧠 Architectural Decisions

### 📁 Folder Structure

The project follows a clear separation of concerns:

```
src/
├── app/              # Routing and rendering logic (App Router)
├── components/
│   ├── ui/           # Design system (Shadcn-based components)
│   └── product/      # Product-specific components
├── services/         # API communication
├── types/            # TypeScript domain models
├── utils/            # Helpers and constants
├── hooks/            # Custom hooks (client-side when needed)
├── styles/           # Global styles
└── tests/            # Unit tests
```

This structure keeps UI, domain logic, and data access cleanly separated, making the application easier to maintain and scale.

---

### 🧩 Design System

The project uses **Shadcn/UI** as the base design system, allowing:

- Consistent UI across screens
- Accessible components by default
- Easy customization with Tailwind CSS

Reusable components such as `Button`, `Card`, and `Modal` are shared between the listing and product detail views.

---

### 🌐 Data Fetching Strategy

- **Product Listing**
  Uses **Static Site Generation (SSG)** with revalidation to improve performance and SEO.

- **Product Details**
  Uses **dynamic routes** with static generation where applicable.

This hybrid approach balances performance, scalability, and data freshness.

---

### ⚡ Performance Considerations

- `next/image` for optimized image loading
- Lazy loading where applicable
- Minimal client-side JavaScript
- Server Components by default

---

### ♿ Accessibility

Accessibility was considered from the start:

- Semantic HTML
- Keyboard navigation
- Accessible modals and buttons
- Alternative text for images

---

### 🧪 Testing Strategy

Unit tests focus on:

- Reusable UI components
- Product card rendering
- Loading and error states

The goal is to validate critical behavior without over-testing implementation details.

---

## 🛠️ Getting Started

### Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at:
👉 `http://localhost:3000`

---

## 🔮 Possible Improvements

With more time, the following improvements could be implemented:

- Advanced caching strategies
- Skeleton loaders
- E2E tests (Playwright)
- Internationalization (i18n)
- Enhanced Core Web Vitals monitoring

---

## 📌 Final Notes

This project was designed to prioritize:

- Clean architecture
- Performance
- Accessibility
- Reusability

Trade-offs and technical decisions were made intentionally to balance development speed and code quality.
