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
    <section className="bg-slate-950 dark:bg-black text-white relative overflow-hidden" aria-labelledby="impact-heading">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[#002147]/20 pattern-grid-lg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3">
            <ScrollReveal className="sticky top-32">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 text-blue-400 shadow-2xl">
                <Globe size={32} />
              </div>
              <h2 id="impact-heading" className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                Global <br /> Reach.
              </h2>
              <p className="text-blue-100/70 text-lg leading-relaxed font-medium">
                Our outreach extends across borders, bringing hope and practical aid to those who need it most.
              </p>
            </ScrollReveal>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3">
            <ScrollReveal>
              <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 md:p-16 border border-white/10 shadow-2xl">
                <h3 className="text-2xl md:text-5xl font-bold italic mb-16 leading-tight tracking-tight">
                  "Together, we can build a world where <span className="text-blue-400">no one</span> is left behind."
                </h3>

                <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
                   {stats.map((stat) => (
                     <div key={stat.label} className="flex flex-col">
                        <span className="text-4xl md:text-7xl font-black text-white mb-3 tracking-tighter">
                          {stat.value}
                        </span>
                        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-400/80">
                          {stat.label}
                        </span>
                     </div>
                   ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardImpact;
