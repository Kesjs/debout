import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Users, Shield, Lightbulb, Scale } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { VALEURS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, la vision et les valeurs de BÉNIN DEBOUT — association fondée par Jean de Dieu Roméo AHOSSI pour élever la jeunesse béninoise.",
};

const iconMap: Record<string, React.ElementType> = {
  Star, Heart, Users, Shield, Lightbulb, Scale,
};

export default function AProposPage() {
  return (
    <>
      {/* Hero page */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Jeunes africains — page à propos
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#1a5c2a]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-4">
              Notre histoire
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              À propos de BÉNIN DEBOUT
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Une association née d'une conviction simple : la jeunesse béninoise a toutes les ressources pour se lever, construire et rayonner.
            </p>
          </AnimatedSection>
        </div>

        {/* Card chevauchante — identité rapide */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mb-12 mt-10">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-gray-100">
              {[
                { label: "Statut juridique", value: "Loi 1901", sub: "France · opérations au Bénin" },
                { label: "Fondateur", value: "Roméo AHOSSI", sub: "Président" },
                { label: "Caractère", value: "Apolitique", sub: "Ouvert à toutes appartenances" },
                { label: "En activité depuis", value: "2025", sub: "Bénin · présent" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-[#4a4a4a] uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-display font-bold text-lg text-[#1a5c2a] leading-tight">{item.value}</p>
                  <p className="text-xs text-[#4a4a4a] mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Identité complète */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionTitle
              label="Qui sommes-nous"
              title="Une association fondée par des jeunes, pour des jeunes."
              subtitle="BÉNIN DEBOUT est axée sur le développement du capital humain de la jeunesse et les actions caritatives. Elle rassemble une génération déterminée à construire un Bénin fort par l'excellence individuelle et collective."
              centered
            />
          </AnimatedSection>

          {/* Fiche identité */}
          <AnimatedSection delay={0.15}>
            <div className="bg-[#fafafa] border border-gray-100 rounded-2xl overflow-hidden">
              {[
                { label: "Statut juridique", value: "Association loi 1901 (France) — opérations au Bénin" },
                { label: "Fondateur & Président", value: "Jean de Dieu Roméo AHOSSI" },
                { label: "Secrétaire Général", value: "Glodi MAKAVALA" },
                { label: "Contact opérationnel", value: "benindebout.citoyen@gmail.com", isEmail: true },
                { label: "Devise", value: "L'excellence chez les jeunes" },
                { label: "Caractère", value: "Apolitique — ouvert à toutes appartenances" },
                { label: "Année d'opération au Bénin", value: "2025 – présent" },
              ].map((row, index) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4 ${
                    index < 6 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-xs font-semibold text-[#1a5c2a] uppercase tracking-wider shrink-0 sm:w-56">
                    {row.label}
                  </span>
                  {row.isEmail ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="text-sm text-[#f5a623] font-medium hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-sm text-[#1c1c1c] font-medium">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionTitle
                label="Notre vision"
                title="Une jeunesse africaine debout."
              />
              <p className="mt-6 text-[#4a4a4a] leading-relaxed">
                Nous imaginons une jeunesse béninoise et africaine instruite, compétente, solidaire et fière. Une génération qui n'attend pas les solutions mais qui les crée, qui ne subit pas les défis mais qui les transforme en opportunités.
              </p>
              <p className="mt-4 text-[#4a4a4a] leading-relaxed">
                Enregistrée en France sous la loi 1901 et opérant au Bénin depuis 2025, BÉNIN DEBOUT incarne cette ambition à travers des actions concrètes, mesurables et durables.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Jeunes béninois engagés"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Card chevauchante mission */}
              <div className="relative -mt-10 mx-6 bg-[#1a5c2a] rounded-2xl p-5 text-white shadow-lg">
                <p className="text-xs font-semibold text-[#f5a623] uppercase tracking-wider mb-2">Notre mission</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Agir sur trois leviers simultanés : renforcement des compétences numériques, solidarité humanitaire, et rayonnement international de l'artisanat numérique africain.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle
              label="Ce qui nous guide"
              title="Nos valeurs fondatrices"
              centered
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALEURS.map((valeur, index) => {
              const Icon = iconMap[valeur.icon];
              return (
                <AnimatedSection key={valeur.title} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-[#fafafa] border border-gray-100 hover:shadow-md hover:border-[#1a5c2a]/20 transition-all duration-300 group">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#f0f7f0] group-hover:bg-[#1a5c2a] transition-colors duration-300 mb-4">
                      <Icon size={18} className="text-[#1a5c2a] group-hover:text-[#f5a623] transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-[#1a5c2a] mb-2">{valeur.title}</h3>
                    <p className="text-sm text-[#4a4a4a] leading-relaxed">{valeur.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle
              label="Gouvernance"
              title="Ceux qui portent le mouvement"
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                nom: SITE_CONFIG.fondateur,
                role: "Fondateur & Président",
                desc: "Visionnaire et moteur de l'association. Jean de Dieu Roméo AHOSSI porte la conviction que la jeunesse africaine a toutes les ressources pour se lever.",
              },
              {
                nom: SITE_CONFIG.secretaire,
                role: "Secrétaire Général",
                desc: "Garant de la rigueur administrative et de la cohérence opérationnelle de l'association. Glodi MAKAVALA coordonne les actions sur le terrain.",
              },
            ].map((membre) => (
              <AnimatedSection key={membre.nom}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-[#f0f7f0] flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-xl text-[#1a5c2a]">
                      {membre.nom.charAt(0)}
                    </span>
                  </div>
                  <p className="font-display font-bold text-[#1a5c2a] mb-1">{membre.nom}</p>
                  <p className="text-xs text-[#f5a623] font-semibold uppercase tracking-wider mb-3">{membre.role}</p>
                  <p className="text-sm text-[#4a4a4a] leading-relaxed">{membre.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
