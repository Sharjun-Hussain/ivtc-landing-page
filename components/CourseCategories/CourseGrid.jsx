"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

const PathwayCard = ({ item }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const arrowRef = useRef(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -4,
        borderColor: "rgba(0, 33, 71, 0.35)",
        boxShadow: "0 18px 38px -12px rgba(0, 33, 71, 0.12)",
        duration: 0.4,
        ease: "power2.out",
      });
    }
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1.08,
        duration: 0.3,
        ease: "back.out(2)",
      });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 4,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        borderColor: "",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
        duration: 0.5,
        ease: "power2.out",
      });
    }
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <Link
      ref={cardRef}
      href={`/courses?category=${item.slug || "all"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative min-h-[260px] md:min-h-[280px] bg-white dark:bg-[#0e0e0e] border border-slate-200/90 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-xs transition-colors will-change-transform"
    >
      {/* Ambient Corner Gradient Glow on Hover */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative z-10">
        {/* Top Header: Category Icon & Badge inline */}
        <div className="flex items-center justify-between mb-4">
          <div
            ref={iconRef}
            className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.bgLight} ${item.textColor} border border-slate-200/60 dark:border-white/10 shadow-2xs`}
          >
            {item.icon}
          </div>
          <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
            {item.badge}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-[17px] font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug">
          {item.title}
        </h4>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-[13px] leading-relaxed line-clamp-2 font-normal">
          {item.desc}
        </p>
      </div>

      {/* Footer Link Strip */}
      <div className="relative z-10 pt-3 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
        <span className="text-slate-700 dark:text-slate-300 text-xs font-medium group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
          Explore Courses
        </span>
        <div
          ref={arrowRef}
          className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-[#002147] group-hover:text-white transition-colors"
        >
          <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
};

const CourseGrid = ({ pathways }) => {
  return (
    <div className="pathway-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {pathways.map((item, i) => (
        <PathwayCard key={item.slug || i} item={item} />
      ))}
    </div>
  );
};

export default CourseGrid;
