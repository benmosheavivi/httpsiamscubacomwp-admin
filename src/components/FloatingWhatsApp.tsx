import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/972528641581";

const FloatingWhatsApp = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => Math.sin(v * 0.01) * 8);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ y }}
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors"
      style={{ backgroundColor: '#25D366' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20BA5F'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
