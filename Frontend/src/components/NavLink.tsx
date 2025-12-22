import { Link } from "react-router-dom";
import { NavLink } from "../NavLink"; // Use the compat component you shared
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      {/* FIX: Added 'container' and 'px-4' to keep items away from screen edges. 
        Added 'flex justify-between' to separate Logo from Nav Items.
      */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <span className="font-bold text-lg block leading-none">CHEM-CONFLUX²⁶</span>
            <span className="text-xs text-muted-foreground">MNNIT Allahabad</span>
          </div>
        </Link>

        {/* Navigation Items Group */}
        <div className="flex items-center gap-1 md:gap-4">
          <nav className="hidden md:flex items-center gap-4 mr-2">
            <NavLink 
              to="/" 
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-conference-gold"
              activeClassName="text-conference-gold"
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-conference-gold"
              activeClassName="text-conference-gold"
            >
              Details
            </NavLink>
            <NavLink 
              to="/committee" 
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-conference-gold"
              activeClassName="text-conference-gold"
            >
              Committee
            </NavLink>
            <NavLink 
              to="/registration" 
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-conference-gold"
              activeClassName="text-conference-gold"
            >
              Registration
            </NavLink>
          </nav>

          {/* FIX: Grouped Contact and ThemeToggle together in a flex div 
            to prevent them from floating independently.
          */}
          <div className="flex items-center gap-2 border-l pl-4">
            <Button asChild variant="secondary" className="bg-conference-navy/10 hover:bg-conference-navy/20 text-conference-navy dark:text-white">
              <Link to="/contact">Contact</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}