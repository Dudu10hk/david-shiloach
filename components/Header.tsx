"use client";

import Link from "next/link";
import { siteContent } from "@/app/data/content";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
    const { logo, nav, cta } = siteContent.header;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <div className="fixed w-full top-0 z-50 glass border-b border-slate-200 dark:border-white/5 transition-all duration-300">
                <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4 cursor-pointer group z-50 relative">
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
                    <div className="flex items-center gap-4 z-50 relative">
                        <button className="hidden md:flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 transition-colors cursor-pointer">
                            <span className="material-symbols-rounded">search</span>
                        </button>
                        <button className="hidden md:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                            <span>{cta}</span>
                            <span className="material-symbols-rounded text-[18px]">arrow_back</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white transition-colors cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-rounded">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0B1121]/95 backdrop-blur-xl md:hidden pt-28 px-6"
                    >
                        <nav className="flex flex-col gap-6">
                            {nav.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-white/5 pb-4 last:border-0"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <button className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all w-full">
                                <span>{cta}</span>
                                <span className="material-symbols-rounded">arrow_back</span>
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
