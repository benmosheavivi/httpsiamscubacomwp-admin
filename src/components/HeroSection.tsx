import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ocean.jpg";
import padi from "@/assets/padi-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Whale shark diving at Koh Tao" className="w-full h-full object-cover" />
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
          Flexible schedules, two custom dive boats, and professional PADI instruction on Sairee Beach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-2"
        >
          <img src={padi} alt="PADI" className="h-10 w-auto" />
          <span className="text-primary-foreground/70 text-sm font-medium tracking-wide">PADI Dive Center</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 text-base bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              onClick={() => document.querySelector("#fun-diving")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Dive
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
              onClick={() => document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Courses
            </Button>
          </div>
          <Button
            variant="link"
            className="text-ocean-light/80 hover:text-ocean-light text-sm underline underline-offset-4"
            onClick={() => document.querySelector("#fun-diving")?.scrollIntoView({ behavior: "smooth" })}
          >
            I have a license, just want to fun dive
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
