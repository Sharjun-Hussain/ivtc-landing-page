"use client";
import React from "react";
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
        "Software Engineering",
        "Data Science",
        "Cyber Security",
        "Cloud Computing",
      ],
    },
    {
      title: "Campus Life",
      links: ["Student Portal", "Library", "Events", "Career Center"],
    },
    {
      title: "Institute",
      links: ["About IVTC", "Research", "Contact Us", "Privacy Policy"],
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5 transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-black tracking-tighter mb-6">
              IVTC<span className="text-white">.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Empowering the next generation of IT professionals in Sri Lanka
              through world-class education and industry-driven research.
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
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-all"
                      />
                    </a>
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
