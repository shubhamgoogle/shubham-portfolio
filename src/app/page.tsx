import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoAmI from "@/components/WhoAmI";
import FeaturedSystems from "@/components/FeaturedSystems";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ArticlesSection from "@/components/ArticlesSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialSidebars from "@/components/SocialSidebars";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb] text-[#1f2937] relative selection:bg-[#007a7a] selection:text-white">
      <Navbar />
      <SocialSidebars />
      <main id="main" className="flex-1">
        <Hero />
        <WhoAmI />
        <FeaturedSystems />
        <ExperienceTimeline />
        <ArticlesSection />
        <SkillsMatrix />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
