import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./useAnalytics";
import { useAnalyticsContext } from "@/context/AnalyticsContext";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { isInitialized } = useAnalyticsContext();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Wait until GA is initialized before tracking anything
    if (!isInitialized) {
      return;
    }

    // On initial load with HashRouter, location.pathname can be "/"
    // while the real path is in the hash. We must read from the hash.
    let currentPath = location.pathname;
    if (currentPath === "/" && window.location.hash.startsWith("#/")) {
      currentPath = window.location.hash.substring(1); // e.g., "#/jobseeker" -> "/jobseeker"
    }

    // If the path is empty (e.g. from "example.com/#"), default it to "/"
    if (currentPath === "") {
      currentPath = "/";
    }

    const fullPath = currentPath + location.search;

    // Only send a pageview if the path has actually changed.
    // This prevents duplicate events during the router's initialization.
    if (fullPath !== lastTrackedPath.current) {
      trackPageView(fullPath);
      lastTrackedPath.current = fullPath;
    }
  }, [location, isInitialized]); // Rerun when location or initialization status changes

  return <>{children}</>;
};
