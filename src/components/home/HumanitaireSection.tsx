import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { VILLES_ACTIONS } from "@/lib/constants";

export default function HumanitaireSection() {
  const actions = [
    "Distribution de repas chauds aux enfants démunis",
    "Remise de kits scolaires dans les quartiers défavorisés",
    "Aide médicale pour femmes hospitalisées dans le besoin",
    "Soutien aux personnes à mobilité réduite",
  ];

  return (
    <section className="py-20 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          {/* Image avec card chevauchante */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
                alt="Enfants bénéficiaires des actions de solidarité de BÉNIN DEBOUT"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Tag flottant */}
              <div className="absolute top-5 left-5 bg-[#f5a623] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Axe 1 — Solidarité
              </div>
            </div>

            {/* Card qui chevauche l'image par le bas */}
            <div className="relative -mt-10 mx-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 lg:hidden">
              <p className="text-sm font-semibold text-[#1a5c2a] mb-2">
                Villes couvertes
              </p>
              <div className="flex flex-wrap gap-2">
                {VILLES_ACTIONS.map((ville) => (
                  <span
                    key={ville}
                    className="inline-flex items-center gap-1 text-xs text-[#4a4a4a] bg-[#f0f7f0] px-2.5 py-1 rounded-full"
                  >
                    <MapPin size={10} className="text-[#1a5c2a]" />
                    {ville}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Texte à droite */}
          <AnimatedSection
            direction="right"
            delay={0.15}
            className="lg:pl-14 pt-8 lg:pt-0"
          >
            <SectionTitle
              label="Solidarité humanitaire"
              title="Un plat chaud, un sourire. C'est aussi simple que ça."
              subtitle="Depuis 2025, BÉNIN DEBOUT traduit ses valeurs en gestes concrets. Parce que la solidarité ne se décrète pas, elle se vit."
            />

            <ul className="mt-8 space-y-3">
              {actions.map((action) => (
                <li key={action} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#f0f7f0]">
                    <Check size={11} className="text-[#1a5c2a]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#4a4a4a] leading-relaxed">
                    {action}
                  </span>
                </li>
              ))}
            </ul>

            {/* Card villes — desktop */}
            <div className="hidden lg:block mt-8 bg-[#f0f7f0] rounded-2xl p-5">
              <p className="text-xs font-semibold text-[#1a5c2a] uppercase tracking-wider mb-3">
                Villes couvertes
              </p>
              <div className="flex flex-wrap gap-2">
                {VILLES_ACTIONS.map((ville) => (
                  <span
                    key={ville}
                    className="inline-flex items-center gap-1 text-xs text-[#1a5c2a] bg-white px-2.5 py-1 rounded-full border border-[#1a5c2a]/20"
                  >
                    <MapPin size={10} />
                    {ville}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/ce-quon-fait/solidarite-humanitaire"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-[#1a5c2a] text-white rounded-full text-sm font-semibold hover:bg-[#f5a623] transition-colors duration-200"
            >
              Voir toutes nos actions
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
