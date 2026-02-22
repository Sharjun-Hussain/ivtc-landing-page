"use client";
import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  Users,
  Target,
  Rocket,
  ShieldCheck,
  Cpu,
  Globe,
  Zap,
  ArrowRight,
  Heart,
  CheckCircle2,
  Briefcase,
  FileText,
  Scale,
  Lock,
  Building2,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CompanyStructure from "../Components/CompanyStructure";

// --- DATA CONFIGURATION ---

const LEADERSHIP = [
  {
    name: "Dr. Aris Thorne",
    role: "Chief Executive Officer",
    bio: "Ex-Cisco Systems Architect with 15 years in EdTech innovation.",
    image: "bg-slate-200", 
  },
  {
    name: "Elena Vouris",
    role: "Head of Academics",
    bio: "PhD in Computer Science. Curates our ISO-certified curriculum.",
    image: "bg-slate-300",
  },
  {
    name: "Marcus Chen",
    role: "Director of Partnerships",
    bio: "Bridges the gap between our labs and Silicon Valley giants.",
    image: "bg-slate-200",
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Operations Officer",
    bio: "Ensures the seamless execution of our physical and digital campuses.",
    image: "bg-slate-300",
  },
];

const POLICIES = [
  {
    title: "Respect & Honesty",
    desc: "We follow high standards for honesty in exams and respect for everyone on campus.",
    icon: Scale,
  },
  {
    title: "Everyone is Welcome",
    desc: "We believe IT education is for everyone. We do not tolerate any form of unfair treatment.",
    icon: Heart,
  },
  {
    title: "Your Safety",
    desc: "Your personal information is safe with us. We use the latest security to protect your data.",
    icon: Lock,
  },
  {
    title: "Helping the Environment",
    desc: "We try to reduce waste and keep our campus green to protect our future.",
    icon: Globe,
  },
];

const PARTNERS = [
  "Microsoft",
  "AWS Academy",
  "Cisco",
  "CompTIA",
  "Pearson VUE",
  "RedHat",
  "Oracle",
  "IBM",
];

// --- COMPONENT START ---

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Generic Fade Up for Sections
      const sections = gsap.utils.toArray(".reveal-section");
      sections.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });

      // 2. Hero specific
      gsap.from(".anim-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      // 3. Stats Pop-in
      gsap.from(".anim-stat", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".stats-grid", start: "top 85%" },
      });

      // 4. Leadership Cards
      gsap.from(".anim-leader", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: { trigger: ".leadership-grid", start: "top 80%" },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-slate-50/50 dark:bg-[#0a0a0a] transition-colors pb-24 overflow-x-hidden font-sans"
    >
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-32 bg-white dark:bg-[#0d0d0d] border-b border-slate-100 dark:border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#002147]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="anim-header text-[#002147] dark:text-blue-400 font-mono tracking-[0.3em] uppercase text-[10px] mb-6 font-black">
              / About IVTC Campus
            </h3>
            <h1 className="anim-header text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-8">
              Start Your Successful <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-blue-900 dark:from-blue-400 dark:to-blue-600 transition-all duration-500">
                IT Career with Us.
              </span>
            </h1>
            <p className="anim-header text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              We help school leavers and students learn the skills needed to get a good job. Learn practically with the best equipment and expert trainers to build your future.
            </p>
            <div className="anim-header flex justify-center gap-4">
              <Button className="h-14 px-8 rounded-full bg-[#002147] text-white hover:bg-[#003366] font-bold shadow-lg shadow-[#002147]/20 transition-all">
                The Faculty
              </Button>
              <Button
                variant="ghost"
                className="h-14 px-8 rounded-full text-slate-500 font-bold hover:bg-slate-100 dark:hover:bg-white/5"
              >
                Our Rules
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. IMPACT STATS --- */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Successful Students", val: "12,000+", icon: Users },
            { label: "Job Placements", val: "94%", icon: Briefcase },
            { label: "Corporate Partners", val: "45+", icon: Building2 },
            { label: "Local Campuses", val: "04", icon: Globe },
          ].map((stat, i) => (
            <div
              key={i}
              className="anim-stat bg-white dark:bg-[#111] p-6 rounded-3xl shadow-xl shadow-black/5 border border-slate-100 dark:border-white/5 text-center"
            >
              <div className="w-10 h-10 bg-[#002147]/10 rounded-xl flex items-center justify-center text-[#002147] dark:text-blue-400 mx-auto mb-3">
                <stat.icon size={20} />
              </div>
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
                {stat.val}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 space-y-40">
        {/* --- 3. MISSION & VISION BENTO --- */}
        <div className="reveal-section grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-[#002147] rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-2xl">
            <Rocket className="absolute -right-8 -bottom-8 w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-70">
                Our Mission
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                To help students get high-quality IT training for a better life.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                We use real-world projects and modern computer labs to make sure you are ready for your first job or higher studies.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white dark:bg-[#111] rounded-[3rem] p-12 border border-slate-100 dark:border-white/5 shadow-xl flex flex-col justify-center">
            <Target className="text-[#002147] dark:text-blue-400 mb-6" size={48} />
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
              Our Vision
            </h4>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              To be the most trusted IT education center for school leavers in Sri Lanka.
            </h2>
          </div>
        </div>

        {/* --- 4. CORPORATE STRUCTURE & LEADERSHIP --- */}
        <section className="reveal-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our Leaders & Team
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              Our campus is led by experienced experts who have worked in major companies. They bring their real-world knowledge to help you learn correctly.
            </p>
          </div>

          <CompanyStructure />
        </section>

        {/* --- 5. PARTNERS & AFFILIATES --- */}
        <section className="reveal-section bg-[#002147] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#002147]/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-16">
              Our <span className="text-blue-400">Industry Partners</span>
            </h2>

            {/* Tech Partners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center opacity-80 mb-20">
              {PARTNERS.map((partner, i) => (
                <div key={i} className="flex items-center justify-center group">
                  <span className="text-xl md:text-2xl font-bold text-slate-400 group-hover:text-white transition-colors cursor-default">
                    {partner}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-16">
              <p className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-8">
                Official Certifications
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "ISO Certified",
                  "TVEC Approved",
                  "City & Guilds",
                  "Pearson VUE Center",
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-bold flex items-center gap-3 transition-colors hover:bg-white/10"
                  >
                    <Award size={16} className="text-amber-400" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. COMPANY POLICIES --- */}
        <section className="reveal-section grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#002147] dark:text-blue-400 font-bold mb-6 bg-[#002147]/5 dark:bg-blue-500/10 px-4 py-2 rounded-full text-xs uppercase tracking-widest">
              <FileText size={14} /> Campus Rules
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              A Safe Environment <br /> to Learn & Grow.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
              We follow simple but strict rules to make sure every student feels respected and safe. Our priority is to give you a great learning experience.
            </p>
            <Button
              variant="outline"
              className="rounded-xl border-slate-200 dark:border-white/10 h-12 px-6 font-bold"
            >
              Get Course Catalog
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {POLICIES.map((policy, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#111] p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <policy.icon className="text-[#002147] dark:text-blue-400 mb-4" size={24} />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {policy.title}
                </h4>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  {policy.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 7. FINAL CTA --- */}
        <section className="reveal-section text-center py-20 pb-0">
          <h2 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-10 leading-tight">
            Want to build your <br /> future in IT?
          </h2>
          <Button className="h-20 px-12 rounded-full bg-[#002147] hover:bg-[#003366] text-white font-black text-xl shadow-2xl shadow-[#002147]/30 group transition-all">
            ENROLL TODAY{" "}
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
