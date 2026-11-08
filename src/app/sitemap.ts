import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-data";

const routes = [
  "/",
  "/about",
  "/academics",
  "/courses",
  "/competitive-exams",
  "/facilities",
  "/admissions",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
