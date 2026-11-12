"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page:
 *  - [data-reveal]  fades up when it enters the viewport (delay via style="--d: 120ms")
 *  - [data-count]   counts up from 0 to its value (data-suffix is appended)
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      if (!Number.isFinite(target)) return;
      if (reduce) {
        el.textContent = `${target}${suffix}`;
        return;
      }
      const duration = 1800;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          if (el.hasAttribute("data-reveal")) el.classList.add("is-in");
          if (el.hasAttribute("data-count")) countUp(el);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal], [data-count]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
