import type { MetadataRoute } from "next";
import { locales, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`]));
  return [
    ...locales.map((l) => ({
      url: `${site.url}/${l}`,
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages },
    })),
    ...locales.flatMap((l) => [
      { url: `${site.url}/${l}/privacy`, changeFrequency: "yearly" as const, priority: 0.2 },
      { url: `${site.url}/${l}/terms`, changeFrequency: "yearly" as const, priority: 0.2 },
    ]),
  ];
}
