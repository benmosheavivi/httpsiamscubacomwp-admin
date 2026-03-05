import { motion } from "framer-motion";
import { Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sailRockSign from "@/assets/sail-rock-sign.png";

const SailRockBanner = () => {
  return (
    <section className="relative overflow-hidden bg-ocean-deep py-8 md:py-10">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <Waves className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
              We go to Sail Rock every 3 days!
            </h3>
            <p className="text-primary-foreground/70 text-sm mt-1">
              The best dive site in the Gulf of Thailand — Whale Sharks, the Chimney & more
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <img
            src={sailRockSign}
            alt="Sail Rock"
            className="h-16 md:h-20 w-auto hidden md:block"
          />
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 font-semibold"
          >
            <Link to="/fun-dive-booking">Book Sail Rock Trip</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SailRockBanner;
