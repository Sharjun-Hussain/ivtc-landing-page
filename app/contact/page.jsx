"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out",
      });
      gsap.from(".hero-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
      });

      // Main Content Animation
      gsap.from(".anim-card", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: { trigger: ".content-grid", start: "top 80%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-slate-50/50 dark:bg-[#0a0a0a] transition-colors"
    >
      {/* --- 1. THE HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-slate-200 dark:border-white/5 bg-white dark:bg-[#0d0d0d]">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Sparkles size={14} /> Available for Inquiries
          </div>

          <h1 className="hero-title text-6xl md:text-8xl font-bold text-slate-900 dark:text-white tracking-tighter leading-[0.85] mb-8">
            Let’s Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Legendary
            </span>{" "}
            results.
          </h1>

          <p className="hero-sub text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Whether you’re looking for course details, technical support, or
            corporate partnerships, our team is standing by to assist you.
          </p>

          <div className="hero-sub flex justify-center items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white dark:border-[#0d0d0d] bg-slate-200 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="Support Team"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                Expert Support Team
              </p>
              <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">
                Active Now
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
            <MoveDown size={24} />
          </div>
        </div>
      </section>

      {/* --- 2. THE CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24 content-grid">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* --- LEFT SIDE: THE INFO HUB --- */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {/* Phone Card */}
              <div className="anim-card group p-6 bg-white dark:bg-[#111] rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Contact Numbers
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white text-lg">
                      +94 11 234 5678
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="anim-card group p-6 bg-white dark:bg-[#111] rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Official Email
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white text-lg">
                      hello@legendary.lk
                    </p>
                  </div>
                </div>
              </div>

              {/* Website Card */}
              <div className="anim-card group p-6 bg-white dark:bg-[#111] rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                    <Globe size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Digital Presence
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white text-lg">
                      www.legendary.lk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HQ Visual Card */}
            <div className="anim-card p-10 bg-slate-900 dark:bg-blue-600 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <MapPin className="absolute -right-4 -bottom-4 w-40 h-40 opacity-10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">
                  Main Headquarters
                </h4>
                <p className="text-2xl font-bold leading-tight tracking-tighter">
                  Colombo 07, Level 04,
                  <br />
                  Legendary Tech Tower.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300">
                  <Clock size={14} /> Open Mon-Fri: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE MESSAGE FORM --- */}
          <div className="lg:col-span-7 anim-form">
            <div className="bg-white dark:bg-[#111] p-10 md:p-14 rounded-[3.5rem] shadow-[0_60px_100px_-30px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-white/5">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter flex items-center gap-4">
                  <MessageSquare className="text-blue-600" size={28} />
                  Drop a Message
                </h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                      Full Name
                    </label>
                    <input className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-5 px-6 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                      Email Address
                    </label>
                    <input className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-5 px-6 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium dark:text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-5 px-6 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium dark:text-white resize-none"
                  />
                </div>

                <Button className="w-full h-20 rounded-2xl bg-slate-900 dark:bg-blue-600 hover:bg-blue-700 text-white font-black text-xl shadow-2xl shadow-blue-500/20 group">
                  SEND DISPATCH
                  <Send
                    size={20}
                    className="ml-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
                  />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
