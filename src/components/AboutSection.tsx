"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Award, Hammer } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export function AboutSection() {
  const commitments = [
    "Equipa técnica com vasta experiência prática no terreno no Porto.",
    "Comunicação direta, transparente e permanente com o dono da obra.",
    "Materiais nobres selecionados para longevidade e isolamento.",
    "Proteção integral de áreas comuns e limpeza rigorosa.",
  ];

  return (
    <section
      id="sobre-nos"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#101211] text-white overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-white/10"
      aria-labelledby="sobre-nos-titulo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#161817]">
              <Image
                src="/images/real/obra-6.png"
                alt="Profissional qualificado da equipa Brasporto uniformizado em intervenção de cobertura no Porto"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101211] via-transparent to-transparent opacity-80" />

              {/* Floating verified badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141615]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-gold font-mono">
                    EQUIPA PRÓPRIA
                  </div>
                  <div className="text-sm font-bold text-white">
                    Profissionais Qualificados
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Hammer className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Accent decorative badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 p-5 rounded-2xl bg-[#161817] border border-brand-gold/30 shadow-2xl">
              <span className="block text-2xl font-bold font-display text-brand-gold">
                {BUSINESS_INFO.rating}
              </span>
              <span className="text-[11px] font-sans text-text-secondary uppercase tracking-wider">
                Classificação Google
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-6">
              QUEM SOMOS
            </div>

            <h2
              id="sobre-nos-titulo"
              className="text-headline-section font-display font-bold tracking-tight text-white mb-6 text-left"
            >
              Cada espaço merece uma nova história.
            </h2>

            <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed mb-6 text-left">
              Na <strong className="text-white font-medium">Brasporto</strong>, trabalhamos diariamente para
              transformar habitações e espaços comerciais no Porto através de soluções completas de remodelação,
              reparação e conservação estrutural.
            </p>

            <p className="text-sm sm:text-base text-text-muted font-sans leading-relaxed mb-8 text-left">
              Acreditamos que uma intervenção de sucesso nasce da combinação entre saber técnico, cumprimento
              escrupuloso do acordado e atenção artesanal aos detalhes que valorizam o seu imóvel a longo prazo.
            </p>

            {/* Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contactos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold text-[#101211] font-sans font-bold text-xs uppercase tracking-wider hover:bg-brand-goldLight transition-colors shadow-lg"
              >
                <span>Falar com a Nossa Equipa</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#obras-reais"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-sans text-xs uppercase tracking-wider transition-colors"
              >
                <span>Ver Intervenções em Curso</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
