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
    <section id="quran-academy" className="py-24 border-b border-slate-100 dark:border-white/5">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
          Free Online Quran Classes
        </h2>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          "The best of you are those who learn the Quran and teach it." <br/>
          Join our expert-led classes, completely free of charge, tailored for all ages and genders.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {courses.map((course, idx) => (
          <ScrollReveal key={course.id} animationClass="animate-fade-in" options={{ delay: idx * 0.1 }}>
            <div className="group relative p-8 rounded-[2rem] bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 hover:border-[#002147]/30 hover:shadow-xl transition-all h-full flex flex-col">
              <div className={`inline-flex p-3 rounded-xl mb-6 ${course.color} w-fit`}>
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{course.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">{course.desc}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {course.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <CheckCircle size={14} className="text-green-500" /> {feat}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-xs uppercase group-hover:bg-[#002147] dark:group-hover:bg-[#003a6e] group-hover:text-white transition-all">
                Register Now
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="bg-[#002147]/5 dark:bg-[#002147]/10 border border-[#002147]/10 dark:border-[#002147]/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                 Commitment to Learning
               </h3>
               <ul className="space-y-3">
                 {rules.map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                     <ShieldCheck size={18} className="text-[#002147] dark:text-[#00529b] shrink-0" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="text-center md:text-right">
               <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Have Questions?</p>
               <p className="text-slate-500 mb-6">Contact our coordinator directly.</p>
               <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-black rounded-xl border border-slate-200 dark:border-white/10 shadow-sm shadow-[#002147]/5">
                  <MessageCircle size={20} className="text-green-500" />
                  <span className=" font-semibold text-slate-900 dark:text-white">+94 71 541 9807</span>
               </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default InitiativesQuranAcademy;
