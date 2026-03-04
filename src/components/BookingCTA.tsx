import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/972528641581?text=Hi%20Siam%20Scuba!%20I'd%20like%20to%20book%20a%20dive.";

const BookingCTA = () => {
  return (
    <section className="section-padding bg-ocean-deep relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-ocean-light/10 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Ready to Dive In?
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg">
            Send us a message on WhatsApp and we'll get you booked in minutes. No deposit required — just show up and dive!
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full px-10 text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg gap-2"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
