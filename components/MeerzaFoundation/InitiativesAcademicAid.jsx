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
    pill: "Academic Support"
  },
  {
    id: "quran-req",
    title: "Free Quran Request",
    desc: "A special initiative for Muslim students who need a copy of the Holy Quran for their studies and spiritual growth.",
    icon: BookOpen,
    action: "Request a Copy",
    pill: "Spiritual Growth"
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
  }, []);

  return (
    <section id="academic-aid" className="bg-white dark:bg-[#0a0a0a] border-b border-slate-100 dark:border-white/5 overflow-hidden" aria-labelledby="academic-aid-heading">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3">
            <ScrollReveal className="lg:sticky lg:top-32">
              <h2 id="academic-aid-heading" className="text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] text-slate-900 dark:text-white">
                Academic <br /> Foundation.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                We believe financial barriers should never stop a student from learning. Our foundation provides the essential tools needed for educational success.
              </p>
            </ScrollReveal>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 space-y-8 md:space-y-12">
            
            {/* Offers Grid */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {offers.map((offer, idx) => (
                <ScrollReveal key={offer.id} animationClass="animate-fade-in" options={{ delay: idx * 0.1 }}>
                  <div className="group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#111] hover:border-[#002147]/30 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    <div className="relative mb-6 md:mb-8 w-12 h-12 md:w-14 md:h-14">
                      <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white dark:bg-white/5 shadow-sm border border-slate-100 dark:border-white/10 flex items-center justify-center text-[#002147] dark:text-blue-400">
                        <offer.icon size={24} />
                      </div>
                    </div>
                    
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4 md:mb-6 w-fit">
                      {offer.pill}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 leading-tight group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed font-medium grow">
                      {offer.desc}
                    </p>
                    <button 
                      onClick={() => handleApply(offer.title)}
                      className="text-xs font-bold text-[#002147] dark:text-blue-400 flex items-center gap-2 group/btn transition-all"
                    >
                      {offer.action} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Application Form Card */}
            <ScrollReveal animationClass="animate-slide-up">
              <div ref={formRef} className="bg-[#002147] dark:bg-blue-950/40 text-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                <FileText className="absolute -right-16 -bottom-16 w-80 h-80 text-white/5 dark:text-blue-500/5 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-1000" />
                
                <div className="relative z-10 w-full">
                  <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-8 md:mb-10 tracking-tight flex items-center gap-4">
                    Application Form.
                  </h3>
                  <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-blue-300">First Name</label>
                        <input 
                          ref={firstNameRef}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white/20"
                          placeholder="Abdullah" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-blue-300">Last Name</label>
                        <input 
                          ref={lastNameRef}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white/20" 
                          placeholder="Ahmed" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-blue-300">Support Needed</label>
                      <select 
                        ref={supportTypeRef}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#002147]">Select Option...</option>
                        <option value="Free Books & Stationery" className="bg-[#002147]">Free Books & Stationery</option>
                        <option value="Free Quran Request" className="bg-[#002147]">Free Quran Request</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-blue-300">District / City</label>
                          <input 
                            ref={districtRef}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white/20" 
                            placeholder="Colombo" 
                          />
                      </div>

                      <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-blue-300">WhatsApp Number</label>
                          <input 
                            ref={phoneRef}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-white/20" 
                            placeholder="+94 7..." 
                          />
                      </div>
                    </div>

                    <button type="submit" className="w-full py-5 rounded-2xl bg-white text-[#002147] font-bold text-sm tracking-wide hover:bg-blue-50 transform hover:scale-[1.02] active:scale-95 transition-all mt-6 shadow-2xl">
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesAcademicAid;
