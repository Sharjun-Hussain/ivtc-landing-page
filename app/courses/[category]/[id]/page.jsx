"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckCircle2,
  Clock,
  BarChart,
  Calendar,
  ShieldCheck,
  Download,
  PlayCircle,
  Users,
  Award,
  ArrowRight,
  Play,
  FileText,
  Globe,
  Star,
  ChevronRight,
  Home,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CourseDetailsPage = () => {
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main Entrance
      gsap.from(".anim-fade", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      });

      // Related Courses Entrance
      gsap.from(".related-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: relatedRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const courseCategory = "Certifications"; // Dynamic Category Name

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-50/50 dark:bg-[#0a0a0a] pt-32 pb-24 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* --- 1. BREADCRUMBS --- */}
        <nav className="anim-fade flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <Link
            href="/"
            className="hover:text-blue-600 flex items-center gap-1 transition-colors"
          >
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/courses"
            className="hover:text-blue-600 transition-colors"
          >
            Courses
          </Link>
          <ChevronRight size={12} />
          <Link
            href={`/courses/${courseCategory.toLowerCase()}`}
            className="hover:text-blue-600 transition-colors"
          >
            {courseCategory}
          </Link>
          <ChevronRight size={12} />
          <span className="text-slate-900 dark:text-white">CCNA 200-301</span>
        </nav>

        {/* --- 2. HERO & MEDIA SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="anim-fade flex items-center gap-3">
              {/* Category Badge */}
              <span className="px-4 py-1.5 rounded-xl bg-blue-500/10 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                {courseCategory}
              </span>
              <span className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                <Star size={14} fill="currentColor" /> 4.9 (2.4k Reviews)
              </span>
            </div>
            <h1 className="anim-fade text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-4">
              Enterprise <br />{" "}
              <span className="text-blue-600">Networking</span>
            </h1>
            <p className="anim-fade text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Master the core technologies of modern enterprise systems and
              prepare for the world-renowned CCNA 200-301 certification.
            </p>
          </div>

          <div className="lg:col-span-5 anim-fade">
            {/* Elevated Media Container */}
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.25)] border-4 border-white dark:border-white/5">
              <div className="group relative w-full h-full cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000"
                  className="w-full h-full object-cover opacity-60"
                  alt="Preview"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. MAIN CONTENT & SIDEBAR --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-8 space-y-12">
            {/* Feature Highlights */}
            <div className="anim-fade grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Instructor-Led", desc: "Live support", icon: Users },
                { title: "Lab Access", desc: "Hardware sim", icon: Globe },
                {
                  title: "Certification",
                  desc: "Global Credential",
                  icon: Award,
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="p-6 bg-white dark:bg-[#111] rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 dark:border-white/5"
                >
                  <f.icon className="text-blue-600 mb-4" size={24} />
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {f.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed uppercase font-bold tracking-tight">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Syllabus with elevated accordion cards */}
            <section className="anim-fade space-y-6">
              <h3 className="text-2xl font-bold dark:text-white flex items-center gap-3">
                <FileText className="text-blue-600" /> Course Syllabus
              </h3>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[1, 2, 3].map((i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-none bg-white dark:bg-[#111] rounded-3xl px-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all hover:shadow-xl"
                  >
                    <AccordionTrigger className="hover:no-underline py-6 text-slate-900 dark:text-white font-bold text-lg">
                      Module {i}: Network Fundamentals
                    </AccordionTrigger>
                    <AccordionContent className="pb-8 space-y-4 text-slate-500">
                      <div className="flex items-center gap-3 text-sm font-medium p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        <PlayCircle size={16} className="text-blue-500" />{" "}
                        Introduction to Routing
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          <aside className="lg:col-span-4 sticky top-28 anim-fade">
            <div className="bg-white dark:bg-[#111] p-10 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-none border border-slate-100 dark:border-white/5 space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  LKR 45,000
                </span>
                <span className="text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full uppercase">
                  Special Offer
                </span>
              </div>

              <div className="space-y-4">
                <Button className="w-full h-16 rounded-[1.25rem] bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-xl shadow-blue-500/20 group">
                  ENROLL NOW
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full h-16 rounded-[1.25rem] text-slate-500 font-bold hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  <Download size={18} className="mr-2" /> Download Syllabus PDF
                </Button>
              </div>

              <div className="space-y-4 pt-8 border-t border-slate-100 dark:border-white/5">
                {[
                  { icon: Clock, text: "Self-paced + Live support" },
                  { icon: ShieldCheck, text: "Lifetime access to portal" },
                  { icon: Calendar, text: "Batch starts Feb 20, 2026" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
                  >
                    <item.icon size={16} className="text-blue-600" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* --- 4. RELATED COURSES --- */}
        <section
          ref={relatedRef}
          className="pt-20 border-t border-slate-200 dark:border-white/5"
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="text-blue-500 font-mono tracking-widest uppercase text-xs mb-3 font-bold">
                / Similar Programs
              </h3>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tighter">
                You might also like
              </h2>
            </div>
            <Link
              href={`/courses/${courseCategory.toLowerCase()}`}
              className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              VIEW ALL {courseCategory.toUpperCase()} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="related-card group bg-white dark:bg-[#111] rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Globe size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  CompTIA Security+
                </h4>
                <p className="text-xs text-slate-500 mb-6">
                  Master the fundamentals of cybersecurity and threat
                  management.
                </p>
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-blue-600 pt-6 border-t border-slate-100 dark:border-white/5">
                  <span>Explore Course</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
