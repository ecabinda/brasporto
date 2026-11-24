import React from "react";
import { PROCESS_STEPS } from "@/lib/data";

export function ProcessTimeline() {
  return (
    <section
      id="metodologia"
      className="w-full py-20 sm:py-28 lg:py-36 bg-[#121413] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10"
      aria-labelledby="metodologia-titulo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-4">
            METODOLOGIA
          </div>
          <h2
            id="metodologia-titulo"
            className="text-headline-section font-display font-bold tracking-tight text-white mb-4 text-left"
          >
            Como trabalhamos.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed text-left">
            Um processo transparente e estruturado em 4 etapas claras, garantindo previsibilidade de
            custos e tranquilidade durante toda a obra.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-8 rounded-2xl bg-[#161817] border border-white/10 hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-brand-gold group-hover:scale-105 transition-transform inline-block">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted px-2.5 py-1 rounded-full bg-white/5">
                    Fase 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3 text-left">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed text-left">
                  {step.description}
                </p>
              </div>

              {/* Progress Line Dot */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                <span className="text-[11px] font-mono text-text-muted">Acompanhamento Rigoroso</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
