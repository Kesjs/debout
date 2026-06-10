import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Palette, TrendingUp, FileText, Code, Briefcase, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { COMPETENCES_NUMERIQUES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Palette, TrendingUp, FileText, Code, Briefcase, Award,
};

export default function ArtisanSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          {/* Texte à gauche */}
          <AnimatedSection direction="left" className="lg:pr-14 pb-8 lg:pb-0">
            <SectionTitle
              label="Artisan Numérique"
              title="Former les bâtisseurs du Bénin numérique."
              subtitle="Des formations gratuites ou accessibles, ancrées dans les réalités africaines. Parce que la compétence est la meilleure arme contre la précarité."
            />

            <div className="mt-8 grid grid-cols-2 gap-3">
              {COMPETENCES_NUMERIQUES.map((comp) => {
                const Icon = iconMap[comp.icon];
                return (
                  <div
                    key={comp.label}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f0f7f0] hover:bg-[#1a5c2a] group transition-colors duration-200"
                  >
                    <Icon
                      size={15}
                      className="text-[#1a5c2a] group-hover:text-[#f5a623] transition-colors shrink-0"
                    />
                    <span className="text-xs font-medium text-[#1c1c1c] group-hover:text-white transition-colors">
                      {comp.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              href="/ce-quon-fait/artisan-numerique"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#1a5c2a] text-white rounded-full text-sm font-semibold hover:bg-[#f5a623] transition-colors duration-200"
            >
              Découvrir le programme
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          {/* Image à droite avec card chevauchante */}
          <AnimatedSection direction="right" delay={0.15} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                alt="Jeunes en formation numérique — Programme Artisan Numérique de BÉNIN DEBOUT"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-5 left-5 bg-[#1a5c2a] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Axe 2 — Formation
              </div>
            </div>

            {/* Card chevauchante */}
            <div className="relative -mt-10 mx-6 bg-[#1a5c2a] rounded-2xl shadow-xl p-5 text-white">
              <p className="text-xs font-semibold text-[#f5a623] uppercase tracking-wider mb-1">
                Zones d'action
              </p>
              <p className="text-sm font-medium">
                Bénin (Cotonou & national) · Togo (Lomé)
              </p>
              <p className="text-xs text-white/60 mt-1">
                Extension vers d'autres pays d'Afrique de l'Ouest en cours
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
