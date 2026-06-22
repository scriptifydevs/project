import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import EcosystemSection from "@/components/landing/EcosystemSection";
import IntroScriptifyDevs from '@/components/landing/IntroScriptifyDevs';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Landing Page Sections go here */}
      <HeroSection />
      <HowItWorksSection />

      {/* Yahan S aur D ko capital kar diya gaya hai */}
      <IntroScriptifyDevs />

      <EcosystemSection />
    </main>
  );
}