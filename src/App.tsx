import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CVbuilder from "./pages/CVbuilder";
import Subscription from "./pages/Subscription";
import { useEffect } from "react";
import { initGA, trackPageView } from "./hooks/useAnalytics";
import { PageTracker } from "./hooks/usePageTracking";
import Recruiter from "./pages/Recruiter";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initGA();
    // On initial load, track the pageview directly from the hash
    const initialPath = window.location.hash.substring(1) || "/";
    trackPageView(initialPath);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <PageTracker>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cv-builder" element={<CVbuilder />} />
              <Route path="/jobseeker" element={<Subscription />} />
              <Route path="/recruiter" element={<Recruiter />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTracker>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
