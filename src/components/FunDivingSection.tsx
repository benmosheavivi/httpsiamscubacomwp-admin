import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Clock, Users, Waves, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import diveAction from "@/assets/dive-action.jpg";
import diveCoralGroup from "@/assets/dive-coral-group.jpg";
import diveReef from "@/assets/dive-reef.jpg";
import diveExplorer from "@/assets/dive-explorer.jpg";
import sailRockChimney from "@/assets/sail-rock-chimney.png";
import sailRockSilhouette from "@/assets/sail-rock-silhouette.png";
import sailRockCoral from "@/assets/sail-rock-coral.png";
import CourseDetailDialog from "./CourseDetailDialog";

const WHATSAPP_URL = "https://wa.me/972528641581?text=Hi%20Siam%20Scuba!%20I'd%20like%20to%20book%20fun%20dives.";

const FunDivingSection = () => {
  const [showSailRock, setShowSailRock] = useState(false);

  return (
    <>
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

          {/* Sail Rock Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-0 shadow-lg bg-card overflow-hidden">
              <div className="grid grid-cols-3 h-40 md:h-48">
                <img src={sailRockChimney} alt="Divers at Sail Rock Chimney" className="w-full h-full object-cover" />
                <img src={sailRockSilhouette} alt="Diver silhouette at Sail Rock" className="w-full h-full object-cover" />
                <img src={sailRockCoral} alt="Sail Rock coral and fish" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Waves className="h-5 w-5 text-primary" />
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Crown Jewel of the Gulf</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Sail Rock (Hin Bai) — The Best Dive in the Gulf
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    A massive granite pinnacle teeming with life, featuring the famous vertical 'Chimney' and the highest chance to spot Whale Sharks.
                  </p>
                  <p className="text-foreground font-bold text-lg mt-2">฿3,800 <span className="text-sm font-normal text-muted-foreground">/ full-day trip</span></p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Button
                    variant="ghost"
                    className="rounded-full text-primary hover:text-primary/80"
                    onClick={() => setShowSailRock(true)}
                  >
                    <Info className="h-4 w-4 mr-1" />
                    More Details
                  </Button>
                  <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-6">
                    <Link to="/fun-dive-booking">Book Sail Rock</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              <p className="text-4xl font-bold text-foreground font-display">฿1,800 <span className="text-lg font-normal text-muted-foreground">/ dive</span></p>
              <Button asChild className="rounded-full mt-6 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/fun-dive-booking">Book Fun Dives</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CourseDetailDialog
        courseTitle="Sail Rock"
        open={showSailRock}
        onOpenChange={setShowSailRock}
      />
    </>
  );
};

export default FunDivingSection;
