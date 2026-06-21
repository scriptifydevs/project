import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import EcosystemSection from "@/components/landing/EcosystemSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Landing Page Sections go here */}
      <HeroSection />
      <HowItWorksSection />
      <EcosystemSection />


    </main>
  );
}
