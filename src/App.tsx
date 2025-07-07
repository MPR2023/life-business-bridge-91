
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Legal from "./pages/Legal";
import Blog from "./pages/Blog";
import BlogIndex from "./pages/blog/BlogIndex";
import BusinessCoachingIndex from "./pages/blog/business-coaching";
import WhatIsBusinessCoaching from "./pages/blog/business-coaching/WhatIsBusinessCoaching";
import LifeCoachingIndex from "./pages/blog/life-coaching";
import WhatIsLifeCoaching from "./pages/blog/life-coaching/what-is-life-coaching";
import AIImplementationsIndex from "./pages/blog/ai-implementations";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

// Create a new query client with default options
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="legal" element={<Legal />} />
                <Route path="blog" element={<Blog />}>
                  <Route index element={<BlogIndex />} />
                  <Route path="business-coaching">
                    <Route index element={<BusinessCoachingIndex />} />
                    <Route path="what-is-business-coaching" element={<WhatIsBusinessCoaching />} />
                  </Route>
                  <Route path="life-coaching">
                    <Route index element={<LifeCoachingIndex />} />
                    <Route path="what-is-life-coaching" element={<WhatIsLifeCoaching />} />
                  </Route>
                  <Route path="ai-implementations">
                    <Route index element={<AIImplementationsIndex />} />
                    {/* future posts */}
                  </Route>
                </Route>
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </Router>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
