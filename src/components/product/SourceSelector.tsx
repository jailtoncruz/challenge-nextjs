"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SourceSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSource = searchParams.get("source") ?? "api";

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("source", value);
    params.delete("page");

    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Data source:</span>

      <Select value={currentSource} onValueChange={handleChange}>
        <SelectTrigger className="w-55">
          <SelectValue placeholder="Select source" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="api">Real API (EscuelaJS)</SelectItem>

          <SelectItem value="generator">Mock Generator (Infinite)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
