"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Youtube, 
  Download, 
  Calendar, 
  ChevronRight, 
  Video, 
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ShineBadge from "@/components/ui/ShineBadge";
import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const ALICTPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const resources = [
    { title: "Introduction to ICT", category: "notes", year: "2026", topic: "Fundamentals" },
    { title: "Computer Architecture", category: "notes", year: "2026", topic: "Hardwares" },
    { title: "Operating Systems", category: "videos", year: "2025", topic: "Software" },
    { title: "Data Communications", category: "notes", year: "2025", topic: "Networking" },
    { title: "Database Management", category: "videos", year: "2025", topic: "Data" },
    { title: "Programming (Python)", category: "notes", year: "2025", topic: "Logic" },
  ];

  const filteredResources = activeTab === "all" 
    ? resources 
    : resources.filter(res => res.category === activeTab);

  return (
    <main className="min-h-screen bg-transparent pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <ScrollReveal className="text-center mb-24">
           <ShineBadge className="mb-6">
            <Sparkles size={16} className="text-[#002147] dark:text-blue-400" />
            Everything for A/L ICT
          </ShineBadge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white">
            A/L ICT <span className="text-transparent bg-clip-text bg-linear-to-r from-[#002147] to-blue-600">Resources Hub</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Free high-quality notes, video sessions, and past paper updates. Simple and clear resources designed for Sri Lankan A/L students to score an 'A'.
          </p>
        </ScrollReveal>

        {/* --- RESOURCE CENTER --- */}
        <section>
          <ScrollReveal className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <BookOpen className="text-[#002147] dark:text-blue-400" />
              <h2 className="text-3xl font-bold">Learning Materials</h2>
            </div>
            
            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-white/5 rounded-full">
              {["all", "notes", "videos"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                    activeTab === tab 
                      ? "bg-[#002147] text-white" 
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((res, i) => (
              <ScrollReveal key={i} animationClass="animate-fade-in" options={{ threshold: 0.1 }}>
                <div className="group relative bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 hover:shadow-2xl transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    {res.category === "notes" ? (
                      <FileText className="text-slate-200 dark:text-white/10" size={64} />
                    ) : (
                      <Youtube className="text-slate-200 dark:text-white/10" size={64} />
                    )}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-[10px] font-bold text-slate-500 uppercase">
                        {res.topic}
                      </div>
                      <div className="px-3 py-1 rounded-full bg-blue-500/10 text-[10px] font-bold text-blue-600 uppercase">
                        Year {res.year}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{res.title}</h3>
                    
                    {res.category === "notes" ? (
                      <Button className="w-full h-12 px-12! rounded-3xl bg-[#002147] text-white hover:bg-blue-900 font-bold text-lg gap-2 flex items-center justify-center">
                        <Download size={20} /> Download PDF
                      </Button>
                    ) : (
                      <Button className="w-full h-12 px-12! rounded-3xl bg-[#002147] text-white hover:bg-blue-900 font-bold text-lg gap-2 flex items-center justify-center">
                        <Video size={20} /> Watch Session
                      </Button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* --- YEARLY ARCHIVES --- */}
        <section className="mt-32">
          <ScrollReveal className="flex items-center gap-3 mb-10">
            <Calendar className="text-[#002147] dark:text-blue-400" />
            <h2 className="text-3xl font-bold">Yearly Resource Archives</h2>
          </ScrollReveal>
          
          <ScrollReveal className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-white/5">
                    <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase">Target Year</th>
                    <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase">Resources Available</th>
                    <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase">Last Updated</th>
                    <th className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {[2026, 2025, 2024].map((year) => (
                    <tr key={year} className="hover:bg-slate-50 dark:hover:bg-white/2 transition-colors">
                      <td className="px-8 py-6">
                        <span className="text-lg font-bold">AL {year} Batch</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex gap-2">
                          <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-600 text-[10px] font-bold uppercase">Theory</span>
                          <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-600 text-[10px] font-bold uppercase">Revision</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm text-slate-500">February 28, 2026</td>
                      <td className="px-8 py-6 text-right">
                        <Button variant="ghost" className="text-blue-600 hover:text-blue-700 font-bold gap-2">
                          Access Files <ChevronRight size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
};

export default ALICTPage;
