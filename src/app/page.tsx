import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AxesSection from "@/components/home/AxesSection";
import StatsSection from "@/components/home/StatsSection";
import HumanitaireSection from "@/components/home/HumanitaireSection";
import ArtisanSection from "@/components/home/ArtisanSection";
import EvenementsSection from "@/components/home/EvenementsSection";
import CitationSection from "@/components/home/CitationSection";
import DonSection from "@/components/home/DonSection";
import JoinSection from "@/components/home/JoinSection";

export const metadata: Metadata = {
  title: "BÉNIN DEBOUT — L'excellence chez les jeunes",
  description:
    "BÉNIN DEBOUT est une association apolitique fondée par des jeunes engagés, opérant au Bénin depuis 2025. Solidarité humanitaire, formation numérique et rayonnement international.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AxesSection />
      <StatsSection />
      <HumanitaireSection />
      <ArtisanSection />
      <EvenementsSection />
      <CitationSection />
      <DonSection />
      <JoinSection />
    </>
  );
}
