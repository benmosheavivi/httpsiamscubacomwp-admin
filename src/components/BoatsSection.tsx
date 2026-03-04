import { motion } from "framer-motion";
import { Anchor, Shield, Users } from "lucide-react";
import boat1Img from "@/assets/boat-1.jpg";
import boat2Img from "@/assets/boat-2.jpg";

const boats = [
  {
    name: "Supannakong",
    image: boat1Img,
    description: "Our traditional Thai dive boat — spacious deck, sun shade, and the charm of Koh Tao's heritage. Perfect for day trips to nearby sites.",
    features: ["Spacious sundeck", "Freshwater shower", "Equipment storage"],
  },
  {
    name: "SawSiam",
    image: boat2Img,
    description: "Our modern vessel built for comfort and speed. Reach further dive sites like Sail Rock and Chumphon Pinnacle with ease.",
    features: ["Fast & stable", "Full safety equipment", "Comfortable seating"],
  },
];

const BoatsSection = () => {
  return (
    <section id="boats" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">Our Fleet</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">The Boats</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Two custom dive boats purpose-built for comfort, safety, and reaching Koh Tao's best sites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boats.map((boat, i) => (
            <motion.div
              key={boat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={boat.image}
                  alt={boat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{boat.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{boat.description}</p>
                <div className="flex flex-wrap gap-3">
                  {boat.features.map((f, fi) => {
                    const icons = [Anchor, Shield, Users];
                    const Icon = icons[fi];
                    return (
                      <span key={f} className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary-foreground bg-secondary rounded-full px-3 py-1.5">
                        <Icon className="h-3.5 w-3.5" />
                        {f}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoatsSection;
