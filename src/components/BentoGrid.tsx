/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Laptop, Smartphone, Zap, MessageSquare, 
  Sparkles, ShieldCheck, Play, RotateCcw,
  CheckCircle, ArrowUpRight
} from "lucide-react";
import { DIFERENCIAIS } from "../data";

export default function BentoGrid() {
  // Speed simulator states
  const [speedTestActive, setSpeedTestActive] = useState(false);
  const [speedVal, setSpeedVal] = useState(99);
  const [speedStatus, setSpeedStatus] = useState("Aprovado");

  const runSpeedTest = () => {
    if (speedTestActive) return;
    setSpeedTestActive(true);
    setSpeedVal(15);
    setSpeedStatus("Analisando...");

    let current = 15;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 99) {
        setSpeedVal(99);
        setSpeedStatus("Excelente (Core Web Vitals)");
        setSpeedTestActive(false);
        clearInterval(interval);
      } else {
        setSpeedVal(current);
      }
    }, 70);
  };

  // Device layout toggle states
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");

  // Support chat simulated state
  const [chatStep, setChatStep] = useState(0);
  const [messages, setMessages] = useState<Array<{ sender: "lucas" | "user"; text: string }>>([
    { sender: "lucas", text: "Olá! Sou o Lucas. Qual o principal objetivo do seu novo site?" }
  ]);

  const handleChatOption = (option: string, answer: string, nextStep: number) => {
    setMessages((prev) => [...prev, { sender: "user", text: option }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "lucas", text: answer }]);
      setChatStep(nextStep);
    }, 850);
  };

  const resetChat = () => {
    setMessages([
      { sender: "lucas", text: "Olá! Sou o Lucas. Qual o principal objetivo do seu novo site?" }
    ]);
    setChatStep(0);
  };

  // Customization shape slider state
  const [customRank, setCustomRank] = useState(80);

  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[45%] h-[45%] rounded-full bg-red-950/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[35%] rounded-full bg-red-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[11px] font-mono tracking-widest text-red-400 uppercase">Diferenciais Premium</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-tight mb-6"
          >
            Não entrego apenas um site.<br />
            Entrego uma <span className="bg-gradient-to-r from-red-600 via-red-500 to-zinc-200 bg-clip-text text-transparent">máquina de vendas.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl font-light"
          >
            Escolher a LPD Digital significa consolidar uma presença online luxuosa que inspira confiança imediata e impulsiona seu faturamento.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Design Moderno (Grid row spanning) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 relative flex flex-col justify-between overflow-hidden group hover:border-red-500/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-500/5 rounded-full blur-[60px] group-hover:bg-red-500/10 transition-all duration-300 pointer-events-none" />
            
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-widest font-mono text-red-400 bg-red-950/30 border border-red-900/40 px-2.5 py-0.5 rounded-full inline-block mb-4">
                {DIFERENCIAIS[0].badge}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {DIFERENCIAIS[0].title}
              </h3>
              <p className="text-zinc-400 text-sm max-w-xl mb-6">
                {DIFERENCIAIS[0].description}
              </p>
            </div>

            {/* Micro Interaction: Graphic representation of modern structure */}
            <div className="w-full bg-[#070708] border border-white/5 rounded-2xl p-6 mt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
                <div className="text-[11px] font-mono text-zinc-500">lpd.brand_identity</div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 bg-[#0c0c0e] border border-white/5 rounded-lg p-3 relative overflow-hidden group/item">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="text-[10px] font-mono text-red-500 uppercase tracking-widest mb-1.5">Módulos Tipo</div>
                  <div className="text-sm font-semibold text-white">Hero Cinema</div>
                  <div className="w-7/12 h-1 bg-red-500/70 rounded-full mt-2" />
                </div>
                <div className="bg-[#0c0c0e] border border-white/5 rounded-lg p-3 flex flex-col items-center justify-center">
                  <span className="text-red-400 text-xs font-mono font-bold">Contrast</span>
                  <span className="text-white text-md font-extrabold mt-0.5">WCAG</span>
                </div>
                <div className="col-span-3 grid grid-cols-4 gap-2">
                  <div className="col-span-1 rounded h-8 bg-zinc-900 border border-white/5 flex items-center justify-center text-xs text-red-400 font-mono">Aa</div>
                  <div className="col-span-3 rounded h-8 bg-[#0c0c0e] border border-white/5 px-2 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">Syne Heavy</span>
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Carregamento Ultra-rápido (Mobile span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group hover:border-red-500/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-red-500/5 rounded-full blur-[50px] group-hover:bg-red-500/10 transition-all duration-300 pointer-events-none" />

            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-red-500 bg-red-950/30 border border-red-900/40 px-2.5 py-0.5 rounded-full inline-block mb-4">
                {DIFERENCIAIS[2].badge}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {DIFERENCIAIS[2].title}
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Sua empresa carrega instantaneamente para prender a atenção rápida de qualquer lead ocupado.
              </p>
            </div>

            {/* Speedometer Micro Interaction */}
            <div className="bg-[#070708] border border-white/5 rounded-2xl p-5 flex flex-col items-center justify-center relative mt-auto">
              <div className="relative flex items-center justify-center w-28 h-28">
                {/* SVG Radial Speed Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#18181b"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#ef4444"
                    strokeWidth="8"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * speedVal) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-300 ease-out"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-3xl font-display font-black text-white">{speedVal}</span>
                  <span className="text-[10px] block font-mono text-zinc-500 uppercase">Score</span>
                </div>
              </div>
              
              <div className="text-center mt-3">
                <span className="text-xs font-mono font-medium text-red-500 flex items-center justify-center gap-1">
                  <Zap className="w-3 h-3" />
                  {speedStatus}
                </span>
              </div>

              <button
                onClick={runSpeedTest}
                disabled={speedTestActive}
                className="mt-4 w-full py-2 px-4 rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-xs font-mono font-bold text-white transition-all flex items-center justify-center gap-1.5"
              >
                {speedTestActive ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></span>
                    Testando...
                  </>
                ) : (
                  <>
                    <RotateCcw className="w-3.5 h-3.5" />
                    Refazer Teste de Velocidade
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 3: Site 100% Responsivo (Device Sandbox - Mobile span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group hover:border-red-500/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-red-500/5 rounded-full blur-[50px] pointer-events-none" />

            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-red-400 bg-red-950/30 border border-red-900/40 px-2.5 py-0.5 rounded-full inline-block mb-4">
                {DIFERENCIAIS[1].badge}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {DIFERENCIAIS[1].title}
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                {DIFERENCIAIS[1].description}
              </p>
            </div>

            {/* Screen Toggler Sandbox */}
            <div className="bg-[#070708] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 mt-auto relative min-h-[160px] justify-between">
              
              {/* Screen Simulator Wrapper */}
              <div className="flex items-center justify-around bg-zinc-900/40 rounded-lg p-1.5 border border-white/5">
                <button
                  onClick={() => setDeviceMode("desktop")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold font-mono transition-all ${
                    deviceMode === "desktop" ? "bg-red-600 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  Monitor
                </button>
                <button
                  onClick={() => setDeviceMode("mobile")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-bold font-mono transition-all ${
                    deviceMode === "mobile" ? "bg-red-600 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5 animate-pulse" />
                  Celular
                </button>
              </div>

              {/* Dynamic device display */}
              <div className="flex-1 flex items-center justify-center p-2 min-h-[80px]">
                <AnimatePresence mode="wait">
                  {deviceMode === "desktop" ? (
                    <motion.div
                      key="desktop"
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.85, opacity: 0 }}
                      className="w-full bg-[#0a0a0c] border border-zinc-700/50 rounded-lg p-2.5 flex flex-col gap-1.5"
                    >
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></span>
                      </div>
                      <div className="flex justify-between items-center text-[9px]">
                        <div className="w-1/3 h-2.5 bg-red-500/20 rounded"></div>
                        <div className="w-1/2 h-2.5 bg-zinc-800 rounded"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="h-5 bg-zinc-800/80 rounded"></div>
                        <div className="h-5 bg-zinc-800/80 rounded"></div>
                        <div className="h-5 bg-zinc-500/20 rounded border border-red-500/10"></div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mobile"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="w-32 bg-[#0a0a0c] border border-zinc-700/50 rounded-2xl p-3 flex flex-col gap-2 relative shadow-2xl"
                    >
                      <div className="w-10 h-1.5 bg-zinc-800 rounded-full mx-auto" />
                      <div className="flex justify-between items-center text-[8px] mt-1">
                        <div className="w-1/2 h-2 bg-red-500/20 rounded"></div>
                        <span className="w-2 h-2 rounded bg-red-500"></span>
                      </div>
                      <div className="h-8 bg-zinc-800/80 rounded flex items-center justify-center">
                        <div className="w-8 h-2 bg-zinc-700 rounded" />
                      </div>
                      <div className="h-8 bg-[#0c0c0e] rounded border border-red-500/10 flex items-center justify-center">
                        <div className="w-7 h-1.5 bg-red-500/20 rounded" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

          {/* Card 4: Projeto 100% Personalizado (Custom Slider - Mobile span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group hover:border-red-500/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-red-500/5 rounded-full blur-[50px] pointer-events-none" />

            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-red-400 bg-red-950/30 border border-red-900/45 px-2.5 py-0.5 rounded-full inline-block mb-4">
                {DIFERENCIAIS[3].badge}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {DIFERENCIAIS[3].title}
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                {DIFERENCIAIS[3].description}
              </p>
            </div>

            {/* Slider Micro Interaction */}
            <div className="bg-[#070708] border border-white/5 rounded-2xl p-4 flex flex-col gap-3.5 mt-auto">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-zinc-500">Amador / Template</span>
                <span className="text-red-500 font-bold">100% Autoral</span>
              </div>
              
              <input
                type="range"
                min="10"
                max="100"
                value={customRank}
                onChange={(e) => setCustomRank(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />

              {/* Visual customizer preview */}
              <div className="h-16 bg-[#0c0c0e] rounded-xl flex items-center justify-center p-3 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-500/5 transition-opacity" 
                  style={{ opacity: customRank / 100 }} 
                />
                
                {/* Visual elements shifting based on state */}
                <div className="flex items-center gap-3 z-10">
                  <div 
                    className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-sm font-mono transition-all"
                    style={{
                      transform: `rotate(${(customRank - 50) * 0.4}deg) scale(${0.8 + (customRank / 500)})`,
                      boxShadow: customRank > 70 ? `0 0 15px rgba(239, 68, 68, ${customRank/200})` : "none",
                      borderColor: customRank > 70 ? "rgba(239, 68, 68, 0.4)" : "rgba(255,255,255,0.05)"
                    }}
                  >
                    🚀
                  </div>
                  <div className="flex flex-col">
                    <span 
                      className="text-white text-xs font-bold transition-all"
                      style={{ letterSpacing: `${(customRank / 100) * 2}px` }}
                    >
                      {customRank > 75 ? "LPD Premium Grid" : "Template Padrão"}
                    </span>
                    <span className="text-[9px] text-zinc-500">
                      {customRank > 75 ? "Design focado em faturar mais" : "Mesmo layout que todos usam"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Transmissão de Credibilidade & Vendas */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden group hover:border-red-500/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-red-500/5 rounded-full blur-[50px] pointer-events-none" />

            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-red-500 bg-red-950/30 border border-red-900/35 px-2.5 py-0.5 rounded-full inline-block mb-4">
                {DIFERENCIAIS[5].badge}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {DIFERENCIAIS[5].title}
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Transmitimos sua integridade corporativa para converter leads céticos em contratantes frequentes.
              </p>
            </div>

            {/* Growth Chart micro interaction */}
            <div className="bg-[#070708] border border-white/5 rounded-2xl p-4 mt-auto">
              <div className="flex justify-between items-center mb-2.5">
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 block uppercase">Taxa de Conversão</span>
                  <span className="text-sm font-black text-white font-mono">1.2% → 4.8%</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-red-400 bg-red-950/40 border border-red-900/30 px-2 py-0.5 rounded flex items-center gap-0.5">
                    + 300%
                  </span>
                </div>
              </div>

              {/* Vector graph */}
              <div className="h-14 w-full flex items-end">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path
                    d="M 0 35 Q 25 32 50 20 T 100 5"
                    fill="transparent"
                    stroke="#ef4444"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Glowing dot */}
                  <circle cx="100" cy="5" r="4.5" fill="#ef4444" />
                  <circle cx="100" cy="5" r="8" fill="#ef4444" fillOpacity="0.3" className="animate-pulse" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Atendimento Próximo & Suporte (Interactive Chatbot) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 relative flex flex-col justify-between overflow-hidden group hover:border-red-500/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-500/5 rounded-full blur-[60px] group-hover:bg-red-500/10 transition-all duration-300 pointer-events-none" />

            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-widest font-mono text-red-500 bg-red-950/30 border border-red-900/40 px-2.5 py-0.5 rounded-full inline-block mb-4">
                {DIFERENCIAIS[4].badge}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {DIFERENCIAIS[4].title}
              </h3>
              <p className="text-zinc-400 text-sm max-w-xl mb-6">
                Fale diretamente comigo em todas as fases do projeto. Nada de atendentes automatizados robóticos ou briefings infinitos e frios.
              </p>
            </div>

            {/* Chat Simulator Widget */}
            <div className="bg-[#070708] border border-white/5 rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-red-650 font-bold flex items-center justify-center text-xs text-white">
                      LP
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#070708]"></span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white">Lucas Pires Dorneles</span>
                    <span className="text-[9px] font-mono text-zinc-500 text-left">LPD Digital (Online)</span>
                  </div>
                </div>

                <button 
                  onClick={resetChat}
                  className="text-[10px] font-mono text-zinc-500 hover:text-white border border-white/10 px-2 py-1 rounded hover:bg-white/5 transition-all"
                >
                  Reiniciar Conversa
                </button>
              </div>

              {/* Chat Frame */}
              <div className="min-h-[110px] max-h-[140px] overflow-y-auto flex flex-col gap-3 pr-2 scrollbar-thin text-left">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] text-xs rounded-2xl px-4 py-2.5 ${
                        m.sender === "user"
                          ? "bg-red-600 text-white rounded-tr-none"
                          : "bg-zinc-900 border border-white/5 text-zinc-200 rounded-tl-none"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat action triggers */}
              <div className="pt-2 border-t border-white/15">
                {chatStep === 0 && (
                  <div className="flex flex-wrap gap-2 justify-start">
                    <button
                      onClick={() =>
                        handleChatOption(
                          "Quero um site para passar credibilidade.",
                          "Sensacional! Desenvolvemos layouts focados em transmitir valores fortes institucionais e designs que convencem de primeira. Que tipo de negócio você tem?",
                          1
                        )
                      }
                      className="text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/5 px-3 py-1.5 rounded-full transition-all flex items-center gap-1 font-medium"
                    >
                      Mais Credibilidade <ArrowUpRight className="w-3 h-3 text-red-500" />
                    </button>
                    <button
                      onClick={() =>
                        handleChatOption(
                          "Preciso disparar minhas vendas digitais.",
                          "Perfeito! Reestruturamos a experiência do usuário com botões visíveis, carregamento sub-1.5s e funil blindado por copy persuasivo. O que você vende?",
                          1
                        )
                      }
                      className="text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/5 px-3 py-1.5 rounded-full transition-all flex items-center gap-1 font-medium"
                    >
                      Aumentar Vendas <ArrowUpRight className="w-3 h-3 text-red-500" />
                    </button>
                  </div>
                )}

                {chatStep === 1 && (
                  <div className="flex flex-wrap gap-2 justify-start">
                    <button
                      onClick={() =>
                        handleChatOption(
                          "Ofereço serviços profissionais de alto padrão.",
                          "Maravilhoso. Esse é o nosso foco ideal. Nós podemos montar uma Landing Page Premium em tempo recorde! Topa dar uma olhada e simular os valores aqui abaixo no nosso site?",
                          2
                        )
                      }
                      className="text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/5 px-3 py-1.5 rounded-full transition-all flex items-center gap-1 font-medium"
                    >
                      Serviço Físico ou Consultorias <ArrowUpRight className="w-3 h-3 text-red-500" />
                    </button>
                    <button
                      onClick={() =>
                        handleChatOption(
                          "Eu lidero uma empresa tradicional ou e-commerce.",
                          "Excelente! Nesse caso, um site institucional estruturado com SEO avançado ou uma loja virtual robusta se encaixam como uma luva. Que tal simular um orçamento passo a passo?",
                          2
                        )
                      }
                      className="text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/5 px-3 py-1.5 rounded-full transition-all flex items-center gap-1 font-medium"
                    >
                      Empresa Corporativa / Loja <ArrowUpRight className="w-3 h-3 text-red-500" />
                    </button>
                  </div>
                )}

                {chatStep === 2 && (
                  <div className="flex justify-start">
                    <a
                      href="#simulador"
                      className="text-[11px] bg-red-650 hover:bg-red-650 text-white font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Ir para o Simulador de Projetos
                    </a>
                  </div>
                )}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
