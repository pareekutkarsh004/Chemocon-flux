import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import mnnitLogo from "@/assets/Final Logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Call for Paper", path: "/call-for-paper" },
  { name: "Committee", path: "/committee" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
        text-white shadow-lg border-b border-orange-500/20
      "
    >
      <div className="container mx-auto px-4">
        {/* HEADER HEIGHT CONTROLLED HERE */}
        <div className="flex items-center justify-between h-20">
          {/* LEFT: Main Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={mnnitLogo}
              alt="MNNIT Logo"
              className="
                h-14 w-14
                rounded-full bg-white object-contain
                group-hover:scale-105 transition-transform
              "
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold group-hover:text-orange-400 transition-colors">
                CHEM-CONFLUX²⁶
              </h1>
              <p className="text-xs text-slate-300">MNNIT Allahabad</p>
            </div>
          </Link>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  location.pathname === link.path
                    ? "bg-orange-500/20 text-orange-400"
                    : "text-slate-200 hover:bg-white/10 hover:text-orange-400"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Register CTA */}
            <Link
              to="/registration"
              className="
                ml-3 px-6 py-2.5 rounded-full text-sm font-semibold
                text-white bg-gradient-to-r from-orange-500 to-red-500
                shadow-lg shadow-orange-500/30
                ring-2 ring-orange-400/60
                hover:scale-105 hover:shadow-xl
                transition-all duration-300
              "
            >
              Register Now
            </Link>

            {/* Theme Toggle + RIGHT BIG LOGO */}
            <div className="flex items-center gap-3 ml-3 h-full">
              <div className="hover:text-orange-400 transition-colors">
                <ThemeToggle />
              </div>

              {/* RIGHT LOGO – FULL HEADER HEIGHT */}
              <img
                src={logo}
                alt="MNNIT Logo"
                className="
                  h-full
                  max-h-20
                  aspect-square
                  rounded-full
                  object-contain
                  bg-white
                  transition-transform
                "
              />
            </div>
          </nav>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <img
              src={mnnitLogo}
              alt="MNNIT Logo"
              className="h-8 w-8 rounded-full bg-white object-contain"
            />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-md text-sm font-medium transition",
                  location.pathname === link.path
                    ? "bg-orange-500/20 text-orange-400"
                    : "text-slate-200 hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            ))}

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