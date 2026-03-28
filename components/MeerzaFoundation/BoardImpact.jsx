"use client";

import React, { useMemo } from "react";
import { Globe } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const BoardImpact = () => {
  const stats = useMemo(() => [
    { label: "Students Supported", value: "500+" },
    { label: "Communities Aided", value: "50+" }
  ], []);

  return (
    <section className="py-24 bg-slate-950 dark:bg-black text-white relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[#002147]/20 pattern-grid-lg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />

      <ScrollReveal className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-10 text-blue-400 shadow-2xl">
          <Globe size={32} />
        </div>

        <h2 className="text-2xl md:text-5xl font-bold mb-12 italic leading-tight tracking-tight max-w-4xl mx-auto">
          "Together, we can build a world where <span className="text-blue-400">no one</span> is left behind."
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
           {stats.map((stat, i) => (
             <div key={stat.label} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-400/80">
                  {stat.label}
                </span>
             </div>
           ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BoardImpact;
