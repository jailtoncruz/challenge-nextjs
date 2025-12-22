"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [displayingImage, setDisplayingImage] = useState(images[0]);

  return (
    <div className="grid gap-3">
      <div className="relative aspect-square">
        <Image
          src={displayingImage}
          alt={title}
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer hover:shadow-md transition"
              onClick={() => setDisplayingImage(image)}
            >
              <Image
                src={image}
                alt={`${title} image ${index + 2}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
