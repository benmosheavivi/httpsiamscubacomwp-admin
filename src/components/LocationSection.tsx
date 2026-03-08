import { motion } from "framer-motion";
import { LocationMap } from "@/components/ui/expand-map";

const LocationSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">Find Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Location
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <LocationMap
            location="Sairee Beach, Koh Tao"
            coordinates="10.0956° N, 99.8228° E"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
