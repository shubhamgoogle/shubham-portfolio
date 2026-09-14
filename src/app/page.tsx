import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSystems from "@/components/FeaturedSystems";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-[#f1f5f9]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedSystems />
        <SkillsMatrix />
        <ExperienceTimeline />
        <InteractiveTerminal />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
