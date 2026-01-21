import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

import mnnitLogo from "@/assets/Chem-Conflux20_Logo.png";
import instituteLogo from "@/assets/MNNIT Logo New (1)-Photoroom.png";

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
        bg-gradient-to-r from-[#0b1627] via-[#0f1d33] to-[#0b1627]
        text-white
        border-b border-orange-500/20
        shadow-lg
      "
    >
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* LEFT: CONFERENCE LOGO + TITLE */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={mnnitLogo}
              alt="Chem Conflux Logo"
              className="h-14 w-14 rounded-full bg-white object-contain"
            />
            <div className="leading-tight hidden sm:block">
              <h1 className="font-display text-lg font-bold tracking-wide">
                CHEM-CONFLUX²⁶
              </h1>
              <p className="text-xs text-slate-300">MNNIT Allahabad</p>
            </div>
          </Link>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                    isActive
                      ? "text-orange-400"
                      : "text-slate-200 hover:text-orange-400",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: REGISTER + TOGGLE + INSTITUTE LOGO */}
          <div className="flex items-center gap-4">
            <Link
              to="/registration"
              className="
                hidden md:inline-flex
                px-6 py-2.5 rounded-full
                text-sm font-semibold
                bg-gradient-to-r from-orange-500 to-red-500
                shadow-lg shadow-orange-500/30
                ring-2 ring-orange-400/60
                hover:scale-105 hover:shadow-xl
                transition-all duration-300
              "
            >
              Register Now
            </Link>

            <ThemeToggle />

            <img
              src={instituteLogo}
              alt="MNNIT Logo"
              className="h-12 w-12 rounded-full bg-white object-contain"
            />

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
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
                    : "text-slate-200 hover:bg-white/10",
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
