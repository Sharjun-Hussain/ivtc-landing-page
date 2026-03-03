"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Github,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Programs",
      links: [
        { name: "Software Engineering", path: "#" },
        { name: "Data Science", path: "#" },
        { name: "Cyber Security", path: "#" },
        { name: "Cloud Computing", path: "#" },
      ],
    },
    {
      title: "Campus Life",
      links: [
        { name: "Student Portal", path: "https://lms.ivtccampus.lk" },
        { name: "Events & Clubs", path: "#" },
      ],
    },
    {
      title: "Institute",
      links: [
        { name: "About IVTC", path: "/about" },
        { name: "Our Staff", path: "/about/our-staff" },
        { name: "Campus Policy", path: "/about/campus-policy" },
        { name: "Contact Us", path: "/contact" },
        { name: "Privacy Policy", path: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-24 pb-8 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Large Typography Hook */}
       

        {/* Main Grid structure with architectural borders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 border-t border-white/5 pt-12 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 lg:pr-12 lg:border-r border-white/5">
            <div className="mb-8 w-24 h-24 bg-white rounded-2xl p-4 flex items-center justify-center">
              <Image
                src="/ivtc_new_logo.png"
                alt="IVTC Campus Logo"
                width={180}
                height={70}
                className="object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mb-10">
              IVT Campus is committed to providing high-quality education through
              technology-driven learning experiences. Join us and unlock new
              opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white text-slate-400 hover:text-[#0a0a0a] transition-all duration-300 group"
                >
                  <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
            {footerLinks.map((col, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 mb-8">
                  {col.title}
                </h4>
                <ul className="space-y-5">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.path}
                        className="group flex items-center text-slate-400 hover:text-white text-sm transition-all duration-300 w-fit"
                      >
                        <span className="relative overflow-hidden pb-1">
                          {link.name}
                          {/* Animated Underline */}
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="ml-2 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2">
            © {new Date().getFullYear()} IVTC CAMPUS. POWERED BY{" "}
            <span className="text-white hover:text-slate-300 cursor-pointer transition-colors">
              INZEEDO
            </span>
          </p>

          <div className="flex items-center gap-6 md:gap-8">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex items-center hover:cursor-pointer gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors group"
                aria-label="Toggle theme"
              >
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  {resolvedTheme === "dark" ? (
                    <Sun size={12} className="group-hover:rotate-90 transition-transform duration-500" />
                  ) : (
                    <Moon size={12} className="group-hover:-rotate-12 transition-transform duration-500" />
                  )}
                </div>
                <span className="hidden sm:block font-medium">
                  {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            )}

            <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />

            <button
              onClick={scrollToTop}
              className="flex items-center hover:cursor-pointer gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors group"
            >
              <span className="hidden sm:block font-medium">Back to Top</span>
              <span className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/30 group-hover:-translate-y-1 transition-all duration-300">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
