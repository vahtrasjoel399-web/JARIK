/**
 * Business details and images. Edit this file (and content/translations.ts) to update the site.
 * Every value in [BRACKETS] is a placeholder for the real business data.
 */

export const site = {
  name: "[NAME]",
  city: "[CITY]",
  address: "[ADDRESS]",
  /** Shown on the page, e.g. "+372 5555 5555" */
  phone: "[PHONE]",
  /** Digits only, with country code, no "+" or spaces, e.g. "37255555555". Used for wa.me and tel: links. */
  phoneDigits: "[PHONE]",
  email: "[EMAIL]",
  instagram: "[@INSTAGRAM]",
  instagramUrl: "https://instagram.com/[INSTAGRAM]",
  hours: "[HOURS]",
  year: "[YEAR]",
  /** Production URL, used for SEO tags (canonical, hreflang, Open Graph). */
  url: "https://example.com",
  /** Query for the Google Maps embed. Usually the full address. */
  mapQuery: "[ADDRESS], [CITY], Estonia",
} as const;

/**
 * Stats row. Put REAL numbers here (e.g. 1200). While a value is null, "[X]" is shown.
 * Numbers count up when the row scrolls into view.
 */
export const stats: { value: number | null; suffix: string }[] = [
  { value: null, suffix: "+" }, // cars detailed
  { value: null, suffix: "" }, // years experience
  { value: null, suffix: "%" }, // returning clients
  { value: null, suffix: " h" }, // average job
];

export const locales =["et", "ru", "en"] as const;
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
  heroBlur: u("1617788138017-80ad40651399"),
  heroCar: u("1560009320-c01920eef9f8"), // side profile on grey studio backdrop
  // Ideally a top-view PNG cutout of a car with a transparent background.
  typeCar: u("1617788138017-80ad40651399"),
  services: {
    exterior: u("1520340356584-f9917d1eea6f"),
    interior: u("1610647752706-3bb12232b3ab"),
    polishing: u("1618843479313-40f8afb4b4d8"),
    ceramic: u("1617654112368-307921291f42"),
    headlights: u("1632823469850-2f77dd9c7f93"),
    leather: u("1449965408869-eaa3f722e40d"),
    other: u("1492144534655-ae79c964c9d7"),
  },
  shine: u("1626668893632-6f3a4466d22f"),
  revive: u("1494905998402-395d579af36f"),
  deepClean: u("1607860108855-64acf2078ed9"),
  /**
   * Before/after pairs. Right now each pair uses ONE photo and fakes the "before" look with a CSS
   * dirt filter (fakeBefore: true). Replace with real before/after photos of the same car and set
   * fakeBefore to false.
   */
  beforeAfter: [
    { before: u("1607603750909-408e193868c7"), after: u("1607603750909-408e193868c7"), fakeBefore: true },
    { before: u("1621007947382-bb3c3994e3fb"), after: u("1621007947382-bb3c3994e3fb"), fakeBefore: true },
    { before: u("1555215695-3004980ad54e"), after: u("1555215695-3004980ad54e"), fakeBefore: true },
  ],
  bentoTall: u("1580273916550-e323be2ae537"),
  bentoPhoto: u("1514316454349-750a7fd3da3a"),
  avatars: [
    u("1606664515524-ed2f786a0bd6"),
    u("1503376780353-7e6692767b70"),
    u("1552519507-da3b142c6e3d"),
  ],
  review: u("1606664515524-ed2f786a0bd6"),
  ctaCar: u("1485291571150-772bcfc10da5"),
  footer: [
    u("1492144534655-ae79c964c9d7"),
    u("1617654112368-307921291f42"),
    u("1520340356584-f9917d1eea6f"),
    u("1607860108855-64acf2078ed9"),
  ],
} as const;

/** Product brands used in the studio. Replace with the brands you actually use. */
export const brands = ["Koch-Chemie", "Gyeon", "Rupes", "Meguiar's", "Gtechniq"];
