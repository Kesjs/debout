import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Palette, TrendingUp, FileText, Code, Briefcase, Award, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPETENCES_NUMERIQUES } from "@/lib/constants";
import JoinSection from "@/components/home/JoinSection";

export const metadata: Metadata = {
  title: "Artisan Numérique",
  description:
    "Le Programme Artisan Numérique forme gratuitement la jeunesse béninoise et ouest-africaine aux métiers du digital — design, marketing, développement web et entrepreneuriat.",
};

const iconMap: Record<string, React.ElementType> = {
  Palette, TrendingUp, FileText, Code, Briefcase, Award,
};

export default function ArtisanNumeriquePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Artisan / numérique africain — page artisan
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#144720]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-4">
              Axe 2
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Programme Artisan Numérique
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              La compétence numérique est la clé de l'émancipation économique de la jeunesse africaine. Nous la rendons accessible à tous.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <SectionTitle
                label="Le programme"
                title="Former pour libérer. Former pour construire."
              />
              <p className="mt-6 text-[#4a4a4a] leading-relaxed">
                Le Programme Artisan Numérique est la colonne vertébrale de notre engagement pour l'employabilité des jeunes. Gratuit ou à coût très réduit, il s'adresse à la jeunesse béninoise et ouest-africaine qui veut se former aux métiers du digital.
              </p>
              <p className="mt-4 text-[#4a4a4a] leading-relaxed">
                Pas de discours, pas de théorie creuse. Des compétences pratiques, une certification valorisable, et un accompagnement vers l'auto-emploi et l'entrepreneuriat numérique.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Bénin (national)", "Togo — Lomé"].map((lieu) => (
                  <span
                    key={lieu}
                    className="inline-flex items-center gap-1.5 text-xs text-[#1a5c2a] bg-[#f0f7f0] px-3 py-1.5 rounded-full border border-[#1a5c2a]/20 font-medium"
                  >
                    <MapPin size={10} />
                    {lieu}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                  alt="Formation numérique — Programme Artisan Numérique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Card chevauchante */}
              <div className="relative -mt-10 mx-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <p className="text-xs font-semibold text-[#1a5c2a] uppercase tracking-wider mb-2">Impact visé</p>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">
                  Insertion professionnelle, auto-emploi et entrepreneuriat numérique pour chaque participant certifié.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle
              label="Ce qu'on enseigne"
              title="6 métiers du numérique, 1 avenir"
              centered
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPETENCES_NUMERIQUES.map((comp, index) => {
              const Icon = iconMap[comp.icon];
              return (
                <AnimatedSection key={comp.label} delay={index * 0.1}>
                  <div className="group flex items-center gap-4 p-5 rounded-2xl bg-[#fafafa] border border-gray-100 hover:bg-[#1a5c2a] hover:border-[#1a5c2a] transition-all duration-300">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-[#f0f7f0] group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                      <Icon size={18} className="text-[#1a5c2a] group-hover:text-[#f5a623] transition-colors duration-300" />
                    </div>
                    <p className="font-semibold text-[#1c1c1c] group-hover:text-white transition-colors duration-300">
                      {comp.label}
                    </p>
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
