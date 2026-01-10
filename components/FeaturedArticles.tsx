"use client";

import { siteContent } from "@/app/data/content";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export function FeaturedArticles() {
    const { title, subtitle, viewAllText, articles } = siteContent.featuredSection;
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category");

    const filteredArticles = useMemo(() => {
        if (!currentCategory) return articles;
        return articles.filter(article => article.categoryId === currentCategory);
    }, [currentCategory, articles]);

    return (
        <section className="w-full max-w-[1400px] px-6 md:px-12 mb-24 opacity-0 animate-fade-in-up animate-delay-300" id="articles">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        {title}
                    </h2>
                    <p className="text-slate-500 dark:text-gray-400 mt-2">
                        {currentCategory
                            ? `מציג מאמרים בנושא: ${siteContent.categories.find(c => c.id === currentCategory)?.label}`
                            : subtitle}
                    </p>
                </div>
                {!currentCategory && (
                    <Link
                        className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                        href="/blog"
                    >
                        {viewAllText}
                        <span className="material-symbols-rounded">arrow_back</span>
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.slug}`}
                            className="group relative flex flex-col bg-white dark:bg-[#151e32] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${article.image}')` }}
                                ></div>
                                <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur ${article.tagColor} text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm`}>
                                    {article.tag}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-3 flex-1">
                                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                                    <span className="material-symbols-rounded text-base">schedule</span>
                                    {article.readTime}
                                    <span className="mx-1">•</span>
                                    {article.date}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto pt-6 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="size-8 rounded-full bg-slate-200 bg-cover bg-center"
                                            style={{ backgroundImage: `url('${article.author.avatar}')` }}
                                        ></div>
                                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                                            {article.author.name}
                                        </span>
                                    </div>
                                    <span className="text-blue-600 font-bold text-sm group-hover:translate-x-[-4px] transition-transform">
                                        קרא עוד
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-slate-500">
                        לא נמצאו מאמרים בקטגוריה זו עדיין.
                    </div>
                )}
            </div>
        </section>
    );
}
