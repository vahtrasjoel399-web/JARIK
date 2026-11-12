/**
 * Business details, prices and images. Edit this file (and content/translations.ts) to update the site.
 * Every value still in [BRACKETS] is a placeholder for real business data.
 */

export const site = {
  name: "CleanDrive",
  tagline: "Detailing Studio",
  /** Shown as the location everywhere on the site. */
  address: "Ahtme, Ida-Virumaa",
  city: "Ahtme",
  region: "Ida-Virumaa",
  /** Shown on the page */
  phone: "+372 5560 1588",
  /** Digits only, with country code. Used for wa.me and tel: links. */
  phoneDigits: "37255601588",
  email: "[EMAIL]",
  instagram: "@cleandrive_09",
  instagramUrl: "https://www.instagram.com/cleandrive_09/",
  hours: "[HOURS]",
  year: "2026",
  /** Production URL, used for SEO tags (canonical, hreflang, Open Graph). Change to the real domain. */
  url: "https://example.com",
  /** Query for the Google Maps embed. */
  mapQuery: "Ahtme, Kohtla-Järve, Estonia",
} as const;

/**
 * Services and prices ("from" price in euros). Names and descriptions are in content/translations.ts
 * under services.items (same keys). Order here = order on the site.
 */
export const services = [
  { key: "basic", price: 30, icon: "seat" },
  { key: "deep", price: 55, icon: "sparkles" },
  { key: "full", price: 130, icon: "vacuum" },
  { key: "leather", price: 40, icon: "leather" },
  { key: "plastic", price: 20, icon: "layers" },
  { key: "stains", price: 10, icon: "stain" },
] as const;

export type ServiceKey = (typeof services)[number]["key"];
export type ServiceIcon = (typeof services)[number]["icon"];

/**
 * Stats row. Put REAL numbers here (e.g. 1200). While a value is null, "[X]" is shown.
 * Numbers count up when the row scrolls into view.
 */
export const stats: { value: number | null; suffix: string }[] = [
  { value: null, suffix: "+" }, // cars cleaned
  { value: null, suffix: "" }, // years experience
  { value: null, suffix: "%" }, // returning clients
  { value: null, suffix: " h" }, // average job
];

export const locales = ["et", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "et";
export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** WhatsApp booking link with a prefilled message. */
export function waLink(message: string) {
  return `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(message)}`;
}

/**
 * Placeholder photos from Unsplash. All photos are shown in grayscale via CSS.
 * To use your own: put files in /public/images and replace the URL with "/images/your-file.jpg".
 */
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=80`;

export const images = {
  heroBlur: u("1652509407752-71703cd40435"),
  heroCar: u("1560009320-c01920eef9f8"), // side profile on grey studio backdrop
  // Ideally a top-view PNG cutout of a car with a transparent background.
  typeCar: u("1617788138017-80ad40651399"),
  services: {
    basic: u("1732357624591-f2137085659b"),
    deep: u("1771491237209-b89bc7290588"),
    full: u("1611073819030-ac7216dd0022"),
    leather: u("1616550005865-3c97407c4cf8"),
    plastic: u("1638602030549-d04078ed0b90"),
    stains: u("1667893530449-e58102223524"),
  } satisfies Record<ServiceKey, string>,
  shine: u("1614530499660-fe1fbd7921d6"),
  revive: u("1533630217389-3a5e4dff5683"),
  deepClean: u("1771491237218-cbd4a707497e"),
  /**
   * Before/after pairs. Right now each pair uses ONE photo and fakes the "before" look with a CSS
   * dirt filter (fakeBefore: true). Replace with real before/after photos of the same interior and
   * set fakeBefore to false.
   */
  beforeAfter: [
    { before: u("1602794351477-4b0a974fd386"), after: u("1602794351477-4b0a974fd386"), fakeBefore: true },
    { before: u("1605647381739-9bba88b1c5d1"), after: u("1605647381739-9bba88b1c5d1"), fakeBefore: true },
    { before: u("1649136378672-b965cb9935d5"), after: u("1649136378672-b965cb9935d5"), fakeBefore: true },
  ],
  helpCard: u("1616196334411-1d8d09708ca6"),
  bentoTall: u("1652860316277-370ca5b1b1df"),
  bentoPhoto: u("1682858110563-3f609263d418"),
  avatars: [
    u("1616196334411-1d8d09708ca6"),
    u("1563986642669-49162177a0bc"),
    u("1599912027667-755b68b4dd3b"),
  ],
  review: u("1656077885491-3922185f3932"),
  ctaCar: u("1485291571150-772bcfc10da5"),
  footer: [
    u("1771491237225-01931a752f58"),
    u("1549064233-945d7063292f"),
    u("1643142314404-32a911f3ede2"),
    u("1605437241278-c1806d14a4d9"),
  ],
} as const;

/** Product brands used in the studio. Replace with the brands you actually use. */
export const brands = ["Koch-Chemie", "Gyeon", "Rupes", "Meguiar's", "Gtechniq"];
