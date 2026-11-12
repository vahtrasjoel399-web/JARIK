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

/* Price list icons (thin line) */
export const Seat = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M8 3.5h3.5a1.5 1.5 0 0 1 1.5 1.6l-.6 8.4H7.6L6.5 5.2A1.5 1.5 0 0 1 8 3.5Z" />
    <path d="M7.6 13.5h8.9a2 2 0 0 1 2 2.3l-.3 1.7a1.5 1.5 0 0 1-1.5 1.3H8.5a1.5 1.5 0 0 1-1.5-1.3l-.4-2.6" />
    <path d="M9 19v2M16 19v2" />
  </svg>
);
export const Sparkles = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M10 3.5 11.6 8.4 16.5 10l-4.9 1.6L10 16.5l-1.6-4.9L3.5 10l4.9-1.6L10 3.5Z" />
    <path d="M18 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
  </svg>
);
export const Vacuum = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M14 3.5c3 0 4.5 1.7 4.5 4v10" />
    <circle cx="16.5" cy="18.5" r="2" />
    <path d="M14 3.5 8 15" />
    <path d="M4 15h7.5a1.5 1.5 0 0 1 1.5 1.5V20H3.5v-3.5A1.5 1.5 0 0 1 5 15" />
  </svg>
);
export const Leather = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M7 3.5c1.2 1 3 1.5 5 1.5s3.8-.5 5-1.5c.8 1.6 2.2 2.6 3.5 3-1 2.5-1.5 4.5-1 6.5.6 2.5-.8 4.6-2.8 5.4-1.6.6-3 1.2-4.7 2.1-1.7-.9-3.1-1.5-4.7-2.1-2-.8-3.4-2.9-2.8-5.4.5-2 0-4-1-6.5 1.3-.4 2.7-1.4 3.5-3Z" />
    <path d="M12 8.5v8" strokeDasharray="1.2 1.8" />
  </svg>
);
export const Layers = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 16 9 4.5 9-4.5" />
  </svg>
);
export const Stain = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M10.5 4c2.8 3.6 5 6.2 5 9.2a5 5 0 0 1-10 0c0-3 2.2-5.6 5-9.2Z" />
    <path d="M8.3 14a2.3 2.3 0 0 0 2 2.2" />
    <circle cx="18.5" cy="7" r="1.3" />
    <circle cx="19" cy="15.5" r="0.9" />
    <circle cx="16.5" cy="4" r="0.7" />
  </svg>
);
export const Info = ({ size, ...p }: P) => (
  <svg {...base(size, p)}>
    <path d="M12 11v6M12 7.5v.01" strokeWidth="2" />
  </svg>
);
