import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import DashboardSection from "./components/DashboardSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import CampaignsSection from "./components/CampaignsSection";
import Compare from "./components/Compare";
import CaseStudy from "./components/CaseStudy";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
import { DEFAULT_CLINIC } from "./lib/clinics";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero clinic={DEFAULT_CLINIC} />
        <Logos />
        <DashboardSection />
        <HowItWorks />
        <Features />
        <CampaignsSection />
        <Compare />
        <CaseStudy />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
}
