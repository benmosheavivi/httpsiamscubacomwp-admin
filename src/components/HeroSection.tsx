import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ocean.jpg";

const WHATSAPP_URL = "https://wa.me/66123456789?text=Hi%20Siam%20Scuba!%20I'd%20like%20to%20book%20a%20dive.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Underwater coral reef at Koh Tao" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/40 to-ocean-deep/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-ocean-light font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4"
        >
          Koh Tao, Thailand
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto"
        >
          Your Dive Adventure
          <br />
          <span className="text-ocean-light">Starts Here</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto"
        >
          Small groups (max 4:1), flexible schedules, and two custom dive boats.
          Professional PADI instruction on Sairee Beach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Book a Dive
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-base border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
            onClick={() => document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Courses
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
