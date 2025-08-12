import { useScrollTracking } from "@/hooks/useScrollTracking";
import RecruiterPartner from "@/components/RecruiterPartner";
import RecruiterClient from "@/components/RecruiterTestimonial";
import RecruiterWhyUs from "@/components/RecruiterWhyUs";
import RecruiterFeatures from "@/components/RecruiterFeatures";
import RecruiterHowItWorks from "@/components/RecruiterHowItWorks";
import Navbar from "@/components/Navbar";
import RecruiterHero from "@/components/recruiterHero";
import RecruiterCallToAction from "@/components/recruiterCallToAction";
import Footer from "@/components/Footer";

const Recruiter = () => {
  useScrollTracking();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <RecruiterHero />

      <RecruiterFeatures />
      <RecruiterHowItWorks />
      <RecruiterWhyUs />
      <RecruiterPartner />
      <RecruiterClient />

      <RecruiterCallToAction />
      <Footer />
    </div>
  );
};

export default Recruiter;
