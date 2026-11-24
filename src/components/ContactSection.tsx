import React from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/data";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import { QuoteForm } from "./QuoteForm";

export function ContactSection() {
  return (
    <section
      id="contactos"
      className="w-full py-20 sm:py-28 lg:py-36 bg-[#101211] text-white px-4 sm:px-6 lg:px-8"
      aria-labelledby="contactos-titulo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information & Official Card Presentation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-mono tracking-widest text-brand-gold uppercase mb-4">
                CONTACTOS & ATENDIMENTO
              </div>

              <h2
                id="contactos-titulo"
                className="text-headline-section font-display font-bold tracking-tight text-white mb-6 text-left"
              >
                Vamos transformar o seu espaço?
              </h2>

              <p className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed mb-8 text-left">
                Conte-nos o que pretende renovar. A nossa equipa técnica está disponível para uma
                visita ao local e apresentação de um orçamento transparente e detalhado.
              </p>

              {/* Contact Cards List */}
              <div className="space-y-4 mb-8">
                {/* Telefone Principal */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161817] border border-white/10 hover:border-brand-gold/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                      Linha Direta / Móvel
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Telefone Fixo */}
                <a
                  href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161817] border border-white/10 hover:border-brand-gold/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                      Linha Fixa do Porto
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                      {BUSINESS_INFO.secondaryPhone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161817] border border-white/10 hover:border-brand-gold/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                      Correio Eletrónico
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-brand-gold transition-colors">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Morada */}
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#161817] border border-white/10 hover:border-brand-gold/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-brand-gold/10 text-brand-gold shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                      Sede & Atendimento
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors leading-relaxed">
                      {BUSINESS_INFO.address.full}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Status per instructions */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-3 rounded-lg bg-white/5 text-text-muted shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block">
                      Canal WhatsApp
                    </span>
                    <span className="text-xs text-text-secondary leading-snug">
                      {BUSINESS_INFO.whatsAppStatusNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Business Card Reference image from fotos folder! */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161817] p-2 shadow-xl">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Image
                  src={getAssetPath("/images/real/obra-5.png")}
                  alt="Cartão institucional oficial Brasporto Reparos e Remodelação"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain bg-[#e5b340]"
                />
              </div>
              <p className="text-[11px] text-text-muted text-center pt-2 font-mono">
                Registo Institucional Brasporto · Telefones 93 405 3064 / 22 491 6557
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
