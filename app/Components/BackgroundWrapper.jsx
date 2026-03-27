import React from "react";

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-50 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-700">
        {/* Mobile Static Gradient (Fallback for removed blobs) */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/20 to-transparent dark:from-blue-900/5 dark:to-transparent md:hidden" />

        {/* Mesh Gradient / Blobs - Using CSS animations and mobile optimizations */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-[80px] md:blur-[100px] mobile-optimize-blur md:animate-blob-1 pointer-events-none will-change-transform"
        />
        <div
          className="absolute top-[40%] right-[-5%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[#002147]/10 dark:bg-indigo-500/10 blur-[100px] md:blur-[120px] mobile-optimize-blur md:animate-blob-2 pointer-events-none will-change-transform"
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-slate-200/5 dark:bg-blue-400/5 blur-[150px] mobile-optimize-blur md:animate-blob-3 pointer-events-none will-change-transform hidden md:block"
        />

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mt-0" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
