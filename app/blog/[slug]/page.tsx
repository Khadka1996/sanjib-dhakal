import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Post from "@/components/Post";
import { posts } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return {};
  const url = `/blog/${p.slug}`, image = { url: `/images/${p.img}.jpg`, alt: p.t.ne };
  return {
    title: p.t.ne, description: p.b.ne, alternates: { canonical: url },
    openGraph: { type: "article", url, title: p.t.ne, description: p.b.ne, locale: "ne_NP", authors: ["Sanjib Dhakal"], images: [image] },
    twitter: { card: "summary_large_image", title: p.t.ne, description: p.b.ne, images: [image] },
  };
};
export default function Page({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const ld = { "@context": "https://schema.org", "@type": "Article", headline: p.t.ne, description: p.b.ne, image: `${SITE_URL}/images/${p.img}.jpg`, inLanguage: "ne", mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`, author: { "@id": `${SITE_URL}/#person` }, publisher: { "@id": `${SITE_URL}/#person` } };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
      <Post p={p} />
    </>
  );
}
