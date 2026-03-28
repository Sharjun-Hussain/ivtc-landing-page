"use client";

import React, { useMemo } from "react";
import { Globe, Download, LayoutGrid } from "lucide-react";
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
    <section id="digital-library" className="bg-white dark:bg-[#0a0a0a]" aria-labelledby="digital-library-heading">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3">
            <ScrollReveal className="lg:sticky lg:top-32">
              <h2 id="digital-library-heading" className="text-3xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] text-slate-900 dark:text-white">
                Digital <br /> Library.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                Authentic Islamic knowledge, accessible to everyone, everywhere. Explore our curated collection of essential academic and spiritual texts.
              </p>
              
              <div className="mt-8 md:mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#002147] dark:text-blue-400 text-[11px] md:text-xs font-bold tracking-wide hover:bg-[#002147] hover:text-white transition-all cursor-pointer">
                <LayoutGrid size={14} /> View All Categories
              </div>
            </ScrollReveal>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              {books.map((book, i) => (
                <ScrollReveal key={i} animationClass="animate-fade-in" options={{ delay: i * 0.1 }}>
                  <div className="group bg-white dark:bg-[#111] p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-slate-200 dark:border-white/5 hover:shadow-2xl transition-all duration-500 h-full flex flex-col shadow-sm">
                    <div className="aspect-3/4 bg-slate-50 dark:bg-black rounded-[1.5rem] md:rounded-[2rem] mb-6 md:mb-8 overflow-hidden relative border border-slate-100 dark:border-white/5">
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-400 font-bold text-2xl opacity-20">
                         {book.title.split(' ')[0]}
                      </div>
                      <div className="absolute inset-0 bg-[#002147]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <button className="h-10 px-8 bg-white text-[#002147] rounded-2xl font-bold text-[10px] md:text-xs tracking-wide transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                              Preview
                          </button>
                      </div>
                    </div>
                    
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#002147] dark:group-hover:text-blue-400 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 md:mb-8">{book.author}</p>
                    
                    <div className="mt-auto">
                      <button className="w-full py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center gap-3 text-[10px] md:text-xs font-bold tracking-wide text-slate-600 dark:text-slate-300 hover:bg-[#002147] hover:text-white hover:border-[#002147] transition-all">
                        <Download size={16} /> {book.size} PDF
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesDigitalLibrary;
