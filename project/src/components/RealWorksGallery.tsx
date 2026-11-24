"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Camera, CheckCircle2, MapPin, Tag } from "lucide-react";
import { REAL_WORKS } from "@/lib/data";

export function RealWorksGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todas as Obras" },
    { id: "cozinha", label: "Cozinhas" },
    { id: "estruturas", label: "Estruturas & Telhados" },
    { id: "interiores", label: "Interiores & Acabamentos" },
  ];

  const filteredWorks = REAL_WORKS.filter((work) => {
    if (selectedCategory === "todos") return true;
    if (selectedCategory === "cozinha") return work.category.toLowerCase().includes("cozinha");
    if (selectedCategory === "estruturas")
      return (
        work.category.toLowerCase().includes("telhado") ||
        work.category.toLowerCase().includes("estruturas") ||
        work.category.toLowerCase().includes("carpintaria")
      );
    if (selectedCategory === "interiores")
      return (
        work.category.toLowerCase().includes("interiores") ||
        work.category.toLowerCase().includes("pintura")
      );
    return true;
  });

  return (
    <section
      id="obras-reais"
      className="w-full py-20 sm:py-28 lg:py-36 bg-[#101211] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10"
      aria-labelledby="obras-reais-titulo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>REGISTO AUTÊNTICO NO TERRENO</span>
            </div>
            <h2
              id="obras-reais-titulo"
              className="text-headline-section font-display font-bold tracking-tight text-white mb-4 text-left"
            >
              Obras reais executadas no Porto.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed text-left">
              Fotografias reais das nossas intervenções e trabalhos em curso pela equipa Brasporto.
              Transparência total desde a estrutura bruta aos acabamentos finais de luxo.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? "bg-brand-gold text-[#101211] font-semibold shadow-md"
                    : "bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bespoke Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWorks.map((work, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={work.id}
                className={`group relative rounded-2xl overflow-hidden bg-[#161817] border border-white/10 hover:border-brand-gold/40 transition-all duration-500 flex flex-col justify-between ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image Container with Aspect Ratio */}
                <div
                  className={`relative w-full overflow-hidden bg-black/50 ${
                    isFeatured ? "aspect-[16/10] sm:aspect-[21/11]" : "aspect-[4/3] sm:aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161817] via-[#161817]/30 to-transparent" />

                  {/* Real Work Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101211]/85 backdrop-blur-md border border-brand-gold/30 text-[11px] font-sans font-semibold text-brand-gold shadow-lg">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Obra Real Brasporto</span>
                  </div>

                  {/* Location badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/80">
                    <MapPin className="w-3 h-3 text-brand-gold" />
                    <span>{work.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-medium text-brand-gold uppercase tracking-wider mb-2">
                      {work.category}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                      {work.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {work.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-text-muted">
                      Rigor Técnico Chave-na-Mão
                    </span>
                    <a
                      href="#contactos"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-goldLight transition-colors"
                    >
                      <span>Consultar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
