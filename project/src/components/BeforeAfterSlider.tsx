"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";
import { BEFORE_AFTER } from "@/lib/data";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      id="transformacao"
      className="w-full py-20 sm:py-28 lg:py-36 bg-[#101211] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10"
      aria-labelledby="transformacao-titulo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>TRANSFORMAÇÃO</span>
          </div>
          <h2
            id="transformacao-titulo"
            className="text-headline-section font-display font-bold tracking-tight text-white mb-4 text-left"
          >
            {BEFORE_AFTER.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed text-left">
            Deslize para comparar o estado anterior com o resultado final após a intervenção de
            remodelação integral.
          </p>
          <div className="mt-3 text-xs text-text-muted font-mono">
            <span>Nota: {BEFORE_AFTER.note}</span>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden select-none touch-none border border-white/10 shadow-2xl bg-black cursor-ew-resize"
            role="region"
            aria-label="Comparação interativa de antes e depois da remodelação"
          >
            {/* After Image (Background layer) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={BEFORE_AFTER.after.image}
                alt="Depois da remodelação: cozinha moderna e luminosa com acabamentos em madeira e bancada em pedra"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover"
              />
              {/* After Label Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-brand-gold/40 text-xs font-sans font-bold uppercase tracking-wider text-brand-gold shadow-lg">
                {BEFORE_AFTER.after.label}
              </div>
            </div>

            {/* Before Image (Clipped layer) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden will-change-[clip-path]"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <Image
                src={BEFORE_AFTER.before.image}
                alt="Antes da remodelação: cozinha antiga e desgastada"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover"
              />
              {/* Before Label Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-sans font-bold uppercase tracking-wider text-white shadow-lg">
                {BEFORE_AFTER.before.label}
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-brand-gold shadow-[0_0_15px_rgba(198,164,119,0.7)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-gold text-[#101211] shadow-2xl flex items-center justify-center border-2 border-[#101211]">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold">◀</span>
                  <span className="text-[10px] font-bold">▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accessible HTML Native Range Input for Keyboard & Screen Readers */}
          <div className="mt-4 flex items-center justify-between gap-4 px-2">
            <label
              htmlFor="before-after-range"
              className="text-xs text-text-muted font-sans"
            >
              Ajustar posição do comparador:
            </label>
            <input
              id="before-after-range"
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Deslizador comparativo de Antes e Depois"
              className="w-48 sm:w-64 accent-brand-gold cursor-pointer"
            />
            <span className="text-xs font-mono text-brand-gold w-10 text-right">
              {Math.round(sliderPosition)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
