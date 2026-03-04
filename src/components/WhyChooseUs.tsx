import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, MapPin, Heart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Meticulously maintained equipment, emergency oxygen on every dive, and strict safety protocols.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Instructors",
    desc: "PADI-certified professionals with thousands of dives and a passion for teaching.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Located on Sairee Beach — Koh Tao's main stretch — steps from restaurants, bars, and the pier.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    desc: "We keep it personal — more attention, more fun, and better learning for every diver.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-ocean-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">Why Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Why Choose Siam Scuba
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
