import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import BeforeAfter from "@/components/BeforeAfter";
import ContactForm from "@/components/ContactForm";
import Header, { Logo } from "@/components/Header";
import MapEmbed from "@/components/MapEmbed";
import Reviews from "@/components/Reviews";
import ScrollEffects from "@/components/ScrollEffects";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Clock,
  Hand,
  Info,
  Instagram,
  Layers,
  Leather,
  Mail,
  Phone,
  Pin,
  Seat,
  Sliders,
  Sparkles,
  Stain,
  Vacuum,
  WhatsApp,
} from "@/components/icons";
import { brands, images, isLocale, services, site, stats, waLink, type Locale, type ServiceIcon, type ServiceKey } from "@/content/site";
import { dictionaries, type Dict } from "@/content/translations";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const priceOf = (key: ServiceKey) => services.find((s) => s.key === key)?.price ?? 0;
const serviceIcons: Record<ServiceIcon, typeof Seat> = {
  seat: Seat,
  sparkles: Sparkles,
  vacuum: Vacuum,
  leather: Leather,
  layers: Layers,
  stain: Stain,
};

/** Wordmark styles so the placeholder brand strip reads like a row of logos. */
const brandStyles = [
  "font-extrabold italic tracking-[-0.04em] text-[19px]",
  "font-light uppercase tracking-[0.32em] text-[13px]",
  "font-black uppercase tracking-[-0.02em] text-[18px]",
  "font-semibold italic tracking-[-0.02em] text-[18px]",
  "font-medium uppercase tracking-[0.2em] text-[13px]",
];

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];
  const book = waLink(t.booking.general);

  return (
    <>
      <Header lang={lang} name={site.name} nav={t.nav} services={t.services.items} bookHref={book} />
      <main>
        <Hero t={t} book={book} />
        <TypeBlock t={t} />
        <Services t={t} />
        <Stats t={t} />
        <Shine t={t} book={book} />
        <Alternating t={t} />
        <BeforeAfterSection t={t} />
        <Bento t={t} />
        <section aria-label={t.reviews.label} className="wrap mt-24 md:mt-32" data-reveal>
          <Reviews t={t.reviews} photo={images.review} photoAlt={t.alt.review} />
        </section>
        <PriceList t={t} />
        <Cta t={t} book={book} />
        <Contact t={t} />
      </main>
      <Footer t={t} lang={lang} />
      <ScrollEffects />
      <JsonLd lang={lang} />
    </>
  );
}

/* Shared bits */

function TwoTone({ parts, br = false }: { parts: readonly string[]; br?: boolean }) {
  return (
    <>
      {parts[0]}
      {br ? <br /> : " "}
      <span className="text-steel">{parts[1]}</span>
    </>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="label flex items-center gap-3 text-ink/60">
      <span aria-hidden className="h-px w-10 bg-ink" />
      {children}
    </p>
  );
}

/* 2. Hero */

