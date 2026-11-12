"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { Dict } from "@/content/translations";

type Pair = { before: string; after: string; fakeBefore: boolean };

type Props = {
  pairs: readonly Pair[];
  t: Dict["ba"];
};

export default function BeforeAfter({ pairs, t }: Props) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const fromPointer = useCallback((clientX: number) => {
    const r = frame.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const pair = pairs[active];
  const ex = t.examples[active] ?? t.examples[0];

  return (
    <div>
      {pairs.length > 1 && (
        <div role="tablist" aria-label={t.title} className="mb-4 flex flex-wrap gap-2">
          {pairs.map((_, i) => (
            <button
              key={i}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => {
                setActive(i);
                setPos(50);
              }}
              className={`pill pill-sm border ${
                i === active ? "border-ink bg-ink text-white" : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
              }`}
            >
              <span className="tabular-nums text-[11px] opacity-50">{String(i + 1).padStart(2, "0")}</span>
              {t.examples[i]?.label}
            </button>
          ))}
        </div>
      )}

      <div className="on-dark rounded-[28px] bg-ink p-2 md:p-3">
        <div
          ref={frame}
          className="relative aspect-[4/5] cursor-ew-resize touch-pan-y overflow-hidden rounded-[20px] select-none sm:aspect-[16/10] lg:aspect-auto lg:h-[min(78vh,960px)]"
          onPointerDown={(e) => {
            dragging.current = true;
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            fromPointer(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && fromPointer(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >
          {/* After (full) */}
          <Image
            key={`a-${active}`}
            src={pair.after}
            alt={`${t.after}: ${ex.after}`}
            fill
            sizes="100vw"
            className="mono pointer-events-none object-cover"
            draggable={false}
          />

          {/* Before (clipped) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              key={`b-${active}`}
              src={pair.before}
              alt={`${t.before}: ${ex.before}`}
              fill
              sizes="100vw"
              className={`object-cover ${pair.fakeBefore ? "fake-before" : "mono"}`}
              draggable={false}
            />
            {pair.fakeBefore && <div className="grime absolute inset-0" />}
          </div>

          {/* Thin inset border */}
          <div className="pointer-events-none absolute inset-3 rounded-[14px] border border-white/25 md:inset-4" />

          {/* Handle */}
          <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
            <div className="absolute inset-y-0 -left-px w-0.5 bg-white/90" />
            <div
              role="slider"
              tabIndex={0}
              aria-label={t.hint}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              aria-valuetext={`${Math.round(pos)}% ${t.before}`}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
                if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
                if (e.key === "Home") setPos(0);
                if (e.key === "End") setPos(100);
              }}
              className="pointer-events-auto absolute top-1/2 left-0 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-[0_10px_30px_rgb(0_0_0/0.35)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="pointer-events-none absolute bottom-6 left-6 max-w-[45%] text-white md:bottom-9 md:left-9">
            <p className="label">{t.before}</p>
            <p className="mt-2 hidden text-[14px] text-white/75 sm:block">{ex.before}</p>
          </div>
          <div className="pointer-events-none absolute right-6 bottom-6 max-w-[45%] text-right text-white md:right-9 md:bottom-9">
            <p className="label">{t.after}</p>
            <p className="mt-2 hidden text-[14px] text-white/75 sm:block">{ex.after}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
