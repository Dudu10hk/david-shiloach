import { siteContent } from "@/app/data/content";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://david-shiloach-blog.vercel.app"; // Placeholder, will update later

    const articles = siteContent.featuredSection.articles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.9,
        },
    ];

    return [...routes, ...articles];
}
