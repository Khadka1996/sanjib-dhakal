# संजिव ढकाल · Sanjib Dhakal

Campaign website for **Sanjib Dhakal**, candidate for Joint General Secretary (सहमहामन्त्री), Koshi Province, at the Nepali Congress 15th General Convention.

The whole site is bilingual (नेपाली / English) and remembers the visitor's language choice.

## Features

- **Hero** with an animated photo ring, and a navbar with a light-sweep logo and a mobile menu
- **Leaders** row and **party history** slider (२००७ to २०८२), modelled on nepalicongress.org
- **Journey** timeline, **manifesto** with eight pledges, gallery, videos and blog
- **Suggestion form** that opens WhatsApp with the visitor's message already filled in
- WhatsApp campaign group banner and floating chat button
- SEO: Open Graph and X (Twitter) cards with a 1200×630 share image, JSON-LD (Person, WebSite, Article), sitemap, robots and web manifest
- Custom 404 and error pages, security headers and long-lived caching for media

## Tech

Next.js 14 (App Router), React 18 and TypeScript, with plain CSS (no UI framework). Fonts are Khand, Fustat, Poppins and Noto Sans Devanagari.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production

```bash
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to the real domain
npm run typecheck
npm run build
npm start
```

`NEXT_PUBLIC_SITE_URL` sets the canonical URLs, sitemap and social share previews. On Vercel the production URL is used automatically when it isn't set.

After the first deploy, paste the URL into the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and click **Scrape Again** to refresh the share preview.

## Editing content

| What | Where |
|---|---|
| Timeline, manifesto, gallery, blog posts, leaders, party history, phone and WhatsApp number | `lib/content.ts` |
| Site URL and share image | `lib/site.ts`, `public/og-cover.jpg` |
| Styles | `app/globals.css` |
| Images | `public/images`, `public/leaders`, `public/history` |

## Credits

Designed and developed by [MNZ](https://www.khadka-manish.com.np/).

Party history text and historical photos are from [nepalicongress.org](https://nepalicongress.org/).

© Sanjib Dhakal. All rights reserved.
