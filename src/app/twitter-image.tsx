import { createPortfolioOgImageResponse, OG_IMAGE_ALT, OG_IMAGE_SIZE } from "@/lib/og-image-response";

export const alt = OG_IMAGE_ALT;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function TwitterImage() {
  return createPortfolioOgImageResponse();
}
