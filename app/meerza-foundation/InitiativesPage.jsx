"use client";

import React, { useState, useRef } from "react";
import {
  BookOpen,
  Download,
  HeartHandshake,
  Users,
  CheckCircle,
  FileText,
  MessageCircle,
  Library,
  PenTool,
  ArrowRight,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/Animations/ScrollReveal";

// --- DATA: ACADEMIC AID ---
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

// --- DATA: QURAN ACADEMY ---
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

// --- DATA: DIGITAL LIBRARY ---
const BOOKS = [
  {
    title: "Zakat al-Fitr",
    author: "Shaykh Muhammad Salih",
    size: "1 MB",
    image: "https://placehold.co/300x450/eab308/ffffff?text=Zakat+Book",
  },
  {
    title: "Riyadh As-Saliheen",
    author: "Imam An-Nawawi",
    size: "12.5 MB",
    image: "https://placehold.co/300x450/1e293b/ffffff?text=Riyadh",
  },
  {
    title: "Usool Al-Hadeeth",
    author: "Dr. Bilal Philips",
    size: "3.5 MB",
    image: "https://placehold.co/300x450/94a3b8/ffffff?text=Hadith",
  },
];

const InitiativesPage = () => {
  const [formData, setFormData] = useState({
    firstName: "", 
    lastName: "", 
    dob: "", 
    address: "", 
    addressLine2: "",
    state: "",
    postalCode: "",
    district: "", 
    phone: "", 
    supportType: ""
  });
  
  const formRef = useRef(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-slate-50 dark:bg-[#0d0d0d] border-b border-slate-200 dark:border-white/5">
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002147]/10 dark:bg-[#002147]/20 border border-[#002147]/20 dark:border-[#002147]/30 text-[#002147] dark:text-[#00529b] text-[10px] font-semibold uppercase mb-6 shadow-sm">
            <HeartHandshake size={14} /> Meerza Foundation Initiatives
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 dark:text-white mb-6">
            Knowledge is a Right, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] via-[#003366] to-[#002147] dark:from-[#003a6e] dark:to-[#00529b]">
              Not a Privilege.
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            From free academic supplies to comprehensive Quranic education, we are dedicated to 
            empowering our community through accessible resources.
          </p>
        </ScrollReveal>
      </section>

      {/* --- CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION 1: ACADEMIC AID */}
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
                {ACADEMIC_OFFERS.map((offer, idx) => (
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
                            onClick={() => {
                              setFormData({...formData, supportType: offer.title});
                              formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className="text-xs font-bold uppercase text-[#002147] dark:text-[#00529b] flex items-center gap-2 hover:gap-3 transition-all"
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
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-semibold text-slate-500">First Name</label>
                      <input 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all"
                        placeholder="Abdullah" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-semibold text-slate-500">Last Name</label>
                      <input 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all" 
                        placeholder="Ahmed" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-semibold text-slate-500">Support Needed</label>
                    <select 
                      value={formData.supportType}
                      onChange={(e) => setFormData({...formData, supportType: e.target.value})}
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
                        value={formData.district}
                        onChange={(e) => setFormData({...formData, district: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all" 
                        placeholder="Colombo" 
                      />
                  </div>

                  <div className="space-y-1">
                      <label className="text-[10px] uppercase font-semibold text-slate-500">WhatsApp Number</label>
                      <input 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#002147]/20 focus:border-[#002147] outline-none transition-all" 
                        placeholder="+94 7..." 
                      />
                  </div>

                  <button className="w-full py-4 rounded-xl bg-[#002147] dark:bg-[#003a6e] text-white font-semibold text-sm uppercase hover:shadow-lg transition-all mt-4">
                    Submit Application
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SECTION 2: QURAN ACADEMY */}
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
            {COURSES.map((course, idx) => (
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
                     {[
                       "90% Attendance required for continued support.",
                       "Uninformed absences may lead to slot cancellation.",
                       "Totally free opportunity - treat it with value.",
                       "Flexible scheduling to fit your lifestyle."
                     ].map((item, i) => (
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

        {/* SECTION 3: DIGITAL LIBRARY */}
        <section id="digital-library" className="py-24">
          <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Globe size={28} className="text-[#002147] dark:text-[#00529b]" />
                Exclusive eBook Collection
              </h2>
              <p className="text-slate-500">Authentic Islamic knowledge, accessible to everyone, everywhere.</p>
            </div>
            <button className="text-xs font-semibold uppercase text-[#002147] dark:text-[#00529b] border-b border-[#002147]/30 dark:border-[#00529b]/30 pb-1 hover:border-current transition-all">
              View All Categories
            </button>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10">
            {BOOKS.map((book, i) => (
              <ScrollReveal key={i} animationClass="animate-fade-in" options={{ delay: i * 0.1 }}>
                <div className="group bg-white dark:bg-[#111] p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="aspect-3/4 bg-slate-100 dark:bg-black rounded-xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-400 font-semibold text-xl opacity-50">
                       COVER
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="h-10 px-8 bg-[#002147] dark:bg-[#003a6e] text-white rounded-3xl font-semibold text-xs uppercase transform translate-y-4 group-hover:translate-y-0 transition-all">
                            Preview
                        </button>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{book.title}</h3>
                  <p className="text-xs text-slate-500 uppercase mb-4">{book.author}</p>
                  
                  <div className="mt-auto">
                    <button className="w-full py-3 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <Download size={16} /> Download PDF ({book.size})
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default InitiativesPage;
