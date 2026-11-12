import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 18, props: P) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const ArrowUpRight = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ArrowRight = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);
export const ArrowLeft = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M20 12H4M10 6l-6 6 6 6" />
  </svg>
);
export const ArrowUp = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M12 20V4M6 10l6-6 6 6" />
  </svg>
);
export const ChevronDown = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const Check = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const Menu = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const Close = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Hand = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12m0-6.5v-1a1.5 1.5 0 0 1 3 0V12m0-6a1.5 1.5 0 0 1 3 0v7.5c0 4.1-2.9 7.5-7 7.5-2.2 0-3.7-.9-5-2.6L3.4 14.7a1.6 1.6 0 0 1 2.5-2L8 15" />
  </svg>
);
export const Sliders = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M12 3v18M8 8l-4 4 4 4M16 8l4 4-4 4" />
  </svg>
);
export const Phone = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const Mail = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const Clock = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const Pin = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const Instagram = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);
export const WhatsApp = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2L9 9.5Z" />
  </svg>
);
