import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import  ScrollToTop  from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import AbstractSubmission from "./pages/AbstractSubmission";
import Publication from "./pages/Publication";
import ImportantDatesPage from "./pages/ImportantDatesPage";
import NotFound from "./pages/NotFound";
import Accommodation from "./pages/Accommodation";
import Poster from "./pages/Poster";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* 👇 THIS IS THE CRITICAL FIX */}
        <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/call-for-paper/*" element={<Navigate to="/abstract-submission" replace />} />
            <Route path="/abstract-submission/*" element={<AbstractSubmission />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/important-dates" element={<ImportantDatesPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/poster" element={<Poster />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;