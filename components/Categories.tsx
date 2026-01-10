"use client";

import { siteContent } from "@/app/data/content";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function Categories() {
    const { categories } = siteContent;
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const currentCategory = searchParams.get("category");

    const handleCategoryClick = (categoryId: string | null) => {
        const params = new URLSearchParams(searchParams.toString());

        if (categoryId) {
            params.set("category", categoryId);
        } else {
            params.delete("category");
        }

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <section className="w-full max-w-[1400px] px-6 md:px-12 mb-16 opacity-0 animate-fade-in-up animate-delay-300">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pb-6 border-b border-slate-200 dark:border-white/5">
                <button
                    onClick={() => handleCategoryClick(null)}
                    className={`h-10 px-6 rounded-full text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer ${!currentCategory
                            ? "bg-slate-900 text-white shadow-slate-900/10"
                            : "bg-white dark:bg-[#151e32] border border-slate-200 dark:border-white/5 text-slate-500 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600"
                        }`}
                >
                    הכל
                </button>
                {categories.map((cat, idx) => {
                    const isActive = currentCategory === cat.id;
                    return (
                        <button
                            key={idx}
                            onClick={() => handleCategoryClick(cat.id)}
                            className={`h-10 px-6 rounded-full text-sm font-medium transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${isActive
                                    ? "bg-blue-600 text-white shadow-blue-600/20 shadow-lg"
                                    : "bg-white dark:bg-[#151e32] border border-slate-200 dark:border-white/5 text-slate-500 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600"
                                }`}
                        >
                            <span className="material-symbols-rounded text-lg">{cat.icon}</span>
                            {cat.label}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
