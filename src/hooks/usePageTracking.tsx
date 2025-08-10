import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./useAnalytics";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // With HashRouter, the page path is in the hash. We send the full hash to GA.
    trackPageView(location.pathname + location.search + location.hash);
  }, [location]);

  return <>{children}</>;
};