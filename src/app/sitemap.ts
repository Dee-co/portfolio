import type { MetadataRoute } from "next";
import { profile, navLinks } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((l) => ({
    url: `${profile.siteUrl}${l.href === "/" ? "" : l.href}`,
    lastModified: new Date(),
  }));
}
