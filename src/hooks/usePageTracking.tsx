import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./useAnalytics";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // For HashRouter, window.location.hash is the single source of truth.
    // The `location` object from useLocation() is used to trigger this effect
    // whenever navigation happens.
    const hash = window.location.hash;
    let currentPath: string;

    if (hash.startsWith("#/")) {
      // This handles all paths like "#/jobseeker"
      currentPath = hash.substring(1); // -> "/jobseeker"
    } else {
      // This handles the root case where the hash is "" or just "#"
      currentPath = "/";
    }

    // Only send a pageview if the path has actually changed from the last one we tracked.
    // This is the crucial step that prevents duplicate events during initial rendering.
    if (currentPath !== lastTrackedPath.current) {
      trackPageView(currentPath);
      lastTrackedPath.current = currentPath;
    }
  }, [location]); // Rerun this logic every time the location changes

  return <>{children}</>;
};
