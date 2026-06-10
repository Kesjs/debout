import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, MapPin, ArrowRight } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#144720] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="BÉNIN DEBOUT"
                width={52}
                height={52}
                className="object-contain rounded-lg bg-white p-1"
              />
              <div>
                <p className="font-display font-bold text-xl text-white">
                  BÉNIN DEBOUT
                </p>
                <p className="text-sm text-white/60">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              Une association de jeunes engagés pour l'excellence, la solidarité
              et le rayonnement de la jeunesse béninoise et africaine.
            </p>
            <Link
              href="/faire-un-don"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f5a623] text-white rounded-full text-sm font-semibold hover:bg-[#d4891a] transition-colors duration-200"
            >
              Soutenir l'association
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => {
                if (item.dropdown) {
                  return item.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="text-sm text-white/60 hover:text-[#f5a623] transition-colors duration-150"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ));
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-[#f5a623] transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/evenements"
                  className="text-sm text-white/60 hover:text-[#f5a623] transition-colors duration-150"
                >
                  Événements
                </Link>
              </li>
              <li>
                <Link
                  href="/faire-un-don"
                  className="text-sm text-white/60 hover:text-[#f5a623] transition-colors duration-150"
                >
                  Faire un don
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/60 hover:text-[#f5a623] transition-colors duration-150 group"
                >
                  <Mail
                    size={14}
                    className="mt-0.5 shrink-0 group-hover:text-[#f5a623]"
                  />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#f5a623] transition-colors duration-150 group"
                >
                  <Phone size={14} className="shrink-0 group-hover:text-[#f5a623]" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#f5a623] transition-colors duration-150 group"
                >
                  <Instagram size={14} className="shrink-0 group-hover:text-[#f5a623]" />
                  {SITE_CONFIG.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>France (loi 1901) · Opérations au Bénin</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} BÉNIN DEBOUT — Tous droits réservés
          </p>
          <p className="text-xs text-white/40">
            Association enregistrée en France · Opérant au Bénin depuis 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
