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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BrandStory />
      <Problem />
      <Solution />
      <VisionMission />
      <CoreValues />
      <HowItWorks />
      <BusinessModel />
      <WhyNow />
      <Footer />
    </div>
  );
}
