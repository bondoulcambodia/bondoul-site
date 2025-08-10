import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./useAnalytics";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // For HashRouter, on initial load, location.pathname can be "/"
    // while the real path is in the URL hash. We must read from the hash
    // to get the correct path.
    let currentPath = location.pathname;
    if (currentPath === "/" && window.location.hash.startsWith("#/")) {
      currentPath = window.location.hash.substring(1); // e.g., "#/jobseeker" -> "/jobseeker"
    }

    // If the path is empty (e.g. from "example.com/#"), default it to "/"
    if (currentPath === "") {
      currentPath = "/";
    }

    const fullPath = currentPath + location.search;

    // Only send a pageview if the path has actually changed from the last one we tracked.
    // This prevents duplicate events during the router's initialization renders.
    if (fullPath !== lastTrackedPath.current) {
      trackPageView(fullPath);
      lastTrackedPath.current = fullPath;
    }
  }, [location]); // Rerun this logic every time the location changes

  return <>{children}</>;
};
