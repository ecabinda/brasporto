import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative rounded-2xl overflow-hidden bg-[#161817] border border-white/10 hover:border-brand-gold/40 transition-all duration-500 flex flex-col justify-between">
      {/* Visual Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161817] via-[#161817]/40 to-transparent" />

        {/* Number Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#101211]/80 backdrop-blur-md border border-white/10 text-xs font-mono font-semibold text-brand-gold">
          {service.number}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-gold transition-colors flex items-center justify-between">
            <span>{service.title}</span>
            <ArrowUpRight className="w-5 h-5 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Key Features */}
          <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-text-muted">
                <Check className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Link */}
        <a
          href="#contactos"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-goldLight transition-colors pt-2"
        >
          <span>Pedir orçamento para {service.title}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}
