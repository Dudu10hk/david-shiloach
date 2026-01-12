import { siteContent } from "@/app/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
    return siteContent.featuredSection.articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const article = siteContent.featuredSection.articles.find(
        (a) => a.slug === slug
    );

    if (!article) {
        return {
            title: "מאמר לא נמצא",
        };
    }

    return {
        title: `${article.title} | דוד שילוח`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: "article",
            publishedTime: article.date,
            authors: [article.author.name],
            images: [
                {
                    url: article.image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                }
            ],
            locale: "he_IL",
            siteName: "דוד שילוח",
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        }
    };
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = siteContent.featuredSection.articles.find(
        (a) => a.slug === slug
    );

    if (!article) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-slate-50 dark:bg-[#0B1121]">
            <Header />

            <main className="w-full pt-28 pb-20">
                <article className="max-w-[800px] mx-auto px-6">
                    {/* Article Header */}
                    <header className="flex flex-col gap-6 mb-12 text-center animate-fade-in-up">
                        <div className={`inline-flex self-center items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 ${article.tagColor.replace('text-', 'text-')} text-sm font-bold tracking-wider uppercase border border-slate-200 dark:border-white/10`}>
                            {article.tag}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex items-center justify-center gap-3 text-slate-500 text-sm">
                            <div className="flex items-center gap-2">
                                <div
                                    className="size-8 rounded-full bg-slate-200 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${article.author.avatar}')` }}
                                />
                                <span className="font-bold text-slate-900 dark:text-white">{article.author.name}</span>
                            </div>
                            <span>•</span>
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl mb-16 animate-fade-in-up animate-delay-200">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('${article.image}')` }}
                            role="img"
                            aria-label={(article as any).imageAlt || article.title}
                        ></div>
                    </div>

                    {/* Article Content */}
                    <div
                        className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-blue-600 max-w-none animate-fade-in-up animate-delay-300"
                        dangerouslySetInnerHTML={{ __html: article.content || '' }}
                    />

                    {/* Share / Tags Footer */}
                    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
                        <p className="text-slate-500 text-sm">שתפו את המאמר:</p>
                        <div className="flex gap-2">
                            <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                                <span className="material-symbols-rounded">ios_share</span>
                            </button>
                        </div>
                    </div>
                </article>
            </main>

            <Newsletter />
            <Footer />
        </div>
    );
}
