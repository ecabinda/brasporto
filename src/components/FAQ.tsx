"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/data";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-orcamento");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="perguntas-frequentes"
      className="w-full py-20 sm:py-28 lg:py-36 bg-[#121413] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10"
      aria-labelledby="faq-titulo"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERGUNTAS FREQUENTES</span>
          </div>
          <h2
            id="faq-titulo"
            className="text-headline-section font-display font-bold tracking-tight text-white mb-4 text-left"
          >
            Esclareça as suas dúvidas.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed text-left">
            Respostas transparentes às questões mais comuns sobre planeamento, orçamentação e execução
            de obras com a Brasporto.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/10 bg-[#161817] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${faq.id}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:text-brand-gold transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div className="p-2 rounded-full bg-white/5 text-brand-gold shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`panel-${faq.id}`}
                    role="region"
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-white/5 font-sans"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
