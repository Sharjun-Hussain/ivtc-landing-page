"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Lock, GraduationCap, Laptop } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const LMSLogin = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="py-6 md:py-18 bg-transparent overflow-hidden"
      aria-labelledby="lms-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`relative group overflow-hidden rounded-[2rem] bg-linear-to-br from-[#002147] via-[#003366] to-[#001a35] p-6 md:p-10 lg:p-14 shadow-2xl border border-white/5 opacity-0 ${isVisible ? 'animate-hero-fade-up' : ''}`}
        >
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-700" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Main Content Area */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 text-[9px] md:text-sm  font-medium ">
                <Lock size={12} className="text-blue-400 " /> Secure Student Access
              </div>

              <div className="space-y-3">
                <h2 
                  id="lms-heading"
                  className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] font-bold "
                >
                  Your Online<br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-100 via-white to-blue-200">
                     Classroom
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
                  className="group/btn relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#002147] font-black uppercase  rounded-full hover:scale-105 transition-all duration-500 shadow-xl active:scale-95 overflow-hidden text-xs"
                >
                  <span className="relative z-10 font-semibold">Login to LMS</span>
                  <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                </Link>
                
                <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 cursor-default">
                  <div className="flex -space-x-2.5">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&h=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
                    ].map((url, i) => (
                      <div 
                        key={i} 
                        className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-[#002147] overflow-hidden shadow-lg"
                      >
                        <img 
                          src={url} 
                          alt="Student Avatar" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-sm font-black leading-none">500+</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <span className="text-white/40 text-[9px] font-bold uppercase ">Active Students</span>
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
                    <div className="text-white/30 text-[9px] font-medium uppercase  mb-1">
                      {stat.label}
                    </div>
                    <div className="text-white font-semibold text-base ">
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
                <div className="">
                  <div className="text-white font-medium text-base mb-0.5 ">Progress</div>
                  <div className="text-white/40 text-[9px] font-bold uppercase ">Growing daily</div>
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
