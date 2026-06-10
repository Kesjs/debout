"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, Phone, ArrowRight, UtensilsCrossed } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { DON_INFO } from "@/lib/constants";

export default function DonSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DON_INFO.ussd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Progression fictive — à remplacer par une vraie valeur dynamique
  const platsActuels = 347;
  const progression = Math.min((platsActuels / DON_INFO.objectifPlats) * 100, 100);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <AnimatedSection direction="left">
            <SectionTitle
              label="Faire un don"
              title="1 400 FCFA. Un enfant nourri. Un acte qui compte."
              subtitle="Chaque contribution, petite ou grande, nous rapproche de l'objectif : 1 000 repas chauds distribués lors de la Journée de Solidarité du 20 juin 2026."
            />

            {/* Progression */}
            <div className="mt-8 p-5 bg-[#f0f7f0] rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <UtensilsCrossed size={16} className="text-[#1a5c2a]" />
                  <span className="text-sm font-semibold text-[#1a5c2a]">
                    Objectif 1 000 plats
                  </span>
                </div>
                <span className="text-sm font-bold text-[#f5a623]">
                  {platsActuels} / {DON_INFO.objectifPlats}
                </span>
              </div>
              <div className="h-3 bg-white rounded-full overflow-hidden border border-[#1a5c2a]/10">
                <div
                  className="h-full bg-gradient-to-r from-[#1a5c2a] to-[#f5a623] rounded-full transition-all duration-1000"
                  style={{ width: `${progression}%` }}
                />
              </div>
              <p className="text-xs text-[#4a4a4a] mt-2">
                {DON_INFO.objectifPlats - platsActuels} plats restants à financer avant le 20 juin 2026
              </p>
            </div>

            <Link
              href="/faire-un-don"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-[#f5a623] text-white rounded-full text-sm font-semibold hover:bg-[#d4891a] transition-colors duration-200"
            >
              Comment faire un don
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          {/* Card Mobile Money */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="bg-[#1a5c2a] rounded-3xl p-8 text-white shadow-xl shadow-green-900/20">
              <p className="text-xs font-semibold text-[#f5a623] uppercase tracking-widest mb-1">
                Mobile Money · MTN Bénin
              </p>
              <p className="text-sm text-white/60 mb-6">
                Composez le code suivant depuis votre téléphone
              </p>

              {/* Code USSD */}
              <div className="bg-white/10 rounded-2xl p-5 mb-4">
                <p className="font-mono font-bold text-xl md:text-2xl text-white text-center tracking-wider break-all">
                  {DON_INFO.ussd}
                </p>
              </div>

              {/* Bouton copier */}
              <button
                onClick={handleCopy}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  copied
                    ? "bg-green-400/20 text-green-300"
                    : "bg-[#f5a623] text-white hover:bg-[#d4891a]"
                }`}
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    Code copié
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copier le code
                  </>
                )}
              </button>

              {/* Séparateur */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-white/40">ou appelez</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Numéro */}
              <a
                href={`tel:${DON_INFO.telephone}`}
                className="flex items-center justify-center gap-2.5 text-white/80 hover:text-white transition-colors duration-150 text-sm"
              >
                <Phone size={14} />
                <span className="font-medium">{DON_INFO.telephone}</span>
              </a>

              {/* Prix unitaire */}
              <p className="text-center text-xs text-white/40 mt-5">
                L'unité du plat est à {DON_INFO.prixPlat.toLocaleString("fr-FR")} {DON_INFO.devise}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
