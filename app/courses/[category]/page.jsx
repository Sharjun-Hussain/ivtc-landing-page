"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock,
  BarChart,
  ArrowRight,
  ChevronLeft,
  Star,
  Monitor,
  Cpu,
  ShieldCheck,
  Code2,
  Globe,
} from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Mock Data Store
const CATEGORY_DATA = {
  certifications: {
    title: "Industry Certifications",
    subtitle: "Professional validation for the global tech market.",
    color: "from-blue-400 to-indigo-600",
    courses: [
      {
        id: 1,
        title: "CCNA 200-301",
        duration: "4 Months",
        level: "Intermediate",
        icon: <Globe />,
        rating: 4.9,
        desc: "Master networking fundamentals, IP connectivity, and security basics.",
      },
      {
        id: 2,
        title: "CompTIA Security+",
        duration: "3 Months",
        level: "Beginner",
        icon: <ShieldCheck />,
        rating: 4.8,
        desc: "The baseline for cybersecurity careers. Learn threat detection and risk management.",
      },
      {
        id: 3,
        title: "AWS Cloud Practitioner",
        duration: "2 Months",
        level: "Beginner",
        icon: <Monitor />,
        rating: 4.7,
        desc: "Cloud fundamentals and the AWS global infrastructure.",
      },
    ],
  },
  "al-ict": {
    title: "A/L ICT Mastery",
    subtitle: "Ace your exams with Sri Lanka's top-ranked curriculum.",
    color: "from-cyan-400 to-blue-500",
    courses: [
      {
        id: 4,
        title: "Local Syllabus Revision",
        duration: "6 Months",
        level: "Exam Prep",
        icon: <Code2 />,
        rating: 5.0,
        desc: "Targeted revision focusing on past papers and marking schemes.",
      },
      {
        id: 5,
        title: "Cambridge ICT 9626",
        duration: "1 Year",
        level: "Advanced",
        icon: <Cpu />,
        rating: 4.9,
        desc: "Comprehensive coverage of IT systems, databases, and sound/video editing.",
      },
    ],
  },
  // Add other categories...
};

const CourseListingPage = () => {
  const params = useParams();
  const categoryKey = params.category || "certifications";
  const data = useMemo(
    () => CATEGORY_DATA[categoryKey] || CATEGORY_DATA.certifications,
    [categoryKey],
  );

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Header
      gsap.from(".header-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Course Cards Stagger
      gsap.from(".course-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".course-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [categoryKey]);

  return (
    <main
      ref={sectionRef}
      className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      {/* Background Decorative Element */}
      <div
        className={`fixed top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 dark:opacity-20 pointer-events-none bg-gradient-to-br ${data.color}`}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        {/* Navigation Breadcrumb */}
        <Link
          href="/pathways"
          className="header-anim inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors mb-12 text-sm font-bold uppercase tracking-widest"
        >
          <ChevronLeft size={16} /> Back to Pathways
        </Link>

        {/* Dynamic Header */}
        <header className="mb-20">
          <h3 className="header-anim text-blue-500 dark:text-slate-400 font-mono tracking-widest uppercase text-xs mb-4">
            / Course Catalog
          </h3>
          <h1 className="header-anim text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tighter mb-6">
            Explore{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${data.color}`}
            >
              {data.title}
            </span>
          </h1>
          <p className="header-anim text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </header>

        {/* Course Grid */}
        <div className="course-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.courses.map((course) => (
            <div
              key={course.id}
              className="course-card group relative bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-8 flex flex-col h-full transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Icon & Rating */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-blue-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {React.cloneElement(course.icon, { size: 28 })}
                </div>
                <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 dark:text-yellow-500 px-3 py-1 rounded-full text-xs font-black">
                  <Star size={12} fill="currentColor" /> {course.rating}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <Clock size={12} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <BarChart size={12} /> {course.level}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                  {course.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  {course.desc}
                </p>
              </div>

              {/* Action */}
              <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white">
                ENROLL NOW <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CourseListingPage;
