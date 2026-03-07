import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/972528641581?text=Hi%20Siam%20Scuba!%20I'd%20like%20to%20book%20a%20dive.";

const FloatingWhatsApp = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => Math.sin(v * 0.01) * 8);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ y }}
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
