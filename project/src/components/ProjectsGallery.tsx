"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProjectsGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: "proj-1",
      title: "Apartamento Cedofeita",
      category: "Remodelação de Cozinhas & Zona Social",
      location: "Cedofeita, Porto",
      description:
        "Reconfiguração integral da cozinha e zona social com marcenaria por medida em carvalho nobre, ilha em pedra natural e iluminação arquitetónica discreta.",
      image: "/images/editorial/editorial-13.png",
      alt: "Cozinha contemporânea remodelada em Cedofeita Porto",
    },
    {
      id: "proj-2",
      title: "Moradia Foz do Douro",
      category: "Remodelações Integrais · Pintura",
      location: "Foz do Douro, Porto",
      description:
        "Renovação integral de interiores, preservação de portadas e caixilharias de madeira, pintura premium mate em tom marfim e atualização completa de redes técnicas.",
      image: "/images/editorial/editorial-14.png",
      alt: "Interior restaurado de moradia histórica na Foz do Douro",
    },
    {
      id: "proj-3",
      title: "Suíte Boavista",
      category: "Canalização · Pichelaria · Eletricidade",
      location: "Boavista, Porto",
      description:
        "Substituição de redes técnicas de água e esgotos, instalação de torneiras de parede em latão escovado, revestimentos em travertino e cabine de duche italiana.",
      image: "/images/editorial/editorial-8.png",
      alt: "Casa de banho com acabamentos em pedra travertino na Boavista Porto",
    },
    {
      id: "proj-4",
      title: "Reabilitação Baixa do Porto",
      category: "Carpintaria · Soalho Tradicional",
      location: "Baixa, Porto",
      description:
        "Recuperação de chão em espinha de peixe original em pinho de riga, lacagem de rodapés altos e carpintarias interiores respeitando a traça portuense.",
      image: "/images/editorial/editorial-15.png",
      alt: "Pormenor de soalho em espinha de madeira nobre restaurado no Porto",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (prefersReducedMotion || !isDesktop) {
      // In mobile or reduced motion mode, rely on native responsive vertical/touch layout
      return;
    }

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const section = sectionRef.current;
      if (!container || !section) return;

      const totalTravel = container.scrollWidth - window.innerWidth + 80;

      gsap.to(container, {
        x: () => -totalTravel,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalTravel}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-[#121413] text-white overflow-hidden border-b border-white/10"
      aria-labelledby="portfolio-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFÓLIO DE PROJETOS</span>
            </div>
            <h2
              id="portfolio-titulo"
              className="text-headline-section font-display font-bold tracking-tight text-white mb-2 text-left"
            >
              Espaços que ganham uma nova vida.
            </h2>
          </div>
          <div className="text-xs text-text-muted font-mono">
            {/* Note per user instructions: label illustrative concept designs clearly */}
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              Projetos e Conceitos Editoriais
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Slider Track for Desktop / Natural Grid for Mobile */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-6 sm:gap-8 will-change-transform lg:w-max lg:pr-24"
        >
          {projects.map((proj, idx) => (
            <article
              key={proj.id}
              className="w-full lg:w-[480px] shrink-0 rounded-2xl overflow-hidden bg-[#181a19] border border-white/10 hover:border-brand-gold/40 transition-all duration-500 flex flex-col justify-between group shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <Image
                  src={proj.image}
                  alt={proj.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181a19] via-[#181a19]/30 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-brand-gold">
                  0{idx + 1}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-2">
                    {proj.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-sans text-text-muted">{proj.location}</span>
                  <a
                    href="#contactos"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-goldLight transition-colors"
                  >
                    <span>Pedir proposta</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
