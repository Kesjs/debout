"use client";

import { useState } from "react";
import { Copy, Check, Phone, UtensilsCrossed, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { DON_INFO, SITE_CONFIG } from "@/lib/constants";
import JoinSection from "@/components/home/JoinSection";

const platsActuels = 347;

export default function FaireUnDonPage() {
  const [copied, setCopied] = useState(false);
  const progression = Math.min((platsActuels / DON_INFO.objectifPlats) * 100, 100);

  const handleCopy = () => {
    navigator.clipboard.writeText(DON_INFO.ussd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://afriveille.com/wp-content/uploads/2020/04/hands-people-friends-communication-45842-1000x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[#1a5c2a]/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-4">
              Soutenir l'association
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Faire un don
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              1 400 FCFA. Un enfant nourri. Un geste qui change une journée — et peut-être bien plus.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Don section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Pourquoi donner */}
            <AnimatedSection direction="left">
              <SectionTitle
                label="Votre impact"
                title="Chaque franc compte."
              />
              <p className="mt-6 text-[#4a4a4a] leading-relaxed">
                Le 20 juin 2026, BÉNIN DEBOUT distribue 1 000 repas chauds dans quatre villes du Bénin. Pour y arriver, nous avons besoin de vous.
              </p>

              {/* Progression */}
              <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed size={16} className="text-[#1a5c2a]" />
                    <span className="text-sm font-semibold text-[#1a5c2a]">Objectif 1 000 plats</span>
                  </div>
                  <span className="text-sm font-bold text-[#f5a623]">
                    {platsActuels} / {DON_INFO.objectifPlats}
                  </span>
                </div>
                <div className="h-4 bg-[#f0f7f0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1a5c2a] to-[#f5a623] rounded-full transition-all duration-1000"
                    style={{ width: `${progression}%` }}
                  />
                </div>
                <p className="text-xs text-[#4a4a4a] mt-2">
                  {DON_INFO.objectifPlats - platsActuels} plats restants · Journée du 20 juin 2026
                </p>
              </div>

              {/* Instructions */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-[#1a5c2a] mb-4">Comment faire votre don :</p>
                <div className="space-y-3">
                  {DON_INFO.instructions.map((step) => (
                    <div key={step.step} className="flex items-start gap-3">
                      <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1a5c2a] text-white text-xs font-bold">
                        {step.step}
                      </span>
                      <span className="text-sm text-[#4a4a4a] pt-0.5">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Card Mobile Money */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-[#1a5c2a] rounded-3xl p-8 text-white shadow-xl shadow-green-900/20 sticky top-24">
                <p className="text-xs font-semibold text-[#f5a623] uppercase tracking-widest mb-1">
                  Mobile Money · MTN Bénin
                </p>
                <p className="text-sm text-white/60 mb-6">
                  Composez ce code depuis votre téléphone et remplacez MONTANT
                </p>

                <div className="bg-white/10 rounded-2xl p-5 mb-4 overflow-x-auto">
                  <p className="font-mono font-bold text-lg md:text-xl text-white text-center tracking-wider whitespace-nowrap">
                    {DON_INFO.ussd}
                  </p>
                </div>

                <button
                  onClick={handleCopy}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 mb-4 ${
                    copied
                      ? "bg-green-400/20 text-green-300"
                      : "bg-[#f5a623] text-white hover:bg-[#d4891a]"
                  }`}
                >
                  {copied ? <><Check size={14} /> Code copié</> : <><Copy size={14} /> Copier le code</>}
                </button>

                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-xs text-white/40">ou appelez directement</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <a
                  href={`tel:${DON_INFO.telephone}`}
                  className="flex items-center justify-center gap-2.5 text-white hover:text-[#f5a623] transition-colors duration-150 font-medium"
                >
                  <Phone size={16} />
                  {DON_INFO.telephone}
                </a>

                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-xs text-white/40">
                    1 plat = {DON_INFO.prixPlat.toLocaleString("fr-FR")} {DON_INFO.devise}
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    Contactez-nous à{" "}
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#f5a623] hover:underline">
                      {SITE_CONFIG.email}
                    </a>{" "}
                    pour tout don en nature ou partenariat
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <JoinSection />
    </>
  );
}
