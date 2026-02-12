"use client";
import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

// --- 1. MEMOIZED HERO SECTION ---
// Separated to prevent re-renders when Navbar state (scroll/menu) changes.
const HeroSection = memo(() => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Animation (Full fidelity)
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          videoRef.current,
          { scale: 1.2, opacity: 0 }, // Removed blur (expensive)
          {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "expo.out",
          }
        );

        gsap.fromTo(
          ".hero-text",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.4,
          }
        );
      });

      // Mobile Animation (Simplified for performance)
      mm.add("(max-width: 767px)", () => {
        gsap.to(videoRef.current, { opacity: 1, duration: 1 });
        gsap.to(".hero-text", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.2,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex justify-center bg-white dark:bg-[#0a0a0a] p-4 md:p-6 min-h-screen"
    >
      {/* Added transform-gpu to force hardware acceleration */}
      <div className="relative w-full max-w-[1600px] aspect-[16/10] md:aspect-video lg:max-h-[850px] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl bg-black transform-gpu translate-z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-0 will-change-transform" // Start opacity 0 for GSAP
        >
          <source src="/ivtc_campus.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24">
          <div className="hero-text opacity-0 translate-y-8 mb-6 flex items-center gap-4">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-amber-500 to-orange-500"></span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-amber-400/90">
              IVTC Campus Sri Lanka
            </span>
          </div>
          <h1 className="hero-text opacity-0 translate-y-8 text-5xl md:text-[7.5rem] font-black text-white leading-tight md:leading-tight tracking-tighter max-w-4xl">
            Empower Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">Digital</span> Future.
          </h1>
          <div className="hero-text opacity-0 translate-y-8 mt-8 md:mt-12">
            <button className="group relative px-10 py-4 md:px-12 md:py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-full hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

// --- 2. MAIN COMPONENT (NAVBAR LOGIC) ---
const HeroWithMegaMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Optimized Scroll Listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Registration", href: "/#registration" },
    { name: "Verify", href: "/verify" },
    { name: "Programs", href: "#", hasMega: true },
  ];

  const menuData = {
    Programs: [
      {
        title: "Software Engineering",
        desc: "Full-stack development & modern architecture.",
      },
      {
        title: "Data Science",
        desc: "AI, Machine Learning, and Big Data analytics.",
      },
      {
        title: "Cyber Security",
        desc: "Network protection and ethical hacking protocols.",
      },
      {
        title: "Cloud Computing",
        desc: "AWS, Azure, and high-scale DevOps workflows.",
      },
    ],
  };

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-100 p-4 md:p-6 flex justify-center transition-transform duration-500 will-change-transform ${
          isScrolled && !isMenuOpen
            ? "-translate-y-2 md:translate-y-0"
            : "translate-y-0"
        }`}
      >
        <nav
          className={`w-full max-w-[1400px] rounded-[1.5rem] lg:rounded-full px-5 md:px-8 py-3 md:py-4 flex justify-between items-center relative transition-colors duration-500 ${
            isScrolled
              ? "bg-white/95 dark:bg-black/95 shadow-lg backdrop-blur-sm" // Reduced blur for performance
              : "bg-transparent"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 z-[110]"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black font-black">
              I
            </div>
            <span
              className={`text-lg md:text-xl font-black tracking-tighter transition-colors ${
                isScrolled ? "text-slate-900 dark:text-white" : "text-white"
              }`}
            >
              IVTC
              <span
                className={
                  isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                }
              >
                CAMPUS
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => link.hasMega && setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative py-2"
              >
                <Link
                  href={link.href}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5 ${
                    isScrolled
                      ? "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasMega && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeMenu === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* MEGA MENU PANEL */}
                {link.hasMega && activeMenu === link.name && (
                  <div className="absolute top-full -left-20 pt-6 cursor-default">
                    <div className="w-[600px] bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] p-8 shadow-2xl border border-slate-200 dark:border-white/10 text-left">
                      <div className="grid grid-cols-2 gap-4">
                        {menuData[link.name].map((item, i) => (
                          <div
                            key={i}
                            className="group/item cursor-pointer p-5 rounded-3xl bg-slate-50 dark:bg-white/5 hover:bg-amber-600 dark:hover:bg-amber-600 transition-colors duration-200"
                          >
                            <h4 className="text-slate-900 dark:text-white font-bold text-[14px] mb-1 flex items-center justify-between group-hover/item:text-white dark:group-hover/item:text-white transition-colors">
                              {item.title}
                              <ArrowRight
                                size={15}
                                className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300"
                              />
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed group-hover/item:text-white dark:group-hover/item:text-white/90 transition-colors">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">
                            Next Intake
                          </p>
                          <p className="text-[12px] text-slate-600 dark:text-slate-400 font-medium">
                            Spring Semester • March 2026
                          </p>
                        </div>
                        <button className="px-6 py-3 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all shadow-lg">
                          View All Courses
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 z-[110]">
            <Link
              href="/meerza-foundation"
              className={`hidden lg:block px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-full transition-all border ${
                isScrolled
                  ? "border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Meerza Foundation
            </Link>
            <Link
             href="https://lms.ivtccampus.lk"
              className={`hidden lg:block px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-full transition-all ${
                isScrolled
                  ? "bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
                  : "bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl"
              }`}
            >
              Login to LMS
            </Link>

            <button
              onClick={toggleMenu}
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full relative transition-colors ${
                isScrolled
                  ? "bg-slate-100 dark:bg-amber-600/20 text-slate-900 dark:text-amber-400"
                  : "bg-amber-600/20 text-amber-400 backdrop-blur-sm"
              }`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-[#080808] transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-10 gap-8">
          <p className="text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-[0.4em]">
            Main Menu
          </p>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center justify-between group"
              >
                {link.name}
                <ArrowRight
                  className="text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
                  size={24}
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 grid grid-cols-1 gap-3">
            <Link
              href="/meerza-foundation"
              className="w-full py-4 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 text-[10px] md:text-xs"
              onClick={closeMenu}
            >
              Meerza Foundation
            </Link>
            <Link
              href="https://lms.ivtccampus.lk"
              className="w-full py-4 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg flex items-center justify-center gap-2 text-[10px] md:text-xs transition-all"
              onClick={closeMenu}
            >
              Login to LMS
            </Link>
          </div>
        </div>
      </div>

      {/* Render the Optimized Hero Section */}
      <HeroSection />
    </>
  );
};

export default HeroWithMegaMenu;