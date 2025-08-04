import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./useAnalytics";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
};
