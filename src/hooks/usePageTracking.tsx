import { useEffect, useRef } from "react";
import { initGA, trackPageView } from "./useAnalytics";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // This effect runs only once on mount, ensuring a clean setup.
    
    // 1. Initialize Google Analytics
    initGA();

    const trackCurrentPage = () => {
      // 2. Determine the correct path from the URL hash.
      const hash = window.location.hash;
      let currentPath = hash.startsWith("#/") ? hash.substring(1) : "/";

      // 3. Only track if the path is new. This prevents duplicates.
      if (currentPath !== lastTrackedPath.current) {
        trackPageView(currentPath);
        lastTrackedPath.current = currentPath;
      }
    };

    // 4. Track the initial page view after initialization.
    trackCurrentPage();

    // 5. Listen for all subsequent route changes.
    window.addEventListener('hashchange', trackCurrentPage);

    // 6. Cleanup the listener when the component unmounts.
    return () => {
      window.removeEventListener('hashchange', trackCurrentPage);
    };
  }, []); // The empty dependency array is crucial.

  return <>{children}</>;
};
