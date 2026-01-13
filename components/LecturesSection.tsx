"use client";

import { siteContent } from "@/app/data/content";
import Link from "next/link";

export function LecturesSection() {
    const { title, subtitle, linkText, items } = siteContent.lecturesSection;

    return (
        <section className="w-full max-w-[1400px] px-6 md:px-12 mb-24 animate-fade-in-up animate-delay-400" id="lectures">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        {title}
                    </h2>
                    <p className="text-slate-500 dark:text-gray-400 mt-2">
                        {subtitle}
                    </p>
                </div>
                <Link
                    className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                    href="#"
                >
                    {linkText}
                    <span className="material-symbols-rounded">arrow_back</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item) => {
                    // Dynamic color matching
                    const colorClasses = {
                        blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
                        purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600",
                        green: "bg-green-100 dark:bg-green-900/30 text-green-600",
                        primary: "bg-blue-600 text-white shadow-glow"
                    };

                    const containerClasses = item.gradient
                        ? `bg-gradient-to-br ${item.gradient} border border-blue-600/10 hover:border-blue-600/30 relative overflow-hidden`
                        : "bg-white dark:bg-[#151e32] border border-slate-100 dark:border-white/5";

                    return (
                        <div
                            key={item.id}
                            className={`group p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 ${containerClasses}`}
                        >
                            {item.gradient && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            )}

                            <div className={`size-12 rounded-xl flex items-center justify-center mb-2 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                                <span className="material-symbols-rounded text-2xl">{item.icon}</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white relative z-10">
                                {item.title}
                            </h3>

                            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed relative z-10">
                                {item.description}
                            </p>

                            <button className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all relative z-10">
                                הזמנת הרצאה
                                <span className="material-symbols-rounded text-lg">arrow_back</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
