import Link from "next/link";
import Header from "@/components/Header";
import { site, waLink, type Locale } from "@/content/site";
import type { Dict } from "@/content/translations";

type Props = { lang: Locale; t: Dict; doc: Dict["legal"]["privacy"] };

export default function LegalPage({ lang, t, doc }: Props) {
  return (
    <>
      <Header
        lang={lang}
        name={site.name}
        nav={t.nav}
        services={t.services.items}
        bookHref={waLink(t.booking.general)}
        base={`/${lang}`}
      />
      <main className="wrap pt-24 pb-3 md:pt-28">
        <article className="rounded-[28px] bg-white px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <Link href={`/${lang}`} className="label text-ink/60 hover:text-ink">
            ← {t.legal.back}
          </Link>
          <h1 className="heading mt-8 text-[clamp(40px,5.6vw,84px)]">{doc.title}</h1>
          <p className="mt-4 text-[13px] text-ink/55">{t.legal.updated}</p>
          <div className="mt-12 grid max-w-2xl gap-10">
            {doc.sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-[20px] font-semibold tracking-[-0.02em]">{s.h}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-ink/75">{s.p}</p>
              </section>
            ))}
          </div>
        </article>
        <p className="px-2 py-6 text-center text-[13px] text-ink/50">
          © {site.year} {site.name} · {t.footer.company}
        </p>
      </main>
    </>
  );
}
