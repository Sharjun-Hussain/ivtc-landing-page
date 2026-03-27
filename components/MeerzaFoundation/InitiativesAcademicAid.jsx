"use client";

import React, { useRef, useMemo, useCallback } from "react";
import { FileText, PenTool, BookOpen, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const ACADEMIC_OFFERS = [
  {
    id: "books",
    title: "Free Books & Stationery",
    desc: "Essential academic supplies for students in need. We provide textbooks, notebooks, and writing tools to ensure no student is left behind.",
    icon: PenTool,
    action: "Apply for Support",
  },
  {
    id: "quran-req",
    title: "Free Quran Request",
    desc: "A special initiative for Muslim students who need a copy of the Holy Quran for their studies and spiritual growth.",
    icon: BookOpen,
    action: "Request a Copy",
  },
];

const InitiativesAcademicAid = () => {
  const formRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const supportTypeRef = useRef(null);
  const districtRef = useRef(null);
  const phoneRef = useRef(null);

  const offers = useMemo(() => ACADEMIC_OFFERS, []);

  const handleApply = useCallback((title) => {
    if (supportTypeRef.current) {
      supportTypeRef.current.value = title;
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const payload = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      supportType: supportTypeRef.current?.value,
      district: districtRef.current?.value,
      phone: phoneRef.current?.value,
    };
    console.log("Submitting Application:", payload);
    // Add validation and API call here
  }, []);

  return (
    <section id="academic-aid" className="py-24 border-b border-slate-100 dark:border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
              Student Academic Aid
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              We believe financial barriers should never stop a student from learning. 
              Apply below for free textbooks, stationery, or a personal copy of the Holy Quran.
            </p>
          </ScrollReveal>
          
          <div className="grid gap-6">
            {offers.map((offer, idx) => (
              <ScrollReveal key={offer.id} animationClass="animate-fade-in" options={{ delay: idx * 0.1 }}>
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-[#002147]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center text-[#002147] dark:text-[#00529b] shadow-sm">
                      <offer.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{offer.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{offer.desc}</p>
                      <button 
                        onClick={() => handleApply(offer.title)}
                        className="text-xs font-bold uppercase text-[#002147] dark:text-[#00529b] flex items-center gap-2 hover:gap-3 transition-all outline-none"
                      >
                        {offer.action} <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* APPLICATION FORM */}
        <ScrollReveal animationClass="animate-slide-up">
          <div ref={formRef} className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-2xl">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <FileText size={20} className="text-[#002147] dark:text-[#00529b]" /> Application Form
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-slate-500">First Name</label>
                  <input 
                    ref={firstNameRef}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all"
                    placeholder="Abdullah" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-slate-500">Last Name</label>
                  <input 
                    ref={lastNameRef}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all" 
                    placeholder="Ahmed" 
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-semibold text-slate-500">Support Needed</label>
                <select 
                  ref={supportTypeRef}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all"
                >
                  <option value="">Select Option...</option>
                  <option value="Free Books & Stationery">Free Books & Stationery</option>
                  <option value="Free Quran Request">Free Quran Request</option>
                </select>
              </div>

              <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-slate-500">District / City</label>
                  <input 
                    ref={districtRef}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all" 
                    placeholder="Colombo" 
                  />
              </div>

              <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-slate-500">WhatsApp Number</label>
                  <input 
                    ref={phoneRef}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all" 
                    placeholder="+94 7..." 
                  />
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-[#002147] dark:bg-[#003a6e] text-white font-semibold text-sm uppercase hover:shadow-lg transition-all mt-4">
                Submit Application
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InitiativesAcademicAid;
