import { useUtmCapture } from "@/hooks/useUtmCapture";
import HeroSectionB from "@/components/landing-b/HeroSectionB";
import PainSectionB from "@/components/landing-b/PainSectionB";
import ForYouSectionB from "@/components/landing-b/ForYouSectionB";
import AyurvedaSection from "@/components/landing-b/AyurvedaSection";
import MethodSection from "@/components/landing/MethodSection";
import ThyroidStressSection from "@/components/landing-b/ThyroidStressSection";
import TimelineSection from "@/components/landing-b/TimelineSection";
import TestimonialsSectionB from "@/components/landing-b/TestimonialsSectionB";
import IncludedSectionB from "@/components/landing-b/IncludedSectionB";
import ElizaSectionB from "@/components/landing-b/ElizaSectionB";
import BonusSectionB from "@/components/landing-b/BonusSectionB";
import PeaceStrip from "@/components/landing/PeaceStrip";
import GuaranteeSectionB from "@/components/landing-b/GuaranteeSectionB";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import StickyBar from "@/components/landing/StickyBar";

const IndexB = () => {
  useUtmCapture();
  return (
  <div className="pb-[68px] md:pb-0">
    <HeroSectionB />
    <PainSectionB />
    <ForYouSectionB />
    <AyurvedaSection />
    <MethodSection />
    <ThyroidStressSection />
    <TimelineSection />
    <TestimonialsSectionB />
    <IncludedSectionB />
    <ElizaSectionB />
    <BonusSectionB />
    <PeaceStrip />
    <GuaranteeSectionB />
    <OfferSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
    <StickyBar />
  </div>
  );
};

export default IndexB;
