import { siteContent } from "@/app/data/content";

export function Hero() {
    const { tag, title, description, primaryButton, secondaryButton, image } = siteContent.hero;

    return (
        <section className="w-full max-w-[1400px] px-6 md:px-12 py-16 md:py-24 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="flex flex-col gap-8 text-right order-2 lg:order-1 opacity-0 animate-fade-in-up">
                    <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-xs font-bold tracking-wider uppercase border border-blue-100 dark:border-blue-500/10">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                        {tag}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                        {title.line1}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-purple-600">
                            {title.line2}
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-gray-400 leading-relaxed max-w-xl">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2">
                        <button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white text-base font-bold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer">
                            {primaryButton}
                        </button>
                        <button className="h-12 px-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-base font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-rounded">podcasts</span>
                            {secondaryButton}
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="relative order-1 lg:order-2 opacity-0 animate-fade-in-up animate-delay-200">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('${image}')` }}
                        ></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}
