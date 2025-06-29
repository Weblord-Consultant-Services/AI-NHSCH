import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import StaffPortal from "./pages/StaffPortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff-portal" element={<StaffPortal />} />
        {/* Placeholder routes for remaining pages */}
        <Route
          path="/compliance"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">
                Compliance Hub - Coming Soon
              </h1>
              <p>NHS compliance management tools and documentation</p>
            </div>
          }
        />
        <Route
          path="/equipment"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">
                Equipment Store - Coming Soon
              </h1>
              <p>Medical equipment and PPE management</p>
            </div>
          }
        />
        <Route
          path="/inspections"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">
                Ofsted Inspections - Coming Soon
              </h1>
              <p>Inspection management and compliance tracking</p>
            </div>
          }
        />
        <Route
          path="/resources"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">
                Treatment Resources - Coming Soon
              </h1>
              <p>Clinical guidelines and treatment protocols</p>
            </div>
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
