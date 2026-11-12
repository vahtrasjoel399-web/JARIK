import { ImageResponse } from "next/og";
import { isLocale, site } from "@/content/site";
import { dictionaries } from "@/content/translations";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Car detailing studio";

/** Monochrome Open Graph image, generated per language at build time. */
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = dictionaries[isLocale(lang) ? lang : "et"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 75% 40%, #ffffff 0%, #e9e9e9 55%, #8a8a8a 130%)",
          color: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: "#0a0a0a" }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 800, fontStyle: "italic", letterSpacing: -8, lineHeight: 0.9 }}>
            {t.type.word1}
          </div>
          <div style={{ fontSize: 150, fontWeight: 800, fontStyle: "italic", letterSpacing: -8, lineHeight: 0.9, color: "#8a8a8a" }}>
            {t.type.word2}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#1a1a1a" }}>
          <span>{t.hero.title}</span>
          <span>{site.city}, Estonia</span>
        </div>
      </div>
    ),
    size,
  );
}
