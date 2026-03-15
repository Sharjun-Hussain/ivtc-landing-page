"use client";
import React from "react";

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="fixed inset-0 -z-50 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-700">
        {/* Mesh Gradient / Blobs - Using CSS animations and mobile optimizations */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-[100px] mobile-optimize-blur animate-blob-1 pointer-events-none will-change-transform"
        />
        <div
          className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#002147]/10 dark:bg-indigo-500/10 blur-[120px] mobile-optimize-blur animate-blob-2 pointer-events-none will-change-transform"
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-slate-200/5 dark:bg-blue-400/5 blur-[150px] mobile-optimize-blur animate-blob-3 pointer-events-none will-change-transform"
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
