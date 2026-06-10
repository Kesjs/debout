import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, UtensilsCrossed, BookOpen, HeartPulse, Users } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { VILLES_ACTIONS } from "@/lib/constants";
import JoinSection from "@/components/home/JoinSection";

export const metadata: Metadata = {
  title: "Solidarité Humanitaire",
  description:
    "BÉNIN DEBOUT distribue des repas chauds, des fournitures scolaires et une aide médicale aux populations vulnérables dans 4 villes du Bénin.",
};

const actions = [
  {
    icon: UtensilsCrossed,
    title: "Repas chauds",
    description:
      "Distribution de repas chauds à des enfants démunis dans plusieurs villes — Cotonou, Ouidah, Abomey-Calavi, Allada. Parce que la faim ne peut pas attendre.",
  },
  {
    icon: BookOpen,
    title: "Fournitures scolaires",
    description:
      "Remise de kits scolaires complets aux enfants démunis couvrant l'ensemble du territoire national. L'éducation commence par avoir les bons outils.",
  },
  {
    icon: HeartPulse,
    title: "Aide médicale",
    description:
      "Prise en charge de frais médicaux pour des femmes hospitalisées dans le besoin. La santé est un droit, pas un privilège.",
  },
  {
    icon: Users,
    title: "Personnes vulnérables",
    description:
      "Fourniture de repas aux personnes à mobilité réduite ou en situation de grande précarité. La solidarité ne fait pas de distinction.",
  },
];

export default function SolidariteHumanitairePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Solidarité humanitaire — enfants et repas
            backgroundImage: "url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#1a5c2a]/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-4">
              Axe 1
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Solidarité Humanitaire
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Des gestes simples qui changent des vies. BÉNIN DEBOUT agit là où la solidarité est urgente — dans les quartiers défavorisés, auprès des enfants, des femmes et des personnes vulnérables.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle
              label="Ce que nous faisons"
              title="Des actions concrètes, pas des promesses"
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <AnimatedSection key={action.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#f0f7f0] flex items-center justify-center">
                      <Icon size={20} className="text-[#1a5c2a]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#1a5c2a] mb-2">{action.title}</h3>
                      <p className="text-sm text-[#4a4a4a] leading-relaxed">{action.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journée 1000 plats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                  alt="Journée 1000 plats — BÉNIN DEBOUT"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-5 left-5 bg-[#f5a623] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  20 juin 2026
                </div>
              </div>
              {/* Card chevauchante */}
              <div className="relative -mt-10 mx-6 bg-[#1a5c2a] rounded-2xl shadow-xl p-5 text-white">
                <p className="text-xs font-semibold text-[#f5a623] uppercase tracking-wider mb-1">Objectif</p>
                <p className="font-display font-bold text-2xl text-white">1 000 repas</p>
                <p className="text-xs text-white/60 mt-1">en une seule journée · 1 400 FCFA l'unité</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <SectionTitle
                label="Événement phare"
                title="Journée de Solidarité — 1 000 Plats"
              />
              <p className="mt-6 text-[#4a4a4a] leading-relaxed">
                Le 20 juin 2026, BÉNIN DEBOUT mobilise ses bénévoles, partenaires et sympathisants pour distribuer 1 000 repas chauds en une seule journée, dans quatre villes du Bénin.
              </p>
              <p className="mt-4 text-[#4a4a4a] leading-relaxed">
                Un acte de solidarité massif et coordonné. Chaque don de 1 400 FCFA représente un plat chaud pour un enfant, une personne âgée, quelqu'un qui en a besoin.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {VILLES_ACTIONS.slice(0, 4).map((ville) => (
                  <span
                    key={ville}
                    className="inline-flex items-center gap-1 text-xs text-[#1a5c2a] bg-[#f0f7f0] px-3 py-1.5 rounded-full border border-[#1a5c2a]/20"
                  >
                    <MapPin size={10} />
                    {ville}
                  </span>
                ))}
              </div>
              <Link
                href="/faire-un-don"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#f5a623] text-white rounded-full text-sm font-semibold hover:bg-[#d4891a] transition-colors duration-200"
              >
                Soutenir la Journée 1 000 Plats
                <ArrowRight size={14} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <JoinSection />
    </>
  );
}
