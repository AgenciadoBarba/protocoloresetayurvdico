import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import ForYouSection from "@/components/landing/ForYouSection";
import MethodSection from "@/components/landing/MethodSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import IncludedSection from "@/components/landing/IncludedSection";
import ElizaSection from "@/components/landing/ElizaSection";
import BonusSection from "@/components/landing/BonusSection";
import PeaceStrip from "@/components/landing/PeaceStrip";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import StickyBar from "@/components/landing/StickyBar";

const Index = () => {
  useUtmCapture();
  return (
  <div className="pb-[68px] md:pb-0">
    <TopBar />
    <HeroSection />
    <PainSection />
    <ForYouSection />
    <MethodSection />
    <TestimonialsSection />
    <IncludedSection />
    <ElizaSection />
    <BonusSection />
    <PeaceStrip />
    <GuaranteeSection />
    <OfferSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
    <StickyBar />
  </div>
  );
};

export default Index;
