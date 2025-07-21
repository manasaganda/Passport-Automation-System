
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Apply from "./pages/Apply";
import Track from "./pages/Track";
import Services from "./pages/Services";
import Requirements from "./pages/Requirements";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appointments from "./pages/Appointments";
import PassportRenewal from "./pages/services/PassportRenewal";
import ExpeditedService from "./pages/services/ExpeditedService";
import LostStolen from "./pages/services/LostStolen";
import ChildPassport from "./pages/services/ChildPassport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/track" element={<Track />} />
          <Route path="/services" element={<Services />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/services/renewal" element={<PassportRenewal />} />
          <Route path="/services/expedited" element={<ExpeditedService />} />
          <Route path="/services/lost" element={<LostStolen />} />
          <Route path="/services/child" element={<ChildPassport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
