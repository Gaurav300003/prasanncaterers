import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Prasanna Caterers logo"
            loading="lazy"
            width={816}
            height={816}
            className="h-20 w-20 object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Three generations of South Indian hospitality — cooked fresh on site,
            served with the warmth of home.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Reach Us</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-gold" />
              +91 98450 22110
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-gold" />
              hello@prasannacaterers.in
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-gold" />
              14, Sampige Road, Malleshwaram, Bengaluru 560003
            </li>
          </ul>
          <div className="mt-5 flex gap-4 text-gold">
            <a href="#" aria-label="Instagram" className="transition-transform hover:scale-110">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="transition-transform hover:scale-110">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Prasanna Caterers
      </div>
    </footer>
  );
}
