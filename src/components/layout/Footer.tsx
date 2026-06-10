import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

function InstagramIcon({ size = 18, strokeWidth = 1.75 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2.5} />
    </svg>
  );
}

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
                  <Mail size={14} className="mt-0.5 shrink-0 group-hover:text-[#f5a623]" />
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

              {/* Instagram — intégration soignée */}
              <li className="pt-1">
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {/* Icône avec gradient Instagram */}
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#f5a623] shrink-0">
                    <InstagramIcon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-tight truncate">
                      {SITE_CONFIG.instagramHandle}
                    </p>
                    <p className="text-xs text-white/40 leading-tight mt-0.5">
                      Suivez-nous
                    </p>
                  </div>
                  <ArrowRight size={13} className="shrink-0 text-white/30 group-hover:text-[#f5a623] group-hover:translate-x-0.5 transition-all duration-200 ml-auto" />
                </a>
              </li>

              <li className="flex items-start gap-2.5 text-sm text-white/40 pt-1">
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
