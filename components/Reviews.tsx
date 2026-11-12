"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dict } from "@/content/translations";
import { ArrowLeft, ArrowRight } from "./icons";

type Props = { t: Dict["reviews"]; photo: string; photoAlt: string };

export default function Reviews({ t, photo, photoAlt }: Props) {
  const [i, setI] = useState(0);
  const n = t.items.length;
  const r = t.items[i];
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <div className="grid overflow-hidden rounded-[28px] bg-white md:grid-cols-12">
      <div className="flex flex-col p-6 sm:p-10 md:col-span-7 lg:p-14">
        <h2 className="heading text-[clamp(36px,5.4vw,76px)] uppercase">{t.label}</h2>

        <figure className="mt-10 flex-1 md:mt-14" aria-live="polite">
          <blockquote key={i} className="animate-[fade_700ms_var(--ease-studio)] text-[clamp(20px,2.2vw,30px)] leading-[1.3] font-medium tracking-[-0.02em]">
            “{r.quote}”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-ink" aria-hidden />
            <span>
              <span className="block text-[15px] font-semibold">{r.name}</span>
              <span className="block text-[13px] text-ink/60">{r.caption}</span>
            </span>
          </figcaption>
        </figure>

        <div className="mt-10 flex items-center gap-3">
          <button type="button" onClick={() => go(-1)} aria-label={t.prev} className="round hover:bg-ink hover:text-white">
            <ArrowLeft />
          </button>
          <button type="button" onClick={() => go(1)} aria-label={t.next} className="round hover:bg-ink hover:text-white">
            <ArrowRight />
          </button>
          <span className="ml-3 text-[13px] tabular-nums text-ink/60">
            {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="relative min-h-[320px] md:col-span-5">
        <Image src={photo} alt={photoAlt} fill sizes="(min-width: 768px) 40vw, 100vw" className="mono object-cover" />
      </div>
    </div>
  );
}
