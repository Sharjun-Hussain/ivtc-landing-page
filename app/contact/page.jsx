"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Globe,
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
  MoveDown,
  Lock,
} from "lucide-react";

const ContactPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger to be safe
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // 1. Hero Animation
      const tl = gsap.timeline();
      
      tl.from(".hero-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }, "-=0.6")
      .from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6");

      // 2. Main Content Animation (The Fix is here)
      gsap.from(".anim-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15, // Increased stagger slightly for better flow
        ease: "power2.out",
        clearProps: "all", // CRITICAL: Removes opacity:0 after animation
        scrollTrigger: {
          trigger: ".content-grid",
          start: "top 85%", // Trigger slightly earlier
        },
      });

      // 3. Form Animation
      gsap.from(".anim-form", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".content-grid",
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
      {/* --- 1. THE HERO SECTION --- */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden border-b border-slate-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#002147]/5 dark:bg-[#002147]/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002147]/5 dark:bg-[#002147]/10 border border-[#002147]/10 dark:border-[#002147]/20 text-[#002147] dark:text-[#003a6e] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Sparkles size={14} /> Available for Inquiries
          </div>

          <h1 className="hero-title text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
            Let’s Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002147] via-[#003366] to-[#002147] dark:from-[#003a6e] dark:to-[#00529b]">
              Legendary
            </span>{" "}
            results.
          </h1>

          <p className="hero-sub text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Whether you’re looking for course details, technical support, or
            corporate partnerships, our team is standing by to assist you.
          </p>

          <div className="hero-sub flex justify-center items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white dark:border-[#0d0d0d] bg-slate-200 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 20}`}
                    alt="Support Team"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                Expert Support Team
              </p>
              <p className="text-[10px] font-black text-[#002147] uppercase tracking-widest">
                Active Now
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
            <MoveDown size={24} />
          </div>
        </div>
      </section>

      {/* --- 2. THE CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 content-grid">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* --- LEFT SIDE: THE INFO HUB --- */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            
            {/* CONTAINER FOR SMALL CARDS */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* Phone Card */}
              <div className="anim-card group p-5 md:p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-[#002147]/30 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#002147] text-white flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Contact Numbers
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white text-lg">
                      +94 11 234 5678
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="anim-card group p-5 md:p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-[#002147]/30 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#002147] text-white flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Official Email
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white text-lg">
                      hello@ivtccampus.lk
                    </p>
                  </div>
                </div>
              </div>

              {/* Website Card */}
              <div className="anim-card group p-5 md:p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-[#002147]/30 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#002147] text-white flex items-center justify-center">
                    <Globe size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Digital Presence
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white text-lg">
                      www.ivtccampus.lk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HQ Visual Card (Separate from the grid above) */}
            <div className="anim-card p-8 md:p-10 bg-[#002147] dark:bg-[#002147]/20 border border-white/5 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <MapPin className="absolute -right-4 -bottom-4 w-40 h-40 opacity-5 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                  Main Headquarters
                </h4>
                <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter">
                  Colombo 07, Level 04,
                  <br />
                  IVTC Campus.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Clock size={14} className="text-slate-400" /> Open Mon-Sat:
                  8:30 AM - 5:30 PM
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE MESSAGE FORM --- */}
          <div className="lg:col-span-7 anim-form">
            <div className="bg-white dark:bg-[#111] p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-white/5">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-4">
                  <div className="p-3 bg-[#002147] rounded-xl text-white">
                    <MessageSquare size={24} />
                  </div>
                  Drop a Message
                </h3>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all font-medium dark:text-white text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all font-medium dark:text-white text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg py-3 px-4 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all font-medium dark:text-white resize-none text-sm"
                    placeholder="How can we help you today?"
                  />
                </div>

                <button className="w-full h-14 md:h-16 rounded-xl bg-[#002147] hover:bg-[#003366] text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-[#002147]/10 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
                  SEND DISPATCH
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>

                <div className="flex items-center justify-center gap-6 pt-6 opacity-30 mt-4">
                  <ShieldCheck size={18} />
                  <Clock size={18} />
                  <Lock size={18} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
