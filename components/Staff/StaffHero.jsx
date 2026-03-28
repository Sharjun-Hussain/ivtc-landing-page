import React from "react";
import { Users } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const StaffHero = () => {
  return (
    <section className="relative lg:pt-50 pt-36 pb-20 bg-slate-50 dark:bg-[#0d0d0d] border-b border-slate-200 dark:border-white/5 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <ScrollReveal className="max-w-5xl mx-auto px-6 text-center">
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-blue-400 text-xs font-bold tracking-wide mb-8 shadow-sm">
          <Users size={14} className="text-[#002147] dark:text-blue-400" /> World-Class Faculty
        </div> */}
        
        <h1 className="text-[2.8rem] sm:text-6xl md:text-8xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-slate-900 dark:text-white">
          <span className="block">Meet Your</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-blue-600 dark:from-white dark:to-blue-400">
            Expert Faculty.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium mb-12">
          Learn from industry leaders and academic researchers who bring real-world expertise to every session. Our team is dedicated to your professional success.
        </p>
      </ScrollReveal>
    </section>
  );
};

export default StaffHero;
