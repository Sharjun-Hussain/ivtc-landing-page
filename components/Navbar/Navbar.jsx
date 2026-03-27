"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();

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

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-10002 p-4 md:p-6 flex justify-center transition-transform duration-500 will-change-transform ${
          isScrolled && !isMenuOpen
            ? "-translate-y-2 md:translate-y-0"
            : "translate-y-0"
        }`}
      >
        <nav
          className={`w-full max-w-[1400px] rounded-[1.5rem] lg:rounded-full px-5 md:px-8 py-3 md:py-4 flex justify-between items-center relative transition-colors duration-500 border ${
            isScrolled || pathname !== "/"
              ? "bg-white dark:bg-[#0a0a0a] md:bg-white/95 md:dark:bg-black/95 shadow-md md:shadow-lg md:backdrop-blur-sm border-slate-200 dark:border-white/10"
              : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 z-[110]" onClick={closeMenu}>
            <div
              className={`relative flex items-center justify-center transition-all duration-500 ease-in-out rounded-full bg-white shadow-xl ${
                isScrolled && !isMenuOpen
                  ? "w-12 h-12 md:w-14 md:h-14"
                  : "w-16 h-16 md:w-20 md:h-20"
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
                    pathname === link.href ? "font-bold text-slate-900 dark:text-white" : ""
                  } ${
                    isScrolled || pathname !== "/"
                      ? "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    } ${isScrolled || pathname !== "/" ? "bg-[#002147] dark:bg-white" : "bg-white"}`}
                  />
                  {link.hasMega && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeMenu === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

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
                          <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                            Next Intake
                          </p>
                          <p className="text-[12px] text-slate-600 dark:text-slate-400 font-medium">
                            Spring Semester • March 2026
                          </p>
                        </div>
                        <button className="h-10 px-8 bg-[#002147] hover:bg-[#003366] text-white text-sm font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center">
                          View All Courses
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 z-[110]">
            <Link
              href="/meerza-foundation"
              className={`hidden lg:block px-6 py-3 text-sm font-bold rounded-3xl transition-all border flex items-center justify-center ${
                isScrolled || pathname !== "/"
                  ? "border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Meerza Foundation
            </Link>
            <Link
              href="https://lms.ivtccampus.lk"
              className={`hidden lg:block px-6 py-3 text-sm font-bold rounded-3xl transition-all flex items-center justify-center bg-[#002147] hover:bg-[#003366] text-white shadow-lg`}
            >
              Login to LMS
            </Link>

            <button
              onClick={toggleMenu}
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full relative transition-colors ${
                isScrolled || pathname !== "/"
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
        className={`fixed inset-0 z-10001 bg-white dark:bg-[#080808] transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-10 gap-8">
          <p className="text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-wider">
            Main Menu
          </p>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`text-3xl md:text-4xl font-bold flex items-center justify-between group ${
                  pathname === link.href ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-600"
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
              className="w-full h-12 px-6 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-3xl flex items-center justify-center gap-2 text-lg"
              onClick={closeMenu}
            >
              Meerza Foundation
            </Link>
            <Link
              href="https://lms.ivtccampus.lk"
              className="w-full h-12 px-6 bg-[#002147] hover:bg-[#003366] text-white font-bold rounded-3xl shadow-lg flex items-center justify-center gap-2 text-lg transition-all"
              onClick={closeMenu}
            >
              Login to LMS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
