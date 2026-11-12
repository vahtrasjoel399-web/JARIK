# CleanDrive: Detailing Studio website (Ahtme, Ida-Virumaa)

One-page site in Estonian (default), Russian and English. Next.js 16 + Tailwind CSS 4, ready for Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /et
```

## Where to edit

| What | File |
|---|---|
| Business name, phone, email, location, hours, Instagram, site URL | `content/site.ts` |
| **Prices** (services and price list) | `content/site.ts` → `services` |
| Stats numbers (shown as `[X]` until filled in) | `content/site.ts` → `stats` |
| Photos (Unsplash placeholders) | `content/site.ts` → `images` |
| Product brands strip | `content/site.ts` → `brands` |
| **All texts** (ET / RU / EN): service names and descriptions, reviews, legal pages | `content/translations.ts` |
| Colours, fonts, motion | `app/globals.css` |

Search the project for `[` to find every placeholder that still needs real data.

### Important before going live
- All "Book" buttons and price list rows open `https://wa.me/37255601588?text=…` with a message in the current language.
- Still missing: email, opening hours, legal company name and registry code.
- `url` in `content/site.ts` must be the real domain (used for canonical, hreflang, Open Graph, sitemap).
- **Reviews**: replace the bracketed placeholders with real client reviews only.
- **Before/after**: each pair currently fakes the "before" look with a CSS filter. Add real before/after photos and set `fakeBefore: false`.
- Fill in the legal company name, registry code and the `[X]`/`[TÄPSUSTA]` parts of the privacy policy and terms.

### Own photos
Put files in `public/images/` and use `"/images/file.jpg"` instead of the Unsplash URL. Photos are shown in grayscale automatically. For the big "DETAILING" block, a top-view car as a transparent PNG works best.

## Deploy to Vercel
Push to GitHub and import the repo on vercel.com, or run `npx vercel` in this folder. No environment variables are needed.

## Notes
- The contact form sends nothing to a server: it opens WhatsApp with the filled-in details.
- Google Maps loads only after the visitor clicks "Show map", so no cookie banner is needed (no tracking cookies are set before that).
- Pages: `/et`, `/ru`, `/en`, plus `/[lang]/privacy` and `/[lang]/terms`. `sitemap.xml`, `robots.txt` and a per-language Open Graph image are generated automatically.
