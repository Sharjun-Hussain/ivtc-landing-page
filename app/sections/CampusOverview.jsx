"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CampusStats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = gsap.utils.toArray(".stat-item");

      stats.forEach((item) => {
        const val = item.querySelector(".stat-value");
        const target = parseInt(val.getAttribute("data-target"));

        // Number count-up animation
        gsap.to(val, {
          innerText: target,
          duration: 2.5,
          snap: { innerText: 1 },
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        });

        // Soft fade-in for the text elements
        gsap.from(item.querySelectorAll(".reveal"), {
          y: 20,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      label: "Active Students",
      value: 500,
      comment: "01",
      sub: "A thriving global community of learners.",
    },
    {
      label: "Years Experience",
      value: 15,
      comment: "02",
      sub: "Over a decade of academic excellence.",
    },
    {
      label: "Specialized Courses",
      value: 25,
      comment: "03",
      sub: "Curriculums designed for the modern industry.",
    },
  ];

  return (
    <section ref={sectionRef} className="lg:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item flex flex-col group">
              {/* Minimalist Top Indicator */}
              <div className="reveal flex items-center gap-3 mb-8">
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  {stat.comment}
                </span>
                <div className="h-px w-12 bg-slate-200 dark:bg-white/10 group-hover:w-20 group-hover:bg-blue-600 dark:group-hover:bg-white transition-all duration-700" />
              </div>

              {/* Counter Section */}
              <div className="reveal flex items-baseline gap-2 mb-4">
                <span
                  className="stat-value text-7xl md:text-8xl font-light tracking-tighter text-slate-900 dark:text-white tabular-nums"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="text-4xl font-light text-blue-600/50 dark:text-gray-600">+</span>
              </div>

              {/* Content Section */}
              <div className="reveal space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
                  {stat.label}
                </h3>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed max-w-[240px] text-[15px]">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusStats;
