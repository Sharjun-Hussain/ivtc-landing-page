"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

// 1. Config: Define data and brand colors outside the component
const SOCIALS = [
  { 
    id: "fb",
    icon: Facebook, 
    url: "https://facebook.com/ivtc.campus", 
    label: "Facebook",
    color: "hover:text-blue-600" 
  },
  { 
    id: "inst",
    icon: Instagram, 
    url: "https://instagram.com/ivtc.campus", 
    label: "Instagram",
    color: "hover:text-pink-600" 
  },
  { 
    id: "li",
    icon: Linkedin, 
    url: "https://linkedin.com/school/ivtc", 
    label: "LinkedIn",
    color: "hover:text-blue-700" 
  },
  { 
    id: "yt",
    icon: Youtube, 
    url: "https://youtube.com/@ivtc", 
    label: "YouTube",
    color: "hover:text-red-600" 
  },
];

const SocialSidebar = () => {
  // 2. Ref: Scope all animations to this container
  const containerRef = useRef(null);

  // 3. Animation: The GSAP Timeline (Responsive)
  useGSAP(() => {
    // Media Query: Only animate on desktop (min-width: 1024px)
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Step A: Slide the whole container in from the right
      tl.from(containerRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      })
      // Step B: Grow the vertical lines (scaleY from 0 to 1)
      .fromTo(".social-line", 
        { scaleY: 0 },
        { scaleY: 1, duration: 0.8, transformOrigin: "bottom center" }, 
        "-=0.5" // Overlap with previous animation
      )
      // Step C: Stagger the icons in with a "back" ease for a pop effect
      .fromTo(".social-item",
        { y: 20, opacity: 0, scale: 0.8 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          stagger: 0.1, 
          duration: 0.6,
          ease: "back.out(1.7)" 
        },
        "-=0.6"
      );
    });

  }, { scope: containerRef }); // IMPORTANT: Scopes selectors to this component

  // 4. Hover Effect (GSAP Context)
  const handleHover = (e, enter) => {
    gsap.to(e.currentTarget, {
      scale: enter ? 1.2 : 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={containerRef}
      className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 items-center"
    >
      {/* Top Decorative Line */}
      <div className="social-line w-px h-12 bg-gradient-to-b from-transparent to-slate-400 dark:to-slate-600 origin-bottom" />

      {/* Icons List */}
      <div className="flex flex-col gap-4">
        {SOCIALS.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-item group relative p-2 text-slate-400 transition-colors duration-300 ${social.color}`}
            aria-label={social.label}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            {/* Tooltip */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              {social.label}
              {/* Tooltip Arrow */}
              <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 transform" />
            </span>

            {/* Icon */}
            <social.icon size={20} strokeWidth={1.5} />
          </a>
        ))}
      </div>

      {/* Bottom Decorative Line */}
      <div className="social-line w-px h-12 bg-gradient-to-t from-transparent to-slate-400 dark:to-slate-600 origin-top" />
    </div>
  );
};

export default SocialSidebar;
