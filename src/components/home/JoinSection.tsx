import Link from "next/link";
import { Mail, Instagram, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function JoinSection() {
  return (
    <section className="bg-[#1a5c2a] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-block text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-4">
            Rejoignez le mouvement
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ensemble, bâtissons une jeunesse
            <br className="hidden md:block" />
            <span className="text-[#f5a623]"> béninoise debout.</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Entreprise, institution, citoyen engagé ou membre de la diaspora —
            votre soutien, quelle qu'en soit la forme, construit directement
            l'avenir de la jeunesse béninoise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/faire-un-don"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f5a623] text-white rounded-full font-semibold text-base hover:bg-[#d4891a] active:scale-[0.97] transition-all duration-200"
            >
              Faire un don
              <ArrowRight size={16} />
            </Link>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-full font-medium text-base hover:bg-white/10 active:scale-[0.97] transition-all duration-200"
            >
              <Mail size={15} />
              {SITE_CONFIG.email}
            </a>
          </div>

          {/* Instagram */}
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#f5a623] text-sm transition-colors duration-200"
          >
            <Instagram size={15} />
            {SITE_CONFIG.instagramHandle}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
