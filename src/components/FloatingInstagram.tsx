import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/siamscuba";

const FloatingInstagram = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => Math.sin(v * 0.01) * 8);

  return (
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ y }}
      className="fixed right-4 bottom-20 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors"
      aria-label="Follow us on Instagram"
    >
      <Instagram className="h-6 w-6" />
    </motion.a>
  );
};

export default FloatingInstagram;
