"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Monitor, Globe, ArrowRight } from "lucide-react";
import { AXES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Monitor,
  Globe,
};

export default function AxesSection() {
  return (
    <section className="relative pb-0 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
        backgroundImage:
            "url('https://res.cloudinary.com/tearfund/image/fetch/c_scale,w_1248/f_auto/https://www.tearfund.org/-/media/tearfund/images/stories/2022/08/stories-of-hope-in-rwanda/storiesofhopeinrwanda-storybanner-creditchrishoskinstearfund.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#1a5c2a]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-36">
        <div className="text-center mb-12">
          <SectionTitle
            label="Notre engagement"
            title="Trois axes, une vision"
            subtitle="Chaque action que nous menons s'inscrit dans une stratégie cohérente : élever la jeunesse béninoise par l'éducation, la solidarité et le rayonnement."
            centered
            light
          />
        </div>
      </div>

      {/* Cards qui chevauchent la section du bas */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AXES.map((axe, index) => {
            const Icon = iconMap[axe.icon];
            return (
              <motion.div
                key={axe.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#f0f7f0] group-hover:bg-[#f5a623] transition-colors duration-300 mb-5">
                  <Icon
                    size={22}
                    className="text-[#1a5c2a] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-[#1a5c2a] mb-3">
                  {axe.title}
                </h3>
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-5">
                  {axe.description}
                </p>
                <Link
                  href={axe.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a5c2a] group-hover:text-[#f5a623] transition-colors duration-200"
                >
                  En savoir plus
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Espace blanc pour que les cards "atterrissent" sur la section suivante */}
      <div className="h-16 bg-[#fafafa] relative z-10 mt-0" />
    </section>
  );
}
