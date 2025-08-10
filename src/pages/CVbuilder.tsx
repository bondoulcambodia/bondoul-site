import Hero from "@/components/CV-Hero";
import ProblemSolution from "@/components/CV-ProblemSolution";
import Benefits from "@/components/CV-Benefits";
import SocialProof from "@/components/CV-SocialProof";
import CallToAction from "@/components/CV-CallToAction";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const CVbuilder = () => {
  useScrollTracking();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {/* <ProblemSolution /> */}
      <Benefits />
      <SocialProof />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default CVbuilder;
