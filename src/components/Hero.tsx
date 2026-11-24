"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/data";
import { ArrowUpRight, Star, ChevronDown, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BUSINESS_INFO } from "@/lib/data";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLHeadingElement>(null);
  const headlineLine2Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const ratingBadgeRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // In reduced motion mode, elements are immediately visible without motion
      return;
    }

    const ctx = gsap.context(() => {
      // Background subtle scale and parallax on scroll
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 18,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Background image fade-in
      tl.fromTo(
        bgRef.current,
        { opacity: 0, scale: 1.15 },
        { opacity: 1, scale: 1.02, duration: 1.4, ease: "power2.out" }
      );

      // 2. Eyebrow badge
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.9"
        );
      }

      // 3. Headline masked reveal
      const lines = [headlineLine1Ref.current, headlineLine2Ref.current].filter(Boolean);
      if (lines.length > 0) {
        tl.fromTo(
          lines,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, stagger: 0.15 },
          "-=0.6"
        );
      }

      // 4. Supporting text
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        );
      }

      // 5. CTA buttons
      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current.children,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          "-=0.5"
        );
      }

      // 6. Rating badge
      if (ratingBadgeRef.current) {
        tl.fromTo(
          ratingBadgeRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6 },
          "-=0.4"
        );
      }

      // 7. Scroll indicator
      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#101211] text-white pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8"
      aria-label="Apresentação principal da BRASPORTO"
    >
      {/* Background Image Composition */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
      >
        <Image
          src={getAssetPath("/images/editorial/editorial-11.png")}
          alt="Interior contemporâneo no Porto remodelado com chão em madeira e luz natural"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101211] via-[#101211]/65 to-[#101211]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/85" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 lg:py-20 flex flex-col items-start">
        {/* Eyebrow / Trust Pill */}
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-brand-goldLight mb-6 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="tracking-wide uppercase font-sans text-[11px] sm:text-xs">
            Reparações e Remodelações · Porto e Arredores
          </span>
        </div>

        {/* Cinematic Headline with Masked Layers */}
        <div className="overflow-hidden mb-2">
          <h1
            ref={headlineLine1Ref}
            className="text-display-hero font-display font-extrabold tracking-tight text-white text-left"
          >
            Transformamos espaços.
          </h1>
        </div>
        <div className="overflow-hidden mb-6 sm:mb-8">
          <h2
            ref={headlineLine2Ref}
            className="text-display-hero font-display font-extrabold tracking-tight text-brand-gold text-left"
          >
            Construímos confiança.
          </h2>
        </div>

        {/* Supporting Text */}
        <p
          ref={subtextRef}
          className="max-w-2xl text-base sm:text-lg lg:text-xl text-text-secondary font-sans leading-relaxed mb-8 sm:mb-10 text-left"
        >
          Soluções completas de remodelação, carpintaria, telhados, pichelaria e eletricidade que
          valorizam o seu imóvel no Porto, com rigor técnico e atenção artesanal a cada detalhe.
        </p>

        {/* CTA Group */}
        <div
          ref={ctaGroupRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8 sm:mb-10"
        >
          <a
            href="#contactos"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-gold text-[#101211] font-sans font-bold text-sm uppercase tracking-wider hover:bg-brand-goldLight hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-brand-gold/15"
          >
            <span>Pedir Orçamento Gratuito</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-sans font-medium text-sm transition-all duration-300 backdrop-blur-sm"
          >
            <span>Explorar Serviços</span>
          </a>
        </div>

        {/* Google Rating Badge */}
        <div
          ref={ratingBadgeRef}
          className="flex flex-wrap items-center gap-3 sm:gap-4 p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-[#141615]/85 backdrop-blur-md border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-brand-gold fill-brand-gold"
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="text-xs sm:text-sm text-text-secondary">
            <span className="font-bold text-white">{BUSINESS_INFO.rating}/5</span>{" "}
            <span>— {BUSINESS_INFO.reviewCount} avaliações no Google</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-brand-gold font-medium pl-2 border-l border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
            <span>Verificado</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar / Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs text-text-muted pt-4 border-t border-white/10"
      >
        <span className="font-mono tracking-widest uppercase text-[10px] text-brand-gold">
          PORTO · PORTUGAL
        </span>

        <a
          href="#confianca"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors group"
          aria-label="Descer para explorar a página"
        >
          <span className="text-xs font-sans">Descer para explorar</span>
          <ChevronDown className="w-4 h-4 text-brand-gold group-hover:translate-y-1 transition-transform" />
        </a>

        <span className="hidden sm:inline font-mono text-[10px] text-text-muted">
          R. DE ALVES REDOL 402
        </span>
      </div>
    </section>
  );
}
