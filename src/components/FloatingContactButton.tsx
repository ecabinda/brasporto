"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button once user scrolls past hero section
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Acesso rápido para contacto"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex items-center gap-2 p-3.5 rounded-full bg-[#181a19] text-white border border-brand-gold/40 shadow-2xl hover:scale-105 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-brand-gold"
        aria-label={`Ligar diretamente para ${BUSINESS_INFO.phone}`}
      >
        <Phone className="w-5 h-5 text-brand-gold animate-bounce" />
        <span className="hidden sm:inline text-xs font-mono font-semibold pr-1">
          {BUSINESS_INFO.phone}
        </span>
      </a>

      <a
        href="#contactos"
        className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-brand-gold text-[#101211] font-sans font-bold text-xs uppercase tracking-wider shadow-2xl shadow-brand-gold/25 hover:bg-brand-goldLight hover:scale-105 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-white"
      >
        <span>Pedir Orçamento</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </aside>
  );
}
