import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Changed lg:grid-cols-4 to lg:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Event Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-primary">
              CHEM-CONFLUX²⁶
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              International Conference on Sustainable Environment & Energy
              Innovations
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              October 22-24, 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Committee", path: "/committee" },
                { name: "Call for Paper", path: "/call-for-paper" },
                { name: "Contact", path: "/contact" },
                { name: "Registration", path: "/registration" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 group">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  MNNIT Allahabad, Prayagraj,
                  <br />
                  Uttar Pradesh, India - 211004
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  +91-532-2271581
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:chemconflux26@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  chemconflux26@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026 CHEM-CONFLUX²⁶ - MNNIT Allahabad | Department of Chemical
            Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}