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
    <section className="py-16 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#002147]/10 pattern-grid-lg opacity-20" />
      <ScrollReveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Globe className="w-12 h-12 mx-auto mb-6 text-[#002147] dark:text-[#00529b] opacity-80" />
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          "Together, we can build a world where no one is left behind."
        </h2>
        <div className="flex justify-center gap-8 text-sm font-medium text-slate-400">
           {stats.map((stat, i) => (
             <React.Fragment key={stat.label}>
               <div className="flex flex-col items-center">
                  <span className="text-2xl font-semibold text-white">{stat.value}</span>
                  <span>{stat.label}</span>
               </div>
               {i < stats.length - 1 && <div className="w-px h-12 bg-white/10" />}
             </React.Fragment>
           ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BoardImpact;
