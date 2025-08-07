import { usePageTracking } from "@/hooks/usePageTracking";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import RecruiterWhyUs from "@/components/RecruiterWhyUs";
import RecruiterFeatures from "@/components/RecruiterFeatures";
import RecruiterHowItWorks from "@/components/RecruiterHowItWorks";
import Navbar from "@/components/Navbar";
import RecruiterHero from "@/components/recruiterHero";

const Recruiter = () => {
  usePageTracking();
  useScrollTracking();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <RecruiterHero />
      <RecruiterHowItWorks />
      <RecruiterFeatures />
      <RecruiterWhyUs />
    </div>
  );
};

export default Recruiter;
