import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./useAnalytics";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // Ignore the initial load; it's handled in App.tsx
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    // Track all subsequent page views
    trackPageView(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
};
