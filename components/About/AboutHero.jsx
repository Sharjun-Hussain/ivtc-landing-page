import { ArrowRight, ChevronDown, GraduationCap } from "lucide-react";
import Link from "next/link";

const AboutHero = ({ cmsData }) => {
  const cmsTitle = cmsData?.hero_title?.trim();
  const words = (cmsTitle || "Empower Your Future From A/Ls to Beyond.")
    .split(/\s+/)
    .filter(Boolean);
  const splitIndex = words.length > 3 ? 3 : words.length;
  const leadTitle = words.slice(0, splitIndex).join(" ");
  const accentTitle = words.slice(splitIndex).join(" ");

  return (
    <section
      className="relative isolate flex min-h-[88vh] flex-col justify-center overflow-hidden px-6 pt-36 pb-28 lg:pt-44 lg:pb-36"
      aria-labelledby="about-hero-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#002147]/5 blur-[130px] dark:bg-blue-500/10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#002147]/10 to-transparent dark:via-white/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,33,71,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,33,71,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_35%,black,transparent)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="flex items-center gap-4 opacity-0 animate-about-reveal [animation-delay:100ms] motion-reduce:animate-none motion-reduce:opacity-100">
          <span className="h-px w-10 bg-[#002147]/25 dark:bg-white/20" />
          <span className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#002147]/80 dark:text-blue-300/80">
            <GraduationCap size={16} />
            About IVTC Campus
          </span>
          <span className="h-px w-10 bg-[#002147]/25 dark:bg-white/20" />
        </div>

        <h1
          id="about-hero-title"
          className="mt-8 font-display text-[2.8rem] leading-[1.06] font-semibold tracking-[-0.02em] text-slate-900 sm:text-6xl md:text-7xl lg:text-[5.5rem] dark:text-white"
        >
          <span className="block overflow-hidden pb-2">
            <span className="block opacity-0 animate-about-title [animation-delay:220ms] motion-reduce:animate-none motion-reduce:opacity-100">
              {leadTitle}
            </span>
          </span>
          {accentTitle && (
            <span className="block overflow-hidden pb-2">
              <span className="block bg-gradient-to-r from-[#002147] via-blue-700 to-blue-900 bg-clip-text pb-2 text-transparent opacity-0 animate-about-title [animation-delay:380ms] motion-reduce:animate-none motion-reduce:opacity-100 dark:from-white dark:via-blue-200 dark:to-blue-400">
                {accentTitle}
              </span>
            </span>
          )}
        </h1>

        <div className="mt-8 flex items-center justify-center gap-3 opacity-0 animate-about-rule [animation-delay:560ms] motion-reduce:animate-none motion-reduce:opacity-100">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#002147]/30 dark:to-white/20" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#002147]/40 dark:bg-blue-300/60" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#002147]/30 dark:to-white/20" />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed font-medium text-slate-600 opacity-0 animate-about-reveal [animation-delay:640ms] sm:text-lg md:text-xl motion-reduce:animate-none motion-reduce:opacity-100 dark:text-slate-400">
          {cmsData?.hero_subtitle ||
            "Providing expert A/L ICT classes in Sri Lanka, specialized After A/L diploma programs, and dedicated pathways to help you achieve your Degree and Post-Graduate dreams."}
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 opacity-0 animate-about-reveal [animation-delay:800ms] sm:w-auto sm:flex-row motion-reduce:animate-none motion-reduce:opacity-100">
          <Link
            href="/courses"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#002147] px-8 text-sm font-medium text-white shadow-lg shadow-[#002147]/20 transition-all hover:bg-[#003366] hover:shadow-xl active:scale-[0.98] sm:w-auto md:text-base"
          >
            Explore Programs
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="#lecturers"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/60 px-8 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-[#002147]/40 hover:bg-white active:scale-[0.98] sm:w-auto md:text-base dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            Meet Our Faculty
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 opacity-0 animate-about-reveal [animation-delay:940ms] motion-reduce:animate-none motion-reduce:opacity-100 dark:text-slate-400">
          <span>A/L ICT</span>
          <span className="h-1 w-1 rotate-45 bg-slate-300 dark:bg-slate-600" />
          <span>Higher National Diploma</span>
          <span className="h-1 w-1 rotate-45 bg-slate-300 dark:bg-slate-600" />
          <span>Global Degree Pathways</span>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 md:flex dark:text-slate-600"
        aria-hidden="true"
      >
        <span className="text-[11px] font-medium">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
};

export default AboutHero;
