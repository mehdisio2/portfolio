import { HeroSection } from "@/components/hero-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ApproachSection } from "@/components/approach-section";
import { CaseStudySection } from "@/components/case-study-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ApproachSection />
        <CaseStudySection />
      </main>
    </div>
  );
}
