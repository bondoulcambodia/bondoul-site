import { usePageTracking } from "@/hooks/usePageTracking";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Recruiter = () => {
  usePageTracking();
  useScrollTracking();
  return <div>Reccrutier</div>;
};

export default Recruiter;
