import Link from "next/link";
import { Calendar, MapPin, ArrowRight, UtensilsCrossed, Globe } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { EVENEMENTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Globe,
};

export default function EvenementsSection() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionTitle
            label="Agenda 2026"
            title="Les rendez-vous à ne pas manquer"
            subtitle="Deux événements majeurs qui marqueront l'année — l'un pour nourrir les corps, l'autre pour nourrir les esprits."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EVENEMENTS.map((event, index) => {
            const Icon = iconMap[event.icon];
            return (
              <AnimatedSection key={event.id} delay={index * 0.15}>
                <div
                  className={`relative rounded-2xl overflow-hidden h-full flex flex-col ${
                    event.highlight
                      ? "bg-[#1a5c2a] text-white"
                      : "bg-white border border-gray-100 shadow-sm"
                  }`}
                >
                  {/* Top accent */}
                  <div
                    className={`h-1.5 w-full ${
                      event.highlight ? "bg-[#f5a623]" : "bg-[#1a5c2a]"
                    }`}
                  />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon + date */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${
                          event.highlight
                            ? "bg-white/10"
                            : "bg-[#f0f7f0]"
                        }`}
                      >
                        <Icon
                          size={20}
                          className={event.highlight ? "text-[#f5a623]" : "text-[#1a5c2a]"}
                        />
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                          event.highlight
                            ? "bg-[#f5a623] text-white"
                            : "bg-[#f0f7f0] text-[#1a5c2a]"
                        }`}
                      >
                        <Calendar size={10} />
                        {event.date}
                      </span>
                    </div>

                    <h3
                      className={`font-display font-bold text-xl mb-3 leading-tight ${
                        event.highlight ? "text-white" : "text-[#1a5c2a]"
                      }`}
                    >
                      {event.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed mb-4 flex-1 ${
                        event.highlight ? "text-white/75" : "text-[#4a4a4a]"
                      }`}
                    >
                      {event.description}
                    </p>

                    {/* Lieu */}
                    <div
                      className={`flex items-center gap-1.5 text-xs mb-6 ${
                        event.highlight ? "text-white/60" : "text-[#4a4a4a]"
                      }`}
                    >
                      <MapPin size={12} />
                      {event.lieu}
                    </div>

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
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
