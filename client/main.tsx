import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import StaffPortal from "./pages/StaffPortal";
import Compliance from "./pages/Compliance";
import Equipment from "./pages/Equipment";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import Documentation from "./pages/Documentation";
import Training from "./pages/Training";
import APIReference from "./pages/APIReference";
import SystemStatus from "./pages/SystemStatus";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/staff-portal" element={<StaffPortal />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/training" element={<Training />} />
          <Route path="/api-reference" element={<APIReference />} />
          <Route path="/system-status" element={<SystemStatus />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
