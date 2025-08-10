import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./useAnalytics";

export const PageTracker = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // `location.pathname` from `useLocation` correctly reflects the path after the # in HashRouter.
    // We also pass the search params if they exist.
    trackPageView(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
};
