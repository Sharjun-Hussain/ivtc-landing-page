"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, GraduationCap, Zap, Globe, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CoursePathways = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".pathway-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pathway-grid",
          start: "top 85%",
        },
      });

      // Ambient background float
      gsap.to(".bg-shape", {
        y: "15px",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 1.5 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onMouseEnter = (index) => {
    const card = cardsRef.current[index];
    const icon = card.querySelector(".icon-wrapper");
    const shape = card.querySelector(".bg-shape");

    // "overwrite: auto" stops any running 'leave' animations immediately
    gsap.to(icon, {
      rotateY: 180,
      scale: 1.1,
      backgroundColor: "#d97706", // amber-600
      color: "#fff",
      duration: 0.4,
      ease: "back.out(2)",
      overwrite: "auto",
    });

    gsap.to(shape, {
      scale: 2,
      rotate: 45,
      opacity: 0.3,
      duration: 0.6,
      overwrite: "auto",
    });
  };

  const onMouseLeave = (index) => {
    const card = cardsRef.current[index];
    const icon = card.querySelector(".icon-wrapper");
    const shape = card.querySelector(".bg-shape");

    gsap.to(icon, {
      rotateY: 0,
      scale: 1,
      backgroundColor: "transparent",
      color: "#d97706", // amber-600
      duration: 0.4,
      ease: "power2.inOut",
      overwrite: "auto",
    });

    gsap.to(shape, {
      scale: 1,
      rotate: 0,
      opacity: 0.1,
      duration: 0.6,
      overwrite: "auto",
    });
  };

  const pathways = [
    {
      title: "Certifications",
      tags: ["CCNA", "CompTIA"],
      desc: "Accelerated industry programs for immediate impact.",
      icon: <Globe size={28} />,
      color: "bg-amber-500",
    },
    {
      title: "Diplomas",
      tags: ["HNDIT", "BIT"],
      desc: "Structured academic excellence bridging the gap.",
      icon: <GraduationCap size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "After A/L",
      tags: ["Foundation", "CS"],
      desc: "Start your journey right after school with experts.",
      icon: <Zap size={28} />,
      color: "bg-amber-600",
    },
    {
      title: "AL ICT Classes",
      tags: ["Local", "Cambridge"],
      desc: "Master the syllabus with highest-ranked instructors.",
      icon: <BookOpen size={28} />,
      color: "bg-orange-600",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <h3 className="text-amber-600 dark:text-amber-500 font-mono tracking-widest uppercase text-xs mb-4">
            / Educational Expertise
          </h3>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tighter">
            Choose your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500">
              Legendary
            </span>{" "}
            <br /> Career Path.
          </h2>
        </header>

        <div className="pathway-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={() => onMouseEnter(i)}
              onMouseLeave={() => onMouseLeave(i)}
              className="pathway-card group relative h-[420px] bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] will-change-transform"
            >
              {/* Background Glow */}
              <div
                className={`bg-shape absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-10 dark:opacity-20 transition-colors ${item.color}`}
              />

              <div className="relative z-10">
                <div className="icon-wrapper w-14 h-14 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-8 transition-colors">
                  {item.icon}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-1 rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 uppercase font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-slate-900 dark:text-white text-xs font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  EXPLORE PATH{" "}
                  <ArrowRight size={14} className="text-amber-600 dark:text-amber-400" />
                </span>
                <span className="text-4xl font-black text-slate-900/5 dark:text-white/5 italic tracking-tighter">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePathways;
