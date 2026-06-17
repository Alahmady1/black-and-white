"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_PHONE, SITE_WHATSAPP } from "@/lib/site";

export default function FloatingActions() {
  const message = "مرحباً، أود الاستفسار عن مطعم ومقهى بلاك آند وايت...";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${SITE_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCall = () => {
    window.open(`tel:${SITE_PHONE}`, "_self");
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCall}
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl border border-zinc-200 group relative overflow-hidden"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6 relative z-10 transition-transform group-hover:rotate-12" />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl border border-white/20 group relative overflow-hidden"
        aria-label="Contact on WhatsApp"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0, 0.2]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-white rounded-full"
        />
        <MessageCircle className="w-6 h-6 relative z-10 transition-transform group-hover:rotate-12" />
      </motion.button>
    </div>
  );
}
