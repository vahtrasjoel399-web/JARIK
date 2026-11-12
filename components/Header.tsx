"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, type Locale } from "@/content/site";
import type { Dict } from "@/content/translations";
import { ChevronDown, Close, Menu } from "./icons";

type Props = {
  lang: Locale;
  name: string;
  nav: Dict["nav"];
  services: Dict["services"]["items"];
  bookHref: string;
  /** Prefix for in-page links ("" on the home page, "/et" on legal pages). */
  base?: string;
};

const LANGS: { code: Locale; label: string }[] = [
  { code: "et", label: "ET" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

/** Text logo: "CleanDrive" with a short thick bar under the first part, tagline below. Uses currentColor. */
export function Logo({ name }: { name: string }) {
  const cut = name.slice(1).search(/[A-Z]/) + 1 || name.length;
  return (
    <span className="flex flex-col leading-none">
      <span className="text-[21px] font-extrabold tracking-[-0.05em]">
        <span className="relative inline-block">
          {name.slice(0, cut)}
          <span aria-hidden className="absolute -bottom-[5px] left-[1px] h-[3px] w-[58%] bg-current" />
        </span>
        {name.slice(cut)}
      </span>
      <span className="mt-[10px] text-[8.5px] font-semibold tracking-[0.36em] uppercase opacity-60">{site.tagline}</span>
    </span>
  );
}

function LangSwitch({ lang, label, className = "" }: { lang: Locale; label: string; className?: string }) {
  return (
    <div role="group" aria-label={label} className={`flex items-center gap-0.5 text-[12px] font-semibold ${className}`}>
      {LANGS.map((l) => (
        <Link
          key={l.code}
          href={`/${l.code}`}
          hrefLang={l.code}
          aria-current={l.code === lang ? "true" : undefined}
          className={`grid h-8 min-w-8 place-items-center rounded-full px-1.5 tracking-[0.08em] transition-colors duration-300 ${
            l.code === lang ? "bg-ink text-white" : "text-ink/60 hover:text-ink"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header({ lang, name, nav, services, bookHref, base = "" }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: `${base}#services`, label: nav.services, dropdown: true },
    { href: `${base}#before-after`, label: nav.beforeAfter },
    { href: `${base}#prices`, label: nav.prices },
    { href: `${base}#about`, label: nav.about },
    { href: `${base}#contact`, label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2 md:px-3 md:pt-3">
      <div
        className={`mx-auto flex h-16 max-w-[1296px] items-center justify-between rounded-full pr-2 pl-5 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-(--ease-studio) md:h-[68px] md:pl-6 ${
          scrolled || open
            ? "bg-white/75 shadow-[0_1px_0_rgb(10_10_10/0.06),0_12px_40px_-20px_rgb(10_10_10/0.25)] backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent"
        }`}
      >
        <Link href={`/${lang}`} aria-label={`${name}, ${nav.home}`}>
          <Logo name={name} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.href} className="group/dd relative">
                <a
                  href={l.href}
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-medium text-ink/75 transition-colors hover:text-ink"
                >
                  {l.label}
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover/dd:rotate-180 group-focus-within/dd:rotate-180" />
                </a>
                <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-[opacity,visibility,transform] duration-300 ease-(--ease-studio) group-focus-within/dd:visible group-focus-within/dd:opacity-100 group-hover/dd:visible group-hover/dd:opacity-100">
                  <ul className="w-64 rounded-[20px] bg-white/90 p-2 shadow-[0_24px_60px_-24px_rgb(10_10_10/0.35)] ring-1 ring-ink/5 backdrop-blur-xl">
                    {services.map((s, i) => (
                      <li key={s.key}>
                        <a
                          href={`${base}#service-${s.key}`}
                          className="flex items-center justify-between rounded-[14px] px-3 py-2.5 text-[14px] text-ink/80 transition-colors hover:bg-mist hover:text-ink"
                        >
                          {s.title}
                          <span className="text-[11px] tabular-nums text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink/75 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} label={nav.language} className="hidden sm:flex" />
          <a href={bookHref} target="_blank" rel="noopener noreferrer" className="pill pill-dark pill-sm hidden sm:inline-flex">
            {nav.book}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.close : nav.menu}
            className="grid size-12 place-items-center rounded-full bg-ink text-white lg:hidden"
          >
            {open ? <Close size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-[1296px] rounded-[28px] bg-white/90 p-3 shadow-[0_24px_60px_-24px_rgb(10_10_10/0.35)] backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-ink/8 px-3 py-4 text-[26px] font-semibold tracking-[-0.04em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-3 px-1 pt-4 pb-1">
          <LangSwitch lang={lang} label={nav.language} />
          <a href={bookHref} target="_blank" rel="noopener noreferrer" className="pill pill-dark">
            {nav.book}
          </a>
        </div>
      </div>
    </header>
  );
}
