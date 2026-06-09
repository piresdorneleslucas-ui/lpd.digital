/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Star, MessageSquare, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-[#070709] border-t border-white/5">
      {/* Background radial effects */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[11px] font-mono tracking-widest text-red-400 uppercase">Histórias de Sucesso</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-none mb-6">
            Quem confia, <span className="bg-gradient-to-r from-red-650 to-red-500 bg-clip-text text-transparent">recomenda</span>
          </h2>
          
          <p className="text-zinc-400 text-lg font-light">
            Depoimentos reais de executivos e profissionais que elevaram o patamar de seus negócios com a LPD Digital.
          </p>
        </div>

        {/* Testimonials Static Grid with exquisite hovering animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-950/40 border border-white/5 hover:border-red-500/25 p-7 rounded-3xl relative flex flex-col justify-between transition-all group hover:bg-[#0c0c10]/30"
            >
              {/* Absolutes decorative quotes */}
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <Quote className="w-16 h-16 text-white" />
              </div>

              {/* Feedbacks stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, sIdx) => (
                  <Star key={sIdx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Core Text Body */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic text-left flex-1 font-light">
                "{t.feedback}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 border-t border-white/5 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover bg-zinc-800 shrink-0"
                />
                <div className="text-left">
                  <span className="text-sm font-bold text-white block leading-tight">{t.name}</span>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {t.role} — <strong className="text-red-400 font-semibold">{t.company}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
