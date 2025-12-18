import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import mnnitLogo from "@/assets/mnnit-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Details", path: "/about" },
  { name: "Committee", path: "/committee" },
  { name: "Registration", path: "/registration" }, // <-- This stays
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-primary text-primary-foreground fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={mnnitLogo}
              alt="MNNIT Logo"
              className="w-12 h-12 rounded-full object-contain bg-white"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold leading-tight">
                CHEM-CONFLUX²⁶
              </h1>
              <p className="text-xs text-primary-foreground/80">
                MNNIT Allahabad
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary-foreground/20 text-conference-gold"
                    : "hover:bg-primary-foreground/10"
                )}
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary-foreground/20 text-conference-gold"
                    : "hover:bg-primary-foreground/10"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
