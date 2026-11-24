"use client";

import React from "react";
import { Star, CheckCircle, Quote, ArrowUpRight } from "lucide-react";
import { REVIEWS, BUSINESS_INFO } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="avaliacoes"
      className="w-full py-20 sm:py-28 lg:py-36 bg-[#101211] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10"
      aria-labelledby="avaliacoes-titulo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-4">
              AVALIAÇÕES REAIS
            </div>
            <h2
              id="avaliacoes-titulo"
              className="text-headline-section font-display font-bold tracking-tight text-white mb-4 text-left"
            >
              {BUSINESS_INFO.rating}/5 — {BUSINESS_INFO.reviewCount} avaliações no Google.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed text-left">
              A satisfação dos nossos clientes é o nosso maior ativo. Veja os testemunhos genuínos de
              quem confiou na Brasporto para renovar o seu espaço.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-white transition-colors shrink-0"
          >
            <span>Ver no Google Maps</span>
            <ArrowUpRight className="w-4 h-4 text-brand-gold" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#161817] border border-white/10 flex flex-col justify-between relative group hover:border-brand-gold/40 transition-colors shadow-xl"
            >
              <div>
                {/* Top: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-brand-gold fill-brand-gold"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-gold/30" />
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg text-white font-sans italic leading-relaxed mb-8">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author & Badge */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    {rev.author}
                  </h3>
                  <span className="text-xs text-text-muted">{rev.role}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-brand-gold font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
