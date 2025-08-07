import { usePageTracking } from "@/hooks/usePageTracking";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import RecruiterPartner from "@/components/RecruiterPartner";
import RecruiterClient from "@/components/RecruiterClient";
import RecruiterWhyUs from "@/components/RecruiterWhyUs";
import RecruiterFeatures from "@/components/RecruiterFeatures";
import RecruiterHowItWorks from "@/components/RecruiterHowItWorks";
import Navbar from "@/components/Navbar";
import RecruiterHero from "@/components/recruiterHero";
import RecruiterCallToAction from "@/components/recruiterCallToAction";
import Footer from "@/components/Footer";

const Recruiter = () => {
  usePageTracking();
  useScrollTracking();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <RecruiterHero />

      <RecruiterFeatures />
      <RecruiterWhyUs />
      <RecruiterPartner />
      <RecruiterClient />
      <RecruiterHowItWorks />
      <RecruiterCallToAction />
      <Footer />
    </div>
  );
};

export default Recruiter;
