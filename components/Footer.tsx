import { siteContent } from "@/app/data/content";

export function Footer() {
    const { about, copyright } = siteContent.footer;

    return (
        <footer className="w-full bg-slate-50 dark:bg-[#0B1121] border-t border-slate-200 dark:border-white/5 pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-8 flex items-center justify-center bg-blue-600 text-white rounded-lg">
                            <span className="material-symbols-rounded text-sm">terminal</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-xl font-black tracking-tight">
                            דוד שילוח
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-gray-400 leading-relaxed max-w-sm">
                        {about}
                    </p>
                    <div className="flex gap-3 mt-2">
                        <a className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:bg-blue-600 hover:text-white transition-all" href={siteContent.aboutSection?.social.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-rounded text-lg">public</span>
                        </a>
                        <a className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:bg-blue-600 hover:text-white transition-all" href="#">
                            <span className="material-symbols-rounded text-lg">alternate_email</span>
                        </a>
                        <a className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:bg-blue-600 hover:text-white transition-all" href="#">
                            <span className="material-symbols-rounded text-lg">mail</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-slate-900 dark:text-white font-bold">ניווט</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a className="text-slate-500 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm" href="/">ראשי</a></li>
                        <li><a className="text-slate-500 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm" href="/blog">מאמרים</a></li>
                        <li><a className="text-slate-500 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm" href="#about">יצירת קשר</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-slate-900 dark:text-white font-bold">נושאים פופולריים</h4>
                    <ul className="flex flex-col gap-3">
                        <li><a className="text-slate-500 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm" href="#">בינה מלאכותית</a></li>
                        <li><a className="text-slate-500 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm" href="#">עיצוב מוצר</a></li>
                        <li><a className="text-slate-500 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm" href="#">פיתוח עסקי</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 dark:text-gray-500 text-sm">{copyright}</p>
                <p className="text-slate-500 dark:text-gray-500 text-sm flex items-center gap-1">
                    נבנה עם <span className="text-red-500">❤</span> וטכנולוגיה מתקדמת
                </p>
            </div>
        </footer>
    );
}
