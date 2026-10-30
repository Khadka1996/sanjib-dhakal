import type { Metadata, Viewport } from "next";
import { Khand, Poppins, Noto_Sans_Devanagari } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/site";
import "./globals.css";
const head = Khand({ subsets: ["devanagari", "latin"], weight: ["500", "600", "700"], variable: "--serif", display: "swap" });
const pop = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--pop", display: "swap" });
const sans = Noto_Sans_Devanagari({ subsets: ["devanagari", "latin"], weight: ["400", "500", "600", "700"], variable: "--sans", display: "swap" });
const title = "संजिव ढकाल | कोशी प्रदेश सहमहामन्त्री उम्मेदवार, नेपाली कांग्रेस १५औं महाधिवेशन";
const description = "संजिव ढकाल (Sanjib Dhakal), नेपाली कांग्रेस १५औं महाधिवेशनमा कोशी प्रदेश सहमहामन्त्री पदका उम्मेदवार। केन्द्रीय महाधिवेशन प्रतिनिधि, इलाम क्षेत्र १। घोषणापत्र, संघर्षको यात्रा, तस्बिर र सम्पर्क।";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | संजिव ढकाल" },
  description,
  applicationName: SITE_NAME,
  authors: [{ name: "Sanjib Dhakal", url: SITE_URL }],
  creator: "MNZ",
  publisher: "Sanjib Dhakal",
  category: "politics",
  keywords: ["Sanjib Dhakal", "Sanjeev Dhakal", "संजिव ढकाल", "संजीव ढकाल", "Nepali Congress", "नेपाली कांग्रेस", "Koshi Province", "कोशी प्रदेश", "सहमहामन्त्री", "Joint General Secretary", "15th General Convention", "१५औं महाधिवेशन", "Ilam", "इलाम", "Nepal Student Union", "नेविसंघ", "Nepal Law Campus"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: { title, description, url: "/", siteName: SITE_NAME, locale: "ne_NP", alternateLocale: ["en_US"], type: "profile", firstName: "Sanjib", lastName: "Dhakal", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  other: { "og:image:type": "image/jpeg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#2D6B28", colorScheme: "light" };
const ld = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: ["ne", "en"], publisher: { "@id": `${SITE_URL}/#person` } },
    { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Sanjib Dhakal", alternateName: ["संजिव ढकाल", "Sanjeev Dhakal"], url: SITE_URL, image: `${SITE_URL}/images/sanjeev.jpg`, jobTitle: "Candidate for Joint General Secretary, Koshi Province", description, affiliation: { "@type": "PoliticalParty", name: "Nepali Congress", url: "https://nepalicongress.org" }, alumniOf: { "@type": "CollegeOrUniversity", name: "Ratna Rajyalaxmi Campus, Tribhuvan University" }, homeLocation: { "@type": "Place", name: "Ilam, Koshi Province, Nepal" }, email: "mailto:sanjibdhakal@gmail.com", telephone: "+9779849485290", sameAs: ["https://www.facebook.com/sanjib.dhakal.39", "https://www.instagram.com/dhakal.sanjib", "https://www.tiktok.com/@sanjibdhk1"] },
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ne" className={`${head.variable} ${pop.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Fustat (dates) isn't in next/font's list for this Next version */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fustat:wght@500;600;700&display=swap" />
        <link rel="preload" as="image" href="/images/sanjeev.jpg" />
      </head>
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} /><LangProvider>{children}</LangProvider></body>
    </html>
  );
}
