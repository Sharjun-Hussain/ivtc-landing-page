"use client";

import React, { useMemo } from "react";
import { BookOpen, CheckCircle, ShieldCheck, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const COURSES = [
  {
    id: "boys",
    title: "Quran Classes (Boys)",
    desc: "Dedicated online classes for men & boys of all ages.",
    features: ["Expert Male Instructors", "Flexible Timings", "Tajweed Focus"],
    color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  },
  {
    id: "girls",
    title: "Quran Classes (Girls)",
    desc: "Safe, supportive learning environment for women & girls.",
    features: ["Expert Female Instructors", "Private Sessions", "Flexible Schedule"],
    color: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
  },
  {
    id: "tafseer",
    title: "Tafseer (Interpretation)",
    desc: "Unlock the profound meanings of the Holy Quran.",
    features: ["Open to All", "Deep Understanding", "Spiritual Growth"],
    color: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
  },
];

const InitiativesQuranAcademy = () => {
  const courses = useMemo(() => COURSES, []);
  
  const rules = useMemo(() => [
    "90% Attendance required for continued support.",
    "Uninformed absences may lead to slot cancellation.",
    "Totally free opportunity - treat it with value.",
    "Flexible scheduling to fit your lifestyle."
  ], []);

  return (
    <section id="quran-academy" className="bg-white dark:bg-[#0a0a0a] border-b border-slate-100 dark:border-white/5 overflow-hidden" aria-labelledby="quran-academy-heading">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3">
            <ScrollReveal className="lg:sticky lg:top-32">
              <h2 id="quran-academy-heading" className="text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] text-slate-900 dark:text-white">
                Quranic <br /> Academy.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                "The best of you are those who learn the Quran and teach it." Join our expert-led classes, completely free of charge.
              </p>
            </ScrollReveal>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 space-y-8 md:space-y-12">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {courses.map((course, idx) => (
                <ScrollReveal key={course.id} animationClass="animate-fade-in" options={{ delay: idx * 0.1 }}>
                  <div className="group relative p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 hover:border-[#002147]/30 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    <div className={`inline-flex p-3 md:p-4 rounded-2xl mb-6 md:mb-8 ${course.color} w-fit shadow-sm`}>
                      <BookOpen size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">{course.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed font-medium">{course.desc}</p>
                    
                    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 grow">
                      {course.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-xs font-bold text-slate-500 tracking-wide">
                          <CheckCircle size={14} className="text-green-500 shrink-0" /> {feat}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-xs tracking-wide group-hover:bg-[#002147] dark:group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-[1.02]">
                      Register Now
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Commitment Card */}
            <ScrollReveal>
              <div className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
                  <div>
                     <h3 className="text-3xl md:text-[2.5rem] font-bold text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-tight">
                       Commitment <br /> to Learning.
                     </h3>
                     <ul className="space-y-3 md:space-y-4">
                       {rules.map((item, i) => (
                         <li key={i} className="flex items-start gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                           <ShieldCheck size={18} className="text-[#002147] dark:text-blue-500 shrink-0 mt-0.5" /> {item}
                         </li>
                       ))}
                     </ul>
                  </div>
                  <div className="bg-white dark:bg-black p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-lg text-center lg:text-right">
                     <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">Have Questions?</p>
                     <p className="text-slate-500 text-sm mb-6 md:mb-8 font-medium">Contact our coordinator directly.</p>
                     <div className="inline-flex items-center gap-4 px-6 md:px-8 py-4 bg-[#002147] text-white rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
                        <MessageCircle size={20} className="text-green-400" />
                        <span className="font-bold tracking-wide text-[13px] md:text-sm">+94 71 541 9807</span>
                     </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesQuranAcademy;
