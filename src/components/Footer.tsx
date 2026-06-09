/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BRAND_NAME, getWhatsAppLink, INSTAGRAM_STATS, LOGO_URL } from "../data";
import { MessageSquare, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030304] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
          {/* Brand/Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src={LOGO_URL}
                alt={`${BRAND_NAME} Logo`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="text-lg font-display font-black tracking-tight text-white uppercase bg-gradient-to-r from-red-600 to-red-450 bg-clip-text text-transparent">
              {BRAND_NAME}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          </div>

          {/* Helper Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-zinc-500">
            <a href="#inicio" className="hover:text-white transition-colors">INÍCIO</a>
            <a href="#diferenciais" className="hover:text-white transition-colors">DIFERENCIAIS</a>
            <a href="#sobre" className="hover:text-white transition-colors">SOBRE</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">DEPOIMENTOS</a>
            <a href="#simulador" className="hover:text-white transition-colors">SIMULADOR</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/10 transition-all"
              aria-label="WhatsApp Contact"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={`https://instagram.com/${INSTAGRAM_STATS.username}`}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/10 transition-all"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-zinc-600">
          <p>© 2026 criador de sites. Todos os direitos reservados por Lucas Pires Dorneles.</p>
          <p className="flex items-center gap-1 text-[10px]">
            <Globe className="w-3.5 h-3.5" />
            Português (Brasil)
          </p>
        </div>

      </div>
    </footer>
  );
}
