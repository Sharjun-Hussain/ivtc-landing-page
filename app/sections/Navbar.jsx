"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "/programs", hasMega: true },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Registration", href: "/#registration" },
    { name: "Verify", href: "/verify" },
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
      {/* --- STICKY NAVBAR --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] p-4 md:p-6 flex justify-center transition-all duration-500 ${
          isScrolled && !isMenuOpen
            ? "-translate-y-2 md:translate-y-0"
            : "translate-y-0"
        }`}
      >
        <nav
          className={`w-full max-w-[1400px] rounded-[1.5rem] lg:rounded-full px-5 md:px-8 py-3 md:py-4 flex justify-between items-center relative transition-all duration-500 ${
            isScrolled
              ? "bg-white/90 dark:bg-black/90 shadow-lg backdrop-blur-md"
              : "bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/5"
          }`}
        >
          {/* Brand Logo with Link */}
          <Link href="/" className="flex items-center gap-2 z-[110]" onClick={() => setIsMenuOpen(false)}>
            <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black font-black">
              I
            </div>
            <span
              className={`text-lg md:text-xl font-black tracking-tighter transition-colors text-slate-900 dark:text-white`}
            >
              IVTC<span className="text-slate-900 dark:text-white">CAMPUS</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
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
                      : "text-slate-900/80 dark:text-white/80 hover:text-slate-900 dark:hover:text-white"
                  } ${pathname === link.href ? "text-slate-900 dark:text-white font-extrabold" : ""}`}
                >
                  {link.name}
                  {link.hasMega && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${activeMenu === link.name ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* --- MEGA MENU PANEL --- */}
                {link.hasMega && activeMenu === link.name && (
                  <div className="absolute top-full -left-20 pt-6 cursor-default text-left">
                    <div className="w-[600px] bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-white/10">
                      <div className="grid grid-cols-2 gap-4">
                        {menuData[link.name].map((item, i) => (
                          <Link
                            href={item.href}
                            key={i}
                            className="group/item cursor-pointer p-5 rounded-3xl bg-slate-50 dark:bg-white/5 hover:bg-slate-900 dark:hover:bg-white transition-all duration-300 ease-out"
                            onClick={() => setActiveMenu(null)}
                          >
                            <h4 className="text-slate-900 dark:text-white font-bold text-[14px] mb-1 flex items-center justify-between group-hover/item:text-white dark:group-hover/item:text-black transition-colors">
                              {item.title}
                              <ArrowRight
                                size={15}
                                className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300"
                              />
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed group-hover/item:text-slate-50 dark:group-hover/item:text-slate-900 transition-colors">
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
                          className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all"
                          onClick={() => setActiveMenu(null)}
                        >
                          View All Courses
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle & Actions */}
          <div className="flex items-center gap-3 z-[110]">
            <Link
              href="/meerza-foundation"
              className={`hidden lg:block px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-full transition-all border ${
                isScrolled
                  ? "border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  : "border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-white/10 dark:hover:bg-white/5"
              }`}
              onClick={() => setActiveMenu(null)}
            >
              Meerza Foundation
            </Link>
             <Link
              href="/apply"
              className="hidden lg:block px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-full transition-all bg-slate-900 dark:bg-white text-white dark:text-black hover:opacity-90"
              onClick={() => setActiveMenu(null)}
            >
              Login to LMS
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full relative transition-all bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* --- MOBILE OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[95] bg-white dark:bg-[#080808] transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-10"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-10 gap-10">
          <p className="text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-[0.4em]">
            Main Menu
          </p>
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveMenu(null);
                }}
                className={`text-4xl font-black tracking-tighter flex items-center justify-between ${
                  pathname === link.href
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-700 dark:text-slate-300"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
                <ArrowRight
                  className="text-slate-900 dark:text-white"
                  size={28}
                />
              </Link>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-slate-100 dark:border-white/5 grid grid-cols-1 gap-4">
            <Link
              href="/meerza-foundation"
              className="w-full py-4 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Meerza Foundation
            </Link>
            <Link
              href="/apply"
              className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest rounded-2xl shadow-lg flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login to LMS
            </Link>
            <Link
              href="/student-portal"
              className="w-full py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;