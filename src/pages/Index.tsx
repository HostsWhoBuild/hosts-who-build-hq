import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { AudienceSection } from "@/components/AudienceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { AspiringHostsSection } from "@/components/AspiringHostsSection";
import { MentorshipSection } from "@/components/MentorshipSection";
import { CommunityCTA } from "@/components/CommunityCTA";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <AudienceSection />
      <BenefitsSection />
      <HowItWorks />
      <AspiringHostsSection />
      <MentorshipSection />
      <CommunityCTA />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
