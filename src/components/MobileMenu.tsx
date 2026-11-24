"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight, Phone, MapPin, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação móvel"
      className="fixed inset-0 z-50 flex flex-col bg-[#101211] text-white overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-5 border-b border-white/10">
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg tracking-tight text-white">
            BRASPORTO
          </span>
          <span className="text-[10px] uppercase tracking-widest text-brand-gold">
            Reparos e Remodelações
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/5 text-white hover:text-brand-gold transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
          aria-label="Fechar menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-6 py-8 flex flex-col justify-center space-y-5">
        {[
          { href: "#inicio", label: "Início" },
          { href: "#sobre-nos", label: "Sobre nós" },
          { href: "#servicos", label: "Serviços" },
          { href: "#obras-reais", label: "Obras Reais & Em Curso" },
          { href: "#projetos", label: "Portfólio" },
          { href: "#metodologia", label: "Como Trabalhamos" },
          { href: "#avaliacoes", label: "Avaliações" },
          { href: "#perguntas-frequentes", label: "Perguntas Frequentes" },
          { href: "#contactos", label: "Contactos" },
        ].map((item, idx) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between text-2xl font-display font-semibold text-white/90 hover:text-brand-gold transition-colors py-1 border-b border-white/5"
          >
            <span>{item.label}</span>
            <span className="text-xs font-sans text-brand-gold font-normal">
              0{idx + 1}
            </span>
          </a>
        ))}
      </nav>

      {/* Bottom Info & Contact */}
      <div className="p-6 bg-[#161817] border-t border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-xs text-brand-gold">
          <Star className="w-4 h-4 fill-brand-gold" />
          <span className="font-semibold">{BUSINESS_INFO.rating}/5</span>
          <span className="text-text-muted">({BUSINESS_INFO.reviewCount} avaliações no Google)</span>
        </div>

        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
        >
          <Phone className="w-4 h-4 text-brand-gold shrink-0" />
          <span>{BUSINESS_INFO.phone}</span>
        </a>

        <div className="flex items-start gap-2 text-xs text-text-muted">
          <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <span>{BUSINESS_INFO.address.full}</span>
        </div>

        <a
          href="#contactos"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-gold text-[#101211] font-semibold text-sm uppercase tracking-wider"
        >
          <span>Pedir Orçamento</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
