"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Lock, GraduationCap, Laptop } from "lucide-react";

const LMSLogin = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-6 md:py-10 bg-white dark:bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="lms-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={contentRef}
          className="relative group overflow-hidden rounded-[2rem] bg-linear-to-br from-[#002147] via-[#003366] to-[#001a35] p-6 md:p-10 lg:p-14 shadow-2xl border border-white/5"
        >
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-700" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Main Content Area */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                <Lock size={12} className="text-blue-400" /> Secure Student Access
              </div>

              <div className="space-y-3">
                <h2 
                  id="lms-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter"
                >
                  Your <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-100 via-white to-blue-200">
                    Online Classroom
                  </span>
                </h2>
                <p className="text-blue-100/60 text-sm md:text-base max-w-sm leading-relaxed font-medium">
                  Open your LMS to see your lessons, hand in homework, and check your progress.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                <Link
                  href="https://lms.ivtccampus.lk"
                  aria-label="Login to the Learning Management System"
                  className="group/btn relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#002147] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-500 shadow-xl active:scale-95 overflow-hidden text-xs"
                >
                  <span className="relative z-10">Login to LMS</span>
                  <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                </Link>
                
                <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="w-6 h-6 rounded-full border-2 border-[#002147] bg-linear-to-br from-blue-400 to-blue-600 shadow-lg"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-black leading-none">500+</span>
                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-wider">Active Students</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Stats Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Laptop, label: "Classes", value: "24/7 Access", color: "text-blue-400" },
                  { icon: GraduationCap, label: "Status", value: "Certified", color: "text-indigo-400" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group/stat p-5 rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color} mb-4`}>
                      <stat.icon size={20} />
                    </div>
                    <div className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">
                      {stat.label}
                    </div>
                    <div className="text-white text-base font-black tracking-tight">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Compact Progress Card */}
              <div className="mt-4 p-5 rounded-[1.5rem] bg-linear-to-r from-white/10 to-transparent border border-white/10 backdrop-blur-xl flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-4 border-white/10 flex items-center justify-center text-white font-black text-xs">
                    85%
                    <div className="absolute inset-0 rounded-full border-4 border-t-white border-r-white border-b-transparent border-l-transparent animate-spin-slow" />
                  </div>
                </div>
                <div>
                  <div className="text-white font-black text-base mb-0.5 tracking-tight">Progress</div>
                  <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Growing daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LMSLogin;
