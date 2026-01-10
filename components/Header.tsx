import Link from "next/link";
import { siteContent } from "@/app/data/content";

export function Header() {
    const { logo, nav, cta } = siteContent.header;

    return (
        <div className="fixed w-full top-0 z-50 glass border-b border-slate-200 dark:border-white/5 transition-all duration-300">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4 cursor-pointer group">
                    <div className="size-10 flex items-center justify-center bg-blue-600 text-white rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-transform group-hover:scale-105">
                        <span className="material-symbols-rounded">terminal</span>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-slate-900 dark:text-white text-lg font-black tracking-tight leading-none">
                            {logo.text}
                        </h2>
                        <span className="text-xs text-slate-500 font-medium tracking-wide">
                            {logo.subtext}
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {nav.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className="text-sm font-medium text-slate-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 transition-colors cursor-pointer">
                        <span className="material-symbols-rounded">search</span>
                    </button>
                    <button className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                        <span>{cta}</span>
                        <span className="material-symbols-rounded text-[18px]">arrow_back</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
