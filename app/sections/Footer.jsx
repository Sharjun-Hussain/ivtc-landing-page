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
        { name: "Student Portal", path: "#" },
        { name: "Library", path: "#" },
        { name: "Events", path: "#" },
        { name: "Career Center", path: "#" },
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
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5 transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image 
                src="/ivtc_logo.png" 
                alt="IVTC Campus Logo" 
                width={220} 
                height={90} 
                className="brightness-0 invert object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
 IVT Campus is committed to providing high-quality education through technology-driven learning experiences. Join us and unlock new opportunities for academic and professional growth.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 rounded-full bg-white/5 hover:bg-white h transition-all group"
                  >
                    <Icon
                      size={18}
                      className="text-slate-400  group-hover:text-slate-900 transition-colors"
                    />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.path}
                      className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
            © 2026 IVTC CAMPUS. POWERED BY{" "}
            <span className="text-white hover:text-amber-500 cursor-pointer">
              INZEEDO
            </span>
          </p>

          <div className="flex items-center gap-8">
            {mounted && (
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors group"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <>
                    <Sun
                      size={14}
                      className="group-hover:rotate-45 transition-transform"
                    />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon
                      size={14}
                      className="group-hover:-rotate-12 transition-transform"
                    />
                    Dark Mode
                  </>
                )}
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors group"
            >
              Back to Top
              <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all">
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
