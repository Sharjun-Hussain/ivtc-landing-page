"use client";

import React from "react";
import {
  Linkedin,
  Mail,
  GraduationCap,
  Users,
  Briefcase,
  ArrowUpRight,
  MoveDown,
} from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

// --- REAL STAFF DATA FROM PDF ---
const FACULTY_DATA = [
  {
    name: "A.M. Jahan",
    role: "Cyber Security Researcher",
    qual: "M.Sc Sp in Cyber Security, B.ICT(Hons), Dip in Digital Forensics",
    image: "https://ui-avatars.com/api/?name=A+M+Jahan&background=0D8ABC&color=fff",
  },
  {
    name: "A. Ramees",
    role: "Government Auditor",
    qual: "MBA (SEUSL), B.com (Spl. in Accounting)",
    image: "https://ui-avatars.com/api/?name=A+Ramees&background=333&color=fff",
  },
  {
    name: "M.S.M. Imthiyas",
    role: "Assistant Registrar (SEUSL)",
    qual: "MBA (R), BBA (Hons), Cert in BA (CIMA)",
    image: "https://ui-avatars.com/api/?name=M+S+M+Imthiyas&background=0D8ABC&color=fff",
  },
  {
    name: "J.S.A.M. Shihab",
    role: "Engineering Lecturer",
    qual: "B.Sc (Hons) in Engineering (UoM)",
    image: "https://ui-avatars.com/api/?name=J+S+A+M+Shihab&background=333&color=fff",
  },
  {
    name: "Zeenath Abuthalib",
    role: "Digital Forensic Reporter",
    qual: "B.Sc (Hons) Cyber Security & Digital Forensic (Kingston UK)",
    image: "https://ui-avatars.com/api/?name=Zeenath+Abuthalib&background=0D8ABC&color=fff",
  },
  {
    name: "Mizna Muzammil",
    role: "AI Lecturer",
    qual: "BS Artificial Intelligence (Pak-Austria Fachhochschule)",
    image: "https://ui-avatars.com/api/?name=Mizna+Muzammil&background=333&color=fff",
  },
  {
    name: "Hana Ziyard",
    role: "Law Lecturer",
    qual: "LL.B (UG), Faculty of Law, University of Colombo",
    image: "https://ui-avatars.com/api/?name=Hana+Ziyard&background=0D8ABC&color=fff",
  },
  {
    name: "Lacksika Sivaskaran",
    role: "AI Lecturer",
    qual: "BS Artificial Intelligence (Pak-Austria Fachhochschule)",
    image: "https://ui-avatars.com/api/?name=Lacksika+Sivaskaran&background=333&color=fff",
  },
  {
    name: "Nivashinie Mathiwaran",
    role: "Media & Comm. Lecturer",
    qual: "B.Des (Hons) Sp. in Media and Communication (UG)",
    image: "https://ui-avatars.com/api/?name=Nivashinie+Mathiwaran&background=0D8ABC&color=fff",
  },
  {
    name: "Niranjala Ravichandran",
    role: "Network & Security Lecturer",
    qual: "B.Sc (Hons) Computer Networks and Cyber Security",
    image: "https://ui-avatars.com/api/?name=Niranjala+Ravichandran&background=333&color=fff",
  },
  {
    name: "Victor Fowstheena",
    role: "CS Lecturer",
    qual: "B.Sc (Hons) Computer Science",
    image: "https://ui-avatars.com/api/?name=Victor+Fowstheena&background=0D8ABC&color=fff",
  },
  {
    name: "Nadarajah Lucshini",
    role: "IT Lecturer",
    qual: "B.Sc IT",
    image: "https://ui-avatars.com/api/?name=Nadarajah+Lucshini&background=333&color=fff",
  },
  {
    name: "Fathima Ashfa",
    role: "Graphics Designer",
    qual: "Professional Graphics Designer",
    image: "https://ui-avatars.com/api/?name=Fathima+Ashfa&background=0D8ABC&color=fff",
  },
  {
    name: "M.I. Aseena",
    role: "Lecturer (English)",
    qual: "Master in Education, B.A, PGD in Education, HND in English",
    image: "https://ui-avatars.com/api/?name=M+I+Aseena&background=333&color=fff",
  },
];

const StaffPage = () => {
  return (
    <div
      className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors"
    >
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden border-b border-slate-100 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#002147]/5 dark:bg-[#002147]/10 blur-[120px] rounded-full" />

        <ScrollReveal className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002147]/5 dark:bg-[#002147]/10 border border-[#002147]/10 dark:border-[#002147]/20 text-[#002147] text-[10px] font-black uppercase mb-8">
            <Users size={14} /> World-Class Faculty
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] mb-8">
            Meet Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-blue-900">
               IT Trainers.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Learn from experts who have real-world experience. Our team is here to help you gain the skills you need for a successful future.
          </p>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
            <MoveDown size={24} />
          </div>
        </ScrollReveal>
      </section>

      {/* --- 2. ACADEMIC FACULTY GRID --- */}
      <section className="py-20 bg-slate-50 dark:bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="text-[#002147] dark:text-[#003a6e] uppercase text-xs mb-4 font-bold">
                / Academics
              </h3>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
                Meet Our Expert Faculty
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm md:text-base">
              A diverse team of industry experts committed to delivering practical
              knowledge and academic rigor.
            </p>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY_DATA.map((staff, idx) => (
              <ScrollReveal key={idx} animationClass="animate-fade-in" options={{ threshold: 0.1 }}>
                <div
                  className="group bg-white dark:bg-[#151515] p-6 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-[#002147]/30 hover:shadow-xl hover:shadow-[#002147]/5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-100 dark:border-white/10">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#002147] group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#002147] transition-colors">
                      {staff.name}
                    </h4>
                    <p className="text-xs font-bold uppercase text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-300 mb-3">
                      {staff.role}
                    </p>
                    
                    {/* Qualification Tag */}
                    <div className="inline-flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 w-full">
                       <GraduationCap size={14} className="text-[#002147] shrink-0 mt-0.5" />
                       <p className="text-[10px] leading-tight font-medium text-slate-500 dark:text-slate-400">
                          {staff.qual}
                       </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span className="flex items-center gap-2">
                      <Users size={14} /> Expert
                    </span>
                    <div className="flex gap-3">
                      <Linkedin size={16} className="hover:text-[#002147] cursor-pointer" />
                      <Mail size={16} className="hover:text-[#002147] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffPage;
