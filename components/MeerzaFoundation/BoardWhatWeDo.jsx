"use client";

import React, { useMemo } from "react";
import { BookOpen, Droplets, Zap, Baby, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const MISSION_PILLARS = [
  {
    title: "Educational Support",
    icon: BookOpen,
    desc: "Providing scholarships, free learning resources, and skill development programs for underprivileged students.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    glowColor: "group-hover:shadow-blue-500/20",
  },
  {
    title: "Community Development",
    icon: Droplets,
    desc: "Initiatives to improve access to clean water, healthcare, and sustainable livelihoods for rural communities.",
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    glowColor: "group-hover:shadow-emerald-500/20",
  },
  {
    title: "Disaster Relief",
    icon: Zap,
    desc: "Providing immediate aid, food, and shelter support to those affected by natural calamities and emergencies.",
    color: "from-rose-500/20 to-rose-600/20",
    iconColor: "text-rose-600 dark:text-rose-400",
    glowColor: "group-hover:shadow-rose-500/20",
  },
  {
    title: "Women & Children",
    icon: Baby,
    desc: "Programs aimed at ensuring equal opportunities, safety, and protection for vulnerable women and children.",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    glowColor: "group-hover:shadow-purple-500/20",
  },
];

const BoardWhatWeDo = () => {
  const pillars = useMemo(() => MISSION_PILLARS, []);

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
          <h3 className="text-[#002147] dark:text-blue-400 uppercase text-xs mb-6 font-bold tracking-[0.2em]">
            / Our Mission
          </h3>
          <h2 className="text-[2.5rem] md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
            <div className="pb-1">Driven by Purpose,</div>
            <div className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-blue-600 dark:from-white dark:to-blue-400 pb-1">
              Guided by Impact.
            </div>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Our multi-faceted approach ensures that we address the most pressing needs of our community while building a foundation for sustainable growth.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} animationClass="animate-fade-in" options={{ threshold: 0.1, delay: idx * 0.1 }}>
              <div className={`group p-8 rounded-[2.5rem] bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-3xl border border-slate-200/60 dark:border-white/5 hover:border-[#002147]/30 dark:hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden h-full flex flex-col shadow-sm ${pillar.glowColor} hover:shadow-2xl`}>
                
                {/* Icon Container with subtle gradient backglow */}
                <div className="relative mb-8 w-16 h-16">
                  <div className={`absolute inset-0 bg-linear-to-br ${pillar.color} blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-slate-100 dark:border-white/10 flex items-center justify-center text-[#002147] group-hover:scale-110 transition-transform duration-500">
                    <pillar.icon size={30} className={pillar.iconColor} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-8 flex-grow">
                  {pillar.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#002147] dark:text-blue-400 opacity-60 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardWhatWeDo;
