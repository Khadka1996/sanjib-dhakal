// Absolute site URL for canonical links, sitemap and social previews.
// Set NEXT_PUBLIC_SITE_URL to the real domain; on Vercel the production URL is used automatically.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || (vercel ? `https://${vercel}` : "http://localhost:3000")).replace(/\/$/, "");
export const SITE_NAME = "संजिव ढकाल | Sanjib Dhakal";
export const OG_IMAGE = { url: "/og-cover.jpg", width: 1200, height: 630, alt: "संजिव ढकाल, कोशी प्रदेश सहमहामन्त्री पदका उम्मेदवार, नेपाली कांग्रेस" };
