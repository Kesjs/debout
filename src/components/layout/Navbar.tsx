"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Monitor,
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Monitor,
  Globe,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isDropdownActive = () =>
    pathname.startsWith("/ce-quon-fait");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/logo.png"
                alt="BÉNIN DEBOUT"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="hidden sm:block">
                <p
                  className={`font-display font-bold text-base leading-tight transition-colors duration-300 ${
                    scrolled ? "text-[#1a5c2a]" : "text-white"
                  }`}
                >
                  BÉNIN DEBOUT
                </p>
                <p
                  className={`text-xs transition-colors duration-300 ${
                    scrolled ? "text-[#4a4a4a]" : "text-white/70"
                  }`}
                >
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.label} ref={dropdownRef} className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 group ${
                          scrolled
                            ? isDropdownActive()
                              ? "text-[#1a5c2a] font-semibold"
                              : "text-[#1c1c1c] hover:text-[#1a5c2a]"
                            : "text-white hover:text-white/80"
                        }`}
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} />
                        </motion.span>
                        {/* Underline */}
                        <span
                          className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#f5a623] rounded-full transition-all duration-300 origin-left ${
                            isDropdownActive() ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                          >
                            {item.dropdown.map((sub, i) => {
                              const Icon = iconMap[sub.icon];
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className={`flex items-start gap-3 px-4 py-3 group/sub hover:bg-[#f0f7f0] transition-colors duration-150 ${
                                    i < item.dropdown!.length - 1
                                      ? "border-b border-gray-100"
                                      : ""
                                  }`}
                                >
                                  <span className="mt-0.5 p-1.5 rounded-lg bg-[#f0f7f0] group-hover/sub:bg-[#f5a623] transition-colors duration-150">
                                    <Icon
                                      size={14}
                                      className="text-[#1a5c2a] group-hover/sub:text-white transition-colors duration-150"
                                    />
                                  </span>
                                  <div>
                                    <p className="text-sm font-semibold text-[#1c1c1c] group-hover/sub:text-[#1a5c2a]">
                                      {sub.label}
                                    </p>
                                    <p className="text-xs text-[#4a4a4a] mt-0.5">
                                      {sub.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 group ${
                      scrolled
                        ? isActive(item.href)
                          ? "text-[#1a5c2a] font-semibold"
                          : "text-[#1c1c1c] hover:text-[#1a5c2a]"
                        : "text-white hover:text-white/80"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#f5a623] rounded-full transition-all duration-300 origin-left ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/faire-un-don"
                className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  scrolled
                    ? "bg-[#1a5c2a] text-white hover:bg-[#f5a623] active:scale-[0.97]"
                    : "border border-white text-white hover:bg-white hover:text-[#1a5c2a] active:scale-[0.97]"
                }`}
              >
                Faire un don
                <ArrowRight size={14} />
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  scrolled ? "text-[#1a5c2a]" : "text-white"
                }`}
                aria-label="Ouvrir le menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl flex flex-col"
            >
              {/* Header drawer */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo.png"
                    alt="BÉNIN DEBOUT"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                  <p className="font-display font-bold text-sm text-[#1a5c2a]">
                    BÉNIN DEBOUT
                  </p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md text-[#4a4a4a] hover:text-[#1a5c2a] hover:bg-[#f0f7f0] transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav items mobile */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {NAV_ITEMS.map((item) => {
                  if (item.dropdown) {
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                            isDropdownActive()
                              ? "bg-[#f0f7f0] text-[#1a5c2a] font-semibold border-l-4 border-[#1a5c2a]"
                              : "text-[#1c1c1c] hover:bg-[#f0f7f0]"
                          }`}
                        >
                          {item.label}
                          <motion.span
                            animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={14} />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 mt-1 space-y-1"
                            >
                              {item.dropdown.map((sub) => {
                                const Icon = iconMap[sub.icon];
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                                      isActive(sub.href)
                                        ? "bg-[#f0f7f0] text-[#1a5c2a] font-semibold border-l-4 border-[#f5a623]"
                                        : "text-[#4a4a4a] hover:bg-[#f0f7f0] hover:text-[#1a5c2a]"
                                    }`}
                                  >
                                    <Icon size={14} />
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-[#f0f7f0] text-[#1a5c2a] font-semibold border-l-4 border-[#1a5c2a]"
                          : "text-[#1c1c1c] hover:bg-[#f0f7f0]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA mobile */}
              <div className="p-4 border-t border-gray-100">
                <Link
                  href="/faire-un-don"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#1a5c2a] text-white rounded-full font-semibold text-sm hover:bg-[#f5a623] transition-colors duration-200"
                >
                  Faire un don
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
