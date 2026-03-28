"use client";

import React, { useMemo } from "react";
import { HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";
import Link from "next/link";

const InitiativesHero = () => {
  const content = useMemo(() => ({
    badge: "Meerza Foundation Initiatives",
    title: "Knowledge is a Right,",
    highlight: "Not a Privilege.",
    description: "From free academic supplies to comprehensive Quranic education, we are dedicated to empowering our community through accessible resources."
  }), []);

  return (
    <section className="relative lg:pt-50 pt-36 pb-20 bg-slate-50 dark:bg-[#0d0d0d] border-b border-slate-200 dark:border-white/5">
      <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002147]/10 dark:bg-[#002147]/20 border border-[#002147]/20 dark:border-[#002147]/30 text-[#002147] dark:text-[#00529b] text-[10px] font-semibold  mb-6 shadow-sm">
          <HeartHandshake size={14} /> {content.badge}
        </div> */}
        <h1 className="text-[2.8rem] sm:text-6xl md:text-8xl lg:text-7xl font-bold leading-[1] tracking-tight mb-6 overflow-hidden">
          <div className="pb-1">
            {content.title}
          </div>
          <div className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-blue-600 dark:from-white dark:to-blue-400 pb-1">
            {content.highlight}
          </div>
        </h1>
        <div className="flex justify-center gap-4 mt-10">
          <button 
            onClick={() => document.getElementById('academic-aid')?.scrollIntoView({ behavior: 'smooth' })}
            className="h-12 px-8 rounded-3xl bg-[#002147] dark:bg-[#003a6e] text-white font-semibold text-sm uppercase hover:scale-105 transition-transform flex items-center justify-center gap-2 outline-none"
          >
            Explore Initiatives
          </button>
          <Link 
            href="/meerza-foundation/board-of-directors"
            className="h-12 px-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-sm uppercase hover:bg-slate-50 dark:hover:bg-white/10 transition-colors flex items-center justify-center outline-none"
          >
            Meet the Board
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default InitiativesHero;
