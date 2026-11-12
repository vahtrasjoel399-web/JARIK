import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales, site } from "@/content/site";
import { dictionaries, keywords } from "@/content/translations";
import "../globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "latin-ext", "cyrillic"],
  style: ["normal", "italic"],
  display: "swap",
});

const ogLocale = { et: "et_EE", ru: "ru_RU", en: "en_US" } as const;

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = dictionaries[lang];
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: { et: "/et", ru: "/ru", en: "/en", "x-default": "/et" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url: `/${lang}`,
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
    formatDetection: { telephone: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#e9e9e9",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={interTight.variable}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
