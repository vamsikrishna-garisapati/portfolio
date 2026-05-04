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
          background: "#fafaf9",
          color: "#141414",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 46,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 26, marginTop: 18, color: "#3f3f3f", fontWeight: 600 }}>Full Stack Engineer</div>
        <div style={{ fontSize: 20, marginTop: 28, color: "#5c5c5c", maxWidth: 920, lineHeight: 1.45 }}>
          Python APIs (FastAPI, Django REST) · Postgres/Supabase · Next.js & TypeScript — live products & production
          delivery.
        </div>
        <div
          style={{
            marginTop: 40,
            height: 1,
            width: 140,
            background: "#141414",
            opacity: 0.15,
          }}
        />
        <div style={{ marginTop: 28, fontSize: 14, letterSpacing: "0.12em", color: "#6b6b6b", textTransform: "uppercase" }}>
          Freelance + full-time · Hyderabad, IN
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE },
  );
}
