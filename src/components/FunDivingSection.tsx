import { motion } from "framer-motion";
import { Compass, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/66123456789?text=Hi%20Siam%20Scuba!%20I'd%20like%20to%20book%20fun%20dives.";

const FunDivingSection = () => {
  return (
    <section id="fun-diving" className="section-padding bg-ocean-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">Certified Divers</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Fun Diving</h2>
          <p className="mt-4 text-muted-foreground">
            Already certified? Join us for incredible dive sites around Koh Tao — whale sharks, barracudas, and pristine coral gardens await.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Compass, label: "20+ dive sites", desc: "Sail Rock, Chumphon, SW Pinnacle & more" },
              { icon: Clock, label: "Flexible schedules", desc: "Morning, afternoon & night dives" },
              { icon: Users, label: "Max 4:1 ratio", desc: "Small groups for personal attention" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-2xl p-8 shadow-md inline-block">
            <p className="text-muted-foreground text-sm mb-1">Starting from</p>
            <p className="text-4xl font-bold text-foreground font-display">฿1,000 <span className="text-lg font-normal text-muted-foreground">/ dive</span></p>
            <Button asChild className="rounded-full mt-6 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Book Fun Dives</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunDivingSection;
