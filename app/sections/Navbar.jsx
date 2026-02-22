"use client";
import React, { useEffect, useState, useCallback, memo } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = memo(() => {
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const navLinks = [
    { name: "Home", href: "/" },
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
        href: "/programs/software-engineering",
      },
      {
        title: "Data Science",
        desc: "AI, Machine Learning, and Big Data analytics.",
        href: "/programs/data-science",
      },
      {
        title: "Cyber Security",
        desc: "Network protection and ethical hacking protocols.",
        href: "/programs/cyber-security",
      },
      {
        title: "Cloud Computing",
        desc: "AWS, Azure, and high-scale DevOps workflows.",
        href: "/programs/cloud-computing",
      },
    ],
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-100 p-4 md:p-6 flex justify-center transition-transform duration-500 `}
      >
        <nav
          className={`w-full max-w-[1400px] rounded-[1.5rem] lg:rounded-full shadow-lg backdrop-blur-sm px-5 md:px-8 py-3 md:py-4 flex justify-between items-center relative transition-all duration-500 ${
            isScrolled
              ? "bg-white/95 dark:bg-black/95 "
              : "bg-white/5 dark:bg-white/5 "
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 z-110"
            onClick={closeMenu}
          >
            <div 
              className={`relative flex items-center justify-center transition-all duration-500 ease-in-out rounded-full bg-white shadow-xl
                ${isScrolled && !isMenuOpen 
                  ? "w-12 h-12 md:w-14 md:h-14" 
                  : "w-16 h-16 md:w-14 md:h-14"
                }`}
            >
              <Image
                src="/ivtc_new_logo.png"
                alt="IVTC Campus Logo"
                fill
                className="object-contain p-2 transition-all duration-500"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div
                  key={link.name}
                  onMouseEnter={() => link.hasMega && setActiveMenu(link.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                  className="relative py-4"
                >
                  <Link
                    href={link.href}
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5 ${
                      isScrolled
                        ? "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        : "text-slate-900/80 dark:text-white/80 hover:text-slate-900 dark:hover:text-white"
                    } ${
                      isActive
                        ? "text-slate-900! dark:text-white! font-extrabold"
                        : ""
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 cursor-default text-left">
                      <div className="w-[800px] bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/5">
                        <div className="grid grid-cols-2 gap-4">
                          {menuData[link.name].map((item, i) => (
                            <Link
                              href={item.href || "#"}
                              key={i}
                              className="group/item cursor-pointer p-5 rounded-3xl bg-slate-50 dark:bg-white/5 hover:bg-[#002147] transition-all duration-200 ease-out border border-transparent hover:border-slate-200 dark:hover:border-transparent"
                              onClick={closeMenu}
                            >
                              <h4 className="text-slate-900 dark:text-white font-bold text-[14px] mb-2 flex items-center justify-between group-hover:text-white transition-colors">
                                {item.title}
                                <ArrowRight
                                  size={16}
                                  className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                />
                              </h4>
                              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed group-hover:text-white/80 transition-colors">
                                {item.desc}
                              </p>
                            </Link>
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
                          <Link
                            href="/programs"
                            className="px-8 py-3 bg-linear-to-r from-[#002147] to-blue-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:from-[#003366] hover:to-blue-800 transition-all shadow-lg"
                            onClick={closeMenu}
                          >
                            View All Courses
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 z-110">
            <Link
              href="/meerza-foundation"
              className={`hidden lg:block px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all border ${
                isScrolled
                  ? "border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  : "border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-white/10 dark:hover:bg-white/5"
              }`}
              onClick={closeMenu}
            >
              Foundation
            </Link>
            <Link
              href="https://lms.ivtccampus.lk"
              className="hidden lg:block px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all bg-linear-to-r from-[#002147] to-blue-900 text-white hover:from-[#003366] hover:to-blue-800 shadow-md"
              onClick={closeMenu}
            >
              Login to LMS
            </Link>

            <button
              onClick={toggleMenu}
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full relative transition-all ${
                isScrolled
                  ? "bg-slate-100 dark:bg-[#002147]/20 text-slate-900 dark:text-blue-400"
                  : "bg-white/10 text-white backdrop-blur-sm"
              }`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* --- MOBILE OVERLAY --- */}
      <div
        className={`fixed inset-0 z-95 bg-white dark:bg-[#080808] transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-8 gap-8">
          <p className="text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-[0.4em]">
            Main Menu
          </p>
          <div className="flex flex-col gap-5">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-between ${
                  pathname === link.href
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-400 dark:text-slate-600"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.name}
                <ArrowRight
                  className={`${
                    pathname === link.href
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-300 dark:text-slate-700"
                  }`}
                  size={24}
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 grid grid-cols-1 gap-3">
            <Link
              href="/meerza-foundation"
              className="w-full py-4 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 text-[11px]"
              onClick={closeMenu}
            >
              Meerza Foundation
            </Link>
            <Link
              href="https://lms.ivtccampus.lk"
              className="w-full py-4 bg-linear-to-r from-[#002147] to-blue-900 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg flex items-center justify-center gap-2 text-[11px]"
              onClick={closeMenu}
            >
              Login to LMS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;