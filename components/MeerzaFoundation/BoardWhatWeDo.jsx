"use client";

import React, { useMemo } from "react";
import { BookOpen, Droplets, Zap, Baby, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const MISSION_PILLARS = [
  {
    title: "Educational Support",
    icon: BookOpen,
    desc: "Providing scholarships, free learning resources, and skill development programs for underprivileged students.",
    color: "bg-blue-500",
  },
  {
    title: "Community Development",
    icon: Droplets,
    desc: "Initiatives to improve access to clean water, healthcare, and sustainable livelihoods for rural communities.",
    color: "bg-green-500",
  },
  {
    title: "Disaster Relief",
    icon: Zap,
    desc: "Providing immediate aid, food, and shelter support to those affected by natural calamities and emergencies.",
    color: "bg-red-500",
  },
  {
    title: "Women & Children",
    icon: Baby,
    desc: "Programs aimed at ensuring equal opportunities, safety, and protection for vulnerable women and children.",
    color: "bg-pink-500",
  },
];

const BoardWhatWeDo = () => {
  const pillars = useMemo(() => MISSION_PILLARS, []);

  return (
    <section className="py-20 bg-white dark:bg-[#0a0a0a] relative">
      <ScrollReveal className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#002147] dark:text-[#00529b] uppercase text-xs mb-4 font-semibold">
            / Our Mission
          </h3>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white">
            What We Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} animationClass="animate-fade-in" options={{ threshold: 0.1, delay: idx * 0.1 }}>
              <div className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-[#111] border border-slate-100 dark:border-white/5 hover:border-[#002147]/30 hover:shadow-2xl hover:shadow-[#002147]/10 transition-all duration-300 relative overflow-hidden h-full">
                <div className={`absolute -right-4 -top-4 w-24 h-24 ${pillar.color} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`} />
                <div className={`w-14 h-14 rounded-2xl ${pillar.color} text-white flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 relative z-10">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                  {pillar.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase text-[#002147] dark:text-[#00529b] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default BoardWhatWeDo;
