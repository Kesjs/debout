"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { UtensilsCrossed, MapPin, Globe, Calendar } from "lucide-react";
import { STATS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  MapPin,
  Globe,
  Calendar,
};

function CountUp({
  target,
  duration = 1800,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString("fr-FR")}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-[#1a5c2a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                  <Icon size={20} className="text-[#f5a623]" />
                </div>
                <p className="font-display font-bold text-4xl lg:text-5xl text-white mb-1">
                  <CountUp target={stat.value} />
                  <span className="text-[#f5a623]">{stat.suffix}</span>
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
