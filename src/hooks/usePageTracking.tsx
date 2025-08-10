import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./useAnalytics";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // On initial load with HashRouter, location.pathname can be "/"
    // while the real path is in the hash. We check for that case.
    let path = location.pathname;
    if (path === "/" && window.location.hash.startsWith("#/")) {
      path = window.location.hash.substring(1); // Extract path from hash (e.g., "#/jobseeker" -> "/jobseeker")
    }

    const fullPath = path + location.search;

    // Only send a pageview if the path has actually changed from the last one we tracked.
    if (fullPath !== lastTrackedPath.current) {
      trackPageView(fullPath);
      lastTrackedPath.current = fullPath;
    }
  }, [location]);

  return <>{children}</>;
};
