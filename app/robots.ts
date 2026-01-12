import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: ["GPTBot", "Google-Extended", "CCBot", "anthropic-ai", "Claude-Web", "PerplexityBot"],
                allow: "/",
            }
        ],
        sitemap: "https://david-shiloach-blog.vercel.app/sitemap.xml",
    };
}
