"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/content/site";
import type { Dict } from "@/content/translations";

type Props = { t: Dict["contact"]["form"]; services: string[] };

const field =
  "w-full rounded-[14px] border border-transparent bg-mist px-4 py-3.5 text-[16px] text-ink outline-none transition-colors duration-300 placeholder:text-ink/40 hover:border-ink/15 focus:border-ink focus:bg-white";

export default function ContactForm({ t, services }: Props) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      t.intro,
      "",
      `${t.name}: ${d.get("name") ?? ""}`,
      `${t.phone}: ${d.get("phone") ?? ""}`,
      `${t.car}: ${d.get("car") ?? ""}`,
      `${t.service}: ${d.get("service") ?? ""}`,
      `${t.date}: ${d.get("date") ?? ""}`,
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <label className="grid gap-1.5">
        <span className="text-[13px] font-medium text-ink/70">{t.name}</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5">
        <span className="text-[13px] font-medium text-ink/70">{t.phone}</span>
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
      </label>
      <label className="grid gap-1.5">
        <span className="text-[13px] font-medium text-ink/70">{t.car}</span>
        <input name="car" autoComplete="off" className={field} />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[13px] font-medium text-ink/70">{t.service}</span>
          <select name="service" defaultValue="" className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%230a0a0a%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[position:right_16px_center] bg-no-repeat pr-10`}>
            <option value="" disabled>
              {t.choose}
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5">
          <span className="text-[13px] font-medium text-ink/70">{t.date}</span>
          <input name="date" type="date" className={field} />
        </label>
      </div>
      <button type="submit" className="pill pill-dark mt-3 w-full">
        {t.submit}
      </button>
      {sent && (
        <p role="status" className="text-center text-[13px] text-ink/60">
          {t.sent}
        </p>
      )}
    </form>
  );
}
