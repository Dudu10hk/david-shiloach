"use client";

import { siteContent } from "@/app/data/content";
import Image from "next/image";

export function AboutSection() {
    const { title, subtitle, description, image, social } = siteContent.aboutSection;

    return (
        <section className="w-full relative py-24 bg-white dark:bg-[#0B1121] overflow-hidden" id="about">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:order-1 flex flex-col gap-6 opacity-0 animate-fade-in-up">
                        <div className="inline-flex self-start px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wide">
                            {subtitle}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            {title}
                        </h2>

                        <div className="flex flex-col gap-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            {description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="pt-4 flex items-center gap-4">
                            <a
                                href={social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006097] text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20"
                            >
                                <span className="material-symbols-rounded">post_add</span>
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white rounded-xl font-bold transition-all"
                            >
                                צרו קשר
                            </a>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 relative group opacity-0 animate-fade-in-up animate-delay-200">
                        <div className="relative aspect-square max-w-[380px] mx-auto">
                            {/* Decorative framing */}
                            <div className="absolute inset-4 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl rotate-3 transition-transform group-hover:rotate-6 duration-700"></div>

                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl rotate-[-3deg] opacity-20 group-hover:rotate-[-6deg] transition-transform duration-700 blur-xl"></div>

                            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl rotate-0 transition-transform duration-500 group-hover:scale-[1.02]">
                                <Image
                                    src={image}
                                    alt="David Shiloach"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#1a2333] p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                                <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 relative">
                                    <span className="material-symbols-rounded">verified</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-400">מומחה מוסמך</span>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">Tech Strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
