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
      aria-label={`Nous suivre sur Instagram — ${SITE_CONFIG.instagramHandle}`}
      title={`Nous suivre sur Instagram — ${SITE_CONFIG.instagramHandle}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#f5a623] text-white rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300"
    >
      <Instagram size={20} />

      {/* Tooltip au survol */}
      <span className="absolute right-14 bg-[#1c1c1c] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {SITE_CONFIG.instagramHandle}
      </span>
    </motion.a>
  );
}
