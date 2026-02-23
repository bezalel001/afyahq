import { Hero } from "./components/Hero";
import { BrandStory } from "./components/BrandStory";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { VisionMission } from "./components/VisionMission";
import { CoreValues } from "./components/CoreValues";
import { HowItWorks } from "./components/HowItWorks";
import { BusinessModel } from "./components/BusinessModel";
import { WhyNow } from "./components/WhyNow";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { DataDashboard } from "./components/DataDashboard";
import { Favicon } from "./components/Favicon";
import { ScanToVerify } from "./components/ScanToVerify";

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Favicon />
      <Navigation />
      <Hero />
      <BrandStory />
      <Problem />
      <Solution />
      <ScanToVerify />
      <DataDashboard />
      <VisionMission />
      <CoreValues />
      <HowItWorks />
      <BusinessModel />
      <WhyNow />
      <Footer />
    </div>
  );
}