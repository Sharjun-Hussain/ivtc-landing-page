"use client";

import React, { useCallback } from "react";

const ScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center hover:cursor-pointer gap-3 text-[10px] font-black uppercase text-slate-400 hover:text-white transition-colors group"
      aria-label="Back to top"
    >
      <span className="hidden sm:block font-medium">Back to Top</span>
      <span className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/30 group-hover:-translate-y-1 transition-all duration-300">
        ↑
      </span>
    </button>
  );
};

export default ScrollToTop;
