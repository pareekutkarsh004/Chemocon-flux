import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import mnnitLogo from "@/assets/mnnit-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Committee", path: "/committee" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="
      bg-background text-foreground
      dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
      fixed top-0 left-0 w-full z-50 shadow-lg border-b border-primary/20
    "
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={mnnitLogo}
              alt="MNNIT Logo"
              className="w-12 h-12 rounded-full bg-white object-contain group-hover:scale-105 transition"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold">CHEM-CONFLUX²⁶</h1>
              <p className="text-xs text-muted-foreground">MNNIT Allahabad</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition",
                  location.pathname === link.path
                    ? "bg-primary/20 text-primary"
                    : "hover:bg-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* 🔥 REGISTRATION CTA */}
            <Link
              to="/registration"
              className="
                ml-3 px-6 py-2.5 rounded-full text-sm font-semibold
                text-white
                bg-gradient-to-r from-orange-500 to-red-500
                shadow-lg shadow-orange-500/30
                ring-2 ring-orange-400/60
                hover:shadow-xl hover:scale-105
                transition-all duration-300
              "
            >
              Register Now
            </Link>

            <ThemeToggle />
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-md hover:bg-secondary"
              >
                {link.name}
              </Link>
            ))}

            {/* 🔥 MOBILE REGISTRATION CTA */}
            <Link
              to="/registration"
              onClick={() => setIsMenuOpen(false)}
              className="
                block text-center mt-3 px-4 py-3 rounded-xl
                font-semibold text-white
                bg-gradient-to-r from-orange-500 to-red-500
                shadow-md shadow-orange-500/30
              "
            >
              Register Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
