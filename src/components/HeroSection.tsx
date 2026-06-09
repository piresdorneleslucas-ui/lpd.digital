/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, Zap, Sparkles } from "lucide-react";
import { BRAND_NAME, getWhatsAppLink } from "../data";
import heroImg from "../assets/images/hero_mockup_1780949932947.png";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section
      id="inicio"
      className="min-h-screen pt-32 pb-20 relative flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Dynamic glow overlays */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/[0.08] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-800/[0.06] blur-[150px] pointer-events-none" />

      {/* Grid pattern background for tech-design vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Active Promo Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 mb-6 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase font-semibold">
              Sites que geram credibilidade e vendas
            </span>
          </motion.div>

          {/* Majestic Hero Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-display font-black tracking-tight leading-[1.05] mb-8 text-white"
          >
            Seu próximo site tem uma única missão:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-white font-extrabold block sm:inline">
              Vender por você.
            </span>
          </motion.h1>

          {/* Convincing Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-lg sm:text-xl font-light max-w-3xl mb-10 leading-relaxed"
          >
            Desenvolvemos sites profissionais exclusivos, 100% responsivos e com carregamento instantâneo. Descubra como a <strong>LPD Digital</strong> molda designs de luxo que geram autoridade imediata.
          </motion.p>

          {/* Pulsating CTA triggers */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto"
          >
            {/* Primary button with elegant pulse animation */}
            <a
              href={getWhatsAppLink("Olá Lucas, gostei do seu site e gostaria de solicitar um orçamento para meu projeto!")}
              target="_blank"
              rel="noreferrer"
              className="relative group w-full sm:w-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <button className="relative w-full sm:w-auto px-8 py-4.5 bg-[#050505] rounded-full border border-white/10 text-white font-bold text-xs tracking-widest hover:text-red-400 transition-all flex items-center justify-center gap-2">
                SOLICITAR ORÇAMENTO GRÁTIS
                <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            {/* Secondary Link to simulated slider plan */}
            <a
              href="#simulador"
              className="w-full sm:w-auto text-center px-8 py-4.5 text-xs text-zinc-400 hover:text-white font-bold tracking-widest rounded-full hover:bg-white/5 border border-transparent hover:border-white/5 transition-all text-sm"
            >
              SIMULAR PROJETO AGORA
            </a>
          </motion.div>

          {/* Elegant mockup rendering frame with soft indigo shadow */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-zinc-950/20 p-2 sm:p-3 shadow-2xl overflow-hidden group shadow-red-600/[0.03] hover:shadow-red-600/[0.08] transition-all duration-700"
          >
            {/* Gloss reflection strip */}
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transform -skew-x-12 group-hover:animate-shine pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none bottom-[-2px]" />

            <img
              src={heroImg}
              alt="LPD Digital Premium Interface Mockup"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-2xl object-cover border border-white/5 scale-100 group-hover:scale-[1.01] transition-transform duration-700 bg-zinc-900"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
