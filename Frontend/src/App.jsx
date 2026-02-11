import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import CallForPaper from "./pages/CallForPaper";
import NotFound from "./pages/NotFound";

// 1. ADD THIS IMPORT
// import PastEvents from "./components/home/PastEvents"; 
// NEW (Correct)
import PastEvents from "./pages/PastEvents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/chemconflux26">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/call-for-paper/*" element={<CallForPaper />} />
            <Route path="/committee" element={<Committee />} />
            
            {/* 2. ADD THIS ROUTE */}
            <Route path="/past-events" element={<PastEvents />} />
            
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;