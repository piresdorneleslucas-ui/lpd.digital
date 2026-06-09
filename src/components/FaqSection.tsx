/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background ambient color */}
      <div className="absolute bottom-[10%] right-[-15%] w-[400px] h-[400px] bg-red-650/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[11px] font-mono tracking-widest text-red-400 uppercase">Dúvidas Frequentes</span>
          </div>
          
          <h2 className="text-4xl font-display font-black tracking-tight leading-none mb-6">
            Ficou com <span className="bg-gradient-to-r from-red-600 to-red-450 bg-clip-text text-transparent">perguntas?</span>
          </h2>
          
          <p className="text-zinc-400 text-sm md:text-base font-light">
            Tudo o que você precisa saber sobre prazos, mensalidades, garantias e o processo de desenvolvimento premium.
          </p>
        </div>

        {/* Faq List Card */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "bg-[#0b0b0e] border-red-500/25 shadow-lg shadow-red-500/[0.02]" 
                    : "bg-transparent border-white/5"
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-white transition-colors"
                >
                  <span className="text-sm md:text-base">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-500" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-zinc-400 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4 text-left font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
