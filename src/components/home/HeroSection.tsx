"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Jeunes africains en groupe, énergie et dynamisme — hero principal
          backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-6"
        >
          Association apolitique · France & Bénin
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          La jeunesse béninoise
          <br />
          <span className="text-[#f5a623]">debout.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Solidarité humanitaire, formation numérique et rayonnement
          international — BÉNIN DEBOUT agit pour une jeunesse instruite,
          compétente et fière.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/faire-un-don"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-[#f5a623] text-white rounded-full font-semibold text-base hover:bg-[#d4891a] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-amber-500/20"
          >
            Faire un don
            <ArrowRight size={16} />
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#f5a623] animate-ping opacity-20" />
          </Link>
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white rounded-full font-medium text-base hover:bg-white/10 active:scale-[0.97] transition-all duration-200"
          >
            Découvrir l'association
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