function Hero({ t, book }: { t: Dict; book: string }) {
  return (
    <section id="top" className="wrap pt-2 md:pt-3">
      <div className="overflow-hidden rounded-[28px] bg-white">
        <div className="grid lg:min-h-[min(calc(100svh-90px),860px)] lg:grid-cols-2">
          {/* Left: blurred photo + frosted glass */}
          <div className="relative isolate flex flex-col justify-end overflow-hidden px-6 pt-32 pb-10 sm:px-10 lg:px-14 lg:pt-40 lg:pb-14">
            <Image
              src={images.heroBlur}
              alt=""
              fill
              sizes="25vw"
              className="mono -z-20 scale-125 object-cover blur-2xl"
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-md" />

            <p className="label text-ink/60" data-reveal>
              {t.hero.label}
            </p>
            <h1
              className="heading mt-6 max-w-[11ch] text-[clamp(46px,6.2vw,132px)]"
              data-reveal
              style={delay(80)}
            >
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/70" data-reveal style={delay(160)}>
              {t.hero.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4" data-reveal style={delay(240)}>
              <a href={book} target="_blank" rel="noopener noreferrer" className="pill pill-dark">
                {t.hero.cta}
              </a>
              <a href="#services" className="group flex items-center gap-3 text-[15px] font-semibold">
                <span className="round group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
                {t.hero.more}
              </a>
            </div>
            <p className="mt-12 flex items-center gap-2.5 text-[13px] text-ink/65" data-reveal style={delay(320)}>
              <Clock size={15} />
              {t.hero.open}
            </p>
          </div>

          {/* Right: sharp side profile on a grey studio gradient */}
          <div className="relative min-h-[64vw] bg-[radial-gradient(90%_80%_at_50%_45%,#ffffff_0%,#e9e9e9_55%,#8a8a8a_140%)] sm:min-h-[54vw] lg:min-h-0">
            <Image
              src={images.heroCar}
              alt={t.alt.heroCar}
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="mono object-cover object-[50%_62%] lg:object-[86%_60%]"
            />
          </div>
        </div>

        {/* Product strip */}
        <div className="on-dark relative z-10 bg-ink text-white">
          <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5 px-6 py-6 sm:px-10 lg:px-14">
            <span className="label text-white/45">{t.hero.brands}</span>
            {brands.map((b, i) => (
              <span key={b} className={`text-white/60 ${brandStyles[i % brandStyles.length]}`}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. Huge typography */

function TypeBlock({ t }: { t: Dict }) {
  const p = t.type;
  return (
    <section aria-labelledby="studio-h" className="wrap mt-3">
      <div className="relative overflow-hidden rounded-[28px] bg-white">
        <h2 id="studio-h" className="sr-only">
          {p.word1} {p.word2}
        </h2>

        <div className="relative z-20 flex items-start justify-between gap-6 px-6 pt-10 sm:px-10 lg:px-14 lg:pt-14">
          <p className="flex max-w-[15rem] items-center gap-3 text-[13px] leading-snug text-ink/70">
            <span aria-hidden className="h-px w-10 flex-none bg-ink" />
            {p.left}
          </p>
          <p className="flex items-center gap-2.5 text-right text-[13px] font-medium">
            <span className="round size-9">
              <Hand size={16} />
            </span>
            {p.right}
          </p>
        </div>

        <div
          aria-hidden
          className="type-words relative mx-auto mt-6 text-center text-[clamp(56px,16.4vw,360px)] select-none lg:mt-2"
        >
          <div className="display relative z-0 text-ink" data-reveal>
            {p.word1}
          </div>
          <div
            className="relative z-10 mx-auto -my-[0.34em] h-[1.55em] w-[min(94%,3.9em)]"
            data-reveal
            style={delay(180)}
          >
            <Image
              src={images.typeCar}
              alt=""
              fill
              sizes="(min-width: 1024px) 880px, 94vw"
              className="object-cover mix-blend-multiply [filter:grayscale(1)_contrast(1.35)_brightness(1.18)] [mask-image:radial-gradient(ellipse_50%_48%_at_50%_54%,black_50%,transparent_100%)]"
            />
          </div>
          <div className="display relative z-0 pb-[0.12em] text-mist">{p.word2}</div>
        </div>

      </div>
    </section>
  );
}

/* 4. Services */

function Services({ t }: { t: Dict }) {
  return (
    <section id="services" className="wrap mt-24 md:mt-32">
      <div className="flex items-center gap-5" data-reveal>
        <span aria-hidden className="h-px flex-1 bg-ink/15" />
        <h2 className="label">{t.services.label}</h2>
        <span aria-hidden className="h-px flex-1 bg-ink/15" />
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-4">
        {t.services.items.map((s, i) => (
          <li key={s.key} id={`service-${s.key}`} data-reveal style={delay((i % 4) * 90)}>
            <a
              href={waLink(`${t.booking.service} ${s.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.title}. ${t.services.open}`}
              className="group block overflow-hidden rounded-[20px] bg-white transition-[translate,box-shadow] duration-700 ease-(--ease-studio) hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(10_10_10/0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite sm:aspect-[4/3]">
                <Image
                  src={images.services[s.key]}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="mono zoom object-cover"
                />
                <span className="round round-solid absolute right-3 bottom-3 size-10 group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="diag px-4 py-4 md:px-5 md:py-5">
                <h3 className="text-[15px] leading-snug font-semibold tracking-[-0.02em] md:text-[17px]">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-snug text-ink/60">{s.desc}</p>
              </div>
            </a>
          </li>
        ))}
        <li className="col-span-2" data-reveal style={delay(180)}>
          <div className="on-dark relative isolate flex h-full min-h-[240px] flex-col justify-between gap-6 overflow-hidden rounded-[20px] bg-ink p-5 text-white md:p-7">
            <Image
              src={images.helpCard}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="mono -z-10 hidden object-cover opacity-70 [mask-image:linear-gradient(to_right,transparent_35%,black_80%)] sm:block"
            />
            <div className="max-w-xs">
              <h3 className="text-[22px] leading-tight font-semibold tracking-[-0.03em] md:text-[26px]">
                {t.services.helpTitle}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">{t.services.helpText}</p>
            </div>
            <a
              href={waLink(t.booking.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-light pill-sm self-start py-2.5 text-left whitespace-normal"
            >
              <WhatsApp size={16} className="flex-none" />
              {t.services.helpCta}
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

/* 5. Stats */

function Stats({ t }: { t: Dict }) {
  return (
    <section aria-label={t.stats.join(", ")} className="wrap mt-24 md:mt-32">
      <dl className="grid grid-cols-2 gap-y-10 border-y border-ink/10 py-10 md:grid-cols-4 md:py-14">
        {stats.map((s, i) => (
          <div
            key={t.stats[i]}
            className="flex flex-col-reverse justify-end gap-4 px-2 md:border-l md:border-ink/10 md:px-8 md:first:border-l-0 md:first:pl-2"
            data-reveal
            style={delay(i * 90)}
          >
            <dt className="label leading-snug text-ink/55">{t.stats[i]}</dt>
            <dd className="text-[clamp(46px,6vw,88px)] leading-none font-semibold tracking-[-0.05em] tabular-nums">
              {s.value == null ? (
                `[X]${s.suffix}`
              ) : (
                <span data-count={s.value} data-suffix={s.suffix}>
                  0{s.suffix}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* 6. BEST SHINE */

function Shine({ t, book }: { t: Dict; book: string }) {
  return (
    <section id="about" className="wrap mt-24 md:mt-32">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[radial-gradient(130%_110%_at_0%_0%,#ffffff_0%,#e9e9e9_62%)] px-6 pt-12 ring-1 ring-white sm:px-10 lg:min-h-[660px] lg:px-14 lg:pt-16">
        <div className="relative z-10 lg:max-w-[46%]">
          <h2 className="display text-[clamp(72px,10.5vw,240px)] uppercase" data-reveal>
            <span className="block">{t.shine.title[0]}</span>
            <span className="block text-steel">{t.shine.title[1]}</span>
          </h2>
          <p className="mt-9 max-w-sm text-[17px] leading-relaxed text-ink/70" data-reveal style={delay(120)}>
            {t.shine.text}
          </p>
          <a
            href={book}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-dark mt-8"
            data-reveal
            style={delay(200)}
          >
            {t.shine.cta}
          </a>
        </div>

        <p
          className="relative z-10 mt-10 max-w-xs text-[14px] leading-relaxed text-ink/70 lg:absolute lg:top-16 lg:right-14 lg:mt-0"
          data-reveal
          style={delay(260)}
        >
          {t.shine.aside}
        </p>

        <div className="relative -mr-6 mt-10 aspect-[16/10] sm:-mr-10 lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:mr-0 lg:aspect-auto lg:h-[72%] lg:w-[60%]">
          <Image
            src={images.shine}
            alt={t.alt.shine}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="mono object-cover object-left [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_0%,black_35%),linear-gradient(to_bottom,transparent_0%,black_30%)]"
          />
        </div>
      </div>
    </section>
  );
}

/* 7. Alternating rows */

function Alternating({ t }: { t: Dict }) {
  return (
    <section aria-label={`${t.revive.kicker}, ${t.deep.kicker}`} className="wrap mt-3 grid gap-3">
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="flex flex-col justify-center rounded-[28px] bg-white p-6 sm:p-10 lg:p-14" data-reveal>
          <Kicker>{t.revive.kicker}</Kicker>
          <h2 className="heading mt-7 text-[clamp(40px,5.2vw,112px)] uppercase">
            <TwoTone parts={t.revive.title} br />
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/70">{t.revive.text}</p>
        </div>
        <div className="group relative min-h-[360px] overflow-hidden rounded-[28px] bg-graphite lg:min-h-[560px]" data-reveal style={delay(120)}>
          <Image src={images.revive} alt={t.alt.revive} fill sizes="(min-width: 1024px) 50vw, 100vw" className="mono zoom object-cover" />
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <div className="group relative min-h-[360px] overflow-hidden rounded-[28px] bg-graphite lg:min-h-[560px]" data-reveal>
          <Image src={images.deepClean} alt={t.alt.deep} fill sizes="(min-width: 1024px) 50vw, 100vw" className="mono zoom object-cover" />
        </div>
        <div className="flex flex-col justify-center rounded-[28px] bg-white p-6 sm:p-10 lg:p-14" data-reveal style={delay(120)}>
          <Kicker>{t.deep.kicker}</Kicker>
          <h2 className="heading mt-7 text-[clamp(40px,5.2vw,112px)] uppercase">
            <TwoTone parts={t.deep.title} br />
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/70">{t.deep.text}</p>
          <ul className="mt-8 grid gap-3.5">
            {t.deep.list.map((item) => (
              <li key={item} className="flex items-center gap-3.5 text-[16px] font-medium">
                <span className="grid size-8 flex-none place-items-center rounded-full bg-ink text-white">
                  <Check size={15} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* 8. Before / After */

function BeforeAfterSection({ t }: { t: Dict }) {
  return (
    <section id="before-after" className="wrap mt-24 md:mt-32">
      <div className="mb-8 grid items-end gap-6 md:grid-cols-[1fr_auto_1fr]" data-reveal>
        <h2 className="heading text-[clamp(44px,6vw,132px)]">{t.ba.title}</h2>
        <span className="round hidden size-14 place-self-center md:inline-flex">
          <Sliders size={20} />
        </span>
        <p className="max-w-sm text-[15px] leading-relaxed text-ink/70 md:justify-self-end">{t.ba.text}</p>
      </div>
      <div data-reveal style={delay(120)}>
        <BeforeAfter pairs={images.beforeAfter} t={t.ba} />
      </div>
    </section>
  );
}

/* 9. Price list */

function PriceList({ t }: { t: Dict }) {
  const p = t.priceList;
  return (
    <section id="prices" className="wrap mt-24 md:mt-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
        <div>
          <Kicker>{p.label}</Kicker>
          <h2 className="heading mt-6 text-[clamp(44px,6vw,132px)]">
            <span className="text-steel">/</span> {p.title}
          </h2>
        </div>
        <p className="max-w-sm text-[16px] leading-relaxed text-ink/60 md:text-right">{p.sub}</p>
      </div>

      <div className="mt-10 rounded-[28px] bg-white p-2 sm:p-3" data-reveal style={delay(100)}>
        <ul className="divide-y divide-ink/10">
          {t.services.items.map((s) => {
            const Icon = serviceIcons[services.find((x) => x.key === s.key)?.icon ?? "seat"];
            return (
              <li key={s.key}>
                <a
                  href={waLink(`${t.booking.service} ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.title}, ${p.from} ${priceOf(s.key)} €. ${t.services.open}`}
                  className="group flex items-center gap-4 rounded-[20px] px-3 py-5 transition-colors duration-300 hover:bg-mist/60 sm:gap-6 sm:px-6 sm:py-6"
                >
                  <span className="grid size-12 flex-none place-items-center rounded-[14px] border border-ink/10 bg-mist/60 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white sm:size-14">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[16px] leading-snug font-semibold tracking-[-0.02em] sm:text-[19px]">{s.title}</span>
                    <span className="mt-1 block text-[13px] leading-snug text-ink/60 sm:text-[14px]">{s.desc}</span>
                  </span>
                  <span className="flex flex-col items-end whitespace-nowrap sm:flex-row sm:items-baseline sm:gap-2">
                    <span className="text-[12px] text-ink/55 sm:text-[14px]">{p.from}</span>
                    <span className="text-[26px] leading-none font-semibold tracking-[-0.04em] tabular-nums sm:text-[40px]">
                      {priceOf(s.key)} €
                    </span>
                  </span>
                  <span className="round hidden size-11 group-hover:bg-ink group-hover:text-white md:inline-flex">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-3 flex items-start gap-4 rounded-[20px] border border-ink/10 bg-white/60 p-5 sm:items-center sm:p-6" data-reveal>
        <span className="grid size-9 flex-none place-items-center rounded-full border border-ink">
          <Info size={16} />
        </span>
        <p className="text-[14px] leading-relaxed text-ink/70 sm:text-[15px]">{p.info}</p>
      </div>

      <div
        className="on-dark mt-3 flex flex-col gap-4 rounded-[20px] bg-ink px-6 py-5 text-white sm:flex-row sm:items-center sm:justify-center sm:gap-8"
        data-reveal
      >
        <p className="flex items-center gap-3 text-[15px] text-white/80">
          <Pin size={18} />
          {t.hero.label}
        </p>
        <span aria-hidden className="hidden h-6 w-px bg-white/15 sm:block" />
        <a href={`tel:+${site.phoneDigits}`} className="flex items-center gap-3 text-[15px] font-semibold hover:underline">
          <Phone size={18} />
          {site.phone}
        </a>
      </div>
    </section>
  );
}

/* 10. Bento */

function Bento({ t }: { t: Dict }) {
  const b = t.bento;
  return (
    <section aria-labelledby="bento-h" className="wrap mt-24 md:mt-32">
      <div className="mx-auto max-w-4xl text-center" data-reveal>
        <h2 id="bento-h" className="heading text-[clamp(36px,5.2vw,112px)] uppercase">
          <TwoTone parts={b.title} />
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-ink/60">{b.sub}</p>
      </div>

      <div className="mt-12 grid gap-3 lg:grid-cols-12 lg:grid-rows-[340px_300px]">
        <div
          className="on-dark group relative isolate flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[28px] bg-ink p-7 text-white sm:p-10 lg:col-span-5 lg:row-span-2 lg:min-h-0"
          data-reveal
        >
          <Image src={images.bentoTall} alt={t.alt.bentoTall} fill sizes="(min-width: 1024px) 40vw, 100vw" className="mono zoom -z-20 object-cover opacity-80" />
          {/* Dark fade so the text stays readable over the photo */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/50 to-transparent" />
          <h3 className="heading text-[clamp(36px,4vw,72px)]">{b.tallTitle}</h3>
          <p className="mt-3 max-w-xs text-[15px] text-white/70">{b.tallText}</p>
          <a href="#services" className="pill pill-light mt-7 self-start">
            {b.tallCta}
          </a>
        </div>

        <div className="group relative min-h-[300px] overflow-hidden rounded-[28px] bg-graphite lg:col-span-7" data-reveal style={delay(100)}>
          <Image src={images.bentoPhoto} alt={b.photo} fill sizes="(min-width: 1024px) 58vw, 100vw" className="mono zoom object-cover" />
          <a href="#before-after" aria-label={t.nav.beforeAfter} className="round round-solid absolute top-5 right-5 size-12 hover:bg-ink hover:text-white">
            <ArrowUpRight size={18} />
          </a>
          <span className="label absolute bottom-5 left-5 rounded-full bg-white/75 px-4 py-2.5 backdrop-blur-md">{b.photo}</span>
        </div>

        <div className="on-dark flex flex-col justify-between gap-10 rounded-[28px] bg-graphite p-7 text-white sm:p-9 lg:col-span-7" data-reveal style={delay(200)}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex -space-x-3">
              {images.avatars.map((src) => (
                <span key={src} className="relative size-12 overflow-hidden rounded-full ring-2 ring-graphite">
                  <Image src={src} alt={t.alt.avatar} fill sizes="48px" className="mono object-cover" />
                </span>
              ))}
              <span className="relative grid size-12 place-items-center rounded-full bg-white text-[18px] font-medium text-ink ring-2 ring-graphite">
                +
              </span>
            </div>
            <p className="label text-white/50">{b.statsTitle}</p>
          </div>
          <dl className="grid grid-cols-3 divide-x divide-white/10">
            {b.stats.map((s) => (
              <div key={s.l} className="flex flex-col-reverse justify-end gap-2 px-4 first:pl-0">
                <dt className="text-[12px] tracking-[0.08em] text-white/55 uppercase">{s.l}</dt>
                <dd className="text-[clamp(32px,3.6vw,48px)] leading-none font-semibold tracking-[-0.04em]">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* 12. CTA */

function Cta({ t, book }: { t: Dict; book: string }) {
  return (
    <section aria-labelledby="cta-h" className="wrap mt-24 md:mt-32">
      <div className="on-dark relative isolate overflow-hidden rounded-[28px] bg-ink text-white">
        <svg
          aria-hidden
          viewBox="0 0 200 220"
          className="absolute top-8 left-1/2 -z-10 w-[min(86vw,540px)] -translate-x-1/2 text-white/[0.09]"
          fill="none"
          stroke="currentColor"
        >
          <path strokeWidth="0.6" d="M100 6 186 38v70c0 54-38 88-86 106C52 196 14 162 14 108V38L100 6Z" />
          <path strokeWidth="0.4" d="M100 22 172 49v60c0 45-32 74-72 89-40-15-72-44-72-89V49l72-27Z" />
        </svg>

        <div className="px-6 pt-24 text-center sm:pt-32">
          <h2 id="cta-h" className="heading mx-auto max-w-[13ch] text-[clamp(40px,6.4vw,136px)]" data-reveal>
            {t.cta.title}
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3" data-reveal style={delay(120)}>
            <a href={book} target="_blank" rel="noopener noreferrer" className="pill pill-light">
              {t.cta.book}
            </a>
            <a href="#contact" className="pill pill-outline">
              {t.cta.contact}
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-4 aspect-[16/8] w-full max-w-[1600px] sm:aspect-[16/7]">
          <Image
            src={images.ctaCar}
            alt={t.alt.cta}
            fill
            sizes="(min-width: 1600px) 1600px, 100vw"
            className="mono object-cover [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_80%,transparent_100%),linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]"
          />
          {/* Soft white light streak */}
          <div aria-hidden className="absolute inset-x-[20%] bottom-[2%] h-20 rounded-full bg-white/15 blur-3xl" />
          <div aria-hidden className="absolute inset-x-[6%] bottom-[9%] h-px bg-linear-to-r from-transparent via-white/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* 13. Contact */

function Contact({ t }: { t: Dict }) {
  const c = t.contact;
  const serviceOptions = t.services.items.map((s) => s.title);
  const items = [
    { icon: Phone, label: c.phone, value: site.phone, href: `tel:+${site.phoneDigits}` },
    { icon: WhatsApp, label: c.whatsapp, value: site.phone, href: waLink(t.booking.general), external: true },
    { icon: Mail, label: c.email, value: site.email, href: `mailto:${site.email}` },
    { icon: Instagram, label: c.instagram, value: site.instagram, href: site.instagramUrl, external: true },
    { icon: Clock, label: c.hours, value: site.hours },
    { icon: Pin, label: c.address, value: t.hero.label },
  ];

  return (
    <section id="contact" className="wrap mt-24 md:mt-32">
      <div className="grid gap-3 lg:grid-cols-12">
        <div className="rounded-[28px] bg-white p-6 sm:p-10 lg:col-span-5 lg:p-12" data-reveal>
          <Kicker>{c.label}</Kicker>
          <h2 className="heading mt-6 text-[clamp(40px,4.6vw,100px)] uppercase">
            <TwoTone parts={c.title} br />
          </h2>
          <p className="mt-5 mb-8 max-w-md text-[15px] leading-relaxed text-ink/70">{c.text}</p>
          <ContactForm t={c.form} services={serviceOptions} />
        </div>

        <div className="grid gap-3 lg:col-span-7 lg:grid-rows-[auto_1fr]" data-reveal style={delay(120)}>
          <dl className="grid gap-px overflow-hidden rounded-[28px] bg-ink/10 sm:grid-cols-2">
            {items.map(({ icon: Icon, label, value, href, external }) => (
              <div key={label} className="bg-white p-6 lg:p-7">
                <dt className="label flex items-center gap-2 text-ink/55">
                  <Icon size={15} />
                  {label}
                </dt>
                <dd className="mt-3 text-[18px] font-semibold tracking-[-0.02em]">
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <MapEmbed query={site.mapQuery} button={c.mapButton} note={c.mapNote} title={`${site.name}, ${c.address}`} />
        </div>
      </div>
    </section>
  );
}

/* 14. Footer */

function Footer({ t, lang }: { t: Dict; lang: Locale }) {
  const f = t.footer;
  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#before-after", label: t.nav.beforeAfter },
    { href: "#prices", label: t.nav.prices },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <footer className="wrap mt-24 pb-2 md:mt-32 md:pb-3">
      <div className="on-dark rounded-[28px] bg-ink px-6 pt-14 pb-6 text-white sm:px-10 lg:px-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Logo name={site.name} />
            <address className="mt-6 grid gap-1.5 text-[14px] leading-relaxed text-white/70 not-italic">
              <span>{t.hero.label}</span>
              <a href={`tel:+${site.phoneDigits}`} className="hover:text-white">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </address>
            <div className="mt-6 flex gap-2">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="round size-10 text-white/80 hover:bg-white hover:text-ink">
                <Instagram size={16} />
              </a>
              <a href={waLink(t.booking.general)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="round size-10 text-white/80 hover:bg-white hover:text-ink">
                <WhatsApp size={16} />
              </a>
              <a href={`mailto:${site.email}`} aria-label={t.contact.email} className="round size-10 text-white/80 hover:bg-white hover:text-ink">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label text-white/45">{f.aboutTitle}</h3>
            <p className="mt-5 text-[14px] leading-relaxed text-white/70">{f.aboutText}</p>
            <a href="#about" className="mt-4 inline-block text-[14px] font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white">
              {f.aboutLink}
            </a>
          </div>

          <nav aria-label={f.links} className="lg:col-span-2">
            <h3 className="label text-white/45">{f.links}</h3>
            <ul className="mt-5 grid gap-2.5 text-[14px] text-white/70">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="label text-white/45">{f.works}</h3>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {images.footer.map((src, i) => (
                <div key={`${src}-${i}`} className="group relative aspect-[4/3] overflow-hidden rounded-[14px] bg-graphite">
                  <Image src={src} alt={t.alt.work} fill sizes="(min-width: 1024px) 160px, 45vw" className="mono zoom object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] leading-relaxed text-white/50">
            © {site.year} {site.name} · {f.company}
          </p>
          <div className="flex items-center gap-6 text-[13px] text-white/60">
            <Link href={`/${lang}/privacy`} className="hover:text-white">
              {f.privacy}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-white">
              {f.terms}
            </Link>
            <a href="#top" aria-label={f.top} className="round ml-auto size-11 text-white hover:bg-white hover:text-ink md:ml-2">
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Structured data for local SEO */

function JsonLd({ lang }: { lang: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: site.name,
    url: `${site.url}/${lang}`,
    image: images.heroCar,
    telephone: site.phone,
    email: site.email,
    openingHours: site.hours,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "EE",
    },
    areaServed: ["Ahtme", "Kohtla-Järve", "Ida-Virumaa"],
    sameAs: [site.instagramUrl],
    priceRange: "€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dictionaries[lang].priceList.title,
      itemListElement: dictionaries[lang].services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.desc },
        priceSpecification: { "@type": "PriceSpecification", minPrice: priceOf(s.key), priceCurrency: "EUR" },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
