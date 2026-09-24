import type { MetadataRoute } from "next";

const BASE = "https://kawsar9990.netlify.app";

const blogSlugs = [
  "architecting-scalable-full-stack-web-applications",
  "data-structures-and-algorithm-optimization",
  "designing-smart-embedded-systems",
];

const projectSlugs = [
  "project-1",
  "project-2",
  "project-3",
  "project-4",
  "project-5",
  "project-6",
  "project-7",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...blogSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${BASE}/project/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}