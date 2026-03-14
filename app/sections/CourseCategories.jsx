"use client";
import React from "react";
import { BookOpen, GraduationCap, Zap, Globe, ArrowRight } from "lucide-react";
import ShineBadge from "@/components/ui/ShineBadge";
import { useScrollReveal } from "@/hooks/useScrollReveal";



const CoursePathways = () => {
  const [sectionRef, isVisible] = useScrollReveal();



  const pathways = [
    {
      title: "Certifications",
      tags: ["CCNA", "CompTIA"],
      desc: "Accelerated industry programs for immediate impact.",
      icon: <Globe size={28} />,
      color: "bg-[#002147]",
    },
    {
      title: "Diplomas",
      tags: ["HNDIT", "BIT"],
      desc: "Structured academic excellence bridging the gap.",
      icon: <GraduationCap size={28} />,
      color: "bg-blue-800",
    },
    {
      title: "After A/L",
      tags: ["Foundation", "CS"],
      desc: "Start your journey right after school with experts.",
      icon: <Zap size={28} />,
      color: "bg-[#003366]",
    },
    {
      title: "AL ICT Classes",
      tags: ["Local", "Cambridge"],
      desc: "Master the syllabus with highest-ranked instructors.",
      icon: <BookOpen size={28} />,
      color: "bg-blue-900",
    },
  ];

  return (
    <section ref={sectionRef} className="py-18 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="">
          <ShineBadge className="mb-4">
            Upcoming Intakes — 2026
          </ShineBadge>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white  leading-tight mb-4">
            Find the Right{" "}
            <span className="text-[#002147] dark:text-blue-400">
              IT Course
            </span>{" "}
            for Your Future
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            From school leavers to working professionals — IVTC offers IT diplomas, certifications, and degree programs to help you build a successful career in Sri Lanka and beyond.
          </p>
        </header>

        <div className="pathway-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((item, i) => (
            <div
              key={i}
              className={`pathway-card group relative h-[420px] bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] will-change-transform opacity-0 ${isVisible ? 'animate-hero-fade-up' : ''}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Background Glow */}
              <div
                className={`bg-shape absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-10 dark:opacity-20 transition-all duration-500 group-hover:scale-[2] group-hover:rotate-45 group-hover:opacity-30 animate-float ${item.color}`}
                style={{ animationDelay: `${i * 300}ms` }}
              />

              <div className="relative z-10">
                <div className="icon-wrapper w-14 h-14 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#002147] dark:text-blue-400 mb-8 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.1)] group-hover:bg-[#002147] group-hover:text-white">
                  {item.icon}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <ShineBadge
                      key={tag}
                      className="text-[9px] px-2 py-0.5 font-bold uppercase"
                    >
                      {tag}
                    </ShineBadge>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white text-xs font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  EXPLORE PATH{" "}
                  <ArrowRight size={14} className="text-[#002147] dark:text-blue-400" />
                </span>
                <span className="text-4xl font-black text-slate-900/5 dark:text-white/5 italic ">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePathways;
