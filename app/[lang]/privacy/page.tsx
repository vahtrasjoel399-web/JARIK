import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { isLocale, site } from "@/content/site";
import { dictionaries } from "@/content/translations";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: `${dictionaries[lang].legal.privacy.title} | ${site.name}`,
    alternates: { canonical: `/${lang}/privacy` },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];
  return <LegalPage lang={lang} t={t} doc={t.legal.privacy} />;
}
