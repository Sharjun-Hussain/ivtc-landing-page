"use client";

import React, { useMemo } from "react";
import { Globe, Download } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

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

const InitiativesDigitalLibrary = () => {
  const books = useMemo(() => BOOKS, []);

  return (
    <section id="digital-library" className="py-24">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <Globe size={28} className="text-[#002147] dark:text-[#00529b]" />
            Exclusive eBook Collection
          </h2>
          <p className="text-slate-500">Authentic Islamic knowledge, accessible to everyone, everywhere.</p>
        </div>
        <button className="text-xs font-semibold uppercase text-[#002147] dark:text-[#00529b] border-b border-[#002147]/30 dark:border-[#00529b]/30 pb-1 hover:border-current transition-all outline-none">
          View All Categories
        </button>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-10">
        {books.map((book, i) => (
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
  );
};

export default InitiativesDigitalLibrary;
