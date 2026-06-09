/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AuthorityMarquee from "./components/AuthorityMarquee";
import BentoGrid from "./components/BentoGrid";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import BudgetSimulator from "./components/BudgetSimulator";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col relative selection:bg-red-500/30 selection:text-white font-sans">
      {/* Dynamic top linear ambient flow line */}
      <div className="fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-red-600 via-red-500 to-zinc-400 z-50 opacity-60 pointer-events-none" />

      {/* Primary header */}
      <Header />

      {/* One-Page premium segments */}
      <main className="flex-1">
        <HeroSection />
        <AuthorityMarquee />
        <BentoGrid />
        <AboutSection />
        <Testimonials />
        <BudgetSimulator />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

