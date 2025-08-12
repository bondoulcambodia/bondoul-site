import React, { createContext, useContext, useEffect, useState } from 'react';
import { initGA } from '@/hooks/useAnalytics';

interface AnalyticsContextType {
  isInitialized: boolean;
}

// Create a context with a default value
const AnalyticsContext = createContext<AnalyticsContextType>({
  isInitialized: false,
});

// Custom hook to use the analytics context
export const useAnalyticsContext = () => useContext(AnalyticsContext);

// The provider component
export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // This effect runs once when the component mounts
    initGA();
    setIsInitialized(true);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ isInitialized }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
