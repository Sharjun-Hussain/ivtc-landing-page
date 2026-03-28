"use client";

import React, { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/data/courses";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/Animations/ScrollReveal";

const CourseFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "all";
  const currentSort = searchParams.get("sort") || "popular";

  const handleFilterChange = useCallback(
    (key, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all" || value === "popular") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`/courses?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  return (
    <ScrollReveal className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 relative z-20">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 w-full sm:w-auto p-1 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleFilterChange("category", cat.id)}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all ${
              currentCategory === cat.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="relative w-full sm:w-auto min-w-[200px]">
        <select
          value={currentSort}
          onChange={(e) => handleFilterChange("sort", e.target.value)}
          className="w-full appearance-none bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-3.5 rounded-2xl text-sm font-bold tracking-wide text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
        >
          <option value="popular" className="bg-white dark:bg-[#111]">Sort by: Most Popular</option>
          <option value="enrolled-desc" className="bg-white dark:bg-[#111]">Sort by: Highest Enrolled</option>
          <option value="duration-asc" className="bg-white dark:bg-[#111]">Sort by: Shortest Duration</option>
        </select>
        <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
      </div>
    </ScrollReveal>
  );
};

export default CourseFilters;
