import Hero from "@/components/CV-Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/CV-Benefits";
import SocialProof from "@/components/SocialProof";
import CallToAction from "@/components/CV-CallToAction";
import Footer from "@/components/Footer";

const CVbuilder = () => {
  return (
    <div className="min-h-screen bg-background">
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
