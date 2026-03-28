"use client";

import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const ARCHIVES = [
  { year: 2026, status: ["Theory", "Revision"], updated: "Feb 28, 2026" },
  { year: 2025, status: ["Theory", "Revision"], updated: "Jan 15, 2026" },
  { year: 2024, status: ["Completion"], updated: "Dec 20, 2025" },
];

const ALICTArchives = () => {
  return (
    <section id="archives" className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#002147]/10 dark:bg-blue-500/10 flex items-center justify-center text-[#002147] dark:text-blue-400">
            <Calendar size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Yearly Batch Archives</h2>
        </ScrollReveal>
        
        <ScrollReveal className="bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/2">
                  <th className="px-10 py-6 text-xs font-bold text-slate-400 tracking-wide">Target Year</th>
                  <th className="px-10 py-6 text-xs font-bold text-slate-400 tracking-wide">Resources Available</th>
                  <th className="px-10 py-6 text-xs font-bold text-slate-400 tracking-wide">Last Updated</th>
                  <th className="px-10 py-6 text-xs font-bold text-slate-400 tracking-wide text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {ARCHIVES.map((item) => (
                  <tr key={item.year} className="group hover:bg-slate-50 dark:hover:bg-white/2 transition-colors">
                    <td className="px-10 py-8">
                      <span className="text-xl font-bold text-slate-900 dark:text-white">A/L {item.year} Batch</span>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex gap-2">
                        {item.status.map(s => (
                          <span key={s} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-wide border border-blue-500/20">
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-10 py-8 text-sm font-medium text-slate-500 dark:text-slate-400">{item.updated}</td>
                    <td className="px-10 py-8 text-right">
                      <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wide group/btn transition-all">
                        Download File <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ALICTArchives;
