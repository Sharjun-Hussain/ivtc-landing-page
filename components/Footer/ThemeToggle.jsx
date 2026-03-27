"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center hover:cursor-pointer gap-2 text-[10px] font-black uppercase text-slate-400 hover:text-white transition-colors group"
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
        {resolvedTheme === "dark" ? (
          <Sun size={12} className="group-hover:rotate-90 transition-transform duration-500" />
        ) : (
          <Moon size={12} className="group-hover:-rotate-12 transition-transform duration-500" />
        )}
      </div>
      <span className="hidden sm:block font-medium">
        {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
