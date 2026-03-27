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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 opacity-50">
            <Users size={20} />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6">
            Our Board of Directors
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Dedicated to driving impactful change through education, humanitarian aid, 
            and community development. Our leadership ensures every initiative aligns 
            with our mission to uplift lives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {directors.map((director, idx) => (
            <ScrollReveal key={idx} animationClass="animate-fade-in" options={{ threshold: 0.1, delay: idx * 0.1 }}>
              <div className="flex flex-col items-center text-center group h-full">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white dark:bg-[#151515] border-2 border-slate-200 dark:border-white/10 p-1 mb-4 group-hover:border-[#002147] transition-colors duration-300 relative">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-black relative">
                     <img 
                       src={`https://ui-avatars.com/api/?name=${director.name.replace(" ", "+")}&background=random&color=fff`} 
                       alt={director.name}
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                     />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#002147] dark:bg-[#003a6e] text-white p-1.5 rounded-full border-2 border-white dark:border-[#0d0d0d]">
                    <Briefcase size={12} />
                  </div>
                </div>
                
                <h4 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-[#002147] dark:group-hover:text-[#00529b] transition-colors">
                  {director.name}
                </h4>
                <span className="text-[10px] md:text-xs font-semibold uppercase text-slate-400">
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
