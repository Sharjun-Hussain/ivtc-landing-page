"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  BookOpen,
  Droplets,
  Zap,
  Users,
  ArrowRight,
  Globe,
  HandHeart,
  Baby,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- CONTENT FROM PDF ---
const MISSION_PILLARS = [
  {
    title: "Educational Support",
    icon: BookOpen,
    desc: "Providing scholarships, free learning resources, and skill development programs for underprivileged students.",
    color: "bg-blue-500",
  },
  {
    title: "Community Development",
    icon: Droplets, // Water/Life symbol
    desc: "Initiatives to improve access to clean water, healthcare, and sustainable livelihoods for rural communities.",
    color: "bg-green-500",
  },
  {
    title: "Disaster Relief",
    icon: Zap, // Urgent Action
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

const DIRECTORS = [
  { name: "Athambawa Mohamed Sulfikar", role: "Board Director" },
  { name: "Athambawa Jaleel", role: "Board Director" },
  { name: "Athambawa Jarees", role: "Board Director" },
  { name: "Athambawa Rameez", role: "Board Director" },
  { name: "Athambawa Mohamed Jahan", role: "Board Director" },
  { name: "Athambawa Fathima Inan", role: "Board Director" },
];

const MeerzaFoundationPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // 1. Hero Animation
      const tl = gsap.timeline();
      tl.from(".hero-badge", { scale: 0, opacity: 0, duration: 0.5, ease: "back.out" })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.3")
        .from(".hero-text", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5");

      // 2. Pillars Animation
      gsap.from(".pillar-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".pillars-section",
          start: "top 80%",
        },
      });

      // 3. Directors Animation
      gsap.from(".director-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.2)",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".directors-section",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden bg-slate-50 dark:bg-[#0d0d0d]">
        {/* Background "Heartbeat" Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 dark:bg-amber-600/10 blur-[120px] rounded-full animate-pulse duration-[4000ms]" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-amber-200 dark:border-amber-500/20 text-amber-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
            <HandHeart size={14} /> The Charitable Arm of IVTC
          </div>

          <h1 className="hero-title text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">
            Empowering Lives, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Inspiring Change.
            </span>
          </h1>

          <p className="hero-text text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Founded on the principles of compassion and community, the Meerza Foundation
            works tirelessly to create opportunities for the underserved. We believe every
            individual deserves a chance to thrive.
          </p>

          <div className="hero-text flex justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-slate-900 dark:bg-amber-600 text-white font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-amber-500/20 flex items-center gap-2">
              <Heart size={18} className="fill-current" /> Support Our Cause
            </button>
            <button className="px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
              Read Reports
            </button>
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO (PILLARS) --- */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a] pillars-section relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-amber-600 dark:text-amber-500 font-mono tracking-widest uppercase text-xs mb-4 font-bold">
              / Our Mission
            </h3>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MISSION_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="pillar-card group p-8 rounded-[2rem] bg-slate-50 dark:bg-[#111] border border-slate-100 dark:border-white/5 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Icon Blob */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 ${pillar.color} opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl ${pillar.color} text-white flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                  <pillar.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                  {pillar.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                  {pillar.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOARD OF DIRECTORS --- */}
      <section className="py-20 bg-slate-50 dark:bg-[#0d0d0d] directors-section border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 opacity-50">
              <Users size={20} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
              Our Board of Directors
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Dedicated to driving impactful change through education, humanitarian aid, 
              and community development. Our leadership ensures every initiative aligns 
              with our mission to uplift lives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {DIRECTORS.map((director, idx) => (
              <div
                key={idx}
                className="director-card flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white dark:bg-[#151515] border-2 border-slate-200 dark:border-white/10 p-1 mb-4 group-hover:border-amber-500 transition-colors duration-300 relative">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-black relative">
                     {/* Avatar Placeholder */}
                     <img 
                       src={`https://ui-avatars.com/api/?name=${director.name.replace(" ", "+")}&background=random&color=fff`} 
                       alt={director.name}
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                     />
                  </div>
                  {/* Badge */}
                  <div className="absolute bottom-0 right-0 bg-amber-600 text-white p-1.5 rounded-full border-2 border-white dark:border-[#0d0d0d]">
                    <Briefcase size={12} />
                  </div>
                </div>
                
                <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-amber-600 transition-colors">
                  {director.name}
                </h4>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
                  {director.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GLOBAL IMPACT FOOTER --- */}
      <section className="py-16 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-600/10 pattern-grid-lg opacity-20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Globe className="w-12 h-12 mx-auto mb-6 text-amber-500 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            "Together, we can build a world where no one is left behind."
          </h2>
          <div className="flex justify-center gap-8 text-sm font-medium text-slate-400">
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">500+</span>
                <span>Students Supported</span>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">50+</span>
                <span>Communities Aided</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeerzaFoundationPage;
