"use client";

import { siteContent } from "@/app/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Categories } from "@/components/Categories";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

function BlogContent() {
    const { articles } = siteContent.featuredSection;
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category");

    const filteredArticles = useMemo(() => {
        if (!currentCategory) return articles;
        return articles.filter(article => article.categoryId === currentCategory);
    }, [currentCategory, articles]);

    const currentCategoryLabel = currentCategory
        ? siteContent.categories.find(c => c.id === currentCategory)?.label
        : "כל המאמרים";

    return (
        <main className="w-full pt-32 pb-20 px-6 md:px-12 max-w-[1400px]">

            {/* Page Header */}
            <div className="flex flex-col gap-6 mb-16 text-center animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
                    הבלוג
                </h1>
                <p className="text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
                    מחשבות, תובנות וניתוחי עומק על עולמות הטכנולוגיה, העיצוב והאסטרטגיה.
                </p>
            </div>

            {/* Filters */}
            <Categories />

            {/* Results Info */}
            <div className="mb-8 text-slate-500 dark:text-gray-400 font-medium animate-fade-in-up animate-delay-100">
                מציג: <span className="text-slate-900 dark:text-white font-bold">{currentCategoryLabel}</span>
                <span className="mx-2">•</span>
                {filteredArticles.length} תוצאות
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animate-delay-200">
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
                    <div className="col-span-full py-20 text-center flex flex-col items-center gap-4 text-slate-500">
                        <span className="material-symbols-rounded text-4xl opacity-50">search_off</span>
                        <p>לא נמצאו מאמרים בקטגוריה זו עדיין.</p>
                        <button onClick={() => window.location.href = '/blog'} className="text-blue-600 font-bold hover:underline">
                            נקה סינון
                        </button>
                    </div>
                )}
            </div>

        </main>
    );
}

export default function BlogIndex() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-slate-50 dark:bg-[#0B1121]">
            <Header />
            <Suspense fallback={
                <main className="w-full pt-32 pb-20 px-6 md:px-12 max-w-[1400px] text-center">
                    <div className="animate-pulse text-slate-400 text-lg">טוען מאמרים...</div>
                </main>
            }>
                <BlogContent />
            </Suspense>
            <Newsletter />
            <Footer />
        </div>
    );
}
