"use client";

import { siteContent } from "@/app/data/content";

export function Newsletter() {
    const { title, description, placeholder, buttonText, subtext } = siteContent.newsletter;

    return (
        <section className="w-full bg-slate-900 text-white py-20 px-6 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[800px] mx-auto text-center flex flex-col gap-8 items-center relative z-10">
                <div className="flex flex-col gap-4">
                    <div className="size-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                        <span className="material-symbols-rounded text-3xl">mail</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-lg mx-auto">
                        {description}
                    </p>
                </div>
                <form className="flex flex-col md:flex-row gap-3 w-full max-w-lg mt-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="flex-1 h-14 rounded-xl px-6 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                        placeholder={placeholder}
                        type="email"
                    />
                    <button
                        className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
                        type="submit"
                    >
                        {buttonText}
                    </button>
                </form>
                <p className="text-gray-500 text-xs mt-2">{subtext}</p>
            </div>
        </section>
    );
}
