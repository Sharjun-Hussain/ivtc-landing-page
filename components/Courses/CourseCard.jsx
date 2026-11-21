"use client";

import { useRef, useState } from "react";
import { Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import ScrollReveal from "@/components/Animations/ScrollReveal";
import SanitizedContent from "@/components/Courses/SanitizedContent";

const CourseCard = ({ course }) => {
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef(null);
  const fillRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  const handleMouseEnter = () => {
    // 1. Smooth card border & shadow
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        borderColor: "rgba(0, 33, 71, 0.4)",
        boxShadow: "0 14px 30px -10px rgba(0, 33, 71, 0.12)",
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // 2. Button Top-to-Bottom Curtain Fill
    if (fillRef.current) {
      gsap.killTweensOf(fillRef.current);
      gsap.to(fillRef.current, {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // 3. Crisp pure white text + arrow slide
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        color: "#ffffff",
        duration: 0.3,
        ease: "power1.out",
      });
    }
    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        x: 4,
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    // 1. Card reset
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        borderColor: "",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
        duration: 0.6,
        ease: "power2.out",
      });
    }

    // 2. Button unfill curtain takes 0.4s (matched exactly to hover in)
    if (fillRef.current) {
      gsap.killTweensOf(fillRef.current);
      gsap.to(fillRef.current, {
        scaleY: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // 3. Text & Arrow returns to slate over 0.3s (matched to hover in)
    if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.to(textRef.current, {
        color: "#1e293b",
        duration: 0.3,
        ease: "power1.out",
      });
    }
    if (arrowRef.current) {
      gsap.killTweensOf(arrowRef.current);
      gsap.to(arrowRef.current, {
        x: 0,
        color: "#64748b",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <ScrollReveal animationClass="animate-fade-in" options={{ threshold: 0.1 }}>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full bg-white dark:bg-[#0e0e0e] rounded-2xl border border-slate-200/90 dark:border-white/10 overflow-hidden flex flex-col shadow-xs"
      >
        {/* Course Media Area */}
        <div className="relative aspect-video overflow-hidden bg-slate-900/5 dark:bg-white/5">
          {course?.image && !imgError ? (
            <img
              src={course.image}
              alt={course?.title}
              className="w-full h-full object-cover brightness-[0.98] group-hover:brightness-105 transition-all duration-500 ease-out"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-500 bg-slate-50 dark:bg-white/5 opacity-40">
              <div className="scale-[1.2]">{course?.icon}</div>
            </div>
          )}

          {/* Clean Glass Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md bg-white/95 dark:bg-black/85 text-slate-800 dark:text-slate-200 shadow-xs border border-white/50 dark:border-white/10">
              {course?.categoryName}
            </span>
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col flex-1 relative z-10">
          {/* Title with Consistent Height */}
          <h4 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2 min-h-[46px]">
            {course?.title}
          </h4>

          {/* Description */}
          <div className="mb-4 flex-1">
            <SanitizedContent
              html={course.desc}
              className="text-slate-600 dark:text-slate-400 text-[13px] leading-relaxed line-clamp-2 min-h-[38px] font-normal"
            />
          </div>

          {/* Tags */}
          {course?.tags && course.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {course.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-md text-[9px] font-medium text-slate-600 dark:text-slate-400 uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Meta Information Bar (Duration & Students) */}
          <div className="flex items-center justify-between pt-3 pb-4 border-t border-slate-100 dark:border-white/5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
              <Clock size={13} className="text-blue-600 dark:text-blue-400" />
              <span>{course?.duration}</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <Users size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span>{course?.enrolled ? `${course.enrolled.toLocaleString()} Enrolled` : "Enrolling Now"}</span>
            </div>
          </div>

          {/* Action Button with Top-to-Bottom Curtain Fill */}
          <Link
            href={`/courses/${course?.categoryId}/${course?.slug}?id=${course?.id}`}
            className="relative w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden font-semibold text-xs flex items-center justify-center gap-2 shadow-2xs group/btn bg-slate-50 dark:bg-white/5 isolate"
          >
            {/* Top-to-Bottom Curtain Background Layer (z-0) */}
            <span
              ref={fillRef}
              className="absolute inset-0 bg-[#002147] origin-top scale-y-0 pointer-events-none rounded-xl z-0"
            />

            {/* Button Label & Arrow explicitly elevated above curtain (z-20) */}
            <span
              ref={textRef}
              className="relative z-20 font-bold text-slate-800 dark:text-slate-100 pointer-events-none"
            >
              View Program Details
            </span>
            <div ref={arrowRef} className="relative z-20 inline-flex text-slate-500 dark:text-slate-400 pointer-events-none">
              <ArrowRight size={13} />
            </div>
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default CourseCard;
