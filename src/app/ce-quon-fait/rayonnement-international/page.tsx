import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Globe, Users, ArrowRight, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import JoinSection from "@/components/home/JoinSection";

export const metadata: Metadata = {
  title: "Rayonnement International",
  description:
    "La Conférence Internationale de l'Artisanat Numérique (CIAN) — 17 juillet 2026, Cotonou. BÉNIN DEBOUT positionne le Bénin comme hub de l'innovation numérique africaine.",
};

export default function RayonnementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Conférence / événement professionnel africain
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#1a5c2a]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-4">
              Axe 3
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rayonnement International
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Le Bénin, hub de l'innovation numérique artisanale en Afrique. Ce n'est pas une promesse, c'est un projet en marche.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CIAN */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                  alt="Conférence Internationale de l'Artisanat Numérique — CIAN 2026"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-5 left-5 bg-[#f5a623] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  1ère édition
                </div>
              </div>
              {/* Card chevauchante */}
              <div className="relative -mt-10 mx-6 bg-[#1a5c2a] rounded-2xl shadow-xl p-5 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar size={14} className="text-[#f5a623]" />
                  <span className="text-sm font-semibold">17 juillet 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-[#f5a623]" />
                  <span className="text-sm text-white/80">Cotonou, Bénin</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <SectionTitle
                label="CIAN 2026"
                title="La Conférence Internationale de l'Artisanat Numérique"
              />
              <p className="mt-6 text-[#4a4a4a] leading-relaxed">
                Le 17 juillet 2026, Cotonou accueille la première édition de la CIAN — un rassemblement d'experts, d'entrepreneurs numériques et de décideurs africains et internationaux autour de l'artisanat numérique africain.
              </p>
              <p className="mt-4 text-[#4a4a4a] leading-relaxed">
                L'objectif est clair : valoriser les talents locaux sur la scène internationale et poser les bases d'un réseau panafricain de l'artisanat numérique durable.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: Globe, label: "Conférenciers africains & internationaux" },
                  { icon: Users, label: "Réseau panafricain du numérique" },
                  { icon: Star, label: "Valorisation des talents locaux" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-2 p-3 rounded-xl bg-[#f0f7f0]">
                      <Icon size={14} className="text-[#1a5c2a] mt-0.5 shrink-0" />
                      <span className="text-xs text-[#4a4a4a] leading-relaxed">{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <Link
                href="/faire-un-don"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#1a5c2a] text-white rounded-full text-sm font-semibold hover:bg-[#f5a623] transition-colors duration-200"
              >
                Soutenir la CIAN
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
