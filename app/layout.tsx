import type { Metadata } from "next";
import { Heebo, Outfit } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "דוד שילוח | אסטרטגיה, חדשנות וטכנולוגיה",
  description: "בלוג מקצועי העוסק בצומת שבין בינה מלאכותית, פסיכולוגיה צרכנית ואסטרטגיה עסקית.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body
        className={`${heebo.variable} ${outfit.variable} font-sans antialiased bg-slate-50 dark:bg-[#0B1121] text-slate-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
