import React from "react";
import { Star, ShieldCheck, MapPin, Clock, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export function TrustStrip() {
  const items = [
    {
      icon: Star,
      primary: `${BUSINESS_INFO.rating}/5 no Google`,
      secondary: `${BUSINESS_INFO.reviewCount} avaliações reais`,
    },
    {
      icon: MapPin,
      primary: "Atendimento no Porto",
      secondary: "e concelhos limítrofes",
    },
    {
      icon: Clock,
      primary: "Compromisso de Prazos",
      secondary: "Cumprimento rigoroso do plano",
    },
    {
      icon: ShieldCheck,
      primary: "Orçamento Transparente",
      secondary: "Sem custos ocultos",
    },
  ];

  return (
    <section
      id="confianca"
      className="w-full bg-[#141615] border-y border-white/10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8"
      aria-label="Indicadores de confiança"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 transition-colors"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate">
                  {item.primary}
                </span>
                <span className="text-[11px] sm:text-xs text-text-muted truncate">
                  {item.secondary}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
