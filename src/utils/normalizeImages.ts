export function normalizeImages(images: string[] = []) {
  return images.filter((img) => {
    if (!img) return false;
    // imagens remotas válidas
    if (img.startsWith("http://") || img.startsWith("https://")) {
      return true;
    }

    // imagens locais válidas
    if (img.startsWith("/")) {
      return true;
    }

    return false;
  });
}
