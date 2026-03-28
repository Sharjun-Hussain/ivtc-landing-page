"use client";

import { FileText, Youtube, Download, Video, BookOpen, ArrowRight, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";
import { useMemo, useState } from "react";

const RESOURCES = [
  { title: "Introduction to ICT", category: "notes", year: "2026", topic: "Fundamentals" },
  { title: "Computer Architecture", category: "notes", year: "2026", topic: "Hardwares" },
  { title: "Operating Systems", category: "videos", year: "2025", topic: "Software" },
  { title: "Data Communications", category: "notes", year: "2025", topic: "Networking" },
  { title: "Database Management", category: "videos", year: "2025", topic: "Data" },
  { title: "Programming (Python)", category: "notes", year: "2025", topic: "Logic" },
];

const ALICTResources = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedBatch, setSelectedBatch] = useState("all");

  const batches = useMemo(() => {
    const years = [...new Set(RESOURCES.map(res => res.year))].sort((a, b) => b - a);
    return ["all", ...years.map(String)];
  }, []);

  const filteredResources = useMemo(() => {
    return RESOURCES.filter(res => {
      const categoryMatch = activeTab === "all" || res.category === activeTab;
      const batchMatch = selectedBatch === "all" || res.year === selectedBatch;
      return categoryMatch && batchMatch;
    });
  }, [activeTab, selectedBatch]);

  return (
    <section id="resources" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#002147]/10 dark:bg-blue-500/10 flex items-center justify-center text-[#002147] dark:text-blue-400">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Learning Materials</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex gap-1 p-1 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 w-full sm:w-auto">
              {["all", "notes", "videos"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-none px-6 md:px-8 py-2.5 rounded-xl text-xs md:text-[13px] font-bold tracking-wide transition-all ${
                    activeTab === tab 
                      ? "bg-[#002147] dark:bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-auto min-w-[140px]">
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-3 rounded-2xl text-xs md:text-[13px] font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#002147]/20 dark:focus:ring-blue-500/20 transition-all cursor-pointer"
              >
                {batches.map((batch) => (
                  <option key={batch} value={batch} className="bg-white dark:bg-[#111]">
                    {batch === "all" ? "All Batches" : `AL ${batch} Batch`}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredResources.map((res, i) => (
              <ScrollReveal key={i} animationClass="animate-fade-in" options={{ delay: i * 0.1 }}>
                <div className="group bg-white dark:bg-[#111] p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:border-[#002147]/30 hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-slate-100 dark:bg-white/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="px-3 py-1 rounded-full bg-blue-500/10 text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-wide border border-blue-500/20">
                        Batch {res.year}
                      </div>
                    </div>
                    
                    <div className="mb-8 w-14 h-14 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors">
                      {res.category === "notes" ? <FileText size={26} /> : <Youtube size={26} />}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-all leading-tight">
                      {res.title}
                    </h3>
                    
                    <div className="mt-auto pt-8">
                      {res.category === "notes" ? (
                        <button className="w-full py-4 rounded-xl bg-[#002147] dark:bg-blue-600 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/10 group-hover:scale-[1.02] active:scale-95">
                          <Download size={18} /> Download File
                        </button>
                      ) : (
                        <button className="w-full py-4 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group-hover:scale-[1.02] active:scale-95">
                          <Video size={18} /> Watch Session
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal className="py-24 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-50 dark:bg-white/5 text-slate-300 dark:text-slate-600 mb-6">
              <BookOpen size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Resources Found</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              We couldn't find any materials matching your current filters. Try selecting a different batch or category.
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default ALICTResources;
