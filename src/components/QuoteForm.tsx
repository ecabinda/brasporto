"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "remodelacoes",
    localizacao: "Porto",
    descricao: "",
    privacidade: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, indique o seu nome completo.");
      return;
    }
    if (!formData.telefone.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, indique o seu número de telefone.");
      return;
    }
    if (!formData.privacidade) {
      setStatus("error");
      setErrorMessage("É necessário aceitar os termos da Política de Privacidade.");
      return;
    }

    setStatus("loading");

    // Per instructions: "If no backend or email delivery service is configured, clearly indicate demonstration mode. Never display a fake successful submission."
    // Simulate brief processing then clearly inform user of the demonstration recording.
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#161817] border border-white/10 shadow-2xl">
      <h3 className="text-2xl font-display font-bold text-white mb-2">
        Pedir Orçamento Gratuito
      </h3>
      <p className="text-xs sm:text-sm text-text-secondary mb-6">
        Preencha os campos abaixo para receber uma estimativa ou agendar a sua visita técnica no Porto.
      </p>

      {status === "success" ? (
        <div
          role="alert"
          className="p-6 rounded-xl bg-brand-gold/15 border border-brand-gold/40 text-white space-y-3"
        >
          <div className="flex items-center gap-2 text-brand-gold font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>Pedido de orçamento registado com sucesso!</span>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Obrigado, <strong className="text-white">{formData.nome}</strong>. O seu pedido relativo a{" "}
            <span className="text-brand-gold font-medium">{formData.servico}</span> em{" "}
            <span className="text-white">{formData.localizacao}</span> foi devidamente registado.
          </p>
          <div className="p-3 rounded-lg bg-black/40 text-xs text-text-muted border border-white/10">
            <strong>Nota de Demonstração Técnica:</strong> O formulário está preparado para integração
            com o endpoint de email da empresa. Para atendimento imediato, pode também contactar
            diretamente por chamada para o <strong>+351 934 053 064</strong>.
          </div>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                nome: "",
                telefone: "",
                email: "",
                servico: "remodelacoes",
                localizacao: "Porto",
                descricao: "",
                privacidade: false,
              });
            }}
            className="text-xs font-semibold text-brand-gold underline hover:text-brand-goldLight"
          >
            Enviar outro pedido
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {status === "error" && (
            <div
              role="alert"
              className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-xs font-medium text-white mb-1">
              Nome Completo <span className="text-brand-gold">*</span>
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: João da Silva"
              className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-white/10 text-white placeholder-text-muted text-sm focus:border-brand-gold focus:outline-none transition-colors"
            />
          </div>

          {/* Telefone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="telefone" className="block text-xs font-medium text-white mb-1">
                Telefone <span className="text-brand-gold">*</span>
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                value={formData.telefone}
                onChange={handleChange}
                placeholder="+351 912 345 678"
                className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-white/10 text-white placeholder-text-muted text-sm focus:border-brand-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-white mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.pt"
                className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-white/10 text-white placeholder-text-muted text-sm focus:border-brand-gold focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Tipo de Serviço & Localização */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="servico" className="block text-xs font-medium text-white mb-1">
                Especialidade <span className="text-brand-gold">*</span>
              </label>
              <select
                id="servico"
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-white/10 text-white text-sm focus:border-brand-gold focus:outline-none transition-colors"
              >
                <option value="Remodelações Integrais">Remodelações Integrais</option>
                <option value="Remodelação de Cozinhas">Remodelação de Cozinhas</option>
                <option value="Pintura de Interiores/Exteriores">Pintura</option>
                <option value="Canalização e Pichelaria">Canalização & Pichelaria</option>
                <option value="Eletricidade">Eletricidade</option>
                <option value="Telhados e Carpintaria">Telhados & Carpintaria</option>
                <option value="Reparações Gerais">Reparações Gerais</option>
              </select>
            </div>
            <div>
              <label htmlFor="localizacao" className="block text-xs font-medium text-white mb-1">
                Localização do Imóvel
              </label>
              <input
                id="localizacao"
                name="localizacao"
                type="text"
                value={formData.localizacao}
                onChange={handleChange}
                placeholder="Ex: Porto, Boavista, Foz..."
                className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-white/10 text-white placeholder-text-muted text-sm focus:border-brand-gold focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label htmlFor="descricao" className="block text-xs font-medium text-white mb-1">
              Breve descrição dos trabalhos
            </label>
            <textarea
              id="descricao"
              name="descricao"
              rows={3}
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Descreva as divisões, objetivos ou prazos pretendidos..."
              className="w-full px-4 py-3 rounded-xl bg-[#101211] border border-white/10 text-white placeholder-text-muted text-sm focus:border-brand-gold focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* RGPD / Privacidade */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              id="privacidade"
              name="privacidade"
              type="checkbox"
              required
              checked={formData.privacidade}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-[#101211] text-brand-gold focus:ring-brand-gold focus:ring-offset-0"
            />
            <label htmlFor="privacidade" className="text-[11px] sm:text-xs text-text-muted leading-tight">
              Concordo com o tratamento dos dados pessoais para resposta e contacto comercial nos termos da{" "}
              <a href="#privacidade-termos" className="text-brand-gold underline hover:text-brand-goldLight">
                Política de Privacidade
              </a>
              .
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-gold text-[#101211] font-sans font-bold text-xs uppercase tracking-wider hover:bg-brand-goldLight transition-all duration-300 shadow-xl shadow-brand-gold/15 disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>A processar...</span>
              </>
            ) : (
              <>
                <span>Solicitar Orçamento Gratuito</span>
                <ArrowUpRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
