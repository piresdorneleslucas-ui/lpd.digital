/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Instagram, Heart, Sparkles, Send, 
  MapPin, Award, CheckCircle, MessageCircle 
} from "lucide-react";
import { BRAND_NAME, OWNER_NAME, INSTAGRAM_STATS, getWhatsAppLink, LOGO_URL } from "../data";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Card Left: Social Profile Widget Representation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-sm bg-gradient-to-b from-[#0f0f13] to-[#08080a] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
            >
              {/* Outer decorative card glass reflections */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Floating active neon badge */}
                <span className="absolute top-0 right-0 bg-green-500/20 text-green-400 border border-green-500/30 font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Disponível para Projetos
                </span>
 
                {/* Avatar portrait frame */}
                <div className="relative mt-4 mb-4">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur opacity-40 group-hover:opacity-65 transition-opacity" />
                  <img
                    src={LOGO_URL}
                    alt={OWNER_NAME}
                    referrerPolicy="no-referrer"
                    className="w-28 h-28 rounded-full border-2 border-[#050505] relative object-cover bg-zinc-800 scale-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-display font-bold text-white mb-0.5">{OWNER_NAME}</h3>
                <p className="text-xs font-mono text-zinc-500 mb-4">{BRAND_NAME} • Tech & Design</p>

                {/* Personal branding badges/stats */}
                <div className="grid grid-cols-2 gap-6 py-3 px-5 bg-zinc-900/40 border border-white/5 rounded-2xl w-full mb-6">
                  <div className="text-center border-r border-white/5 pr-3">
                    <span className="text-sm font-black text-white block">{INSTAGRAM_STATS.posts}</span>
                    <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider">Post</span>
                  </div>
                  <div className="text-center pl-3">
                    <span className="text-sm font-black text-white block">{INSTAGRAM_STATS.followers}</span>
                    <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider">Seguidor</span>
                  </div>
                </div>

                {/* Custom bio quotes */}
                <div className="text-left w-full space-y-2 text-xs text-zinc-400 border-t border-white/5 pt-4">
                  <p className="font-medium text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-red-500" />
                    Criador(a) de conteúdo digital
                  </p>
                  <p className="text-zinc-500 italic bg-[#050506] px-3 py-1.5 rounded-lg border border-white/5 font-mono">
                    💻 lpd.digital.site
                  </p>
                  <p>🚀 Sites que geram credibilidade e vendas</p>
                  <p className="text-[10px] text-zinc-500 mt-2">📩 Solicite seu orçamento via direct ou whatsapp</p>
                </div>

                {/* Instagram Badge */}
                <a 
                  href={`https://instagram.com/${INSTAGRAM_STATS.username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full mt-6 py-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-zinc-900/35 hover:bg-zinc-900/70 text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5 text-xs font-mono"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  @{INSTAGRAM_STATS.username}
                </a>

              </div>
            </motion.div>
          </div>

          {/* Copy Description Right (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/5 border border-red-500/10">
              <Award className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[11px] font-mono tracking-widest text-red-400 uppercase">Compromisso com Resultados</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
              Atrás de cada pixel, um <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 font-black">compromisso inabalável</span> com o seu crescimento
            </h2>

            <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              <p>
                Olá, eu sou o <strong className="text-white font-medium">Lucas Pires Dorneles</strong>, fundador da <strong className="text-white font-medium">LPD Digital</strong>. Minha jornada como desenvolvedor e criador de conteúdo digital é guiada por uma filosofia direta: <em className="text-red-400">um site institucional ou landing page não deve ser apenas um folheto digital inerte.</em> Ele deve trabalhar ativamente para o seu caixa.
              </p>
              <p>
                Você deve escolher a LPD Digital porque eu não entrego apenas um site estruturado, entrego uma completa <strong className="text-white font-semibold">ferramenta estratégica personalizada</strong> projetada cientificamente para posicionar sua empresa com autoridade de mercado e induzir conversões frequentes.
              </p>
            </div>

            {/* Check advantages visual grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-4">
              {[
                "Projetos personalizados sem templates prontos.",
                "Otimização extrema certificada de performance.",
                "Design elegante, sério, alinhado ao luxo.",
                "Suporte individual e transparente pós-entrega."
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="text-zinc-300 text-xs font-semibold">{text}</span>
                </div>
              ))}
            </div>

            {/* Direct personal WhatsApp trigger button */}
            <div className="pt-6">
              <a
                href={getWhatsAppLink("Olá Lucas Dorneles, gostaria de falar diretamente com você sobre um projeto!")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold text-xs tracking-wider transition-all shadow-lg shadow-red-600/15"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                CONVERSAR DIRETAMENTE COMO LUCAS
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
