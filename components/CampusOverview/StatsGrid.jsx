"use client";

import React from "react";
import CountUp from "@/components/ui/CountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const StatsGrid = ({ stats }) => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className={`stat-item flex flex-col group opacity-0 ${isVisible ? 'animate-hero-fade-up' : ''}`} 
          style={{ animationDelay: `${i * 150}ms` }}
        >
          {/* Minimalist Top Indicator */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {stat.comment}
            </span>
            <div className="h-px w-12 bg-slate-200 dark:bg-white/10 group-hover:w-20 group-hover:bg-amber-600 dark:group-hover:bg-amber-500 transition-all duration-700" />
          </div>

          {/* Counter Section */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="stat-value text-7xl md:text-8xl font-light text-slate-900 dark:text-white tabular-nums">
              <CountUp end={stat.value} duration={2500} startOnView={true} />
            </span>
            <span className="text-4xl font-light text-amber-600/50 dark:text-gray-600">+</span>
          </div>

          {/* Content Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {stat.label}
            </h3>
            <p className="text-slate-500 dark:text-gray-400 leading-relaxed max-w-[240px] text-[15px]">
              {stat.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
