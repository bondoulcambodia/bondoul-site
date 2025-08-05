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
import { initGA } from "./hooks/useAnalytics";
import { usePageTracking } from "./hooks/usePageTracking";
import { useScrollTracking } from "./hooks/useScrollTracking";

const queryClient = new QueryClient();

const AppContent = () => {
  usePageTracking();
  useScrollTracking();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/cv-builder" element={<CVbuilder />} />
      <Route path="/jobseeker" element={<Subscription />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <AppContent />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
