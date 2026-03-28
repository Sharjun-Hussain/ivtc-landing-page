"use client";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/Animations/ScrollReveal";
import { COURSES_DATA } from "@/lib/data/courses";
import CourseCard from "@/components/Courses/CourseCard";

const CATEGORY_META = {
  "software-engineering": {
    title: "Software Engineering",
    subtitle: "Master modern development from interactive front-ends to scalable back-ends.",
    color: "from-blue-400 to-indigo-600",
  },
  "al-ict": {
    title: "A/L ICT Mastery",
    subtitle: "Ace your exams with Sri Lanka's top-ranked curriculum.",
    color: "from-cyan-400 to-blue-500",
  },
  "data-science": {
    title: "Data Science",
    subtitle: "Learn how to extract, analyze, and visualize data to drive business decisions.",
    color: "from-purple-400 to-pink-500",
  }
};

const CourseListingPage = () => {
  const params = useParams();
  const categoryKey = params.category || "software-engineering";
  const meta = useMemo(
    () => CATEGORY_META[categoryKey] || CATEGORY_META["software-engineering"],
    [categoryKey],
  );

  const categoryCourses = useMemo(
    () => COURSES_DATA.filter((c) => c.categoryId === categoryKey),
    [categoryKey]
  );

  return (
    <main
      className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      {/* Background Decorative Element */}
      <div
        className={`fixed top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 dark:opacity-20 pointer-events-none bg-linear-to-br ${meta.color}`}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        <ScrollReveal>
          {/* Navigation Breadcrumb */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors mb-12 text-sm font-bold tracking-wide"
          >
            <ChevronLeft size={16} /> All Courses
          </Link>

          {/* Dynamic Header */}
          <header className="mb-20">
            <h3 className="text-blue-500 dark:text-slate-400 tracking-wide font-bold text-xs mb-4">
              / Course Catalog
            </h3>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Explore{" "}
              <span
                className={`text-transparent bg-clip-text bg-linear-to-r ${meta.color}`}
              >
                {meta.title}
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {meta.subtitle}
            </p>
          </header>
        </ScrollReveal>

        {/* Course Grid */}
        <div className="course-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CourseListingPage;
