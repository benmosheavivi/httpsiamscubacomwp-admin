import { Waves, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Waves className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-bold text-background">Siam Scuba</span>
            </div>
            <p className="text-sm text-background/50">
              Professional PADI dive center on Koh Tao, Thailand. Small groups, big adventures.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Sairee Beach, Koh Tao</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +66 (0) 123 456 789</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@siamscuba.com</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Courses", "Fun Diving", "The Boats", "About Us"].map((label) => (
                <li key={label}>
                  <button
                    onClick={() =>
                      document.querySelector(`#${label.toLowerCase().replace(/\s/g, "-")}`)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Siam Scuba. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
