import { useEffect, useRef } from "react";
import { trackPageView } from "./useAnalytics";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const trackCurrentPage = () => {
      // window.location.hash is the single source of truth for HashRouter.
      const hash = window.location.hash;
      let currentPath: string;

      if (hash.startsWith("#/")) {
        // This handles all paths like "#/jobseeker"
        currentPath = hash.substring(1); // -> "/jobseeker"
      } else {
        // This handles the root case where the hash is "" or just "#"
        currentPath = "/";
      }

      // Only send a pageview if the path has actually changed.
      if (currentPath !== lastTrackedPath.current) {
        trackPageView(currentPath);
        lastTrackedPath.current = currentPath;
      }
    };

    // Add listener for subsequent navigation
    window.addEventListener('hashchange', trackCurrentPage);

    // Track the initial page load
    trackCurrentPage();

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener('hashchange', trackCurrentPage);
    };
  }, []); // Empty dependency array means this effect runs only once on mount.

  return <>{children}</>;
};
