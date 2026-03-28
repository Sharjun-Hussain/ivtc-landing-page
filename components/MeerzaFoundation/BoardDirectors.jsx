"use client";

import React, { useMemo } from "react";
import { Users, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const DIRECTORS = [
  { name: "Athambawa Mohamed Sulfikar", role: "Board Director" },
  { name: "Athambawa Jaleel", role: "Board Director" },
  { name: "Athambawa Jarees", role: "Board Director" },
  { name: "Athambawa Rameez", role: "Board Director" },
  { name: "Athambawa Mohamed Jahan", role: "Board Director" },
  { name: "Athambawa Fathima Inan", role: "Board Director" },
];

const BoardDirectors = () => {
  const directors = useMemo(() => DIRECTORS, []);

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0d0d0d] border-t border-slate-200 dark:border-white/5">
      <ScrollReveal className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h3 className="text-[#002147] dark:text-blue-400 uppercase text-xs mb-6 font-bold tracking-[0.2em]">
            / Leadership
          </h3>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
            <div className="pb-1">Our Board of</div>
            <div className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-blue-600 dark:from-white dark:to-blue-400 pb-1">
              Visionary Directors.
            </div>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Dedicated to driving impactful change through education, humanitarian aid, and community development. Our leadership ensures every initiative aligns with our mission to uplift lives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {directors.map((director, idx) => (
            <ScrollReveal key={idx} animationClass="animate-fade-in" options={{ threshold: 0.1, delay: idx * 0.1 }}>
              <div className="flex flex-col items-center text-center group h-full">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white dark:bg-[#111] border-2 border-slate-100 dark:border-white/5 p-1.5 mb-6 group-hover:border-[#002147] dark:group-hover:border-blue-500/50 shadow-sm group-hover:shadow-2xl transition-all duration-500 relative">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-50 dark:bg-black relative">
                     <img 
                       src={`https://ui-avatars.com/api/?name=${director.name.replace(/\s+/g, "+")}&background=002147&color=fff&bold=true`} 
                       alt={director.name}
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                     />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#002147] dark:bg-blue-600 text-white p-2 rounded-full border-4 border-white dark:border-[#0a0a0a] shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={14} />
                  </div>
                </div>
                
                <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors">
                  {director.name}
                </h4>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-500 transition-colors">
                  {director.role}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BoardDirectors;
