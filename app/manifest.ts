import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "संजिव ढकाल | Sanjib Dhakal", short_name: "Sanjib Dhakal", description: "Candidate for Joint General Secretary, Koshi Province, Nepali Congress",
    start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#2D6B28", lang: "ne",
    icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/icon-512.png", sizes: "512x512", type: "image/png" }, { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }],
  };
}
