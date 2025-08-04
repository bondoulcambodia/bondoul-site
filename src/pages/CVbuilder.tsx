import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const CVbuilder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <SocialProof />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default CVbuilder;