import { ImageResponse } from "next/og";
import { ogImageSize, ogImageContentType, renderOgImage } from "@/lib/seo/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return new ImageResponse(renderOgImage(), size);
}
