import AnimatedSection from "@/components/ui/AnimatedSection";
import { CITATION, SITE_CONFIG } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function CitationSection() {
  return (
    <section className="py-20 bg-[#f0f7f0] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          {/* Icône guillemet */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1a5c2a] mb-8">
            <Quote size={24} className="text-[#f5a623]" />
          </div>

          {/* Citation */}
          <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-[#1a5c2a] leading-snug mb-8 max-w-3xl mx-auto">
            &ldquo;{CITATION.texte}&rdquo;
          </blockquote>

          {/* Ligne décorative */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-[#f5a623]" />
            <div className="w-2 h-2 rounded-full bg-[#f5a623]" />
            <div className="h-px w-12 bg-[#f5a623]" />
          </div>

          {/* Auteur */}
          <p className="font-display font-bold text-[#1a5c2a] text-base">
            {CITATION.auteur}
          </p>
          <p className="text-sm text-[#4a4a4a] mt-1">{CITATION.titre}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
