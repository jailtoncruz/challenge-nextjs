"use client";

export default function Error() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <p className="text-sm text-muted-foreground">
        Unable to load product details.
      </p>
    </div>
  );
}
