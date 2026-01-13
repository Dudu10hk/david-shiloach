import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { AboutSection } from "@/components/AboutSection";
import { LecturesSection } from "@/components/LecturesSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Categories />
        <FeaturedArticles />
        <LecturesSection />
        <AboutSection />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
