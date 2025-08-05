import { useEffect, useState } from "react";
import { trackScroll } from "./useAnalytics";

export const useScrollTracking = () => {
  const [scrollDepth, setScrollDepth] = useState(0);
  const [trackedDepths, setTrackedDepths] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const depth = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollDepth(depth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    thresholds.forEach((threshold) => {
      if (scrollDepth >= threshold && !trackedDepths.includes(threshold)) {
        trackScroll(threshold);
        setTrackedDepths([...trackedDepths, threshold]);
      }
    });
  }, [scrollDepth, trackedDepths]);
};
