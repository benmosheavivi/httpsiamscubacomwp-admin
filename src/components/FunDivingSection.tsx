import { motion } from "framer-motion";
import { Compass, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import diveAction from "@/assets/dive-action.jpg";
import diveCoralGroup from "@/assets/dive-coral-group.jpg";
import diveReef from "@/assets/dive-reef.jpg";
import diveExplorer from "@/assets/dive-explorer.jpg";

const WHATSAPP_URL = "https://wa.me/972528641581?text=Hi%20Siam%20Scuba!%20I'd%20like%20to%20book%20fun%20dives.";

const FunDivingSection = () => {
  return (
    <section id="fun-diving" className="section-padding bg-ocean-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">Certified Divers</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Fun Diving</h2>
          <p className="mt-4 text-muted-foreground">
            Already certified? Join us for incredible dive sites around Koh Tao — whale sharks, barracudas, and pristine coral gardens await.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 rounded-2xl overflow-hidden"
        >
          <img src={diveAction} alt="Diver jumping into the ocean" className="w-full h-48 md:h-64 object-cover rounded-xl" />
          <img src={diveCoralGroup} alt="Divers exploring coral reef" className="w-full h-48 md:h-64 object-cover rounded-xl" />
          <img src={diveReef} alt="Divers swimming near coral" className="w-full h-48 md:h-64 object-cover rounded-xl" />
          <img src={diveExplorer} alt="Diver exploring underwater rocks" className="w-full h-48 md:h-64 object-cover rounded-xl" />
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Compass, label: "20+ dive sites", desc: "Sail Rock, Chumphon, SW Pinnacle & more" },
              { icon: Clock, label: "Flexible schedules", desc: "Morning, afternoon & night dives" },
              { icon: Users, label: "Personal attention", desc: "Experienced guides who know every site" },
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
        </div>
      </div>
    </section>
  );
};

export default FunDivingSection;
