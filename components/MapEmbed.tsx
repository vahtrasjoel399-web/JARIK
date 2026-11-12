"use client";

import { useState } from "react";
import { Pin } from "./icons";

/** Google Maps loads only after a click, so no third-party cookies are set before the visitor opts in. */
export default function MapEmbed({ query, button, note, title }: { query: string; button: string; note: string; title: string }) {
  const [on, setOn] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-[20px] bg-graphite">
      {on ? (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full grayscale"
        />
      ) : (
        <div className="on-dark absolute inset-0 grid place-items-center p-6 text-center text-white">
          {/* Simple abstract street pattern as a placeholder */}
          <svg aria-hidden className="absolute inset-0 size-full opacity-[0.12]" preserveAspectRatio="none" viewBox="0 0 400 300">
            <g fill="none" stroke="white" strokeWidth="1">
              <path d="M0 210 C120 190 180 120 400 140" />
              <path d="M60 0 L140 300" />
              <path d="M0 80 L400 60" />
              <path d="M260 0 C240 120 300 200 280 300" />
              <path d="M0 260 L400 230" strokeWidth="6" />
            </g>
          </svg>
          <div className="relative">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-white text-ink">
              <Pin size={22} />
            </span>
            <button type="button" onClick={() => setOn(true)} className="pill pill-light pill-sm mt-5">
              {button}
            </button>
            <p className="mt-3 text-[12px] text-white/55">{note}</p>
          </div>
        </div>
      )}
    </div>
  );
}
