"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function InstagramFloat() {
  return (
    <motion.a
      href={SITE_CONFIG.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Suivez-nous sur Instagram"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#f5a623] text-white rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-shadow duration-300 overflow-hidden group"
    >
      {/* Version mobile — icône seule */}
      <span className="flex items-center justify-center w-12 h-12 sm:hidden">
        <Instagram size={20} />
      </span>

      {/* Version desktop — icône + texte */}
      <span className="hidden sm:flex items-center gap-2.5 px-4 py-3">
        <Instagram size={18} />
        <span className="text-sm font-semibold whitespace-nowrap">
          {SITE_CONFIG.instagramHandle}
        </span>
      </span>
    </motion.a>
  );
}
