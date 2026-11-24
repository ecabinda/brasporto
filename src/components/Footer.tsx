import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Star } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="w-full bg-[#0c0d0d] text-white pt-16 pb-12 border-t border-white/10"
      aria-labelledby="footer-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="footer-titulo" className="sr-only">
          Rodapé e Informações Institucionais
        </h2>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display font-bold text-2xl tracking-tight text-white block">
                BRASPORTO
              </span>
              <span className="text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-brand-gold block">
                Reparos e Remodelações · Porto
              </span>
            </Link>

            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              {BUSINESS_INFO.description}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-brand-gold">
              <Star className="w-4 h-4 fill-brand-gold" />
              <span className="font-bold text-white">{BUSINESS_INFO.rating}/5</span>
              <span className="text-text-muted">
                baseado em {BUSINESS_INFO.reviewCount} avaliações reais no Google
              </span>
            </div>
          </div>

          {/* Col 3: Navegação */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gold mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#obras-reais" className="hover:text-white transition-colors">
                  Obras Reais
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#perguntas-frequentes" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Especialidades */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gold mb-4">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contacto Direto */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gold mb-4">
              Sede no Porto
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-xs text-text-muted">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.legalName}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span id="privacidade-termos" className="text-text-muted">
              Privacidade: os contactos fornecidos destinam-se exclusivamente à resposta a pedidos de
              orçamento.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
