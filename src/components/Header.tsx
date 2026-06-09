/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { BRAND_NAME, getWhatsAppLink, LOGO_URL } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Sobre", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Simular Projeto", href: "#simulador" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center transition-all group-hover:border-red-500/50">
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
            <span className="text-xl font-display font-extrabold tracking-tight bg-gradient-to-r from-red-500 to-zinc-100 bg-clip-text text-transparent">
              {BRAND_NAME}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppLink("Olá Lucas, vi seu site e gostaria de fazer um orçamento!")}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-red-600 to-red-500 group-hover:from-red-500 group-hover:to-red-400 hover:text-white dark:text-white focus:outline-none"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-[#050505] rounded-full group-hover:bg-opacity-0 flex items-center gap-1.5 font-semibold text-xs tracking-wider">
                ORÇAMENTO GRÁTIS
                <ArrowRight className="w-3.5 h-3.5 text-red-500" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white focus:outline-none p-1"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#070707] border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-zinc-300 hover:text-white text-base font-semibold py-2 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Olá Lucas, vi seu site e gostaria de fazer um orçamento!")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 rounded-full text-sm transition-all shadow-lg shadow-red-600/20"
                >
                  ORÇAMENTO GRÁTIS
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
