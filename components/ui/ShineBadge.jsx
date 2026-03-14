"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * ShineBadge Component
 * A reusable, interactive badge with a glassmorphism effect and an animated shine on hover.
 */
const ShineBadge = ({ children, className }) => {
  return (
    <div className={cn(
      "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-slate-200 dark:border-white/10 bg-[#002147]/10 px-5 py-1.5 text-sm font-medium tracking-wide text-slate-600 dark:text-slate-300 backdrop-blur-xl transition-all duration-300 ease-out hover:bg-slate-100/50 dark:hover:bg-white/10",
      className
    )}>
      {/* Advanced Glass Shine Effect */}
      <div className="absolute inset-0 z-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] transition-transform duration-700 ease-in-out group-hover:translate-x-[150%] dark:via-white/20"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </div>
  );
};

export default ShineBadge;
