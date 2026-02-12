"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const SocialSidebar = () => {
  const socials = [
    { icon: <Facebook size={18} />, url: "https://facebook.com/ivtc.campus", label: "Facebook" },
    { icon: <Instagram size={18} />, url: "https://instagram.com/ivtc.campus", label: "Instagram" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/school/ivtc", label: "LinkedIn" },
    { icon: <Youtube size={18} />, url: "https://youtube.com/@ivtc", label: "YouTube" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-100 hidden lg:flex flex-col gap-5 items-center">
      {/* Decorative vertical line (Top) */}
      <div className="w-px h-12 bg-linear-to-b from-transparent to-amber-500/30" />
      
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 text-slate-400 hover:text-amber-600 transition-all duration-300"
          aria-label={social.label}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {social.label}
          </span>
          <div className="group-hover:scale-120 transition-transform">
            {social.icon}
          </div>
        </a>
      ))}

      {/* Decorative vertical line (Bottom) */}
      <div className="w-px h-12 bg-linear-to-t from-transparent to-amber-500/30" />
    </div>
  );
};

export default SocialSidebar;
