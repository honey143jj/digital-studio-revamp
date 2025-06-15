
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PhotoStudio from "./pages/PhotoStudio";
import PhotoStudioRental from "./pages/PhotoStudioRental";
import VideoProduction from "./pages/VideoProduction";
import GraphicsBranding from "./pages/GraphicsBranding";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import SocialMedia from "./pages/SocialMedia";
import SEOServices from "./pages/SEOServices";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import VisualEditor from "./pages/VisualEditor";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import BookingCancellationPolicy from "./pages/BookingCancellationPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/photo-studio" element={<PhotoStudio />} />
          <Route path="/photo-studio-rental" element={<PhotoStudioRental />} />
          <Route path="/video-production" element={<VideoProduction />} />
          <Route path="/graphics-branding" element={<GraphicsBranding />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/seo-services" element={<SEOServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/visual-editor" element={<VisualEditor />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/booking-cancellation-policy" element={<BookingCancellationPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
