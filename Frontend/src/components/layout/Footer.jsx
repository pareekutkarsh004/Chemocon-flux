import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Event Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-conference-gold">FDP 2026</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Faculty Development Program on Intelligent Optimization and Control of Chemical Processes
            </p>
            <p className="text-sm text-primary-foreground/80 mt-2">
              January 05-09, 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-conference-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-conference-gold transition-colors">About</Link></li>
              <li><Link to="/committee" className="hover:text-conference-gold transition-colors">Committee</Link></li>
              <li><Link to="/speakers" className="hover:text-conference-gold transition-colors">Speakers</Link></li>
              <li><Link to="/contact" className="hover:text-conference-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-conference-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  MNNIT Allahabad, Prayagraj,<br />Uttar Pradesh, India - 211004
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-conference-gold" />
                <a href="mailto:amverma@mnnit.ac.in" className="hover:text-conference-gold transition-colors">
                  amverma@mnnit.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-conference-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-conference-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-conference-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-conference-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2026 FDP - MNNIT Allahabad | ANRF Sponsored</p>
        </div>
      </div>
    </footer>
  );
}
