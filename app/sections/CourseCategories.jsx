import React from "react";
import { BookOpen, GraduationCap, Zap, Globe, Award, Sparkles, Code2, Briefcase } from "lucide-react";
import ShineBadge from "@/components/ui/ShineBadge";
import CourseGrid from "../../components/CourseCategories/CourseGrid";

const CATEGORY_META = {
  "after-al-courses": {
    icon: <Zap size={24} />,
    color: "from-blue-600 to-indigo-600",
    bgLight: "bg-blue-50/70 dark:bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
    badge: "Foundation & Fast-Track",
    desc: "Targeted tech pathways right after school for immediate university or industry entry.",
  },
  "certificate": {
    icon: <Award size={24} />,
    color: "from-emerald-600 to-teal-600",
    bgLight: "bg-emerald-50/70 dark:bg-emerald-500/10",
    textColor: "text-emerald-600 dark:text-emerald-400",
    badge: "Short-Term Mastery",
    desc: "Hands-on, skills-focused qualifications to build real-world vocational competency.",
  },
  "diploma": {
    icon: <GraduationCap size={24} />,
    color: "from-violet-600 to-purple-600",
    bgLight: "bg-violet-50/70 dark:bg-violet-500/10",
    textColor: "text-violet-600 dark:text-violet-400",
    badge: "NVQ & Industry Aligned",
    desc: "Structured comprehensive diploma programs bridging practical labs and academic depth.",
  },
  "higher-diploma": {
    icon: <Briefcase size={24} />,
    color: "from-amber-600 to-orange-600",
    bgLight: "bg-amber-50/70 dark:bg-amber-500/10",
    textColor: "text-amber-600 dark:text-amber-400",
    badge: "Degree Equivalent Year 2",
    desc: "Advanced theoretical and applied knowledge recognized for top-up degree entry.",
  },
  "post-graduate": {
    icon: <Sparkles size={24} />,
    color: "from-rose-600 to-pink-600",
    bgLight: "bg-rose-50/70 dark:bg-rose-500/10",
    textColor: "text-rose-600 dark:text-rose-400",
    badge: "Executive Leadership",
    desc: "Specialized postgraduate qualifications for leaders, consultants, and senior engineers.",
  },
  "short-courses": {
    icon: <Code2 size={24} />,
    color: "from-cyan-600 to-blue-600",
    bgLight: "bg-cyan-50/70 dark:bg-cyan-500/10",
    textColor: "text-cyan-600 dark:text-cyan-400",
    badge: "Sprint Learning",
    desc: "Fast, intensive upskilling modules in high-demand software, design, and tools.",
  },
};

const CoursePathways = async ({ cmsData }) => {
  let categories = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      console.warn("NEXT_PUBLIC_API_BASE_URL is missing in CourseCategories");
      return null;
    }

    const res = await fetch(`${baseUrl}/public/categories`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = await res.json();
    categories = data?.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  const pathways = categories?.map((cat, idx) => {
    const meta = CATEGORY_META[cat?.slug] || {
      icon: <Globe size={24} />,
      color: "from-blue-600 to-[#002147]",
      bgLight: "bg-blue-50/70 dark:bg-blue-500/10",
      textColor: "text-blue-600 dark:text-blue-400",
      badge: "Professional Track",
      desc: "Explore high-quality educational pathways tailored for your career growth.",
    };

    return {
      title: cat?.name,
      slug: cat?.slug,
      desc: cat?.description || meta.desc,
      icon: meta.icon,
      color: meta.color,
      bgLight: meta.bgLight,
      textColor: meta.textColor,
      badge: meta.badge,
      stepNumber: `0${idx + 1}`,
    };
  }) || [];

  return (
    <section className="py-20 md:py-28 bg-transparent overflow-hidden relative">
      {/* Subtle ambient lighting behind grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-12 md:mb-16">
          <ShineBadge className="mb-3">{cmsData?.badge || "Upcoming Intakes — 2026"}</ShineBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.15] mb-4 tracking-tight">
            {cmsData?.title || "Find the Right IT Course for Your Future"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed whitespace-pre-line font-normal">
            {cmsData?.subtitle || "From school leavers to working professionals — IVTC offers IT diplomas, certifications, and degree programs to help you build a successful career in Sri Lanka and beyond."}
          </p>
        </header>

        <CourseGrid pathways={pathways} />
      </div>
    </section>
  );
};

export default CoursePathways;
