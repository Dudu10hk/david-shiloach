import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { AboutSection } from "@/components/AboutSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Suspense fallback={<div className="h-20 w-full animate-pulse bg-slate-100 dark:bg-slate-800 rounded-xl mb-16"></div>}>
          <Categories />
        </Suspense>
        <FeaturedArticles />
        <AboutSection />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
