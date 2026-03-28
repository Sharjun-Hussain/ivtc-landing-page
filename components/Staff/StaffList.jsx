"use client";

import React from "react";
import { GraduationCap, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

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

const StaffList = () => {
  return (
    <section id="faculty" className="py-16 md:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Expert Faculty Team</h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed">
              A diverse team of industry experts committed to delivering practical knowledge and academic rigor.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FACULTY_DATA.map((staff, idx) => (
            <ScrollReveal key={idx} animationClass="animate-fade-in" options={{ delay: (idx % 3) * 0.1 }}>
              <div
                className="group bg-slate-50 dark:bg-[#111] p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:border-[#002147]/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                {/* Profile Image & Arrow */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white dark:border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:bg-[#002147] group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 relative z-10">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors">
                    {staff.name}
                  </h4>
                  <p className="text-xs font-normal text-slate-400 dark:text-slate-500 tracking-wide mb-4">
                    {staff.role}
                  </p>
                  
                  {/* Qualification */}
                  <div className="flex items-start gap-2 mb-6">
                     <GraduationCap size={16} className="text-[#002147] dark:text-blue-400 shrink-0 mt-0.5" />
                     <p className="text-[11px] leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                        {staff.qual}
                     </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-end relative z-10">
                  <div className="flex gap-4">
                    <Linkedin size={18} className="text-slate-400 hover:text-[#002147] dark:hover:text-blue-400 cursor-pointer transition-colors" />
                    <Mail size={18} className="text-slate-400 hover:text-[#002147] dark:hover:text-blue-400 cursor-pointer transition-colors" />
                  </div>
                </div>

                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-transparent to-[#002147]/0 group-hover:to-[#002147]/5 dark:group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffList;
