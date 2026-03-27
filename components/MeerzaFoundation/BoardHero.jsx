"use client";

import React, { useMemo } from "react";
import { Heart, HandHeart } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const BoardHero = () => {
  const content = useMemo(() => ({
    badge: "The Charitable Arm of IVTC",
    title: "Empowering Lives,",
    highlight: "Inspiring Change.",
    description: "Founded on the principles of compassion and community, the Meerza Foundation works tirelessly to create opportunities for the underserved. We believe every individual deserves a chance to thrive."
  }), []);

  return (
    <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden bg-slate-50 dark:bg-[#0d0d0d]">
      <ScrollReveal className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002147]/5 dark:bg-[#002147]/10 border border-[#002147]/10 dark:border-[#002147]/20 text-[#002147] dark:text-[#00529b] text-[10px] font-semibold uppercase mb-8 shadow-sm">
          <HandHeart size={14} /> {content.badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 dark:text-white mb-8">
          {content.title} <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] via-[#003366] to-[#002147] dark:from-[#003a6e] dark:to-[#00529b]">
            {content.highlight}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          {content.description}
        </p>

        <div className="flex justify-center gap-4">
          <button className="h-12 px-12! rounded-3xl bg-[#002147] dark:bg-[#003a6e] text-white font-semibold text-lg uppercase hover:scale-105 transition-transform shadow-xl shadow-[#002147]/20 flex items-center gap-2 justify-center outline-none">
            <Heart size={18} className="fill-current" /> Support Our Cause
          </button>
          <button className="h-12 px-12! rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-lg uppercase hover:bg-slate-50 dark:hover:bg-white/10 transition-colors flex items-center justify-center outline-none">
            Read Reports
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BoardHero;
