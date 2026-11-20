import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://interior-designer-iota-three.vercel.app";

  const routes = [
    "",
    "/interior-design-prayagraj",
    "/pvc-wpc-wall-panels-prayagraj",
    "/modular-kitchen-prayagraj",
    "/upvc-windows-doors",
    "/portfolio",
    "/contact-showroom",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-11-10"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.includes("prayagraj") ? 0.9 : 0.7,
  }));
}

