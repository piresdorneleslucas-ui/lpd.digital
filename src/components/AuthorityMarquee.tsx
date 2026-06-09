/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Cpu, Globe, Rocket, Shield, Zap } from "lucide-react";

export default function AuthorityMarquee() {
  const marqueeItems = [
    { text: "DESIGN EXCLUSIVO", icon: <Sparkles className="w-4 h-4 text-red-500" /> },
    { text: "SITES 100% RESPONSIVOS", icon: <Globe className="w-4 h-4 text-red-400" /> },
    { text: "CÓDIGO ULTRA-OTIMIZADO", icon: <Cpu className="w-4 h-4 text-red-500" /> },
    { text: "CONVERSÃO DE VENDAS", icon: <Rocket className="w-4 h-4 text-rose-400" /> },
    { text: "SEGURANÇA EXTREMA", icon: <Shield className="w-4 h-4 text-blue-400" /> },
    { text: "CARREGAMENTO EM SUB-1.5S", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
  ];

  // Repeat items to ensure smooth loop
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="bg-[#030303]/70 py-6 border-y border-white/5 overflow-hidden">
      <div className="relative w-full flex">
        {/* Subtle blur vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-12 text-xs font-mono tracking-widest text-zinc-400"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {item.icon}
              <span className="font-semibold uppercase select-none">{item.text}</span>
              <span className="text-zinc-600 font-light ml-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
