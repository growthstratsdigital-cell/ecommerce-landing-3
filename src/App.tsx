import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import { ROUTE_PATHS } from "@/lib/index";

/**
 * @description Root application component for Growth Strats Landing Page (2026).
 * Performance-focused UX setup with React Query and standard routing.
 * Focused on conversion optimization for high-intent paid traffic.
 */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* UI Feedback Components */}
        <Toaster />
        <Sonner position="top-right" expand={false} richColors />
        
        <BrowserRouter>
          <Routes>
            {/* 
              Single Primary Entry Point: 
              As per CRO strategy, we minimize distractions. 
              All traffic is directed to the main conversion engine.
            */}
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />

            {/* 
              Redirect strategy: 
              On a high-intent landing page, we redirect unknown paths back to home 
              instead of showing a 404 page to prevent lead leakage.
            */}
            <Route 
              path="*" 
              element={<Navigate to={ROUTE_PATHS.HOME} replace />} 
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;