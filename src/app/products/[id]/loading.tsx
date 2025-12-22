export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="aspect-square bg-muted animate-pulse rounded-lg" />
        <div className="space-y-4">
          <div className="h-4 w-24 bg-muted rounded animate-pulse" />
          <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
          <div className="h-6 w-32 bg-muted rounded animate-pulse" />
          <div className="h-24 bg-muted rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
