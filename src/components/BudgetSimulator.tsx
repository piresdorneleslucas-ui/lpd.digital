/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, Check, ChevronRight, MessageSquare, 
  Calendar, Monitor, ArrowRight, DollarSign,
  Plus, X, HelpCircle
} from "lucide-react";
import { PROJECT_TYPES, PROJECT_ADDONS, getWhatsAppLink } from "../data";
import { ProjectType, ProjectAddon } from "../types";

export default function BudgetSimulator() {
  const [selectedType, setSelectedType] = useState<ProjectType>(PROJECT_TYPES[0]);
  const [selectedAddons, setSelectedAddons] = useState<ProjectAddon[]>([]);

  // Delivery timelines depending on type
  const getTimeline = (typeId: string) => {
    return "No máximo 24h!";
  };

  // Toggle addon
  const handleToggleAddon = (addon: ProjectAddon) => {
    if (selectedAddons.find((item) => item.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((item) => item.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Calculate customized final pricing estimation
  const calculatedBudget = useMemo(() => {
    // We parse base price if possible or use a transparent benchmark
    let baseMinPrice = 1500;
    if (selectedType.id === "landing_page") baseMinPrice = 1500;
    if (selectedType.id === "institutional") baseMinPrice = 2500;
    if (selectedType.id === "ecommerce") baseMinPrice = 4500;
    if (selectedType.id === "custom_app") baseMinPrice = 6000;

    // Apply multipliers + addon fixed costs
    let finalEstimated = baseMinPrice;
    
    selectedAddons.forEach((addon) => {
      finalEstimated += addon.fixedPrice;
    });

    return finalEstimated;
  }, [selectedType, selectedAddons]);

  // Handle WhatsApp submission text
  const handleWhatsAppSend = () => {
    const addonNamesText = selectedAddons.length > 0 
      ? selectedAddons.map((addon) => `  * • ${addon.name}*\n`).join("")
      : "  _Sem adicionais selecionados_\n";

    const text = 
`Olá Lucas! Acessei a LPD Digital e montei uma simulação de projeto:

*🚀 PROJETO SELECIONADO:*
*${selectedType.name}*
_${selectedType.description}_

*🔌 ADICIONAIS EXTRA:*
${addonNamesText}
*⏰ PRAZO ESTIMADO:*
*${getTimeline(selectedType.id)}*

Gostaria de solicitar um orçamento formal e agendar uma rápida conversa de alinhamento com você! Obrigado.`;

    window.open(getWhatsAppLink(text), "_blank");
  };

  return (
    <section id="simulador" className="py-24 relative overflow-hidden bg-[#070709] border-y border-white/5">
      {/* Background graphic elements */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-red-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/5 border border-red-500/10 mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[11px] font-mono tracking-widest text-red-400 uppercase">Briefing Interativo</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-none mb-6 text-white text-center">
            Monte seu <span className="bg-gradient-to-r from-red-600 to-red-450 bg-clip-text text-transparent">projeto sob medida</span>
          </h2>
          
          <p className="text-zinc-400 text-lg font-light">
            Selecione as soluções e adicionais ideais para o seu modelo de negócios e envie seu briefing em segundos por WhatsApp para receber seu orçamento personalizado.
          </p>
        </div>

        {/* Content interactive cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interaction setup panel (8 cols on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Plan type selection */}
            <div className="bg-zinc-950/30 border border-white/5 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-mono text-xs font-bold border border-red-500/25">
                  1
                </span>
                <h3 className="text-xl font-display font-bold text-white">Escolha o formato do seu site</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`text-left p-5 rounded-xl border transition-all relative ${
                        isSelected 
                          ? "bg-red-950/20 border-red-500/60 shadow-[0_0_15px_rgba(239,68,68,0.15)]" 
                          : "bg-[#0b0b0e] border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold py-1 px-2.5 rounded-md ${
                          isSelected ? "bg-red-500/20 text-red-300" : "bg-zinc-900 text-zinc-650"
                        }`}>
                          {isSelected ? "Selecionado" : "Disponível"}
                        </span>
                        
                        {isSelected && (
                          <div className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center scale-95">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      
                      <h4 className="text-md font-bold text-white mb-1.5">{type.name}</h4>
                      <p className="text-zinc-500 text-xs leading-relaxed">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on items checkboxes */}
            <div className="bg-zinc-950/30 border border-white/5 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-mono text-xs font-bold border border-red-500/25">
                  2
                </span>
                <h3 className="text-xl font-display font-bold text-white">Turbine seu site com opcionais (Adicionais)</h3>
              </div>

              <div className="space-y-3.5">
                {PROJECT_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.find((item) => item.id === addon.id) !== undefined;
                  return (
                    <button
                      key={addon.id}
                      onClick={() => handleToggleAddon(addon)}
                      className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all gap-4 ${
                        isChecked 
                          ? "bg-red-950/15 border-red-500/50" 
                          : "bg-[#0b0b0e] border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                          isChecked ? "bg-red-500 border-red-400 text-white" : "border-zinc-700"
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-0.5">{addon.name}</h4>
                          <p className="text-zinc-500 text-[11px] font-light leading-relaxed">{addon.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Value preview summary panel (5 cols on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-gradient-to-b from-[#0e0e12] to-[#08080a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-lg font-display font-bold text-zinc-300 border-b border-white/5 pb-4 mb-6">
                Resumo da Simulação
              </h3>

              {/* Summary Items List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">PRODUTO BASE</span>
                    <p className="text-sm font-bold text-white">{selectedType.name}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-450 uppercase">Selecionado</span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-2">PRAZO DE ENTREGA ESTIMADO</span>
                  <div className="inline-flex items-center gap-1.5 text-xs text-red-400 font-bold bg-red-950/20 px-2.5 py-1 rounded-md border border-red-900/30">
                    <Calendar className="w-3.5 h-3.5" />
                    {getTimeline(selectedType.id)}
                  </div>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-3">ADICIONAIS SELECIONADOS</span>
                    <ul className="space-y-2">
                      {selectedAddons.map((addon) => (
                        <li key={addon.id} className="flex items-center justify-between text-xs text-zinc-400">
                          <span className="flex items-center gap-1.5 text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                            {addon.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Box of cost estimation projection */}
              <div className="bg-[#050507] border border-white/5 rounded-xl p-5 mb-8 text-center relative group">
                <span className="text-[9px] font-mono text-red-500 bg-red-950/30 border border-red-900/35 px-2 py-0.5 rounded-full inline-block mb-3 uppercase tracking-wider">
                  Projeto Exclusivo
                </span>
                
                <div>
                  <div className="text-2xl font-display font-black text-white">Sob Consulta</div>
                  <span className="text-zinc-500 text-[10.5px] block mt-1 px-1">
                    Orçamento calculado sob medida, 100% livre de templates prontos.
                  </span>
                </div>
              </div>

              {/* CTA Send to WhatsApp button */}
              <button
                onClick={handleWhatsAppSend}
                className="w-full bg-gradient-to-r from-red-650 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-bold py-4 rounded-xl text-xs tracking-widest text-center transition-all shadow-lg shadow-red-650/10 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                ENVIAR MEU BRIEFING VIA WHATSAPP
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="mt-4 flex items-center gap-2 justify-center text-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-zinc-500">Lucas geralmente responde em minutos</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
