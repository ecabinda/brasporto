import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="w-full py-20 sm:py-28 lg:py-36 bg-[#121413] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10"
      aria-labelledby="servicos-titulo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-4">
              SERVIÇOS
            </div>
            <h2
              id="servicos-titulo"
              className="text-headline-section font-display font-bold tracking-tight text-white mb-4 text-left"
            >
              Rigor técnico em cada especialidade.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed text-left">
              Intervenções completas de raiz ou renovações pontuais, executadas com respeito pela
              arquitetura do imóvel e acompanhamento permanente no Porto.
            </p>
          </div>

          <a
            href="#contactos"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 self-start md:self-auto"
          >
            <span>Pedir Orçamento Personalizado</span>
            <ArrowUpRight className="w-4 h-4 text-brand-gold" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
