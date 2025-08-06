import { usePageTracking } from "@/hooks/usePageTracking";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import Navbar from "@/components/Navbar";
import RecruiterHero from "@/components/recruiterHero";

const Recruiter = () => {
  usePageTracking();
  useScrollTracking();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <RecruiterHero />
    </div>
  );
};

export default Recruiter;
