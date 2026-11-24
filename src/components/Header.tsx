"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#101211]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex flex-col focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm transition-transform"
              aria-label="BRASPORTO — Reparos e Remodelações, voltar ao início"
            >
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-brand-gold transition-colors">
                BRASPORTO
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-brand-gold">
                Reparos e Remodelações · Porto
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navegação principal"
              className="hidden md:flex items-center space-x-1 lg:space-x-2"
            >
              <a
                href="#inicio"
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                Início
              </a>
              <a
                href="#sobre-nos"
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                Sobre nós
              </a>
              <a
                href="#servicos"
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                Serviços
              </a>
              <a
                href="#obras-reais"
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Obras Reais</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              </a>
              <a
                href="#projetos"
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                Portfólio
              </a>
              <a
                href="#avaliacoes"
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                Avaliações
              </a>
              <a
                href="#contactos"
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                Contactos
              </a>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-brand-gold transition-colors px-3 py-2 rounded-full border border-white/10"
                aria-label={`Ligar para ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href="#contactos"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-gold text-[#101211] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-brand-goldLight transition-all duration-300 shadow-md hover:shadow-brand-gold/20"
              >
                <span>Pedir Orçamento</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2.5 rounded-lg text-white hover:text-brand-gold hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Sheet */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
