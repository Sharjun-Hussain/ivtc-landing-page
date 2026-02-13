"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  UserCheck,
  Laptop,
  Shield,
  HeartHandshake,
  Wifi,
  CreditCard,
  FileCheck,
  LifeBuoy,
  AlertTriangle,
  Search,
  ChevronDown,
  FileText,
  Download,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- ENHANCED DATA WITH CATEGORIES ---
const POLICIES = [
  {
    id: 1,
    category: "Academic",
    title: "Academic Policies",
    icon: BookOpen,
    content: [
      "Students must maintain a minimum attendance percentage to be eligible for assessments.",
      "Assignments and projects must be submitted by the given deadlines to avoid penalties.",
      "Grading criteria will be based on coursework, quizzes, projects, and final exams.",
    ],
  },
  {
    id: 2,
    category: "Conduct",
    title: "Code of Conduct",
    icon: UserCheck,
    content: [
      "All students must maintain professional and respectful behavior in online and offline interactions.",
      "Harassment, discrimination, and any form of misconduct will lead to disciplinary action.",
      "Disruptive behavior in online sessions is strictly prohibited.",
    ],
  },
  {
    id: 3,
    category: "Academic",
    title: "Online Learning Guidelines",
    icon: Laptop,
    content: [
      "Students must log in with their assigned credentials for attending online classes.",
      "Class recordings are strictly for educational purposes and should not be shared without permission.",
      "Participants should mute their microphones when not speaking.",
    ],
  },
  {
    id: 4,
    category: "Admin",
    title: "Privacy & Data Protection",
    icon: Shield,
    content: [
      "All personal and academic information provided to IVTC is securely stored and protected.",
      "No student data will be shared with third parties without explicit consent.",
      "Unauthorized access or sharing of another student's data is strictly prohibited.",
    ],
  },
  {
    id: 5,
    category: "Conduct",
    title: "Anti-Harassment & Discrimination",
    icon: HeartHandshake,
    content: [
      "IVTC maintains a zero-tolerance policy against any form of bullying, harassment, or discrimination.",
      "Complaints regarding harassment will be taken seriously and investigated thoroughly.",
      "Any violation will result in strict disciplinary action, including possible suspension.",
    ],
  },
  {
    id: 6,
    category: "Conduct",
    title: "IT & Digital Usage Policies",
    icon: Wifi,
    content: [
      "Students must use official IVTC platforms for communication and coursework submissions.",
      "Misuse of digital platforms, including hacking attempts, will lead to disciplinary action.",
      "Any form of cyberbullying or inappropriate digital behavior is strictly forbidden.",
    ],
  },
  {
    id: 7,
    category: "Admin",
    title: "Fee & Refund Policies",
    icon: CreditCard,
    content: [
      "Tuition fees must be paid according to the schedule provided at the time of admission.",
      "Late payments may result in penalties or suspension from academic activities.",
      "Refunds will be processed only if the student withdraws within the specified refund period.",
    ],
  },
  {
    id: 8,
    category: "Academic",
    title: "Examination & Certification",
    icon: FileCheck,
    content: [
      "Students must follow all exam guidelines, including submission deadlines and format requirements.",
      "Any form of cheating or malpractice in assessments will lead to immediate disciplinary action.",
      "Certificates issued by IVTC can be validated through the official verification portal.",
    ],
  },
  {
    id: 9,
    category: "Admin",
    title: "Student Support & Grievance",
    icon: LifeBuoy,
    content: [
      "Students facing academic or administrative issues can contact the support team through the LMS.",
      "A student grievance committee will handle disputes and provide fair resolutions.",
      "Anonymous reporting options are available for sensitive matters.",
    ],
  },
  {
    id: 10,
    category: "Academic",
    title: "Plagiarism & Academic Integrity",
    icon: AlertTriangle,
    content: [
      "Plagiarism, including using AI-generated content without acknowledgment, is strictly prohibited.",
      "Students must properly cite all sources used in their research and assignments.",
      "Repeated violations of academic integrity may result in course failure or suspension.",
    ],
  },
];

const CATEGORIES = ["All", "Academic", "Conduct", "Admin"];

// --- HELPER: SEARCH HIGHLIGHTER ---
const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="bg-amber-500/30 text-amber-700 dark:text-amber-400 font-bold px-0.5 rounded">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

const CampusPoliciesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openPolicy, setOpenPolicy] = useState(null);
  const [helpfulState, setHelpfulState] = useState({}); // Stores feedback status
  const pageRef = useRef(null);

  // Filter Logic
  const filteredPolicies = useMemo(() => {
    return POLICIES.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.content.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Handle Feedback Click
  const handleFeedback = (id, type) => {
    setHelpfulState((prev) => ({ ...prev, [id]: type }));
  };

  // Animation
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const ctx = gsap.context(() => {
      // Animate list items when category changes
      gsap.fromTo(
        ".policy-card",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, clearProps: "all" }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [selectedCategory, searchQuery]); // Re-run on filter change

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors relative"
    >
      {/* --- FLOATING SUPPORT WIDGET --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="h-14 w-14 rounded-full bg-slate-900 dark:bg-amber-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative">
          <MessageCircle size={24} />
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Need clarification?
          </span>
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-10 bg-slate-50 dark:bg-[#0d0d0d] border-b border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Policies</span>
          </h1>
          
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto mb-8 group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-600 transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text"
              placeholder="Search policies (e.g., 'Exam', 'Refund')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-12 rounded-2xl bg-white dark:bg-[#151515] border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-black/50 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-slate-900 dark:text-white font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border",
                  selectedCategory === cat
                    ? "bg-slate-900 dark:bg-amber-600 text-white border-transparent shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- POLICIES LIST --- */}
      <section className="py-12 md:py-20 max-w-3xl mx-auto px-6 min-h-[60vh]">
        <div className="space-y-4">
          {filteredPolicies.length > 0 ? (
            filteredPolicies.map((policy) => {
              const isOpen = openPolicy === policy.id;
              const feedback = helpfulState[policy.id]; // 'yes' or 'no'

              return (
                <div
                  key={policy.id}
                  className={cn(
                    "policy-card group bg-white dark:bg-[#111] border rounded-2xl overflow-hidden transition-all duration-300",
                    isOpen 
                      ? "border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/20" 
                      : "border-slate-200 dark:border-white/5 hover:border-amber-500/30 hover:shadow-md"
                  )}
                >
                  {/* Header */}
                  <div 
                    onClick={() => setOpenPolicy(isOpen ? null : policy.id)}
                    className="p-5 md:p-6 flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={cn(
                        "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                        isOpen ? "bg-amber-600 text-white" : "bg-slate-50 dark:bg-white/5 text-slate-400 group-hover:text-amber-600"
                      )}>
                        <policy.icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className={cn(
                          "text-lg md:text-xl font-bold transition-colors",
                          isOpen ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"
                        )}>
                          <HighlightText text={policy.title} highlight={searchQuery} />
                        </h3>
                        {/* Mobile Category Tag */}
                        <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          {policy.category}
                        </span>
                      </div>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={cn(
                        "text-slate-400 transition-transform duration-300",
                        isOpen && "rotate-180 text-amber-600"
                      )} 
                    />
                  </div>

                  {/* Content (Accordion Body) */}
                  <div 
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 md:px-20 md:pb-8 pt-0">
                        <ul className="space-y-3 mb-8">
                          {policy.content.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0" />
                              <HighlightText text={point} highlight={searchQuery} />
                            </li>
                          ))}
                        </ul>

                        {/* Interactive Footer: Was this helpful? */}
                        <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Was this helpful?
                          </span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleFeedback(policy.id, "yes")}
                              className={cn(
                                "p-2 rounded-lg transition-all flex items-center gap-2 text-xs font-bold",
                                feedback === "yes" 
                                  ? "bg-green-100 dark:bg-green-900/20 text-green-600" 
                                  : "hover:bg-slate-50 dark:hover:bg-white/5 text-slate-400"
                              )}
                            >
                              <ThumbsUp size={16} /> Yes
                            </button>
                            <button
                              onClick={() => handleFeedback(policy.id, "no")}
                              className={cn(
                                "p-2 rounded-lg transition-all flex items-center gap-2 text-xs font-bold",
                                feedback === "no" 
                                  ? "bg-red-100 dark:bg-red-900/20 text-red-600" 
                                  : "hover:bg-slate-50 dark:hover:bg-white/5 text-slate-400"
                              )}
                            >
                              <ThumbsDown size={16} /> No
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            // No Results State
            <div className="text-center py-20 opacity-50 flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Search size={24} />
              </div>
              <p className="text-lg font-bold">No policies found for "{searchQuery}"</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4 text-amber-600 font-bold text-sm hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Download Footer */}
        <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-amber-600 transition-colors border border-slate-200 dark:border-white/10 px-6 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5">
                <Download size={16} /> Download Policy PDF
            </button>
        </div>
      </section>
    </div>
  );
};

export default CampusPoliciesPage;
