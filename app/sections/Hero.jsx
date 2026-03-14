"use client";
import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

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
      className="relative w-full flex justify-center bg-transparent p-0 md:p-6 md:min-h-screen"
    >
      {/* Added transform-gpu to force hardware acceleration */}
      <div className="relative w-full max-w-[1600px] h-[550px] md:h-auto md:aspect-video lg:max-h-[850px] overflow-hidden rounded-none md:rounded-[4rem] shadow-2xl bg-black transform-gpu translate-z-0">
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
            <span className="w-8 md:w-12 h-[3px] bg-gradient-to-r from-[#002147] to-blue-900"></span>
            <span className="text-[10px] md:text-[11px] font-medium  text-slate-200">
              IVTC Campus Sri Lanka
            </span>
          </div>
          <h1 className="hero-text opacity-0 translate-y-8 text-5xl md:text-7xl font-black font-bold text-white leading-tight md:leading-tight  max-w-4xl">
            Empower Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-200">Digital</span> Future.
          </h1>
          <p className="hero-text opacity-0 translate-y-8 mt-6 text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Master the digital landscape with Sri Lanka's leading campus for A/L ICT, Higher National Diplomas, and Global Degree Pathways. Your journey to technical excellence starts here.
          </p>
          <div className="hero-text opacity-0 translate-y-8 mt-8 md:mt-12">
            <button className="group relative h-12 px-12! bg-[#002147] text-white text-lg font-semibold rounded-3xl hover:bg-[#003366] transition-all shadow-lg flex items-center justify-center">
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
  const pathname = usePathname();

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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "A/L ICT", href: "/#registration" },
    { name: "Certification", href: "/verify" },
    { name: "Academics", href: "#", hasMega: true },
    { name: "Contact", href: "/contact" },
  ];

  const menuData = {
    Academics: [
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
  className="flex items-center gap-3 z-[110]"
  onClick={closeMenu}
>
  {/* The Container: Controls the white circle and overall dimensions */}
  <div 
    className={`relative flex items-center justify-center transition-all duration-500 ease-in-out rounded-full bg-white shadow-xl
      ${isScrolled && !isMenuOpen 
        ? "w-12 h-12 md:w-14 md:h-14"  // Small size (on scroll)
        : "w-16 h-16 md:w-20 md:h-20"  // Actual/Large size (initial)
      }`}
  >
    {/* The Logo: Shrinks automatically with the parent div because of 'fill' */}
    <Image
      src="/ivtc_new_logo.png"
      alt="IVTC Campus Logo"
      fill
      className="object-contain p-2 transition-all duration-500" // p-2 keeps logo from touching edges
      priority
    />
  </div>
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
                  className={`group relative text-[14px] font-medium transition-colors flex items-center gap-1.5 py-1 ${
                    pathname === link.href ? "font-bold" : ""
                  } ${
                    isScrolled
                      ? "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Animated Underline */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#002147] dark:bg-white transition-all duration-300 ease-out ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                  
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
                            className="group/item cursor-pointer p-5 rounded-3xl bg-slate-50 dark:bg-white/5 hover:bg-[#002147] dark:hover:bg-[#002147] transition-colors duration-200"
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
                          <p className="text-[10px] font-black text-slate-900 dark:text-white ">
                            Next Intake
                          </p>
                          <p className="text-[12px] text-slate-600 dark:text-slate-400 font-medium">
                            Spring Semester • March 2026
                          </p>
                        </div>
                        <button className="h-12 px-12! bg-[#002147] hover:bg-[#003366] text-white text-lg font-bold rounded-3xl transition-all shadow-lg flex items-center justify-center">
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
              className={`hidden lg:block  px-6 py-3 text-sm font-bold rounded-3xl transition-all border flex items-center justify-center ${
                isScrolled
                  ? "border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Meerza Foundation
            </Link>
            <Link
             href="https://lms.ivtccampus.lk"
              className={`hidden lg:block  px-6 py-3 text-sm font-bold rounded-3xl transition-all flex items-center justify-center ${
                isScrolled
                  ? "bg-[#002147] hover:bg-[#003366] text-white shadow-lg"
                  : "bg-[#002147] hover:bg-[#003366] text-white shadow-xl"
              }`}
            >
              Login to LMS
            </Link>

            <button
              onClick={toggleMenu}
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full relative transition-colors ${
                isScrolled
                  ? "bg-slate-100 dark:bg-[#002147]/20 text-slate-900 dark:text-blue-400"
                  : "bg-[#002147]/20 text-blue-400 backdrop-blur-sm"
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
          <p className="text-slate-900 dark:text-white text-[10px] font-black ">
            Main Menu
          </p>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`text-3xl md:text-4xl font-bold  flex items-center justify-between group ${
                  pathname === link.href
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-400 dark:text-slate-600"
                }`}
              >
                {link.name}
                <ArrowRight
                  className={`${
                    pathname === link.href
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-white"
                  } transition-colors`}
                  size={24}
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 grid grid-cols-1 gap-3">
            <Link
              href="/meerza-foundation"
              className="w-full h-12 px-12! border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-3xl flex items-center justify-center gap-2 text-lg"
              onClick={closeMenu}
            >
              Meerza Foundation
            </Link>
            <Link
              href="https://lms.ivtccampus.lk"
              className="w-full h-12 px-12! bg-[#002147] hover:bg-[#003366] text-white font-bold rounded-3xl shadow-lg flex items-center justify-center gap-2 text-lg transition-all"
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