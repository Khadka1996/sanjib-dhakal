import type { MetadataRoute } from "next";
import { posts } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
