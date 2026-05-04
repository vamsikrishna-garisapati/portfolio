import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export const OG_IMAGE_ALT = `${siteConfig.name} — portfolio preview`;

export function createPortfolioOgImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(145deg, #0c0a09 0%, #1c1917 45%, #292524 100%)",
          color: "#fafaf9",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 30, marginTop: 20, color: "#d6d3d1", fontWeight: 600 }}>Full Stack Developer</div>
        <div style={{ fontSize: 22, marginTop: 28, color: "#a8a29e", maxWidth: 920, lineHeight: 1.45 }}>
          Python APIs (FastAPI, Django REST) · Postgres/Supabase · Next.js & TypeScript — live products & production
          delivery.
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE },
  );
}
