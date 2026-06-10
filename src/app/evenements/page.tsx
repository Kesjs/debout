import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, UtensilsCrossed, Globe } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { EVENEMENTS } from "@/lib/constants";
import JoinSection from "@/components/home/JoinSection";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Agenda 2026 de BÉNIN DEBOUT — Journée de Solidarité 1 000 Plats (20 juin) et Conférence Internationale de l'Artisanat Numérique CIAN (17 juillet), Cotonou.",
};

const iconMap: Record<string, React.ElementType> = { UtensilsCrossed, Globe };

export default function EvenementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Enfants africains souriants — page événements
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#1a5c2a]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-4">
              Agenda 2026
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos événements
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Deux rendez-vous majeurs qui marquent notre engagement — l'un pour nourrir ceux qui ont faim, l'autre pour bâtir le Bénin numérique de demain.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Événements détaillés */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle
              label="Au programme"
              title="Ce qui nous attend en 2026"
              centered
            />
          </div>

          <div className="space-y-8">
            {EVENEMENTS.map((event, index) => {
              const Icon = iconMap[event.icon];
              return (
                <AnimatedSection key={event.id} delay={index * 0.1}>
                  <div className={`rounded-3xl overflow-hidden ${event.highlight ? "bg-[#1a5c2a]" : "bg-white border border-gray-100 shadow-sm"}`}>
                    <div className={`h-1.5 ${event.highlight ? "bg-[#f5a623]" : "bg-[#1a5c2a]"}`} />
                    <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                      {/* Date block */}
                      <div className="md:text-center">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${event.highlight ? "bg-white/10" : "bg-[#f0f7f0]"}`}>
                          <Icon size={24} className={event.highlight ? "text-[#f5a623]" : "text-[#1a5c2a]"} />
                        </div>
                        <p className={`font-display font-bold text-3xl mb-1 ${event.highlight ? "text-white" : "text-[#1a5c2a]"}`}>
                          {event.date.split(" ")[0]} {event.date.split(" ")[1]}
                        </p>
                        <p className={`text-sm ${event.highlight ? "text-white/60" : "text-[#4a4a4a]"}`}>
                          {event.date.split(" ").slice(2).join(" ")}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2">
                        <h2 className={`font-display font-bold text-2xl mb-3 ${event.highlight ? "text-white" : "text-[#1a5c2a]"}`}>
                          {event.title}
                        </h2>
                        <div className={`flex items-center gap-1.5 text-sm mb-4 ${event.highlight ? "text-white/60" : "text-[#4a4a4a]"}`}>
                          <MapPin size={13} />
                          {event.lieu}
                        </div>
                        <p className={`text-sm leading-relaxed mb-6 ${event.highlight ? "text-white/75" : "text-[#4a4a4a]"}`}>
                          {event.description}
                        </p>
                        <Link
                          href={event.ctaHref}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                            event.highlight
                              ? "bg-[#f5a623] text-white hover:bg-white hover:text-[#1a5c2a]"
                              : "bg-[#1a5c2a] text-white hover:bg-[#f5a623]"
                          }`}
                        >
                          {event.cta}
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <JoinSection />
    </>
  );
}
